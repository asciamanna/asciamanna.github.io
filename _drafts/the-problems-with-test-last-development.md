---
layout: post
title: The Problems with Test Last Development
comments: true
category: software-craftsmanship
tags: [code-quality, tdd]
---

I love test-driven development (TDD). It along with the other XP practices have helped me advance as a professional developer. There are several benefits that TDD has over test last development. And of course, TDD has enormous benefits over not writing any unit tests for your code. It is common when trying to convince a team to start writing unit tests to ignore TDD and take the stance that _"as long as you are writing tests it doesn't matter whether you are writing them first or last."_ I am absolutely guilty of saying this in the past and I think it is a mistake. 

<!--more-->

I do believe that people who have obtained a level of mastery of writing high quality unit tests and designing testable code can write tests first or last and they would be indistinguishable from each other after the fact. However, even developers who have achieved this level of mastery lean towards practicing TDD, and there is good reason for this. TDD is a practice, a workflow. It provides a way of working that allows developers to quickly add fully-tested, working features to the system incrementally. And the system is **ALWAYS** in a working state. The team is always in a position where they are one test (60 seconds or less) away from a perfectly working system.

##Why Avoid TDD?
The reason I haven't focused on TDD when trying to coach developers on unit testing is that it remains somewhat controversial. Developers often protest because it is a dramatic change to how they are currently writing software. I thought by avoiding the challenge of convincing developers to get out of their comfort zone and try TDD I would be able to focus on just unit testing and selling why unit testing and testable code is important. 

But here's the rub, TDD is the best way to teach the skills necessary for writing high quality unit tests and designing testable code. 

##Use Uncertainty as a Teaching Technique
When coaching developers or an organization of developers who haven't mastered writing testable code a drastic change in how they code can really put them in a position to be ready to learn new things.  They are in unknown territory and hopefully open to learn some new techniques. Otherwise it is too easy when pressure is on to fall back to what they know (which is probably years of experience of writing untestable code).

##Old Habits Result in Untestable Code
When feeling any schedule pressure and trying to write unit tests they will go back to what is comfortable. When trying to unit test they will simply wrap untestable code in tests. These tests embody all of the "poor unit test" attributes. These are easy to spot. These poor unit tests tend to:

* Be long
* Be slow 
	* Accessing the database, the filesystem, third-party APIs, etc.
* Have complicated and inappropriate inheritance structures
	* Sometimes mirroring misused inheritance structures in the code. 
	* Note that unit tests should never have an inheritance hierarchy.
* Require complicated test setup because the code requires way too much system state.
* Obscure code coverage as a result of the complexity of the code under test.
* Inappropriately use multiple forms of test doubles (e.g., mocks, fakes, stubs) without rhyme or reason

Most importantly these tests tend to be very difficult to understand. They suffer from the same code quality issues the production code does. Often developers in this situation come to the correct realization that these tests are hindering them instead of helping them which was the promise. They decide that unit testing doesn't work, and now you have lost them.


##Show the Psychological Benefits
build feature one public on one class at a time.
red green refactor shows consistent progress on micro goals vs. lack of progress on large unknown project.
system is always in a working state.

##Ping Pong Pair Programming
teach by pairing.
##Starting with the Test
* starting with the test you can show that small methods make writing your tests easier. 
* small params make writing your test easier
* injecting dependencies following the IOC principle allows for easy stubbing/mocking of dependencies if appropriate for the test.
* favoring composition over inheritance makes writing unit tests easier
* small classes makes writing tests easier
* less test setup by testing individual classes public methods makes tests easier to understand
