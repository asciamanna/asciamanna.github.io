---
layout: post
section-type: post
title: Too Simple to Test? 
comments: true
category: development practices
tags: [unit-testing, tdd, code-quality]
---

When I work with teams and developers who don't practice Test-Driven Development (TDD) one question always seems to come up, _When is code too simple to test?_  As someone who finds an incredible amount of value in TDD and microtesting my response is that we should strive to make all of our code simple, and still test it.  

It's common for developers to disregard testing adapters or factories, for example, thinking they are just too simple to test. They would rather test via inspection than write an automated test, thinking that these tests take too long to write or are a burden to maintain. 

Unfortunately, since this conversation typically only comes up on Test After Development (TAD)[^1] teams, there are also similar conversations about code that is too hard to test. Code that the team has produced is too difficult to test because they are attempting to wrap untestable code in unit tests after the fact, instead of designing for testability. What results is a very small amount of code that actually gets tested and the resulting tests looking very different than the valuable, isolated, object-level, microtests that I would expect to come out of TDD. I've seen these situations result in as little as 10 to 15% of a team's code being tested. 

## TDD Avoids this Question Altogether

TDD practitioners avoid spending time and mental cycles asking this question in the first place. There isn't anything too simple to test. The test is the mechanism for getting code into the codebase. Without a failing test the code wouldn't ever be produced. If you need an adapter or factory you are going to need to write a failing test for it. 

Skilled TDD practitioners will create isolated microtests that test at the object level and avoid overlapping tests. In these test suites having more tests that cover more functionality, especially when that functionality is very simple, is preferred over longer, more complicated, unit tests that are not isolated from each other and test overlapping functionality.

## Error Localization

Testing simple code, especially in small isolated tests provides error localization. I've seen plenty of bugs in adapters and factories for example. The tests, while no silver bullet, give developers an opportunity to ensure that the objects they are building are operating as expected. 

## Refactoring

Simple code often gets more complex over time as features and other changes are added to the system. Adapters and factories can gain complexity and most certainly need to be refactored. These tests are necessary to support refactoring. 

## Maintainability

When developers are concerned about the maintainability of tests that test simple code I suggest that simple code most often has simple tests. Keeping tests simple is one of the key characteristics of quality microtests that I've written about [here]({{ site.baseurl }}{% post_url 2018-01-30-sos-to-save-sinking-test-suites %}). Simple tests have an extremely low maintenance cost. So low that their value in documenting a fact about the system exceeds their cost of maintenance.[^2] 

Consequently, more complex unit tests that test across object boundaries end up having a much higher maintenance cost then very simple tests for simple code. 

## Documentation Rule

The documentation rule of microtesting states that you read the test to understand the code it's testing. You don't read the code to figure out what a test is doing. Unfortunately, typical Test After Development unit tests are complicated enough that they don't provide the same level of documentation value. 

The tests for simple code carry their weight simply because they are documenting a fact or behavior of the system. Any developer can go to a test and understand exactly how the adapter and factory works, even if the scenarios are quite simple. 

## Conclusion

Instead of spending time trying to figure out when some code is complicated enough to test strive to keep the code as simple as possible. Test everything you can[^3] and practice TDD to build testability in from the start. 


[^1]: Test After Development or *TAD* is discussed in [this article about TDD](https://pragprog.com/magazines/2011-11/testdriven-development) by [Jeff Langr](http://langrsoft.com/)

[^2]: This point was made by [Bob Martin](https://twitter.com/unclebobmartin) in a blog post that I can't seem to find. But I wanted to be sure to attribute this to him.

[^3]: There are areas of systems that are hard to test: boundaries of the system, integration points with third-party libraries. There are several strategies to maximize what can be tested, wrapping system and third-party libraries in thin wrappers or facades, for example. However, most other code that is "too hard to test" is the result of design decisions that can be improved upon to provide testability.