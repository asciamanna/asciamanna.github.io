---
layout: post
section-type: post
title: xUnit is not Unit Testing
comments: true
category: software craft
tags: ['unit testing', 'tdd', 'code quality']
---
As I interact with more developers who either have very little experience writing unit tests or have had negative experiences with it I am noticing a trend: The thought that a "unit test" is simply a test written in an xUnit test harness. 

Unfortunately, I've encountered developers who have written off unit testing because of having bad experiences with it. But when digging a little deeper, and questioning these developers, I've come to realize that they have been writing large, brittle integration tests in an xUnit library and declaring the practice of unit testing a failure. 
<!--more-->

One argument that developers use who have fallen into the trap of writing integration tests instead of unit tests is that _"unit tests come at a cost and you should carefully consider whether you should write a unit test."_ Now I won't argue that your development team needs to become proficient in unit testing so there is a cost associated with that. Additionally, there is more code in the codebase when unit testing so there is a cost to maintain more code rather than less code. But the argument that the "cost of a unit test" is a reason not to write one is a tell-tale sign that the unit tests are not, in fact, unit tests. I've mentioned this in my [previous post](/2014/10/11/the-appropriate-size-for-a-test.html "The Appropriate Size For A Test"), there is a reason why developers who practice TDD don't ever discuss the "cost of a unit test." That is because the benefits of a well written unit test far outweigh the maintenance cost of the unit test. Furthermore, the cost of **_not_** having a unit test is far greater than the cost to maintain one.

## What is a Unit Test?
While there are decent definitions of unit testing (see [wikipedia](http://en.wikipedia.org/wiki/Unit_testing "Unit Testing") for its definition), like all development practices there is a learning curve associated with becoming proficient in writing quality  unit tests. In order to do so developers need to change the way they write code to make it testable. It seems this  is why so many beginners struggle with unit testing. For developers who have been writing tests and practicing TDD for a while it's very easy to spot a test that isn't a unit test.

### Unit Test Characteristics
There are, however, characteristics of good unit tests that you'll want to model your tests after:
  
* Unit tests should be **short**. They should be as short as possible. If you have more than a dozen or so lines that's a good indicator you are venturing into integration test territory. 
* Unit tests should **test one thing only**. While there were some unit test philosophies that recommended a single assert per test. The common practice is to allow multiple asserts per test as long as they are all related to a single piece of functionality being tested.
* Unit tests should **require minimal setup**. If you are finding you have a lot of setup code you are most likely not writing a unit test.
* Related to minimal setup is that a unit test should **require a small number of dependencies**. If you require a lot of dependencies to test a piece of functionality your tests are growing past unit test size.
* Unit tests **should not interact with external dependencies** including the filesystem, databases, external services, etc.
* Unit tests should **run very quickly**. A suite of tests should run in seconds not minutes. An extremely short feedback loop is required for unit tests to provide the benefits necessary for developers.
* Unit tests should **provide error localization.** It should be very simple to pinpoint the source code causing a failing test.
* Unit tests should **make code coverage obvious.** 


### Error Localization & Coverage
Error localization and coverage are important concepts that [Michael Feathers](https://twitter.com/mfeathers "Michael Feathers' Twitter Account") discusses in his book [_Working Effectively with Legacy Code_](http://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052/ref=sr_1_1?ie=UTF8&qid=1417864348&sr=8-1&keywords=working+effectively+with+legacy+code). Here is what he has to say about error localization:

> As tests get further from what they test, it is harder to determine what a test failure means. Often it takes considerable work to pinpoint the source of a test failure. You have to look at the test inputs,
look at the failure, and determine where along the path from inputs to outputs the failure occurred. Yes, we have to do that for unit tests also, but often the work is trivial.  
&mdash; _Michael Feathers, Working Effectively with Legacy Code, page 12_

And on coverage:  

> In a large test it is hard to see the connection between a piece of code and the
values that exercise it. We can usually find out whether a piece of code is exercised by a test using coverage tools, but when we add new code, we might have to do considerable work to create high-level tests that exercise
the new code.  
&mdash; _Michael Feathers, Working Effectively with Legacy Code, pages 12 -13_

## Design for "Testability"

Developers who focus on writing tests after the code and don't understand how to design their code for "testability" tend to focus too heavily on integration tests. **If code is not organized into units it cannot be unit tested.** I've seen these developers try to get code into test harnesses without refactoring it to support unit testing. In the end they are left with large integration tests because the code lacked the appropriate seams for testing.  

### Testable Code

As Bob Martin, Martin Fowler, and plenty of other proponents of TDD have previously described one of the major benefits of unit testing is that writing "testable code" also means that you are adhering to good object-oriented design (OOD) principles:

* Dependency Injection (constructor injection, DI Framework, etc.)
* [Inversion of Control](http://en.wikipedia.org/wiki/Inversion_of_control "IOC")
* Low coupling
* High cohesion
* [Single Responsibility Principle](http://en.wikipedia.org/wiki/Single_responsibility_principle "SRP")
* [Law of Demeter / Principle of Least Knowledge](http://en.wikipedia.org/wiki/Law_of_Demeter "Law Of Demeter")
* [Liskov Substitution Principle](http://en.wikipedia.org/wiki/Liskov_substitution_principle "Liskov Substitution Principle")
* Small classes
* Small methods
* Small number of parameters on methods
* Small number of class dependencies / collaborators
* Limiting usage of static classes and public static methods
* Reduce class constructors to strictly object construction (no business logic)

All of these good OOD principles help you craft code that is testable and maintainable. Trying to get code under test that violates good OOD principles results in large, brittle, integration tests.

## xUnit Integration Tests

Integration tests are still an important part of your testing suite but they should not replace unit tests and there should be a lot less of them then your unit tests.

I do like to use xUnit test harnesses for integration tests when the tests don't require visibility outside of the development team. I prefer xUnit because I can test the production code directly. For any integration tests that require external visibility I would need to create additional adapter code to communicate with a tool like [FitNesse](http://www.fitnesse.org/ "FitNesse") or some other acceptance testing framework. This additional adapter code makes these tests increasingly brittle. While there are absolutely benefits to using acceptance test frameworks in a subset of your test suite, if it is not beneficial for a certain class of tests it should be avoided.

These integration tests should be able to be separated from unit tests and not be part of the suite that gets run constantly by the developers. Integration tests, even if you are using the same kinds of test harnesses for them, serve a very different purpose than unit tests.

## Conclusion

<img src='/img/workingEffectivelyWithLegacyCode.jpg' width='35%' height='35%' class='img-responsive' />
If you are struggling with unit testing and finding that you are not getting the value out of it that others appear to be compare your tests to the "unit test characteristics" above. 

If you aren't refactoring existing code to get it under test you are not getting the most out of your tests. If you are working in an existing codebase and are struggling to get the existing code under test I strongly recommend Michael Feathers' _Working Effectively with Legacy Code_. It is the definitive source on the subject.  
