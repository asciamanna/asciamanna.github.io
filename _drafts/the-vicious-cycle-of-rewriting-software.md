---
layout: post
title: The Vicious Cycle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, development-practices]
---

When adding a feature if the only recourse a team feels it has is to rewrite the code to support the feature this should be considered a failure. It should be something that is addressed in team retrospectives until it is remedied. This may sound extreme, but this rewrite cycle is something that I see often. It prevents the developers involved from ever mastering the skills necessary for maintaining high-quality code, like *developing high-quality, testable designs* and *refactoring*.

<!--more-->
It surprises me how many organizations believe that a code rewrite is an appropriate and even necessary course of action when adding features. I see this as a failure of the development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a huge amount of development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices.

##Rewrite Scope
One of the hard things to describe is how much rewrite is appropriate and how much is not. Rewriting individual methods and even individual classes, when the code is covered by unit tests, can be the appropriate decision when adding features.  This "rewrite in the small" can be part of refactoring. However, even in a lot of these cases there are refactoring steps that can get you from where you are to your destination design safely, without unintentionally modifying behavior. Throwing away features and rewriting them from scratch without a test suite however is not appropriate. 

##The Cycle of Unmaintainable Code
The source of these rewrites is usually two-fold:  
1. The team does not write well-designed code. The code is tightly coupled, not testable, and difficult to change. 
2. The team does not continuously refactor code. So every code change further degrades the quality of the code.

Without breaking the cycle developers will continue re-writing and recreating unmaintainable code until eventually the entire system is deemed in need of a rewrite. 

###Poorly Designed Code
If developers are lacking the skills to write high-quality software every re-write ends with the same result. Software that is not tested as well as incredibly difficult to reason about, maintain, and extend. 

###Lack of Refactoring
Now when poorly designed code meets a lack of refactoring the spiral towards a complete re-write really starts to pick up steam. Without continuous refactoring every bug fix, enhancement, or feature addition further degrades the software that has already started out in a bad state. Relatively quickly the team will get to the point that a feature cannot be added without a complete re-write. 



The cycle -

Devs build poorly designed untestable code


Lacking refactoring skills every change makes the code more complex

A feature is required but code is too complex to reason about and too coupled to change

No unit tests exist to give devs confidence in their changes

Team doesn't know how to refactor the code to support the feature

Team deletes code and starts rewrite to support feature

Team doesn't have experience writing quality, testable software

Team feels pressure and lack practices to lean on that result in quality software


##Breaking the Cycle
To break the cycle the first step is that rewrites cannot be accepted by the development organization. Coaching the organization on working with poorly designed code without unit tests would be the first order of business. This is where Michael Feather's book, Working Effectively with Legacy Code, can be used to teach techniques to improve poor code without unit tests while adding new functionality.

The next step would be to coach the team on refactoring techniques until they feel comfortable identifying code smells and refactoring to improve the code. It is vital to get the team's committment that when problems in the code are encountered they will be refactored. By the organization not accepting rewrites the team will be put in situations where they have to improve these two skills. Finally, the team will need to be coached on not writing poorly-designed code to start with. Teaching testable design techniques, test-driven development (TDD), and identifying patterns and their appropriate use can all help with this.
