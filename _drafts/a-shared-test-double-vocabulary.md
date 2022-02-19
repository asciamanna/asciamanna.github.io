---
layout: post
section-type: post
title: A Shared Test Double Vocabulary
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: How can adopting a shared test double vocabulary improve our code and our interactions?
image: 
category: software craft
tags: ['microtesting', 'tdd']
---

When software development teams begin practicing TDD and mircotesting they commonly adopt a mocking framework or library and use it everywhere. This tends to have a negative impact on the codebase and the team's interactions. These issues can easily be overlooked without the experience of working with high-quality microtest suites. 

## Test Double Vocabulary
Gerard Meszaros developed a taxonomy for fake objects used in tests in his book _xUnit Test Patterns_. In it, he describes the generic term **_Test Double_** as any object that is used as a "stand in" for the real object during test execution. In his book he defined five types of test doubles. 
- Dummy Objects
- Fakes
- Stubs
- Spies
- Mocks

Martin Fowler outlines each one in [this short blog post about Test Doubles](https://martinfowler.com/bliki/TestDouble.html);

### Alias overload
A common problem that prevents deeper, more nuanced conversations (and test implementations), is the overloading of these terms. There are many terms for these test doubles and there are often overlaps and conflicts in the terminology depending on whose terminology you use. In my younger years I was quite pedantic about adopting Gerard's terminology from _xUnit Test Patterns_. Now, I don't care what terms a team uses, as long as they choose one set of terminology and stick with it. At Industrial Logic our eLearning album about Faking & Mocking uses a different set of terminology (in fairness our defintions were developed prior to the release of _xUnit Test Patterns_). So use ours or the xUnit Test Patterns taxonomy, just don't offload the definitions to your framework.

### A Framework-Centric View
Teams often adopt a mocking framework early in their development and use it everywhere. They automatically reach for it for every collaborator interaction. Additionally, the language of the framework comes along for the ride.  
- If the team uses [Jest](https://jestjs.io/) (JavaScript), [Mockito](https://site.mockito.org/) (Java), or [Moq](https://github.com/moq/moq4) (C#) everything is a _**Mock**_
- If the team uses [Jasmine](https://jasmine.github.io/) (JavaScript) everything is a _**Spy**_
- If the team uses [FakeItEasy](https://fakeiteasy.github.io/), everything is a _**Fake**_

This outsourcing of test double vocabulary comes with a cost. We lose all of the nuance in discussing collaborators in tests. When should we use a spy versus a stub? These conversations never happen, because everything is a _mock_.

## Mocking Library Pain

Now, these mocking libraries aren't all bad, and can still be valuable tool in your teams arsenal. They have their merit, but in practice they are overused. When everything is considered a _mock_, and your library produces _mock objects_, there is no need to ever deviate from it. Overuse of mocking frameworks has several negative effects on the codebase. 

### Noise & Duplication
Mocking libraries tend to encourage duplication of the same mock setup in test classes and across test classes. Yes, that code can be refactored too, but it often isn't in practice. When it is refactored it can typically be replaced with a hand-rolled test double. The mocking library setup code tends to be noise that clogs tests and clouds the intention of the test case. Hand-rolled test doubles can be reused and often get out of the way, allowing for the tests to be more intention revealing.


### Increase in Complexity
Mocking libraries each have their own idiosyncrasies and add complexity to tests. When I work with teams just learning TDD and microtesting I see an inordinate amount of time being spent trying to figure out why a mock object call resulted in a `null` return value. I've seen teams waste hours and hours doing this. Their time could have been better spent writing a small, simple test double. 

### Test execution time increases
I can't claim this for every type of mocking framework on every platform. However, the mocking frameworks that rely on reflection are a tax on your test suite runtime. I measured the impact on a .NET codebase and the use of a mocking library made a large impact on test execution times. We were able to speed up the test suite considerably by replacing mock library usage with some hand-rolled test doubles we could reuse. 

### Brittleness
 One of the things that is taught in the Industrial Logic Faking & Mocking eLearning is that mocks focus on interaction. Overuse of mocking libraries can often result in mocking every dependency of an object under test. Tests quickly shift from testing behavior to testing interactions and implementation. There is too much focus on interactions at the expense of testing behavior. It's easy to lose your way, and tests become brittle because they are coupled to the implementation.

### Lost Intent 
When we hand roll test objects and adopt a variety of test doubles we can use the appropriate test double for the scenario we are testing. We can stay focused on the object and scenario we are testing. When using a mocking library we often lose sight of the scenario and become more concerned with object interactions than behavior. 

## Advice
My advice for teams beginning their journey into TDD, microtesting, and collaborative development practices is become adept at one mocking library for your platform. Experiment with writing your own test doubles and using the mocking library. Get a feel for when to reach for one over the other. Adopt a shared test double vocabulary and learn when to employ each type. This will help you keep your tests focused on the behavior you are testing and not get carried away into over mocking.

## Further Reading
One of my favorite articles on this topic is Martin Fowler's (now 15 year old) blog post, [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html).