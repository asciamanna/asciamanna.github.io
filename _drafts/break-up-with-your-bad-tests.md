---
layout: post
section-type: post
title: Break up with your Bad Tests  
comments: true
category: development practices
tags: [anti-patterns, unit-testing, code-quality]
---

Unit test code, like all other source code, has a maintenance cost associated with it. But it has an additional cost as well, the increase in build times that results in running the test. Too often I see teams cling to bad tests that are completely incomprehensible. They do this out of a fear that typically comes from maintaining an extremely poor quality codebase. If organizations like these are going to improve their situation, breaking up with thse kinds of tests is necessary.

At one time a test suite I worked in had collection of tests with names like TestCase27, Test138, and Bug1033, for example. These tests were impossible to understand and the original authors of these tests had long since left the company to find employment elsewhere. To make matters worse, these tests consisted of four to five levels of inheritance. Because of this the actual code under test was a mystery. There were huge amounts of complicated setup strewn across the levels of inheritance and no clear entry point for the method under test. 

When these tests failed the team would typically update the assertion to make it pass and move on. They did this because they had no idea what the purpose of these tests were, and there was no way they could invest the time to figure out what these tests did. So day after day, year after year, these tests ran multiple times per day slowing the build process down and offering no benefit to the development organization in return.

## Delete Incomprehensible Tests

My take on tests like these is to delete them outright, they are serving no purpose but to slow your organization down. The next time code is modified to implement a new feature tests should be written then if they do no exist. Or better yet, the team can learn to practice TDD and write tests as they are writing the new feature.

In cases where the tests may not be a total loss I sometimes recommend keeping them as pinning tests just until the code is refactored so that it can be unit tested, but that assumes that the tests aren't totally incomprehensible. Unfortunately teams with these kinds of problems tend to keep these bad tests around for much longer than they should or put off refactoring the code to make it testable. So my starting position is typically to delete them. 

## They Must Test _Something_

When I not only recommended their removal but began the process of ridding the codebase of these tests there was some pushback. People were concerned that these tests tested "something." This type of fear is common in organizations maintaining poor quality codebases (a topic I will touch on in a future post). Testing "something" is not a marker for a good test and it prevents teams from ever improving their test suite. 

There are questions that I tend to ask to ascertain the benefit of tests like these:

* How often does the team explicitly run them on their development machines?
* What does the team do when they fail?
* Can any team member glance at the test and describe its purpose and intent?

## The Glance Test

I judge a test if I can glance at it for a minute or two and understand what is being tested and why. If it doesn't pass the glance test I start trying to figure out why. These types of tests fail the glance test miserably. If these tests are so hard to understand that no on in the organization can glance at them and understand why they fail, they should be deleted. 
The next time a change to the code is necessary untested code can be tested (if coverage is a goal of the organization).

## You Can't Write Good Tests for Bad Code

I am a firm believer that you can't cover bad code in good tests. When writing pinning or scaffolding tests it's important to understand that they are temporary. If they are hard to understand they should live for a very short period of time, until the code can be refactored to support better unit tests.

### TDD to the Rescue

Teams practicing TDD avoid these types of issues because writing the tests first ensures that the code stays in a state that is easily testable. Thus, not requiring herculian efforts to cover them in large, complicated, and cryptic tests just to see the percentage of coverage increase for the codebase.

## SOS

When trying to write high quality tests I remind developers of my pneumonic __*SOS*__.  Tests should be __*Simple*__, __*Obvious*__, and __*Short*__.

### Simple


### Obvious

### Short
Explain those simple -- easy to understand, no inheritance, the hueristic tests should be self containing obvious - code coverage obvious AAA syntax. short - a few lines long. accomplish this by hiding unnecessary detail in private methods or other objects to setup the test data.

## Further Reading

I have written a series of posts about how to create high-quality, valuable tests. Read these for detailed advice about how to create great unit tests:
