---
layout: post
section-type: post
title: Follow Consistent Test Patterns
comments: true
category: software craftsmanship
tags: ['unit testing', 'code quality']
---

This is the third post in my series about writing effective unit tests.  
 
* [Should Private Methods Be Tested?](/2016/02/14/should-private-methods-be-tested.html)
* [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html)
* Follow Consistent Test Patterns
 
In the [previous post](/2016/03/22/unit-test-refactoring-avoiding-complexity.html) I discussed ways of maintaining simplicity in unit tests. One way to keep tests simple and easy to understand is to follow a few consistent patterns. By doing so developers know exactly what to look for when they glance at a test suite for the first time. Another way to keep tests simple is to keep them self-contained. Following these common patterns and heuristics help to keep tests self-contained as well. 

Just to note, since I spend most of my time in C# these days the examples are going to be tailored to C# and its most common testing framework nUnit. However, the recommendations I am making are language agnostic.

## Optimize for Understanding

Unit tests, like production code, should be optimized for readability and understanding. It is even more important to make unit tests simple since they are untested code (as mentioned previously). Production code has the benefit that complex business rules can be placed in well-named, small methods and their edge cases and complex rules can be spelled out in small, easy to understand unit test cases. Unit tests obviously don't have this same benefit so it is vitally important to keep them, as [Justin Searls](https://twitter.com/searls) says, boring and obvious.

## Follow Arrange - Act - Assert
The most important rule for organizing xUnit-style tests is to follow the [Arrange Act Assert pattern](http://c2.com/cgi/wiki?ArrangeActAssert). It is a simple pattern to follow, however I am surprised by how many tests I encounter that don't follow it. This is a common pitfall for developers new to unit testing. I will describe it now and we will pull it together in an example at the end.  

### Arrange 
Arrange is the first code block of every unit test. It contains all of the input setup for the method under test. This includes setting up dependencies for the object under test and creating the data that gets passed as input parameters to the method under test. It also includes instantiating the object under test (which some people mistakenly group in the **Act** section).

### Act
The act section, the second block of every AAA-style unit test, is a single line. This is where the method under test gets called. The result, if there is one, is saved to assert against in the subsequent section. 

### Assert
The assert section, the third and last block of code, contains all of the asserts on the returned result from the method under test. This section can also include any mock verification that has to happen after the method under test is called.

### Use Code Blocks
While following the pattern is a good start, it's important to give the reader clues as to each section. Do this by making each section a block of code. Use a single blank line to separate blocks, one between the arrange and act section and another single blank line between the act and assert section.  

I have seen developers use comments to indicate each section, these comments are noisy and obscure the intent of the test so they should be avoided. Additionally a common mistake is to have a single setup section with multiple act and assert sections. This breaks self-containment as well as the ***test one thing only*** heuristic. Multiple act and assert sections should be split across two different, well-named unit tests.
 
## Don't Break Self-Containment
Multiple act and assert blocks in a single unit test is not the only way to break self-containment in tests. Here are a few other techniques that will help keep tests self-contained.

### Avoid Inheritance in Tests
I discussed this in detail in the [previous post](/2016/03/22/unit-test-refactoring-avoiding-complexity.html). Spreading parts of tests across an inheritance hierarchy breaks self-containment, and should be avoided. These types of tests are commonly [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) violations and consequently a misuse of inheritance. 

### Appropriate Use of SetUp
xUnit frameworks have the concept of setup and teardown methods. These get called before and after every test case, respectively. Knowing what and what not to put in test setup is something that teams struggle with. I have tried multiple approaches (including avoiding test setup altogether) over the years. What I am describing here is what I believe to be the best approach. Setup methods should not contain any **act**ing or **assert**ing. This breaks the Arrange-Act-Assert pattern. Furthermore, setup methods should contain only a subset of the code that would exist in the arrange block. 

The only code that should exist in the setup method is the creation of dependencies of the object under test and creation of the object under test itself. This is the ideal place for constructing the object under test, if dependencies change or the signature to construct the object changes those changes can happen in a single place. While putting dependency setup in the setup method is a bit of a grey area, I recommend keeping all dependency setup in individual test cases to help keep tests self-contained. If the setup is important to the test it should happen in every single test case that it is required, even if this is duplicated. 

On the other hand, if setup is not an important aspect to the test case (but still required) I favor putting the setup statements in well-named private methods. These private methods can then be called from each of the individual test cases. While this may seem like a trivial distinction, knowing that only dependency and object-under-test creation happens in the setup method allows developers to focus on each self-contained test case without scanning back and forth between the test case and the setup method.

## Naming Common Constructs
There are two common constructs to every unit test and it is important that they always named consistently. These are the object under test and the result returned from calling the method under test. In my code I name the object under test 'subject' and the result that I assert against 'result.' The names may vary from team to team, but it is important to always be consistent. 

## An Example
Now let's pull everything we talked about together in an example and describe it.

{% gist beb880bacdfa18ad8cd862450cca255b %}

Starting with the SetUp method notice that it only contains the creation of two objects:  

* The dependency for the object under test, a stub of the IAccountDataAdapter using the Moq library.  
* The object under test, AccountRepository which is named subject.

The first thing you will likely notice about the test case itself is that the name of the test is quite long. Some may say this is too wordy. However, remember unit tests are executable documentation. You may find less wordy ways of specifying test cases but there are two very important aspects of naming test cases. 

* The naming format should always be consistent across all of the tests in the test suite.
* The name of the test case should make it obvious what the test is doing, why it is doing it, and what result it is expecting.

Following these two bits of advice is far more important than a specific style that you follow. Regardless, while the test case name is very long it describes the test case well with no ambiguity for the reader.

The first block of code encountered in the test case is the arrange block. Three accounts are setup, a credit card account with an outstanding balance, a credit card account with a zero balance, and a non credit card account with a balance. The last line in the block utilizes the stub created with the Moq framework. It sets up a call to dependency, IAccountDataAdapter's Get method and returns the three aforementioned account objects.

The second, or act, block contains a single line. It calls the method under test, another long but specific method name. It saves the returning value in a variable named result.

The last block of code is the assert section. Here you find two asserts, one that asserts that only one of the three accounts is being returned. And the account that is being returned is the one that we expect.

## Behavior-Driven Development Considerations

Since nUnit is the most popular unit testing framework for .NET I focused on xUnit-style tests. For xUnit-style unit tests Arrange-Act-Assert should be followed. But for BDD-style tests, including those that make use of BDD frameworks like [Cucubmer](https://cucumber.io/), [SpecFlow](http://www.specflow.org/), etc. conforming to the Given-When-Then pattern is appropriate. 

## Conclusion
Following these consistent patterns and heuristics will help keep tests simple and, in doing so, increase the ease of understanding for future developers. When tests are simple, obvious, and all look very similar deviations from this are glaring. These deviations are typically indicators that there is a problem with the test or a design issue with code under test. 

The next post will use this same unit test example to describe a unit test refactoring pitfall.