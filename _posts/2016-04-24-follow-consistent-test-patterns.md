---
layout: post
section-type: post
title: Follow Consistent Test Patterns
comments: true
category: software craft
tags: ['unit testing', 'code quality']
---

This is the third post in my series about writing effective unit tests. 
 
* [Should Private Methods Be Tested?](/2016/02/14/should-private-methods-be-tested.html)
* [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html)
* Follow Consistent Test Patterns
 
In the [previous post](/2016/03/22/unit-test-refactoring-avoiding-complexity.html) I discussed ways of maintaining simplicity in unit tests. One way to keep tests simple and easy to understand is to follow a few consistent patterns. By doing so, developers know exactly what to look for when they encounter a test suite for the first time. Another way to keep tests simple is to keep them self-contained. Following these same patterns and heuristics help to keep tests self-contained as well. 

Since I spend most of my time in .NET these days, the examples are going to be tailored to C# and its most common testing framework [nunit](http://www.nunit.org/). It's important to note, however, that the recommendations that I am making are language agnostic.

## Optimize for Understanding

Unit tests, like production code, should be optimized for readability and understanding. It is even more important to make unit tests simple since they are untested code. Production code has the benefit that complex business rules can be placed in well-named, small methods. Their edge cases and complicated rules can be spelled out in small and easy to understand unit test cases. Unit tests obviously don't have this same benefit, so it is vitally important to keep them, as [Justin Searls](https://twitter.com/searls) says, "boring and obvious."

