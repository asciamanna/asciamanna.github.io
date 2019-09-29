---
layout: post
section-type: post
title: The Continuous Value of Learning Tests
comments: true
category: development practices
tags: ['unit testing', 'clean code']
excerpt_separator: <!--more-->
---

<img src="/img/learning-test-header.jpg" alt="Learning Tests Header image" class="img-responsive" />


Learning tests are an unfortunately underutilized practice on software development teams. These tests provide several benefits throughout the lifetime of a development project or product. Learning tests have a unique quality in that their value changes over time. Learning tests can save teams significant amounts of research and regression testing time. They reduce typically high-risk changes to running a small, fast test suite. 
<!--more-->

## What is a Learning Test?

_A learning test is a way to explore a third-party library or API outside of the domain of an application._ 

When a team is starting to experiment with a third-party library or beginning to implement it in their application, my advice is to start with learning tests. Learning tests are tests written in the same testing framework teams writes their microtests / unit tests in (typically in an xunit-style framework). They often look quite similar to microtests, very small tests that run very quickly. Occasionally, learning tests need to be long-running when they require access to third-party library resources over a network, etc. But, much like microtests, its recommended to try to avoid this whenever possible. 

In these tests, the capabilities of the library are explored and tested outside of the context of the application. This is important for two reasons: to separate learning from implementation and to focus the learning in a small program space. 

## Separate Learning from Implementation

<img src="/img/feathers-quote-easel-sheet.jpg" alt="Michael Feathers Quote" class="img-responsive" />

Developers often find themselves working with and learning about a library in the context of their application. They read vendor or open source documentation, try some things they've read about, and then observe the effect on their system. Often this is repeated in a loop until they discover the appropriate incantation to get the library to do what they want. This is an _**EXTREMELY**_ slow process. For more complicated APIs and interactions, unnecessary code often accumulates as the developers don't know the exact code that resulted in the desired behavior. 

Learning tests address this problem by separating learning about the library from its implementation and use in the system. This is similar to the benefits found in the Test-Driven Development (TDD) workflow, where software design and behavior implementation are separate steps in software development. It echoes a quote by Michael Feathers: 

> Programming is the art of doing exactly one thing at a time.   
> _&mdash;Michael Feathers_

## Small Program Space
I once received the great advice that you never debug large programs, only small ones. This is the second benefit of learning tests. You get isolated and focused learning about the third-party library in a very small program, typically an xunit-style test case that calls methods on a third-party library directly and asserts the results of those calls. 

> Never debug a large program, only debug a small one.   
> _&mdash;Unknown_

## Creating a Learning Test

Here are the steps that I follow to create a suite of learning tests:

1. Decide whether this test should be part of an existing test suite or the start of a new suite of tests (keeping in mind if they access the filesystem, the network or a database they should **not** be included in a microtest / unit test suite).
2. Create a new test using the team's microtesting / unit testing framework in the appropriate suite.
3. Create an instance of the third-party library object or its SDK in a test case. 
4. Identify a method on the third-party library that is likely required by the application.
5. Once a method is identified call it in a test case and assert null against the returned result.
6. Take the result from the assertion error and place that in an equals assertion to create a passing test. 
7. Take another pass through the test and remove any unnecessary code by ensuring the test still passes.
8. Repeat this process by creating a new test of another method in the third-party library that you need to make use of in your application.
9. After implementing the library in your production code, if there are any tests that exercise methods you no longer need you can delete those tests. 

## The Changing Value of Learning Tests
As I mentioned at the start of this post, the value of Learning tests changes over time which makes them uniquely valuable.
 
### Learning Aid
As the tests are being created they are a learning aid, providing all of the benefits listed above, helping developers discover the capabilities of a third-party library quickly by being isolated from the context of the application the library is intended for.

### Executable Documentation
Once in place, these tests serve as executable documentation (like most well-written and well-maintained unit / microtests). If you take care to keep the tests concise, only containing the code and test cases required to verify the necessary behavior from the third-party library, they become a great way to get new team members and future developers up to speed. Contrast this with the time required when developers need to comb through online documentation to find the specific features of the library they need to learn. Every time a new capability is needed, a learning test is written or updated to keep it in sync with the needs of the system. 

### Enabling Library Version Upgrades
This is where teams get the big payoff of learning tests. When it comes time to upgrade your third-party library, simply upgrade the version your learning tests are referencing and run your test suite. In a matter of seconds, you'll know if you have a safe upgrade path or more work to do. I've worked with teams that had versions of third-party libraries that were over five years out of date. This obsolete library version was riddled with issues that were fixed in subsequent versions, but the team was too afraid to upgrade since it would require a massive (and often manual) regression effort. 

There may even be breaking changes in the latest version of the third-party library. By focusing your learning tests only on the functionality of the third-party library your application is dependent upon, you can find out quickly if your application is affected by the breaking change. If a library upgrade breaks a test, you now have a testing environment and nearly instantaneous feedback loops so you can experiment to figure out the changes that you'll need to make to your application.

> In learning tests we call the third-party API, as we expect to use it in our application. We’re essentially doing controlled experiments that check our understanding of that API. The tests focus on what we want out of the API.   
> _&mdash;James Grenning, from Clean Code_

## Conclusion
Learning tests are experimentation, documentation, and feedback tools that are extremely valuable. Before integrating a new third-party library into your system, start with a suite of learning tests and you'll immediately start reaping their benefits. 

## Further Reading
[James Grenning](https://blog.wingman-sw.com/) describes learning tests in Chapter 8 - _**Boundaries**_ from the book _**Clean Code**_. 
