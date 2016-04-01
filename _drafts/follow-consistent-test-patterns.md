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
 
In the [previous post](/2016/03/22/unit-test-refactoring-avoiding-complexity.html) I discussed ways of maintaining simplicity in unit tests. One way to keep tests simple and easy to understand is to follow common and consistent patterns. By doing so developers know exactly what to look for when they glance at a test suite for the first time. Another way to keep tests simple is to keep them self-contained. Following these common patterns and heuristics that I am going to describe also can help keep them self-contained. 

Just to note, since I spend most of my time in C# these days the examples are going to be tailored to C# and its most common testing framework nUnit. However, the recommendations I am making are language agnostic.

## Optimize for Understanding

Unit tests, like production code, should be optimized for readability and understanding. It is even more important to make unit tests simple since they are untested code (as mentioned previously previously). Production code has the benefit that complex business rules can be placed in well-named, small methods and their edge cases and complex rules can be spelled out in small, easy to understand unit test cases. Unit tests obviously don't have this same benefit so it is vitally important to keep them, as [Justin Searls](https://twitter.com/searls) says, boring and obvious.

## Follow Arrange - Act - Assert
The most important rule for organizing xUnit style tests is to follow the [Arrange Act Assert pattern](http://c2.com/cgi/wiki?ArrangeActAssert). It is a simple pattern to follow, however I am surprised by how many tests I encounter that don't follow it. This is a common pitfall for developers new to unit testing. I will describe it now and we will pull it together in an example at the end.  

### Arrange 
Arrange is the first code block of every unit test. It contains all of the input setup for method under test. This includes setting up dependencies for the object under test and creating objects that get passed as parameters to the method under test. It also includes instantiating the object under test (which some people mistakenly group in the **Act** section).

### Act
The act section, the second block of every AAA-style unit test, is a single line. This is where the method under test gets called. The result, if there is one, is saved to assert against in the subsequent section. 

### Assert
The assert section, the third and last block of code, contains all of the asserts on the returned result from the method under test. This section can also include any mock verification that has to happen after the method under test is called.

### Section Layout
While following the pattern is a good start, it's important to give the reader clues as to each section. Do this by making each section described above a block of code. Use a single blank line between the arrange and act section and another single blank line between the act and assert section.  

I have seen developers use comments to indicate each section, these comments are noisy and obscure the intent of the test so they should be avoided. Additionally a common mistake is to have a single setup with multiple act and assert sections. This breaks self-containment as well as the ***test one thing only*** heuristic. Multiple act and assert sections should be split across two different, well-named unit tests.
 
## Don't Break Self-Containment
Multiple act and assert blocks in a single unit test is not the only way to break self-containment in tests. Here are a few other techniques that will help keep tests self-contained.

## Avoid Inheritance in Tests
I discussed this in detail in the previous post. Spreading parts of tests across an inheritance hierarchy breaks self-containment, and should be avoided. These types of tests are commonly [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) violations and consequently a misuse of inheritance. 

### Appropriate Use of SetUp
xUnit frameworks have the concept of setup and teardown methods. These get called before and after every test case, respectively. Knowing what and **what not** to put in test setup is something that teams struggle with. I have tried multiple approaches (including avoiding test setup altogether) over the years. What I am describing here is what I believe to be the best approach. Setup methods should not contain any **act**ing or **assert**ing. This breaks the Arrange-Act-Assert pattern. Setup methods should contain only subset of the code that would exist in the arrange block. 

The only code that should exist in the setup method is the creation of dependencies of the object under test and creation of the object under test itself. This is the ideal place for constructing the object under test, if dependencies change or the signature to construct the object changes those changes can happen in one single place. While putting dependency setup in the setup method is a bit of a grey area, I recommend keeping all dependency setup in individual test cases to help keep tests self-contained. If the setup is important to the test it should happen in every single test case that it is required, even if this is duplicated. 

On the other hand, if setup is not important to the test I would put them in a well named private method called from each of the test cases and not put it in the test setup section.

### Avoiding Fixture SetUp
Also avoid constructor work - differences between nunit and junit here

## Given - When - Then

## Naming Common Constructs

## An Example
