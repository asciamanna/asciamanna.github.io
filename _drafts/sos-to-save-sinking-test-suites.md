---
layout: post
section-type: post
title: SOS - To Save Sinking Test Suites 
comments: true
category: development practices
tags: [unit-testing, code-quality]
---

I've written at length about the attributes of high-quality, valuable unit tests and how to write and maintain them. I spend a lot of my coaching time encouraging these practices. Too often I've heard developers say that unit testing doesn't work only to discover a test suite of incredibly complex, brittle, and unmaintainable tests. 

## TDD 

Every time I talk about high-quality unit tests I have to mention that I strongly encourage practicing TDD in order to create valuable unit tests. It prevents a lot of issues that arise when developers try to cover bad code in unit tests. I am a firm believer that __you cannot write good tests for bad code__. Unfortunately testing after the code is written too often leads to software design issues and the resulting problematic tests. Test After Development (TAD)[^1] yields tests with much less value, in addition to missing all of the design benefits of Test Driven Development which I've written about here.(LINK TO POST HERE.)

### The Code Quality Litmus Test

Unit tests are a litmus test for the quality of the code under test. Being the first client of code it ensures that objects are designed for the consumer of the object first and foremost. Which is something that is rare when designing software without using TDD. Tests with a lot of setup, control flow logic / conditional statements, and many collaborators are signs that there are design issues with the object under test.

## SOS

When I coach developers on writing high-quality unit tests I recommend the mnemonic __*SOS*__. Unit tests should be __*small*__, __*obvious*__, and __*simple*__. The attributes of high quality tests and the heuristics to create them can be grouped into these three categories. Teams that support low quality code and incredibly complex test suites are in a near constant state of distress and often still taking on water. So a distress signal mnemonic seems appropriate to help remedy these problems. 

### Small

**Small** is the first word we focus on. I recommend unit tests to be small. Often people will ask how small and look for a specific number of lines. I believe they should be around 15 LOCs. Maybe four or less lines of setup, a line to execute the method under test and a few assertions. That's it! Any more than that is an indicator of a design problem. 

Does the code require a lot of complicated setup? The callers of that code are going to also need to understand all of that complicated setup. And I can assure you that they shouldn't need to know that. 

Are there a lot of dependencies / collaborators that need to be setup? That's a sign that the object is doing too many things, taking on too many dependencies, and becoming a *God Object*. It's a sign there is an abstraction missing that collects a few of those dependencies into a single object.

Some developers avoid this by putting a lot of test setup in the xUnit test Setup method. This breaks heuristics in the next attribute, obvious.

### Obvious

Tests should be obvious and boring. Any developer should be able to look at them and understand them within a minute or two. Tests are valuable executable documentation but to accomplish this care must be taken to keep their intent obvious

#### Keep Tests Self-Contained 
Use of test setup should be reserved for specific usage

#### Arrange-Act-Assert

Make arrange act assert obvious

#### Intention Revealing Name

#### Amplify and Obscure
#### Glance Test
By making aaa obvious and well named test cases unit tests pass what I call "the glance test." I can glance a test and in a minute understand what is being tested, why it's being tested, its collaborations, and how it should react under these test conditions. 

### Simple

Simple benefits from both small and obvious tests. So you can see that these attributes are not easily self-contained. Each one benefits the other. 
 Explain those simple -- easy to understand, no inheritance, the heuristic tests should be self containing obvious - code coverage obvious AAA syntax. short - a few lines long. accomplish this by hiding unnecessary detail in private methods or other objects to setup the test data.

Keep tests self contained, setup should be short and common, glance test
## Further Reading

I have written a series of posts about how to create high-quality, valuable tests. Read these for detailed advice about how to create great unit tests:

