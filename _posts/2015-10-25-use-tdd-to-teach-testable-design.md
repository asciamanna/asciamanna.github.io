---
layout: post
section-type: post
title: Use TDD to Teach Testable Design 
comments: true
category: software craft
tags: ['code quality', 'tdd', 'coaching']
---

Test-driven development (TDD) is an essential development practice. It along with the other XP practices have significantly helped me advance as a professional developer. However, it is common when trying to sell developers on the benefits of unit testing (and the importance of writing testable code) to ignore TDD and take the position that _"as long as you are writing tests it doesn't matter whether you are writing them first or last."_ I am guilty of making this claim in the past and I think it is a mistake. 

<!--more-->

I do believe that developers who have obtained a level of mastery writing high quality unit tests and designing testable code can write tests first or last and they would be indistinguishable from each other after the fact. However, even developers who have achieved this level of mastery lean towards practicing TDD, and there is good reason for this. TDD is a practice that allows developers to quickly add fully-tested, working features to the system incrementally. The system is **ALWAYS** in a working state. Every developer is always in a position where they are one test (60 seconds or less) away from a perfectly working system.

## Why Avoid TDD?
The reason I haven't focused on TDD is that it remains somewhat controversial. Developers often protest trying TDD because it is a dramatic change to how they are currently writing software. I thought by avoiding the challenge of convincing developers to get out of their comfort zone and try TDD I would be able to focus on selling why unit testing and testable code is important. However, in my experience TDD is the best way to teach the skills necessary for writing high quality unit tests and designing testable code. 

## Old Habits Result in Untestable Code
When feeling schedule pressure while trying to learn, developers will go back to what is comfortable. When trying to unit test under stress it is common to fall back to wrapping untestable code in tests. This results in poor quality unit tests. They tend to:

* Be long
* Be slow 
	* Accessing the database, the filesystem, third-party APIs, etc.
* Have complicated and inappropriate inheritance structures
	* Sometimes mirroring misused inheritance structures in the code under test. 
	* Note that unit tests should not have an inheritance hierarchy.
* Require complicated test setup because the code requires too much system state.
* Obscure code coverage as a result of the complexity of the code under test.
* Inappropriately use multiple forms of test doubles (e.g., mocks, fakes, or stubs) without rhyme or reason.

Most importantly these tests tend to be very difficult to understand. They suffer from the same code quality issues that the production code suffers from. Often developers in this situation come to the correct realization that these tests are hindering them instead of helping them. They decide that unit testing doesn't work, and now you have lost them.

### Tests are not First-Class Citizens
Organizations that don't value unit testing obviously don't make unit tests a first-class citizen. Part of the role of the coach is to show that **code without unit tests is incomplete**. Again, under pressure teams will abandon unit testing when done after developing production code. I've heard it time and time again from developers that *__"we ran out of time to write unit tests."__* This statement bothers me for several reasons. 

* It removes any responsibility from the developer. The developer is essentially saying that it is the schedule, the company, the project manager or someone else's fault that unit tests did not get written.
* It illuminates the obvious issue that tests are not important to the organization otherwise the work would not be complete without them. 

I've encountered situations where developers were checking in tests for features weeks after the feature was considered "complete." A very effective way to combat this is to show that unit tests are so important that they should be written **first**. It is a technique to ensure that even under schedule pressure developers are continuing to practice writing and improving their unit tests.

