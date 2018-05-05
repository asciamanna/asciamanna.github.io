---
layout: post
section-type: post
title: Should Private Methods Be Tested?
comments: true
category: software craft
tags: ['unit testing', 'code quality']
---
Developers new to unit testing often end up with large, brittle, and confusing tests. These kinds of tests typically expose underlying issues with the code under test. This often goes unnoticed as developers try to learn how to build effective unit tests. If developers don't have a solid foundation in writing loosely-coupled code or they are trying to get an existing codebase under test, it is common for them to produce these large and brittle tests.  

<!--more-->

These kinds of tests slow teams down instead of making them faster. Sadly, but not surprisingly, some developers choose to abandon unit testing altogether deciding it is not a tool for them. It is important to recognize, like most issues in software development, that the problem isn't with the tool or practice but with its execution. As long as developers persevere and improve at writing unit tests it becomes an incredible tool for developing high quality and maintainable code. 

In fact it is one of three skills required to build high quality, changeable code according to Sandi Metz:  

* Understanding Object-Oriented Design  
* Refactoring  
* Writing high-value, efficient tests  

She calls this the three-legged stool upon which changeable code rests.

> The solution to the problem of costly tests, however, is not to stop testing but instead to get better at it. Getting good value from tests requires clarity of intention and knowing what, when, and how to test.  
>&mdash; _Sandi Metz, Practical Object Oriented Design in Ruby, page 192_  

This article is the first in a series I plan on writing about unit testing. My goal is to address the common questions and issues that arise when teams start writing unit tests. This article in particular is going to focus on a question that commonly comes up when learning how to unit test in object-oriented programming languages; whether to test private methods.

## Unit Tests Should Only Test Public Methods
The short answer is that you shouldn't test private methods directly, but only their effects on the public methods that call them. Unit tests are clients of the object under test, much like the other classes in the code that are dependent on the object. In fact, if you are practicing test-driven development (TDD), the unit test is your __first__ client of the object. The test should only be accessing the class' public interface. If an object is hard to test via its public interface, it is going to be hard to use in the production code. This is one of many examples where a unit test is exposing potential design issues.

## Motivation
The question as to whether to test private methods directly is not an unreasonable one. There are frameworks that allow for the testing of private methods (e.g., the PrivateObject from Microsoft's MSTest framework). Furthermore, languages like Ruby make it easy to test private methods if the developer wishes to do so. I am very happy to hear these questions being asked. It shows that the developers are taking the first steps towards building high quality unit tests and improving their production code's design. 

Developers who wish to test a private method directly usually want to do so because testing it through its public usage would make the test more cumbersome, redundant, add setup to test cases, and/or make the test harder to understand. Recognizing this is the first step towards using unit tests as a tool to improve the design of your code. 

There are certainly developers who will wrap untestable production code in complex tests and be happy that their percentage of code coverage is increasing. The developers who ask how to test private methods are beginning to recognize the problems with complexity in unit tests. 

## Exposing Design Flaws
The next step is to understand what to do when faced with the desire to test a private method. When you want to test a private method directly this is quite often an indication that the class under test is violating the Single Responsibility Principle (SRP) and consequently doing too much. Sandi Metz discusses the importance of using unit tests to expose design flaws such as this in her book _Practical Object Oriented Design in Ruby_.

### Single Responsibility Principle Violations
Testing a private method directly is a good indicator of an SRP violation. One option, and often the easiest if the abstraction makes sense, is to perform an [***extract class***](http://refactoring.com/catalog/extractClass.html) refactoring. The result of this refactoring is that the private method in question is now a public method on a newly created class. Now that method can be tested directly in a unit test targeting the extracted class. This new class now becomes a dependency of the original class and can be replaced with a test double in the original class' test cases.  

By testing private methods you are ignoring the complexity in the code under test and letting an opportunity to improve the code slip away.

## Obscuring Documentation
Another benefit of unit testing is that it provides documentation about how to use an object. Tests don't suffer from the problems that written documentation or code comments suffer from. This documentation is _executable_ so it has to be correct. Otherwise, the team will be faced with failing unit tests.  

As developers grow in their role as unit testers and more of their code is covered by unit tests, you will see a change in how they learn about code. Their first step will be to examine a unit test for the class in question. This allows them to learn all of the important aspects of a class without being mired in its details. When choosing to test a private method directly this obscures the documentation of the class. Private methods should **not** be important to clients of the class. As someone who is programming a client of the class they should not be concerned with the internals of the class unless they need to change them. This impedes the developer when trying to understand the important aspects of a class.

## Conclusion
Instead of testing private methods directly, use the motivation to do so as a heuristic to perform [***extract class***](http://refactoring.com/catalog/extractClass.html) refactorings to improve your code. This motivation to test a private method directly is an indicator that the class under test is doing too many things and more than likely violating the Single Responsibility Principle. By performing these refactorings, both the unit tests and production code become simpler and clearer. 