## Follow Arrange - Act - Assert
The most important rule for organizing xUnit-style tests is to follow the [Arrange Act Assert pattern](http://c2.com/cgi/wiki?ArrangeActAssert). It is a simple pattern to follow, however I am surprised by how many tests I encounter that do not follow it. This is a common problem for developers new to unit testing.

### Arrange 
Arrange is the first code block of every unit test. It contains all of the input setup for the method under test. This includes setting up dependencies for the object under test and creating the data that gets passed as input parameters to the method under test. It also includes instantiating the object under test, which some developers mistakenly group in the **Act** section. The arrange section and the xUnit Setup method have an important relationship that I will discuss later in this article.

### Act
The act section, the second block of every AAA-style unit test, is typically a single line. This is where the method under test gets called. The result, if there is one, is saved in a local variable to be used in the following section.

### Assert
The assert section, the third and last block of code, contains all of the assertions on the aforementioned result. This section can also include any mock object verification that has to happen after the method under test is called.

### Use Code Blocks
While following the pattern is a good place to start, it's important to make every section clear to the reader. Do this by making each section a block of code. Use a single blank line to separate blocks, one between the arrange and act section and another single blank line between the act and assert section.  

I have seen developers use comments to indicate each section. These comments are noisy and they obscure the intent of the test more than they help. Therefore, they should be avoided. Additionally, a common mistake is to have a single setup section with multiple act and assert sections. This breaks self-containment as well as the ***test one thing only*** heuristic. Multiple act and assert sections should be split across two different and well-named unit tests.
 
## Don't Break Self-Containment
Having multiple act and assert blocks in a single unit test is not the only way to break self-containment. Here are a few other techniques that will help keep tests self-contained.

### Avoid Inheritance in Tests
I discussed this in detail in the [previous post](/2016/03/22/unit-test-refactoring-avoiding-complexity.html). Spreading parts of tests across an inheritance hierarchy breaks self-containment and should be avoided. These types of tests are commonly [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) violations and consequently a misuse of inheritance. 

### Appropriate Use of SetUp
xUnit frameworks have the concept of setup and teardown methods. Respectively, these methods get called before and after every test case in the fixture. The appropriate use of test setup is something that developers tend to struggle with. I have tried multiple approaches (including avoiding test setup altogether) over the years. What I am describing here is what I believe to be the best approach. 

Setup methods should not contain any **act**ing or **assert**ing. This breaks the Arrange-Act-Assert pattern. Furthermore, setup methods should contain only a subset of the code that would exist in the arrange block. 

The only code that should exist in the setup method is the creation of dependencies of the object under test and creation of the object under test itself. This is the ideal place for constructing the object under test. If dependencies change or the signature to construct the object changes, those changes can be made in a single place. Putting dependency setup (i.e., dependency method stubbing or mocking) in a test fixture's setup method is a bit of a gray area. However, I recommend keeping all dependency setup in the individual test cases  (not the setup method) to help keep tests self-contained. If the setup is important to the test, then it should happen in every single test case where it is required, even if this is duplicated. Information important to the test case should be obvious and found within the test case method itself.

On the other hand, if some dependency setup is not an important aspect to the test case (but still required) I favor putting the setup statements in well-named private methods. These private methods can then be called from each of the individual test cases. While this may seem like a trivial distinction, knowing that only dependency and object-under-test creation happens in the setup method allows developers to focus on each self-contained test case. This prevents the reader from having to scan between the test case and the setup method to understand the test. Requiring readers to continually scan between the test setup method and the test case is one of many ways to make tests more complicated and confusing for the reader.

## Naming Common Unit Test Constructs
There are two common constructs to every unit test and it is important that they are always named consistently. These are the object under test and the result returned from calling the method under test. In my code, I name the object under test "subject" and the result that I assert against "result." The names may vary from team to team, but it is important to always be consistent. 

## An Example
Now let's pull everything we talked about together in an example.

{% gist beb880bacdfa18ad8cd862450cca255b %}

### The Test Setup

The first thing you will likely notice is that the SetUp method for the test fixture only contains the creation of two objects:  

* The dependency for the object under test, a stub of the IAccountDataAccess using the popular [Moq framework](https://github.com/moq/moq4).  
* The object under test, AccountRepository which is named subject.

### The Test Case

The first thing that usually stands out to developers who haven't written a lot of unit tests is that unit test method names can be quite long. This example is no exception. Some may say this is too wordy, but I would caution against shortening test case names. Remember unit tests are executable documentation. You may find less wordy ways of specifying test cases, but there are two very important aspects of naming test cases. 

* The naming format should always be consistent across all of the tests in the test suite.
* The name of the test case should clearly state what the test is doing, what result it is expecting, and why the test is important if it isn't obvious within the context of the test.

Following these two bits of advice is far more important than a specific naming convention that you use. While this test case name is very long, it describes the test case well and introduces no ambiguity to the reader. Developers should not shy away from long unit test method names. This is the place to be as specific as possible.

>  JUnit picks up test methods by reflection, so we can make their names as long and descriptive as we like because we never have to include them in code.  
> &mdash; _Steve Freeman and Nat Pryce from Growing Object Oriented Software, Guided By Tests (page 114)_ 

The first block of code encountered in the test case is the arrange block. Three accounts are created, a credit card account with an outstanding balance, a credit card account with a zero balance, and a non-credit card account with a balance. The last line in the block utilizes the stub created with the [Moq framework](https://github.com/moq/moq4). It sets up a call to the dependency, the IAccountDataAccess Get method and returns the three aforementioned account objects.

The second, or act, block contains a single line. It calls the method under test, saving the value returned in a variable named result.

The last block of code is the assert section. Here you will find two asserts:  

* Only one of the three specified accounts is being returned.   
* The account that is being returned is the one that we expect.  

## Behavior-Driven Development Considerations

Since [nunit](http://nunit.org/) is the most popular unit testing framework for .NET, I focused on xUnit-style tests. For BDD-style tests, including those that make use of BDD frameworks like [Cucubmer](https://cucumber.io/) and [SpecFlow](http://www.specflow.org/), conforming to the Given-When-Then pattern is appropriate. 

## Conclusion
Following these consistent patterns and heuristics will help keep tests simple and increase the ease of understanding for future developers. When tests are simple and all look very similar, deviations from this tend to be obvious. These deviations are indicators that there is either a problem with the test or a design issue with the code under test. 

The next post in this series will use this same unit test example to describe a common unit test refactoring pitfall.