> ...We should consider our tests as being first. We already know we should write them first; but we should also clean them first, maintain them first, think of them first, and keep them first. We should give our tests the highest priority.  
>&mdash; _Robert Martin from his post [Test First](https://blog.8thlight.com/uncle-bob/2013/09/23/Test-first.html)_ 

## Show the Psychological Benefits Early
There are several psychological benefits to practicing TDD. I believe this is why so many of us developers who have experienced the joy of TDD are reluctant to give it up and want to share it with so many developers who are afraid it will _"change the way they work"_.

> One of the hardest things to communicate about test-driven development is the mental state it puts you in. I remember a session on the original C3 project with Ralph Beattie...Progress was steady and unhurried; because it was unhurried it seemed slow, but looking back on how much we got done, it was clear that despite the unhurried feeling progress was really fast.  
> &mdash; _[Martin Fowler](http://martinfowler.com/) from the afterword of Kent Beck's TDD By Example_

<br/>
<img class="img-responsive center-block" src="/img/tdd_by_example.jpg" />

### Concrete Progress on Small Goals

By introducing TDD you can show that instead of facing a large unknown set of features and struggling with where to begin, developers are encouraged to break a large problem down into small, achievable goals. These goals can be further broken down so that developers can focus on the larger problem, one public method of one class at a time. It forces developers to come up with a set of micro-goals. 

As [Martin Fowler](http://martinfowler.com/) has stated, progress is swift but feels like it moves at a comfortable pace. There are concrete indicators of forward progress as the number of passing unit tests increases. This helps developers work without stress as there isn't a specter of murky progress towards an unclear goal hanging over them.

### The System Always Works

The other benefit that I mentioned at the beginning of this post is that the system is always in a working state. If a mistake is made, a developer can delete a test, losing at most a minute of their day. There is no other way to work that provides a faster feedback loop for developers. As a developer you are always one unit test away from a working system. Developers who work this way find themselves rarely, if ever, having to use the debugger or figuring out where in a huge amount of untested code a problem exists.

### Fearless Refactoring

Once a unit test suite exists for a feature, developers will have confidence that they can safely refactor the code to continue to improve its design over time. If you have read [Martin Fowler](http://martinfowler.com/)'s Refactoring book, several refactorings are considered "safe" because they preserve the behavior of the code. These safe refactorings are even easier now thanks to the refactoring tools for modern IDEs. However, a significant number of the refactorings from the book are not safe and require unit tests to ensure that the developer did not introduce an error.

### Executable Documentation
Unit tests serve as executable documentation to demonstrate how the object should behave in a variety of scenarios. Since the unit tests are versioned with the code, they need to be kept up to date in order to pass. Therefore, they do not suffer from the problems inherent in other forms of documentation such as written specifications or code comments. Those forms of documentation quickly become outdated, thus they cannot be trusted.

## Ping Pong Pair Programming

TDD and pair programming come together in a practice called [Ping Pong Pair Programming](/2015/04/18/ping-pong-pair-programming.html). I won't talk about it in detail because I wrote a blog post about the subject that you can read about [here](/2015/04/18/ping-pong-pair-programming.html). As a coach, pairing with developers to *show* them these practices is the best way to help them achieve mastery. 

### Starting with the Test

As the coach, write the first test and start a conversation. Show that by writing the test first it guides developers to writing well designed software. Testable code is, by its nature, decoupled.

> When you follow the three rules of TDD, all your code will be testable by definition! And another word for "testable" is "decoupled". In order to test a module in isolation, you must decouple it. So TDD forces you to decouple modules. Indeed, if you follow the three rules, you will find yourself doing much more decoupling than you may be used to. This forces you to create better, less coupled, designs.  
> &mdash; _Robert Martin from his post [The Three Rules of TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)_

Use these conversations during pair programming as an opportunity to touch on all of the valuable attributes of well designed code and how all of those attributes make unit testing easier:

* Show that methods with small numbers of parameters are easier to test. 
* Shorter methods are easier to test than longer ones.  
* Classes with less dependencies are easier to test than classes with many dependencies.
* Methods and classes that do one thing are easier to test than methods and classes that do multiple things. 
* Methods with no side effects are easier to test than methods with side effects. 
* Classes using composition instead of inheritance are easier to test.
* Classes that use small inheritance hierarchies are easier to test than large inheritance hierarchies.
* Classes that follow the inversion of control principle are easier to test than classes that act as "God objects" and do all their work procedurally.
* Less test setup (i.e., less state required to execute a test) makes tests easier to write and understand.

As you continue to pair with developers they will begin to see how much easier the code is to maintain, understand, extend, and reason about.

## Conclusion
TDD and pair programming provides the best framework to educate developers on the value of writing testable code and how to do it properly. If you are trying to sell an organization on unit testing and writing testable code, encourage the developers to pair with you and start the conversation with the first unit test you write with them.
