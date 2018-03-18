---
layout: post
section-type: post
title: Too Simple to Test? 
comments: true
category: development practices
tags: [unit-testing, tdd, code-quality]
---

When I work with developers who haven't practiced Test-Driven Development (TDD) one question often arises, _When is code too simple to test?_  As someone who finds an incredible amount of value in TDD and microtesting my advice is that we should strive to make all of our code simple, yet still test it.  

It's common for developers to avoid testing objects like adapters or object mappers, for example, thinking they are just too simple to test. They would rather test these objects via inspection than write an automated test, believing that these tests take too long to write, are a burden to maintain, or otherwise not carrying their weight. 

Since this conversation typically occurs on Test After Development (TAD)[^1] teams, it usually coincides with conversations about code that is too hard to test. TAD teams commonly attempt to wrap untestable code in automated tests, instead of designing for testability. The net result is a very small amount of functionality that gets covered in tests. At best, these TAD tests end up being much less valuable than those produced by practicing TDD. I've seen these situations result in as little as 10% of a team's code being tested. 

## TDD Avoids this Question Altogether

TDD practitioners avoid spending time and mental cycles trying to answer this question altogether. There isn't anything too simple to test. The test is the mechanism for getting code into the codebase. Without a failing test the code wouldn't be produced. 

Skilled TDD practitioners create isolated, object-level microtests. The resulting microtest suite contains many tiny tests that run extremely quickly (less than 10ms) and execute and test a very small path in the code. These tests are favored over larger and more complicated unit tests that lack isolation. TAD unit testing often results in extraneous tests and tests that are difficult to understand. 

## Error Localization

Testing simple code in small tests provides error localization. I've seen plenty of bugs in simple objects. The tests, while not a silver bullet, give developers an opportunity to ensure that the objects they are building are operating as expected. When a test fails, the line of code containing the problem can be identified extremely quickly given the small surface area of the tested code.

## Refactoring

Simple code often gets more complex over time. As features and other code modifications are added to the system, complexity accumulates. Tests are necessary to support continuous refactoring to avoid this complexity. Assuming that a developer will add tests when they need to refactor an object discourages continuous refactoring.

## Maintainability

When developers raise concerns about the maintainability of tests for simple code, I suggest that simple code often has simple tests. Keeping tests simple is one of the key characteristics of quality microtests that I've written about [here]({{ site.baseurl }}{% post_url 2018-01-30-sos-to-save-sinking-test-suites %}). Simple tests have an extremely low maintenance cost. So low, in fact, that their value in documenting a fact or behavior of the system exceeds their cost of maintenance.[^2] 

Consequently, more complex unit tests with larger test scopes that test across multiple object boundaries end up having a much higher maintenance cost.

## Documentation Rule

The documentation rule of microtesting states that you read the test to understand the code it's testing. You don't read the code to explain a test. Unfortunately, typical Test After Development unit tests are complicated enough that they don't provide this level of documentation value. 

The tests for simple code carry their weight simply because they are documenting a fact or behavior of the system. Any developer can go to a test and understand exactly how the code works.

## Conclusion

Instead of spending valuable time and mental cycles trying to figure out when the line has been crossed from _"too simple to test"_ to _"complicated enough to test"_, drive your development and design with test first development practices. There is value in those really simple tests. Test everything you can[^3] and build testability in from the start. 


[^1]: Test After Development or *TAD* is discussed in [this article about TDD](https://pragprog.com/magazines/2011-11/testdriven-development) by [Jeff Langr](http://langrsoft.com/)

[^2]: This point was made by [Bob Martin](https://twitter.com/unclebobmartin) in a blog post that I can't seem to locate for attribution. 

[^3]: There are areas of systems that can be hard to microtest depending on the developers' experience: boundaries of the system, integration points with third-party libraries, code with Awkward Collaborators, etc. There are several strategies to help developers test this code. However, most code that is _"too hard to test"_ is the result of poor design that can be improved to provide testability.
