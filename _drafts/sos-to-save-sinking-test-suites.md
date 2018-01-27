---
layout: post
section-type: post
title: SOS - To Save Sinking Test Suites 
comments: true
category: development practices
tags: [unit-testing, tdd, code-quality]
---

Too often I've heard developers say that unit testing doesn't work only to discover a test suite of incredibly complex, brittle, and unmaintainable tests. Frequently I find that these are not unit tests at all, testing things like database interaction and calling third-party services in the tests.

## TDD 

Every time I discuss high-quality unit/micro tests I have to mention that I strongly encourage practicing TDD. It prevents a lot of issues that arise when developers try to cover bad code in tests. I am a firm believer that **_you cannot write good tests for bad code_**. Unfortunately, testing after the code is written often leads to software design issues and the resulting problematic tests. Test After Development (TAD)[^1] yields tests with much less value, that bypass all of the benefits of Test Driven Development which I've written about [here]({{ site.baseurl }}{% post_url 2017-12-31-benefits-of-pair-programming %}).

### The Code Quality Litmus Test

Micro tests built by practicing TDD are a litmus test for the quality of the code under test. Being the first client of the code it ensures that objects are designed for the consumer of the object first and foremost. Which is something that is rare when designing software without using TDD. Tests with a lot of setup, control flow logic / conditional statements, and many collaborators are signs that there are design issues with the object under test.

## SOS
When I coach developers on writing high-quality unit tests I use the mnemonic __*SOS*__. Micro tests should be __*small*__, __*obvious*__, and __*simple*__. The attributes of high quality tests and the heuristics to create them can be grouped into these three categories. Teams that support low quality code and incredibly complex test suites are in a near constant state of distress and often still taking on water. So a maritime distress signal mnemonic seems appropriate to help remedy these problems.

### Small

#### Test Size

**Small** is the first word we focus on. I recommend unit tests to be small. Often people will ask how small and look for a specific number of lines. I believe they should be around 15 LOCs or less. Maybe five or less lines of setup, a line to execute the method under test and a few assertions. That's it! Much more than that is an indicator of a design problem. There's no exact number but, we should always focus on keeping them small.

Does the code require a lot of complicated setup? The callers of that code are going to also need to understand all of that complicated setup. I can assure you that they shouldn't need to know that. 

Are there a lot of dependencies / collaborators that need to be setup? That's a sign that the object is doing too many things, taking on too many dependencies, and becoming a *God Object*. It's a sign there is an abstraction missing that collects a few of those dependencies into a single object.

Some developers avoid this by putting a lot of test setup in the xUnit Test Setup method. This breaks heuristics in the next attribute.

#### Test Scope

Another **small** characteristic we focus on in unit and micro tests is the scope of the test. It is important that tests have a very small scope to provide error localization. When a test fails it is important to be able to find the source of the failure immediately. Developers who shy away from using test doubles in favor of real objects tend to have problems with error localization.

Larger test scopes lead to overlapping tests. Test overlap often is the source of unnecessary tests, which take longer to run, and multiple test failures for a single change. 

### Obvious

Tests should be obvious and boring. Any developer should be able to look at them and understand them within a minute or two. Tests are valuable executable documentation but to realize this value care must be taken to keep their intent obvious.

#### Keep Tests Self-Contained 

One important heuristic is that tests should be self-contained and independent of one another. xUnit's test setup should be reserved for very specific usages. I recommend using test setup only to create the object under test, initialize its dependencies, and inject them manually into the object under test's constructor. This of course assumes that the object under test is shared by the other test cases in the fixture.

If some test setup is duplicated between tests but it is important to the outcome of the test I prefer duplication rather than obscuring intent by introducing indirection. _DRYing_ tests should be used to enhance understanding, if it instead produces the opposite effect it should be avoided.

#### Arrange-Act-Assert

