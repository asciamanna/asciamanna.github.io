---
layout: post
section-type: post
title: Adopting a Shared Test Double Vocabulary
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: Over-reliance on mocking frameworks tends to lead to common problems in our code. What if adopting a shared test double vocabulary could improve our code and our interactions?
image: /img/crash-test-dummy.jpg
category: software craft
tags: ['microtesting', 'tdd']
---

<img src='/img/crash-test-dummy.jpg' alt='crash test dummy head' class='img-responsive' style='max-width: 300px'/>



When software development teams begin practicing TDD and mircotesting, they commonly adopt a mocking framework and use it everywhere. This practice can cause harm to the codebase as well as the team's interactions. It's easy to overlook the overuse of mocking frameworks without the experience of working with high-quality microtest suites. 

<!--more-->

## Test Double Vocabulary
Gerard Meszaros developed a taxonomy for "fake" objects used in tests in his book _xUnit Test Patterns_. He describes the generic term **_Test Double_** as any object used as a stand-in for the real object during test execution (think *stunt double*). In his book, he defined five types of test doubles. 
- Dummy Objects
- Fakes
- Stubs
- Spies
- Mocks

Martin Fowler outlines each one in [this short blog post about Test Doubles](https://martinfowler.com/bliki/TestDouble.html);

### Alias Overload
A common problem that prevents deeper, more nuanced conversations (and test implementations) is the overloading of these terms. There are many conflicting terms for these test doubles. At one time, I was pedantic about adopting Gerard's terminology from _xUnit Test Patterns_. Now, I don't care what terms a team uses, as long as they choose one. At Industrial Logic, our eLearning album about Faking & Mocking uses a different set of terminology (created before the release of _xUnit Test Patterns_). So use ours or the xUnit Test Patterns taxonomy. Just don't offload the definitions to your framework.

### A Framework-Centric View
Teams often adopt a mocking framework early in their development and use it everywhere. They automatically reach for it for every collaborator interaction. Additionally, the language of the framework comes along for the ride.  
- If the team uses [Jest](https://jestjs.io/) (JavaScript), [Mockito](https://site.mockito.org/) (Java), or [Moq](https://github.com/moq/moq4) (C#) everything is a _**Mock**_
- If the team uses [Jasmine](https://jasmine.github.io/) (JavaScript) everything is a _**Spy**_
- If the team uses [FakeItEasy](https://fakeiteasy.github.io/) (.NET) everything is a _**Fake**_

This outsourcing of the test double vocabulary comes at a cost. We lose all of the nuances in discussing collaborators in tests. When should we use a spy versus a stub? These conversations are non-existent because everything is a _mock_.

## Mocking Framework Pain

Now, these mocking libraries aren't all bad, they can be a valuable tool in your team's arsenal. They have their merit, but in practice, I see them overused. When every test double is considered a _mock_, and your library produces _mock objects_ there is no need to deviate. Misuse of mocking frameworks has harmful effects on the codebase. 

### The ease of creating Pseudo-Tests

When I join teams that have some tests in place using a mocking framework, I invariably find tests that don't test anything; tests that test the mock instead of the object under test. GeePaw Hill talks about this in detail in his article, [On (Not) Using Mocking Frameworks](https://www.geepawhill.org/2021/07/13/on-not-using-mocking-frameworks/).

### Noise & Duplication
Mocking libraries tend to encourage duplication of mock setup. The mock setup code can be refactored, but it often isn't in practice. When it is refactored, it can typically be replaced with a hand-rolled test double. The mocking library setup code tends to be noise that clogs tests and clouds the intention of the test case. Hand-rolled test doubles tend to require less setup code in test cases, making tests more intention-revealing.


### Increase in Complexity
Mocking libraries have their idiosyncrasies and specialized syntax that increase complexity in tests. When I work with teams just learning microtesting, and still practicing *test-after development*, I see a significant amount of time spent understanding why mock object calls result in `null` return values. I've seen teams waste hours fighting with the framework to get their desired result. Instead, they could have written a small, simple test double. 

### Test execution time increases
 Mocking frameworks that rely on reflection are a tax on test suite runtimes. I measured the impact of a mocking library on a .NET codebase. The test suite runtime decreased significantly by replacing a subset of the mock library usage with hand-rolled test doubles. Fast microtest runtimes are vitally important as they tend to be the most time-consuming part of a build. Furthermore, we want to run our tests constantly throughout the day. The slower the test suite, the less often we will run the tests.

### Brittleness

A topic covered in the [Industrial Logic Faking & Mocking eLearning](https://elearning.industriallogic.com/gh/submit?Action=AlbumContentsAction&album=collaborations&devLanguage=java) is that mocks focus on interactions. Overuse of mocking libraries can often result in mocking every dependency of an object under test. Tests quickly shift from testing behavior to testing interactions and implementation. There can be too much focus on interactions at the expense of testing behavior. It's easy to lose your way, and tests become brittle because they are coupled to the implementation.  

### Over-specification

When we reach for our mocking framework and mock every dependency, it is easy to fall into the trap of over-specifying our tests. Do we care about the parameters passed to the collaborator for this case? Do we care about the order that we call the
methods on the collaborator? If it's not maintaining state we likely do not.  We tend to specify every collaboration with every dependency. Over-specifying our tests is another way to create brittle tests.

### Lost Intent 
When we hand roll test objects and adopt a variety of test doubles, we can use the appropriate test double for the scenario we are testing. When using a mocking framework, we often lose sight of the scenario and become more concerned with the implementation of object interactions than behavior. 

## Advice
My advice for teams beginning their journey into TDD, microtesting, and collaborative development practices, is to become adept at one mocking library for your platform. Experiment with writing test doubles _and_ using the mocking library. Get a feel for when to reach for one over the other. Adopt a shared test double vocabulary and learn when to employ each type. This will help keep tests focused on the behavior under test.

## Further Reading
One of my favorite articles on this topic is Martin Fowler's (now 15-year-old) blog post, [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html).

<div class="bottom-separator"></div>

<small>Image courtesy of [the National Museum of America](https://www.flickr.com/photos/nationalmuseumofamericanhistory/4796780409) - Creative Commons License</small>