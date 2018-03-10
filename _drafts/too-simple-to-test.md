---
layout: post
section-type: post
title: Too Simple to Test? 
comments: true
category: development practices
tags: [unit-testing, tdd, code-quality]
---

When I work with developers who don't practice Test-Driven Development (TDD) one question often arises, _When is code too simple to test?_  As someone who finds an incredible amount of value in TDD and microtesting my response is that we should strive to make all of our code simple, and still test it.  

It's common for developers to avoid testing objects like adapters, object mappers, or factories, for example, thinking they are just too simple to test. They would rather test these objects via inspection than write an automated test, thinking that these tests take too long to write, are a burden to maintain, or otherwise not carrying their weight. 

Since this conversation typically occurs on Test After Development (TAD)[^1] teams, it usually coincides with similar conversations about code that is too hard to test. It is common for TAD teams to produce code that is too difficult to test because they are attempting to wrap untestable code in unit tests after the fact, instead of designing for testability. The net result is a very small amount of functionality that actually gets tested. These TAD tests end up looking very different than the isolated, object-level, microtests that I would expect to come out of TDD. I've seen these situations result in as little as 10 to 15% of a team's code being tested. 

## TDD Avoids this Question Altogether

TDD practitioners avoid spending time and mental cycles trying to answer this question in the first place. There isn't anything too simple to test. The test is the mechanism for getting code into the codebase. Without a failing test the code wouldn't ever be produced. If you need an adapter, object mapper, or factory you are going to need to write a failing test for it first. 

Skilled TDD practitioners will create isolated microtests; avoiding overlapping tests. In these test suites having more tests that cover more functionality, especially when that functionality is very simple, is preferred over longer, more complicated, unit tests that are not isolated from each other and test overlapping functionality.

## Error Localization

Testing simple code, especially in small tests, provides error localization. I've seen plenty of bugs in simple objects. The tests, while not a silver bullet, give developers an opportunity to ensure that the objects they are building are operating as expected. 

## Refactoring

Simple code often gets more complex over time. As features and other code modifications are added to the system, complexity accumulates. These tests are necessary to support continuous refactoring to avoid this complexity. 

## Maintainability

When developers raise concerns about the maintainability of tests for simple code, I suggest that simple code has simple tests. Keeping tests simple is one of the key characteristics of quality microtests that I've written about [here]({{ site.baseurl }}{% post_url 2018-01-30-sos-to-save-sinking-test-suites %}). Simple tests have an extremely low maintenance cost. So low, in fact, that their value in documenting a fact or behavior of the system exceeds their cost of maintenance.[^2] 

Consequently, more complex unit tests that test across multiple object boundaries end up having a much higher maintenance cost.

## Documentation Rule

The documentation rule of microtesting states that you read the test to understand the code it's testing. You don't read the code to figure out what a test is doing. Unfortunately, typical Test After Development unit tests are complicated enough that they don't provide the same level of documentation value. 

The tests for simple code carry their weight simply because they are documenting a fact or behavior of the system. Any developer can go to a test and understand exactly how the code works, even if the scenarios are quite simple. 

## Conclusion

Instead of spending valuable time and mental cycles trying to figure out when the line has been crossed from _"too simple to test"_ to _"complicated enough to test"_, drive your development and design with test first development practices. There is value in those really simple tests. Test everything you can[^3] and build testability in from the start. 


[^1]: Test After Development or *TAD* is discussed in [this article about TDD](https://pragprog.com/magazines/2011-11/testdriven-development) by [Jeff Langr](http://langrsoft.com/)

[^2]: This point was made by [Bob Martin](https://twitter.com/unclebobmartin) in a blog post that I can't seem to find. But I wanted to be sure to attribute this to him.

[^3]: There are areas of systems that can be hard to microtest depending on the developer's experience: boundaries of the system, integration points with third-party libraries, code with Awkward Collaborators, etc. There are several strategies that help developers test this code. However, most code that is _"too hard to test"_ is the result of poor design that can be improved to provide testability.