[Arrange-Act-Assert](http://wiki.c2.com/?ArrangeActAssert) is a common pattern for unit tests. In order to make tests obvious, tests should conform to this pattern. This pattern can be amplified by ensuring that a separate block of code exists each step, separating each of these blocks with a blank line. Any refactoring that would obscure these blocks or remove one of them I avoid. It is much more important to make each of these steps obvious in every test case.

##### Obvious Code Coverage

One of the reasons to ensure adherence to _Arrange Act Assert_ is to ensure that code coverage is obvious for a test, which is another characteristic of a high quality test. When _Arrange Act Assert_ is followed the middle block, typically consisting of a single line, is the method under test. It is obvious that the coverage of that test is the public method being called in the _Act_ block.

#### Common Naming Conventions 

Every test fixture and test case in a test suite should conform to a common naming convention. By simply reading the test method I should understand what is being tested and the scenario it is being tested in. There is a lot of advice on naming test fixtures and test cases well. More important than the specific format is that the format is adhered to throughout the test suite. 

##### Common Test Constructs

In addition to test case names I ensure that common test constructs all have the same name. Every test case has a subject, the object that is under test. Every test I write names this object "subject." A majority of tests make assertions against some result. In every test that performs assertions, the result returned by the subject is called "result."

#### Amplify and Obscure

Extracting test setup into well-named, intention revealing private methods, and then extracting those to classes when they need to be shared across fixtures helps keep tests simple and obvious. I recommend keeping setup inside the test cases themselves if it is important to the outcome of the test, thus amplifying its importance for the reader. 

Test setup that is less important to the test can then be extracted so that it can be obscured. This signals to the reader that it is less important and they don't have to spend time reading the details to understand the test.

#### Glance Test

By following these steps to make tests obvious, they pass what I call "the glance test." I can glance a test and in a minute understand what is being tested, why it's being tested, its collaborators, and how it should react under the documented test conditions. Since code is read many more times than it is written unit tests (the same as production code) needs to be able to pass this glance test. 

### Simple

The last 'S' is for **simple**. Simple tests also tend to be small and obvious tests. So you can see that these attributes are very much related to each other. Optimizing for one often optimizes for the others. 

##### Avoids Inheritance

I've seen very complicated test suites spread a single unit test across several objects in a complex inheritance hierarchy. This makes tests more complicated as well as making them harder to understand. Often the test subject and setup data is strewn across the inheritance hierarchy and I cannot locate any Arrange-Act-Assert blocks in the unit test. This breaks the heuristic to **keep tests self-contained** now that I have to examine the inheritance hierarchy to understand what is being testing. 

Typically these hierarchies exist for two reasons. They use inheritance as a mechanism for sharing code which is a misuse of inheritance and a violation of the [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle). Rather code should be shared between test cases by using composition. Remember, composition can be further utilized to obscure the test setup that is not important to the outcome of a given test. 

The other reason is that the test fixtures using inheritance mimic the inheritance hierarchy of the code under test. This isn't as bad as the previous example if the base test case is being used to setup and test functionality of the base class in the production code. Care can be taken so that only test cases exist in the child test objects, and that arrange-act-assert is not obscured, etc. However, this is but one way to test objects in an inheritance hierarchy, and it requires the tests to know details about the design of the test subject.

#### Use Test Framework "extras" with Care 

xUnit test frameworks come with a lot of extras. In some cases they can help make tests more expressive and reduce duplication. However, more often than not they are a workaround for a software design issue and add complexity to the test. Often these "extras" negatively effect the ability to scan the test quickly, failing the Glance Test. For micro tests I avoid setup at the test fixture level and other xUnit extras like MSTest's ability to test private methods or some of NUnit's custom test attributes.  

 #### Contains no Branches or Control Flow Logic

Tests should not contain any branching or control flow logic. Their existence is a code smell. Refactoring the code under test can obviate the need for branching in test cases.

> Logic in tests confuses the story of what’s being tested.
Test-scoped logic is hard to read and errors are easy to miss.  
> &mdash; _Justin Searls, RubyConf 2015_

##### Tests are Untested Code

One of the most important points [Justin Searls](https://twitter.com/searls) makes in his RubyConf 2015 talk, [How to Stop Hating Your Test Suite](https://www.youtube.com/watch?v=VD51AkG8EZw) is that tests are untested code. Introducing conditional logic and flow control structures means that there are now alternate paths through a test. This creates an opportunity for bugs to be introduced. We test all conditional logic in production code. Writing tests with conditional logic requires tests for tests to ensure they are correct.

In fact the most convincing reason to keep tests simple is that they are untested. Bugs in tests provide a channel for bugs in production code to go unnoticed. 

## Putting it all Together

Take a look at the following example of a micro test that puts all of this advice together. If you are wondering why I haven't extracted the test setup you can read more about why [here]({{ site.baseurl _}}{% post_url 2016-05-22-extracting-methods-in-unit-tests %}).
{% gist beb880bacdfa18ad8cd862450cca255b %

## Further Reading

For more detailed advice I've written a series of posts about how to create high-quality, valuable tests: 

* [Should Private Methods Be Tested?] 
* [Unit Test Refactoring and Avoiding Complexity]
* [Follow Consistent Test Patterns]
* [Extracting Methods in Unit Tests]

I also recommend these three talks on creating and maintaining valuable unit test suites
* Justin Searls - [How to Stop Hating Your Test Suite](https://www.youtube.com/watch?v=VD51AkG8EZw)
* Gerard Meszaros - [Find the Right Abstraction Level for your Tests](http://m.ustream.tv/recorded/46744750)
* Sandi Metz - [The Magic Tricks of Testing](https://www.youtube.com/watch?v=URSWYvyc42M)
`
[^1]: Test After Development or *TAD* is discussed in [this article about TDD](https://pragprog.com/magazines/2011-11/testdriven-development) by [Jeff Langr](http://langrsoft.com/)

