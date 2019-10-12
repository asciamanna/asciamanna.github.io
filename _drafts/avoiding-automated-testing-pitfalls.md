---
layout: post
section-type: post
title: Avoiding Automated Testing Pitfalls 
subtitle: How to Create Sustainable Test Suites
comments: true
excerpt_separator: <!--more-->
category: leadership
tags: ['agile development', 'unit testing', 'anti-patterns']

There is a pervasive problem in the software industry stemming from a misunderstanding of the risks and rewards of automated testing. I'm happy to see widespread adoption of automated testing, and the realization that it is a necessary compliment to manual, exploratory testing. However, many organizations don't understand the costs and benefits of the various types of automated tests available to them.
<!--more-->

There are two big misconceptions that set the stage for a risky and expensive approach to automating tests. First, is the idea that _automated testing_ is the process of automating the steps of manual QA, just automating the script the manual tester would follow. Second, that the tests should be written by the QA organization, outsourced, or written by a team of engineers who are not the team writing the software being tested. These misconceptions are travel companions, I rarely see one without the other, and it spells trouble for the software organizations trying to build their automated test suite.

## The Risks of End-to-End Focused Testing

As compared to lower-level tests, end-to-end and UI tests are slow and brittle, requiring significant time and often significant numbers of people to keep the tests working and investigate whether failures are false failures or real failures. Worse still, test suites occupied by a majority of these tests create a false sense of security for the organizations that rely on them. False failures are like broken windows and people begin to not take failing test suites seriously, _"Is it a real failure or a code change?"_ Because these tests can never cover all of the branching and business logic of the system, the suite lulls the organization into a false sense of security.

### Lacking error-localization
End-to-end and UI tests cover so much scope that they lack error localization. A failing test can cost the organization significant time trying to determine whether the failure was indeed a real failure and if it was, where is the error and how should they fix it. 

## Test Pyramid Guide

In these organizations I recommend sharing Mike Cohn's [Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html). While it's not perfect (no model is) it is very effective in quickly showing organizations the mistake they are making when investing significant amounts money and time into complex automation testing frameworks, end-to-end tests, and UI tests. 

IMAGE HERE

The test pyramid describes an approach to creating a sustainable test suite. The bottom of the pyramid consists of unit tests or, more recently known as, microtests. These should be the majority of tests in the suite. There should be a lot of them, they should be _**VERY**_ small and they should be _**VERY**_ fast (i.e., they should run in a few milliseconds). These tests should run in isolation on developer machines.  

The tests that occupy the middle tier are the integration and acceptance tests, these test a little more scope and are more "connected" than microtests so there should be much fewer of these in the test suite.

Finally the top is UI-driven or end-to-end tests, and there should be very few of these as they take longer and have an increased likelihood of identifying false failures. 

### The Inverse Relationship of Scope and Detail

The most important thing to grok in this pyramid is the inverse relationship between scope and detail. At the bottom of the pyramid, microtests should be testing all of the detail of the system so their scope should be very small. They should verify only a few lines of code in the system. As you move up the pyramid scope should increase, and when scope increases detail should decrease. 

#### The Big Failure

The biggest failure of UI and end-to-end test focused test suites is that they try to test both high detail and large scope. This is the recipe for brittle and flaky tests. 

With the creation of UI-testing tools like Selenium organizations have started down a path to wrap these tools in complex, homegrown UI-testing frameworks in an attempt to _test all the things_ without understanding the drawbacks to this approach. 

## The Test Ice Cream Cone

The result of this approach is the Test Ice Cream Cone where a majority of the test suite is occupied by end-to-end and UI-driven tests. When I encounter this my goal is to help the organization flip the suite into a pyramid. 

JIM SHORE IMAGE HERE

## Push Tests Down 
There are some organizations that will resist minimizing these end-to-end or UI tests because they managed to find an issue before it got to production. It's understandable to see why they wouldn't want to abandon these tests. But the fact remains that they are slower and less reliable than tests lower in the test pyramid. My advice has always been to push tests down. If a bug was caught in an end-to-end test or integration test, write a microtest that exposes the bug and then fix it. I was very pleased to see similar advice in the _The DevOps Handbook_.

> Not only are errors detected during integration testing difficult and time-consuming for developers to reproduce, even validating that it has been fixed is difficult (i.e., a developer creates a fix but then needs to wait four hours to learn whether the integration tests now pass). Therefore, whenever we find an error with an acceptance or integration test, we should create a unit test that could find the error faster, earlier, and cheaper.   
>&mdash;Gene Kim, The DevOps Handbook - Chapter 10

There is often an argument that microtests and unit tests can't catch every bug. While I think this is true, it's often because of a gap in the microtests or quality issue with the microtests, not because of an inherent failure of that category of test. When this argument is employed teams miss an opportunity to improve their microtests. 

## Lacking Microtests
The most common reason organizations adopt this approach is because they are lacking a high-quality and trusted unit test / microtest suite. Often teams abandon unit testing because they struggle with trying to wrap unit tests around untestable code. Or they may continue to wrap unit tests around untestable code and end up with a suite of tests that is a drag instead of an accelerator.

> You can't write good tests for bad code.      
> &mdash;Unknown

## The Importance of Team-Owned Tests

Organizations who outsource testing to another team or department to try to _"free up development teams"_ to focus on features miss the point. The best tests are the ones that can probe within the boundaries of the system. When testing outsourced to another group (who aren't experts in the code that is being tested) they can only test from the perimeter. The book Accelerate, which describes the science and research behind high-performing and successful software teams, concluded that automated tests that were outsourced to another team or organization showed no correlation to organizational performance. 

> Developers primarily create and maintain acceptance tests, and they can easily reproduce and fix them on their development workstations. It’s interesting to note that having automated tests primarily created and maintained either by QA or an outsourced party is not correlated with IT performance. The theory behind this is that when developers are involved in creating and maintaining acceptance tests, there are two important effects. First, the code becomes more testable when developers write tests. This is one of the main reasons why test-driven development (TDD) is an important practice—it forces developers to create more testable designs. Second, when developers are responsible for the automated tests, they care more about them and will invest more effort into maintaining and fixing them.   
> &mdash;Nicole Forsgren, Jez Humble, Gene Kim - Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations - Chapter 4

## Turning the Ship Around

To help organizations improve their test suite start by mapping their tests to the testing pyramid. They should put their biggest investments in the lowest level tests, which means a focus on microtesting. This should include updating teams' Definition of Done to include microtests for all code changes and teaching teams Test-Driven Development and microtesting skills.  

Next begin to phase out complicated UI and end-to-end testing frameworks and outsourced test suites. Let teams own their test suites and decide how many, if any, end-to-end and UI tests they will need. While I believe some level of end-to-end tests are important they aren't always necessary. I worked on a team that practiced TDD and had robust suite of microtests and integration tests and didn't require end-to-end tests.

## Conclusion
One key attribute to successful, high-performing software teams is the reliance on fast feedback loops. Test suites are one of the big feedback loops available to teams. Focusing on fast, reliable, repeatable tests are an accelerator for software organizations. Automated test suites are essential but be aware of the pitfalls in creating them. 