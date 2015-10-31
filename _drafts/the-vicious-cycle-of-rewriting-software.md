---
layout: post
title: The Vicious Cycle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, development-practices, coaching]
---

When adding a feature, if the only recourse a team feels it has is to rewrite a significant amount of code, this is an indicator that are code quality problems in the organization. This should be a red flag, and it should be something that is addressed in team retrospectives until it is remedied. This rewrite cycle is something that I see often. It is something that is so commonplace in some organizations that it is not questioned. __"This is version 3 of feature x, version 5 of feature y."__ But each one of those versions has been a delete and rewrite cycle. Unfortunately, this prevents the developers involved from ever mastering the skills necessary for maintaining high-quality code, like *developing high-quality and testable designs* and *refactoring*.

<!--more-->
It surprises me how many organizations believe that a code rewrite is an appropriate and even necessary course of action when adding features. This is failure of the entire development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a huge amount of development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices.

##Rewrite Scope
One of the hard things to describe is how much rewrite is appropriate and how much is not. Rewriting individual methods and even individual small classes, when the code is covered by unit tests, can be the appropriate decision when adding features.  This __"rewrite in the small"__ can be part a normal of refactoring. However, even in some of these cases there are refactoring steps that can get you from where you currently are to your destination design safely, without unintentionally modifying behavior. 

In well designed software where methods and classes are very small, rewriting a method or class amounts to re-writing a very small amount of system functionality. In a recent .NET Rocks podcast featuring Justin Searls he talks about TDD. Specifically the London school of TDD that he is a big supporter of. He describes how TDD allows him to break down problems into such small classes and methods that adding features usually results in rewriting some very small classes as part of his refactoring to add new features. This helps keep the code in a maintainable state such that a larger re-write is never necessary.

However, by contrast, in poorly designed systems deleting a public method or a class means a significant amount of functionality is being deleted and re-written and is most likely not the best course of action. Throwing away features and rewriting them from scratch to include some new behavior, especially without a test suite, is not appropriate. 

##The Cycle of Unmaintainable Code
The source of these rewrites is usually two-fold:  
* _The team does not write well-designed code._ The code is tightly coupled, not testable, and difficult to change.  They design up front, feel rushed by the organization, don't take the time to listen to what the system is telling them when the design is clearly not working, and push through their original design which results in very poor quality code that is now a tax on the entire organization.
* _The team does not continuously refactor code._ So every code change further degrades the quality of the code that has already started out in a state that makes it very difficult to extend.

Without breaking the cycle developers will continue rewriting and recreating unmaintainable code until eventually the entire system is deemed in need of a rewrite. A significant amount of time and effort is put in to these re-writes which never result in increasing the quality of the code.  It only ensures that another re-write is coming.

<img class="responsive-img" src="/images/circle_of_software_rewrite.png"/>


##Breaking the Cycle
To break the cycle the first step is that rewrites cannot be accepted by the development organization. 

###Working with Legacy Code
Coaching the organization on working with poorly designed code without unit tests would be the first order of business. This is where Michael Feather's book, _Working Effectively with Legacy Code_, can be used to teach techniques to improve poor code without unit tests while adding new functionality.

###Refactoring
The next step would be to coach the team on refactoring techniques until they feel comfortable identifying code smells and refactoring to improve the code. It is vital to get the team's commitment that when problems in the code are encountered they will be refactored. By the organization not accepting rewrites the team will be put in situations where they have to improve these two skills. 

###Software Design Skills
Finally, the team will need to be coached on not writing poorly-designed code to start with. Teaching testable design techniques, test-driven development (TDD), and identifying patterns and their appropriate use can all help with this. Furthermore, ensuring that code reviews are happening can also help arrive at quality designs and be a mechanism for coaching developers.

###Code Reviews
Creating good abstractions is hard. The joke that _"the hardest part about software development is naming things."_ is true. Giving something a good name is part of creating the appropriate abstraction in the code. One of the many benefits of code reviews is that the developers who work on a piece of code are in the author mindset and they cannot edit their own work. It is important to have an editor review your work to help make it clear for the developers who come after you.  

In dysfunctional development organizations either code reviews aren't happening or if they do they are rubber stamped for a least some percentage of the organization. And in cases where they do happen there is a negative stigma associated with review comments. It is important to address this and make sure that it is understood that code review comments and rejected pull requests are a normal part of arriving at a quality design as a team.
