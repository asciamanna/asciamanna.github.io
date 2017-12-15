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

Every time I talk about high-quality unit tests I have to mention that I strongly encourage practicing TDD in order to create valuable unit tests. It prevents a lot of issues that arise when developers try to cover bad code in unit tests. __You cannot write good tests for bad code__. Too often Test After Development (TAD)[^1] yields tests with very little value, in addition to missing all of the benefits of the design benefits of Test Driven Development which I've written about here.(LINK TO POST HERE.)

### The Code Quality Litmus Test

Unit tests are a litmus test for the quality of the code under test. Being the first client of code it ensures that objects are designed with the consumer of the object in mind. Tests with a lot of setup, control flow logic, and many collaborators are signs that there are design issues with the object under test.

## SOS

When I coach developers on writing high-quality unit tests I recommend the mnemonic __*SOS*__. Unit tests should be __*small*__, __*obvious*__, and __*simple*__. The attributes of high quality tests and the heuristics to create them can be grouped into these three categories. Teams that support poor quality code and incredibly complex test suites are in a near constant state of distress. So a distress signal mnemonic seems appropriate to help remedy these problems. 

### Small


### Obvious

### Simple

 Explain those simple -- easy to understand, no inheritance, the heuristic tests should be self containing obvious - code coverage obvious AAA syntax. short - a few lines long. accomplish this by hiding unnecessary detail in private methods or other objects to setup the test data.

Keep tests self contained, setup should be short and common, glance test
## Further Reading

I have written a series of posts about how to create high-quality, valuable tests. Read these for detailed advice about how to create great unit tests:

