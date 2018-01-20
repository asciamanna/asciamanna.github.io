---
layout: post
section-type: post
title: SOS - To Save Sinking Test Suites 
comments: true
category: development practices
tags: [unit-testing, tdd, code-quality]
---

I've written several posts about the attributes of high-quality, valuable unit tests (also known as micro tests) and how to write and maintain them. I spend a lot of my coaching time encouraging these practices. Too often I've heard developers say that unit testing doesn't work only to discover a test suite of incredibly complex, brittle, and unmaintainable tests. 

## TDD 

Every time I talk about high-quality unit tests I have to mention that I strongly encourage practicing TDD in order to create valuable unit tests. It prevents a lot of issues that arise when developers try to cover bad code in unit tests. I am a firm believer that **_you cannot write good tests for bad code_**. Unfortunately testing after the code is written too often leads to software design issues and the resulting problematic tests. Test After Development (TAD)[^1] yields tests with much less value, in addition to missing all of the benefits of Test Driven Development which I've written about here.(LINK TO POST HERE.)

### The Code Quality Litmus Test

Unit tests are a litmus test for the quality of the code under test. Being the first client of code it ensures that objects are designed for the consumer of the object first and foremost. Which is something that is rare when designing software without using TDD. Tests with a lot of setup, control flow logic / conditional statements, and many collaborators are signs that there are design issues with the object under test.

## SOS

When I coach developers on writing high-quality unit tests I use the mnemonic __*SOS*__. Unit tests should be __*small*__, __*obvious*__, and __*simple*__. The attributes of high quality tests and the heuristics to create them can be grouped into these three categories. Teams that support low quality code and incredibly complex test suites are in a near constant state of distress and often still taking on water. So a distress signal mnemonic seems appropriate to help remedy these problems. 

### Small

**Small** is the first word we focus on. I recommend unit tests to be small. Often people will ask how small and look for a specific number of lines. I believe they should be around 15 LOCs or less. Maybe five or less lines of setup, a line to execute the method under test and a few assertions. That's it! Much more than that is an indicator of a design problem. 

Does the code require a lot of complicated setup? The callers of that code are going to also need to understand all of that complicated setup. I can assure you that they shouldn't need to know that. 

Are there a lot of dependencies / collaborators that need to be setup? That's a sign that the object is doing too many things, taking on too many dependencies, and becoming a *God Object*. It's a sign there is an abstraction missing that collects a few of those dependencies into a single object.

Some developers avoid this by putting a lot of test setup in the xUnit test Setup method. This breaks heuristics in the next attribute, obvious.

### Obvious

Tests should be obvious and boring. Any developer should be able to look at them and understand them within a minute or two. Tests are valuable executable documentation but to realize this value care must be taken to keep their intent obvious.

#### Keep Tests Self-Contained 

One important heuristic is that tests should be self-contained. xUnit's test setup should be reserved for very specific usages. I recommend using test setup only to create the object under test, initialize its dependencies, and inject them manually into the object under test's constructor. This of course assumes that the object under test is shared by the other test cases in the fixture.

If test setup is duplicated between tests but it is important to the outcome of the test I prefer duplication rather than obscuring intent by introducing indirection.   

