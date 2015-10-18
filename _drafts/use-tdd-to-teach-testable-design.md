---
layout: post
title: Use TDD to Teach Testable Design 
comments: true
category: software-craftsmanship
tags: [code-quality, tdd]
---

Test-driven development (TDD) is one of my essential development practices. It, along with the other XP practices, has helped me advance as a professional developer. There are several benefits that TDD has over test last development. And of course, TDD has enormous benefits over not writing any unit tests for your code. It is common when trying to convince a team to start writing unit tests (and learn how to write testable code) to ignore TDD and take the stance that _"as long as you are writing tests it doesn't matter whether you are writing them first or last."_ I am absolutely guilty of making this claim in the past and I think it is a mistake. 

<!--more-->

I do believe that people who have obtained a level of mastery of writing high quality unit tests and designing testable code can write tests first or last and they would be indistinguishable from each other after the fact. However, even developers who have achieved this level of mastery lean towards practicing TDD, and there is good reason for this. TDD is a practice, a workflow. It provides a way of working that allows developers to quickly add fully-tested, working features to the system incrementally. And the system is **ALWAYS** in a working state. The team is always in a position where they are one test (60 seconds or less) away from a perfectly working system.

##Why Did I Avoid TDD?
The reason I haven't focused on TDD when trying to coach developers on unit testing is that it remains somewhat controversial. Developers often protest because it is a dramatic change to how they are currently writing software. I thought by avoiding the challenge of convincing developers to get out of their comfort zone and try TDD I would be able to focus on just unit testing and selling why unit testing and testable code is important. But here's the rub, in my experience TDD is the best way to teach the skills necessary for writing high quality unit tests and designing testable code. 

##Use Uncertainty as a Teaching Technique
When coaching developers who haven't mastered writing testable code a drastic change in how they code can put them in a position to be ready to learn new things. They are in unknown territory and hopefully open to learn some new techniques. Otherwise it is too easy when pressure is on to fall back to what they know (which is probably years of experience of writing untestable code).

##Old Habits Result in Untestable Code
When feeling any schedule pressure and trying to write unit tests developers will go back to what is comfortable. When trying to unit test they will simply wrap untestable code in tests. These tests embody all of the "poor unit test" attributes. They tend to:

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

###Tests are not First-Class Citizens
Organizations who don't value unit testing obviously don't make unit tests a first-class citizen. Part of the role of the coach is to show that code without unit tests is incomplete. Again, under pressure teams will abandon unit testing when done after developing production code. I've heard it time and time again that *__"we ran out of time to write unit tests."__* This statement really bothers me for several reasons. 

* It removes any responsibility from the developer. The developer is essentially saying that it is the schedule, the company, the project manager or someone else's fault that unit tests did not get written.
* It illuminates the obvious issue that tests are not important. 

I've seen situations where developers are checking in tests for features weeks after the feature was considered "complete."  

A very effective way to combat this is to show that unit tests are so important that they should be written **first** (i.e., test-driven development). It is another technique to ensure that even under schedule pressure a team of developers is continuing to practice writing and improving their unit tests.

> ...We should consider our tests as being first. We already know we should write them first; but we should also clean them first, maintain them first, think of them first, and keep them first. We should give our tests the highest priority.  
>&mdash; _Robert Martin from his post [Test First](https://blog.8thlight.com/uncle-bob/2013/09/23/Test-first.html)_ 

##Show the Psychological Benefits Early
There are several psychological benefits to practicing TDD. I believe this is why so many of us developers who have experienced the joy of TDD are reluctant to give it up and want to share it with so many developers who are afraid it will _"change the way they work"_.

> One of the hardest things to communicate about test-driven development is the mental state it puts you in. I remember a session on the original C3 project with Ralph Beattie...Progress was steady and unhurried; because it was unhurried it seemed slow, but looking back on how much we got done, it was clear that despite the unhurried feeling progress was really fast.  
> &mdash; _[Martin Fowler](http://martinfowler.com/) from the afterword of Kent Beck's TDD By Example_

<img src=http://ecx.images-amazon.com/images/I/51H4NaRMF4L._SX397_BO1,204,203,200_.jpg" />
 
By introducing TDD you can show that instead of facing a large unknown set of features TDD encourages developers to break an unknown problem down into small achievable goals. These goals can be further broken down so that developers can focus on the problem one public method of one class at a time. It forces developers to come up with a set of micro-goals. 

Now the benefit is that as developers watch the number of passing tests increase there is now a sense of real forward progress on the problem. Not an unknown amount of progress on an unclear project or feature.

The other benefit that I mentioned at the beginning of the post is that the system is always in a working state. If a mistake is made, delete the test and start over. You are always one unit test away from a working system. Developers who work this way find themselves rarely if ever have to use the debugger or figure out where in a huge amount of untested code where a problem exists.

##Ping Pong Pair Programming
TDD and pair programming come together in a practice called Ping Pong Pair Programming. I won't talk about in detail because I wrote a blog post on it that you can read about here if you haven't. As a coach pairing with developers to show them how to work this way is the best way to help them achieve mastery of these practices. Ping pong pair programming with the developers you are coaching provides the perfect environment to coach one-on-one.

###Starting with the Test
When pairing as the coach you can write the first test and start the conversation. Show that by writing the test first it guides you to writing well designed software. Testable code is, by its nature, decoupled.

> When you follow the three rules of TDD, all your code will be testable by definition! And another word for "testable" is "decoupled". In order to test a module in isolation, you must decouple it. So TDD forces you to decouple modules. Indeed, if you follow the three rules, you will find yourself doing much more decoupling than you may be used to. This forces you to create better, less coupled, designs.  
> &mdash; _Robert Martin from his post [The Three Rules of TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)_

Use these conversations during pair programming as an opportunity to touch on all of the valuable attributes of well designed code and how all of those attributes make unit testing easier:

* Show that methods with small numbers of parameters are easier to test. 
* Shorter methods are easier to test than longer ones.  
* Methods and classes that do one thing are easier to test than methods and classes that do multiple things. 
* Methods with no side effects are easier to test than methods with side effects. 
* Classes using composition instead of inheritance are easier to test.
* Classes that use small inheritance hierarchies are easier to test than large inheritance hierarchies.
* Classes that follow the inversion of control are easier to test than classes that act as "God objects" and do all the work procedurally.
* Less test setup (i.e., less state required to execute a test) makes tests easier to write and understand.

As you continue to pair with developers they will see how much easier the code is to maintain, understand, and reason about. Now they have a unit test suite which will enable them to refactor their code and continuously improve the software design.

##Conclusion
TDD and pair programming provides the best framework to teach developers how writing testable code is important and how to do it properly. If you are trying to sell an organization on unit testing and writing testable code don't make my mistake and overlook TDD.
