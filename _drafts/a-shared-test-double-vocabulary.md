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

<img src='/img/crash-test-dummy.jpg' alt='crash test dummy head' class='img-responsive' />

When software development teams begin practicing TDD and mircotesting, they commonly adopt a mocking framework or library and use it everywhere. This practice tends to harm the codebase and the team's interactions. It's easy to overlook the overuse of mocking libraries without the experience of working with high-quality microtest suites. 

## Test Double Vocabulary
Gerard Meszaros developed a taxonomy for "fake" objects used in tests in his book _xUnit Test Patterns_. He describes the generic term **_Test Double_** as any object used as a "stand-in" for the real object during test execution. In his book, he defined five types of test doubles. 
- Dummy Objects
- Fakes
- Stubs
- Spies
- Mocks

Martin Fowler outlines each one in [this short blog post about Test Doubles](https://martinfowler.com/bliki/TestDouble.html);

### Alias overload
A common problem that prevents deeper, more nuanced conversations (and test implementations) is the overloading of these terms. There are many conflicting terms for these test doubles. At one time,  I was pedantic about adopting Gerard's terminology from _xUnit Test Patterns_. Now, I don't care what terms a team uses, as long as they choose one. At Industrial Logic, our eLearning album about Faking & Mocking uses a different set of terminology (created before the release of _xUnit Test Patterns_). So use ours or the xUnit Test Patterns taxonomy. Just don't offload the definitions to your framework.

### A Framework-Centric View
Teams often adopt a mocking framework early in their development and use it everywhere. They automatically reach for it for every collaborator interaction. Additionally, the language of the framework comes along for the ride.  
- If the team uses [Jest](https://jestjs.io/) (JavaScript), [Mockito](https://site.mockito.org/) (Java), or [Moq](https://github.com/moq/moq4) (C#) everything is a _**Mock**_
- If the team uses [Jasmine](https://jasmine.github.io/) (JavaScript) everything is a _**Spy**_
- If the team uses [FakeItEasy](https://fakeiteasy.github.io/), everything is a _**Fake**_

This outsourcing of "test double" vocabulary comes with a cost. We lose all of the nuances in discussing collaborators in tests. When should we use a spy versus a stub? These conversations are non-existent because everything is a _mock_.

## Mocking Library Pain

Now, these mocking libraries aren't all bad and can still be a valuable tool in your team's arsenal. They have their merit, but in practice, they are overused. When every test double is considered a _mock_, and your library produces _mock objects_ there is no need to deviate. Overuse of mocking frameworks has harmful effects on the codebase. 

### Noise & Duplication
Mocking libraries tend to encourage duplication of mock setup. The mock setup code can be refactored, but it often isn't in practice. When it is refactored, it can typically be replaced with a hand-rolled test double. The mocking library setup code tends to be noise that clogs tests and clouds the intention of the test case. Hand-rolled test doubles can be reused throughout the test suite. They tend to require less setup code in test cases, making tests more intention revealing.


### Increase in Complexity
Mocking libraries have their idiosyncrasies and specialized syntax that increase complexity in tests. When I work with teams just learning TDD and microtesting, I see a significant amount of time spent understanding why a mock object call resulted in a `null` return value. I've seen teams waste hours fighting with the framework to get their desired result. Instead, they could have written a small, simple test double. 

### Test execution time increases
 Mocking frameworks that rely on reflection are a tax on test suite runtimes. I measured the impact of a mocking library on a .NET codebase. The test suite runtime was decreased significantly by replacing a subset of the mock library usage with reusable hand-rolled test doubles. Fast test runtimes are vitally important as they tend to be the most time-consuming part of a build. 

### Brittleness
 A topic covered in the [Industrial Logic Faking & Mocking eLearning](https://elearning.industriallogic.com/gh/submit?Action=AlbumContentsAction&album=collaborations&devLanguage=java) is that mocks focus on interaction. Overuse of mocking libraries can often result in mocking every dependency of an object under test. Tests quickly shift from testing behavior to testing interactions and implementation. There is too much focus on interactions at the expense of testing behavior. It's easy to lose your way, and tests become brittle because they are coupled to the implementation.

### Lost Intent 
When we hand roll test objects and adopt a variety of test doubles we can use the appropriate test double for the scenario we are testing. When using a mock library, we often lose sight of the scenario and become more concerned with object interactions than behavior. 

## Advice
My advice for teams beginning their journey into TDD, microtesting, and collaborative development practices is to become adept at one mocking library for your platform. Experiment with writing your test doubles and using the mocking library. Get a feel for when to reach for one over the other. Adopt a shared test double vocabulary and learn when to employ each type. This will help keep tests focused on the behavior under test and hopefully avoid over mocking.

## Further Reading
One of my favorite articles on this topic is Martin Fowler's (now 15-year-old) blog post, [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html).

---
Image courtesy of [the National Museum of America](https://www.flickr.com/photos/nationalmuseumofamericanhistory/4796780409) - Creative Commons License