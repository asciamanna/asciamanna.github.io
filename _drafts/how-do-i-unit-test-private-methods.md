---
layout: post
title: Should Private Methods Be Tested?
comments: true
category: development-practices
tags: [unit-testing, code-quality]
---
When developers start unit testing without a solid foundation in writing high quality code or when they try to get an existing codebase with quality problems under test they tend to end up with large, brittle, and confusing tests. The tests end up slowing them down instead of making them faster. As long as developers peservere and get better at writing unit tests it becomes an incredible tool for developing high quality, maintainable code. 
<!--more-->

> The solution to the problem of costly tests, however, is not to stop testing but instead to get better at it. Getting good value from tests requires clarity of intention and knowing what, when, and how to test.
>&mdash; _Sandi Metz, Practical Object Oriented Design in Ruby, page 192_  

This article is the first in a series about unit testing. My goal is to address the common questions that come up when teams start writing unit tests. This article is going to focus on a question that commonly arises when learning how to unit test in object-oriented programming languages, how to test private methods.

##Unit Tests Should Only Test Public Methods
The quick answer is that you shouldn't test private methods directly but only their effect on the public methods that call them. Much like client objects that call the public methods of the object under test, you can think of the unit test as another client. In fact, if you are practicing TDD it is your __first__ client of the object. It should only be accessing the class' public interface. If a class is hard to test via its public interface it is hard to use. This is an indicator that the production code that is client of the object is going to be hard to complicated and hard to understand.

##Motivation
The question as to whether to test private methods directly is not an unreasonable one. There are frameworks that allow for the testing of private methods (e.g., the PrivateObject from Microsoft's MSTest framework). Furthermore, languages like Ruby make it easy to test private methods. I am very happy to hear these questions being asked. It shows that the developers are taking the first steps towards building high quality unit tests and improving their production code's design. 

Developers who wish to test a private method directly usually want to do this because testing it through its public usage would make the test more cumbersome, redundant, add setup to test cases, and/or make the test harder to understand. Recognizing this is the first step towards using unit tests as a tool to improve the design of your code. 

There are plenty of developers who will wrap untestable production code in complex tests and be happy that their percentage of code coverage is increasing. The developers who ask how to test private methods are beginning to recognize the problems with complexity in unit tests. 

##Exposing Design Flaws
The next step is to understand what to do when faced with the desire to test a private method. When you want to test a private method directly this is quite often an indication that the class under test is violating the Single Responsibility Principle (SRP) and consequently doing too much. Sandi Metz discusses the importance of using unit tests to expose design flaws such as this in her book _Practical Object Oriented Software in Ruby_.

###SRP Violations
Testing a private method directly as well as any additional public methods on a class is a good indicator of an SRP violation. One option, and often the easiest if the abstraction makes sense, is to perform an ***extract class*** refactoring to make the private method that you want to test a public method on a newly extracted class. Now that method can be tested directly in a unit test targeting the extracted class. This new class now becomes a dependency of the original class and can be replaced with a test double in the original class' test cases.  

By testing private methods you are ignoring the complexity in the code under test and letting an opportunity to improve the code slip away.

##Obscuring Documentation
Another purpose for unit testing is to provide documentation about how to use a class. This documentation doesn't suffer from all of the problems that written documentation or code comments suffer from. This documentation is _executable_ so it has to be correct or else your team is faced with failing unit tests.  

As developers grow in their role as unit testers and more of their code is covered in unit tests you will see a change in how they learn about code.  Their first stop will be to examine a unit test for the class in question.This allows them to learn all of the important aspects of a class:
* Its public interface
* The parameters each call expects
* What it returns to the caller
* The happy path for each public method
* The corner cases that the class handles

When choosing to test a private method directly this obscures the documentation of the class. Private methods should _not_ be important to clients of the class. Now the developer who examines the unit test to learn about the class needs to figure out which tests cover private methods and ignore those. As someone who is programming a client of the class in question they should not be concerned with internals of the class unless they need to change them. This impedes the developer when trying to understand the important aspects of a class.

##Conclusion
Instead of testing private methods directly use this as a heuristic to perform ***extract class *** refactorings to simplify your production code. Understand that the motivation to test a private method directly is an indicator that the class under test is doing too many things.