#### Arrange-Act-Assert
[Arrange-Act-Assert](http://wiki.c2.com/?ArrangeActAssert) is a common pattern for unit tests. In order to make tests more obvious I make sure every test I write conforms to arrange act assert. I amplify this by ensuring that I create an arrange block, an act block, and an assert block. I separate each of these blocks with a blank line. Any refactoring that would obscure these blocks or remove one of them I avoid. It is much more important for me to make each of these steps in every test obvious.

#### Common Naming Conventions 

Every test fixture and test case should follow a common naming convention. By simply reading the test method I should understand what is being tested and the scenario it is being tested in. There is a lot of advice on naming test fixtures and test cases well. More important than the format is that the format is adhered to throughout the test suite. 

In addition to test case names I ensure that the object under test is always named 'subject' and the result returned from the subject is called 'result.' In every test the test subject and results to assert against are obvious.

#### Amplify and Obscure

Extracting test setup into well-named, intention revealing private methods, and then extracting those to classes when they need to be shared across fixtures helps keep tests simple and obvious. I recommend keeping setup inside the test cases themselves if it is important to the outcome of the test, thus amplifying its importance for the reader. Test setup that is less important to the test can then be extracted so that it can be obscured. This signals to the reader that it is less important and they don't have to spend time reading the details to understand the test.

#### Glance Test
By following these steps to make tests obvious unit tests pass will pass what I call "the glance test." I can glance a test and in a minute understand what is being tested, why it's being tested, its collaborations, and how it should react under these test conditions. 

### Simple

Simple tests are also small and obvious tests. So you can see that these attributes are very much related to each other. Optimizing for one often optimizes for the others. 

##### Avoids Inheritance

I've seen very complicated test suites spread a single test across an inheritance hierarchy. This makes tests more complicated as well as making them harder to understand. Often the test subject and setup data is strewn across the inheritance hierarchy and I cannot locate any Arrange-Act-Assert blocks in the unit test. This breaks the heuristic to **keep tests self-contained** now that I have to examine the inheritance hierarchy to understand what is being testing. 

Typically these hierarchies exist for two reasons. They use inheritance as a mechanism for sharing code which is a misuse of inheritance and a violation of the [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle). Rather code should be shared between test cases by using composition. Remember, composition can be further utilized to obscure the test setup that is not important to the outcome of a given test. 

The other reason is that the test fixtures using inheritance mimic the inheritance hierarchy of the code under test. This isn't as bad as the previous example if the base test case is being used to setup and test functionality of the base class in the production code. Care can be taken so the only test cases exist in the child test objects, and that arrange-act-assert is not obscured, etc. However, I want to suggest that this is only one way to test objects in an inheritance hierarchy, and it requires the tests to know about the design of the objects under test.

#### Use Test Framework "extras" with Care 

xUnit test frameworks come with a lot of extras. In some cases they can help make tests more expressive and reduce duplication. However, more often than not they are a workaround for a software design issue and add complexity to the test. Often these "extras" negatively effect the ability to scan the test quickly. For micro tests I avoid setup at the test fixture level and other xUnit extras like MSTest's ability to test private methods or some of NUnit's custom test attributes.  

#### Avoid using an IoC container

I often encounter developers who want to use an IoC container to inject dependencies into unit tests. This should be avoided for several reasons. First it ties the unit test suite to an additional external dependency and adds unnecessary complexity. Additionally, it obscures the dependencies of the object under test and again violates the heuristic to keep tests self-contained. Once an IoC container is in place often test setup logic will migrate there and obscure important aspects of tests.

 #### Contains no Branches or Control Flow Logic
Contains no branches

> Logic in tests confuses the story of what’s being tested.
Test-scoped logic is hard to read and errors are easy to miss.  
> &mdash; _Justin Searls, RubyConf 2015_

##### Tests are Untested Code

One of the most important points Justin Searls makes in his RubyConf 2015 talk, [How to Stop Hating Your Test Suite](https://www.youtube.com/watch?v=VD51AkG8EZw) is that tests are untested code. Introducing conditional logic and flow control structures means that there are now alternate paths through a test. This creates an opportunity for bugs to be introduced. We test all conditional logic in production code. Writing tests with conditional logic requires tests for tests to ensure they are correct.

In fact the most convincing reason to keep tests simple is that they are untested. Bugs in tests provide a channel for bugs in production code to go unnoticed. 

## Further Reading

I have written a series of posts about how to create high-quality, valuable tests. 
* 
* 
* 

I also recommend these three talks on creating and maintaining valuable unit test suites
* Justin Searls - [How to Stop Hating Your Test Suite](https://www.youtube.com/watch?v=VD51AkG8EZw)
* Gerard Meszaros - [Find the Right Abstraction Level for your Tests](http://m.ustream.tv/recorded/46744750)
* Sandi Metz - [The Magic Tricks of Testing](https://www.youtube.com/watch?v=URSWYvyc42M)

