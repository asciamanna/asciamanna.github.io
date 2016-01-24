---
layout: post
title: How Do I Unit Test Private Methods?
comments: true
category: development-practices
tags: [unit-testing, code-quality]
---

This article is the first in a series about unit testing. My goal is to address the common questions that come up when a team starts writing unit tests. These questions are ones I remember pondering and asking when I started and they are questions that I still get asked as I interact with developers who are just getting started with unit testing. 

This article is going to focus on a question that commonly arises when learning how to unit test in object-oriented programming languages, how to test private methods.

<!--more-->
##Unit Tests Should Only Test Public Methods
The quick answer is that you shouldn't test private methods directly but only their effect on the public methods that call them. Much like other client objects that call public methods on the object under test, you can think of the unit test as another client object. It should only be calling the class' public interface.

This is not an unreasonable question, though. There are frameworks that allow for the testing of private methods (e.g., the PrivateObject from Microsoft's MSTest framework). I am very happy to hear these questions being asked. It shows that the developers are taking the first steps towards building high quality unit tests and improve their production code's design. 

##Motivation
Developers who wish to test a private method directly usually want to do this because testing it through its public usage would make the test more cumbersome, add setup to test cases, and/or make the test harder to understand. Recognizing this is the first step towards using unit tests as a tool to improve the design of your code.

In a lot of cases developers will wrap untestable production code in complex tests and be happy that their percentage of code coverage is increasing. The developers who ask how to test private methods are beginning to recognize the problems with complexity in the unit tests.

##Complex Tests Indicate Design Problems
The next step is to understand what to do when faced with the desire to test a private method. When you want to test a private method directly this is quite often an indication that the class under test is violating the Single Responsibility Principle (SRP) and doing too much.

###SRP Violations
Testing a private method directly as well as any additional public methods on a class is a good indicator of an SRP violation. One option, and often the easiest, is to perform an ***extract class*** refactoring to make the private method that you want to test a public method on a newly extracted class. Now that method can be tested directly.  This new class now becomes a dependency of the original class.  

By testing private methods you are ignoring the complexity in the code under test and letting an opportunity to improve the code slip by. 

##Conclusion
Instead of testing private methods directly, instead use this as a heuristic to perform ***extract class *** refactorings and simplify your production code. 
