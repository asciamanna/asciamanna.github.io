---
layout: post
section-type: post
title: The Continuous Value of Learning Tests
comments: true
category: development practices
tags: ['unit testing', 'clean code']
---

<img src="/img/learning-test-header.jpg" alt="Learning Tests Header image" />

Learning Tests are a significantly underutilized practice on development teams. I find this quite unfortunate as Learning Tests provide significant value to teams. Further they provide several benefits throughout the lifetime of a development project or product as their value changes over time. 

## What is a Learning Test?

A learning test is a way to explore a third-party library or API outside of the domain of your application. When a team is starting to experiment with a third-party library or are beginning to implement it, my advice is to start with learning tests. 
Learning tests are tests written in the same testing framework you are writing your microtests / unit tests in (typically in an xunit-style test harness). However the capabilities of the library are explored and tested outside of the context of your application. This is important for two main reasons. 

## Separate Learning from Implementation

Often times we find ourselves working with a new library in the context of our application. We read vendor or open source documentation, try some things we've read about, and then observe the affect on our system, often repeating this loop until we discover the appropriate incantation to get the library to do what we want. This is EXTREMELY slow. For more complicated APIs and interactions, unnecessary code often builds up as we don't know the exact calls that resulted in the behavior that we wanted. Learning Tests address this by separating learning about the library from our use of it in our system. This is similar to the workflow that TDD directs us towards where we aren't designing code and implementing behavior in the same step. It echos a great quote by Michael Feathers. 

>> Programming is the art of doing exactly one thing at a time.    
>> &mdash; __Michael Feathers__

<img src="/img/feathers-quote-easel-sheet.jpg" alt="Michael Feathers Quote" />

## Small Program Space
I once got great advice that you never debug a large program, only small ones. This is the second benefit of Learning Tests. You get isolated and focused learning about the third-party library in a very small program, typically an xunit-style test that calls methods on a third-party library directly and asserts the results of those calls. 

>> Never debug a large program, only debug a small one.  
>> &mdash; __Unknown__

## Creating a Learning Test

Here are the steps I follow to create a learning test suite:

1. Decide whether this test should be part of an existing test suite or the start of a new suite of tests.
2. Create a new test in the team's microtesting / unit testing framework in the appropriate suite.
3. Create an instance of the third-party library object or its SDK in a test case. 
4. Begin experimenting with the various calls to the library methods.
5. Once a method is identified that the system will rely on that returns some result, assert null against the returned result.
6. Take the result from the assertion error and place that in an equals assertion to create a passing test. 
7. Take another pass through the test and remove any unnecessary code by ensuring the test still passes.
8. Repeat the process by creating a new test of another method on the third-party library that you need make use of in your application
9. After implementing the library in your production code, if there are any tests that exercise methods you no longer need you can delete those tests. 

## The Changing Value of Learning Tests
As I mentioned at the start of this post, the value of Learning Tests change over time which makes them uniquely valuable.
 
### Learning Aid
As the tests are being created they are a learning aid, and they provide all of the benefits listed above, being able to discover the capabilities of a third-party library quickly by being isolated from the context of your application.

### Executable Documentation
Once in place, these tests serve as executable documentation (like most unit / microtests). If you take care to keep the tests concise, only containing the code required to get the necessary behavior from the third-party library, they become a great way to get new team members and future developers up to speed on the required capabilities of the third-party library. Contrast this with developers needing to spend time digging through online third-party documentation to find the specifics they care about to learn about the library. Every time a new capability is needed a learning test is written or updated to keep it in sync with the needs of the system. 

### Library Version Upgrade Tool
This is where teams get the big payoff of Learning Tests. When it comes time to upgrade your third-party library simply upgrade the version your Library Tests are referencing a run your test suite. In a matter of seconds you know if you have a safe upgrade path or more work to do. I've worked on teams that had versions of third-party libraries that were over five years old, riddled with issues that were fixed in subsequent versions, but were too afraid to upgrade since it would require a massive (and often manual) regression effort. 

There may even be breaking changes in the third-party library, but by focusing your learning tests on only the functions of the third-party library the application is dependent upon, you can find out quickly if any of functionality you rely on is affected by the breaking change. If a library upgrade breaks a test, you now have a testing environment and nearly instantaneous feedback loops so you can experiment to figure out the changes that you'll need to make to your application.

>> In learning tests we call the third-party API, as we expect to use it in our application. We’re essentially doing controlled experiments that check our understanding of that API. The tests focus on what we want out of the API.  
>> &mdash; James Grenning, from Clean Code

## Conclusion
Learning Tests are experimentation, documentation, and feedback tools that are extremely valuable. Before integrating a new third-party library into your system, start with a suite of learning tests and you'll immediately start reaping their benefits. 

## Further Reading
James Grenning covers Learning Tests in Chapter 8 - Boundaries from the book **Clean Code**. 