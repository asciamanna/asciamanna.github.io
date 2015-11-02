---
layout: post
title: The Vicious Cycle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, coaching]
---

When adding a feature, if the only recourse a team feels it has is to rewrite a significant amount of code, this is an indicator that are code quality problems in the organization. This should be a red flag, and it should be something that is addressed in team retrospectives until it is remedied. This rewrite cycle is something that I see often. It is something that is so commonplace in some organizations that it is not questioned. *"This is version 3 of feature x, version 5 of feature y."* But each one of those versions has been a delete and rewrite cycle. Unfortunately, this prevents the developers involved from ever mastering the skills necessary for creating and maintaining high-quality code.

<!--more-->
It surprises me how many organizations believe that a code rewrite is an appropriate and even necessary course of action when adding features. This is failure of the entire development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a large development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices. The time and effort spent on rewrites could be used in much more productive ways by the organization.

##Rewrite Scope
One of the hard things to describe is how much rewrite is appropriate and how much is not. Rewriting individual methods and even individual small classes, when the code is covered by unit tests, can be the appropriate decision when adding features.  This __"rewrite in the small"__ can be part a normal of refactoring. However, even in some of these cases there are refactoring steps that can get you from where you currently are to your destination design safely, without unintentionally modifying behavior. 

In well designed software, where methods and classes are very small, rewriting a method or class amounts to rewriting a very small amount of system functionality. In a recent [.NET Rocks podcast](https://www.dotnetrocks.com/?show=1207) featuring [Justin Searls](https://twitter.com/searls) he talks about Mature TDD. Specifically he describes how TDD allows him to break down problems into such small classes and methods that adding features usually results in rewriting some very small classes as part of his refactoring to add new features. This helps keep the code in a maintainable state such that a larger rewrite is never necessary.

However, by contrast, in poorly designed systems deleting a public method or a class means a significant amount of functionality is being deleted and rewritten. Throwing away features and rewriting them from scratch to include some new behavior, especially without a test suite, is not appropriate. 

##The Cycle of Unmaintainable Code
The source of these rewrites is usually two-fold:  
 
* _**The team does not write well-designed code.**_ The code is tightly coupled, not testable, and difficult to change. This is usually based on a skill gap in the team that is not being addressed. A common practice is that developers determine a design up front, they feel rushed by the organization while they are implementing the design so they don't take the time to listen to what the system is telling them when the design is clearly not working. They push through their original design which results in very poor quality code that is now a tax on the entire organization.

* _**The team does not continuously refactor code.**_ So every code change further degrades the quality of the code that has already started out in a state that makes it very difficult to extend. 

Without breaking the cycle developers will continue rewriting and recreating unmaintainable code until eventually the entire system is deemed in need of a rewrite. A significant amount of time and effort is put in to these rewrites which never result in increasing the quality of the code.  It only ensures that another rewrite is coming.

<img class="responsive-img" src="/images/circle_of_software_rewrite.png"/>


##Breaking the Cycle
To break the cycle the first step is that rewrites cannot be accepted by the development organization. 

###Working with Legacy Code
Coaching the organization on working with poorly designed code without unit tests would be the first order of business. This is where Michael Feather's book, _Working Effectively with Legacy Code_, can be used to teach techniques to improve poor code without unit tests while adding new functionality.

###Refactoring
The next step would be to coach the team on refactoring techniques until they feel comfortable identifying code smells and refactoring to improve the code. It is vital to get the team's commitment that when problems in the code are encountered they will be refactored. By the organization not accepting rewrites the team will be put in situations where they have to improve these two skills. 

###Software Design Skills
Finally, the team will need to be coached on not writing poorly-designed code to start with. Teaching testable design techniques, test-driven development (TDD), and identifying patterns and their appropriate use can all help with this. Furthermore, ensuring that code reviews are happening can also help arrive at quality designs and be a mechanism for coaching developers.

####Code Reviews
Creating good abstractions is hard. The joke that _"the hardest part about software development is naming things."_ is true. Giving something a good name is part of creating the appropriate abstraction in the code. Developers writing some new piece of functionality are authors; they've presumably had their head in the problem for a while. Like every great writer needs a great editor, great developers need editors too. In organizations with quality problems there are most likely problems with their code reviews: Either they aren't happening or they are rubber stamping exercises for some percentage of the organization.

For teams to advance their software design skills, code reviews have to be happening at every level of the organization. There can't be any rubber stamps based on seniority, title, etc. A lot of organizations who haven't adopted code reviews as a practice tend to view them as negative. Comments on code reviews or rejected pull requests are seen as a negative and developers can take offense to this. It is important to identify this early and make it known that code reviews and failed pull requests are the signs of a healthy development organization.
