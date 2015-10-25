---
layout: post
title: The Vicious Cycle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, development-practices]
---

When adding a feature if the only recourse a team feels they have is to rewrite the code to support the feature this should be considered a failure. This should be something that is addressed in team retrospectives until it is remedied. This may sound extreme, but this rewrite cycle is something that I see often. It prevents the developers involved from ever mastering the skills necessary for maintaining high-quality code, like *designing testable code* and *refactoring*.

<!--more-->
It surprises me how many organizations believe that a code rewrite is an appropriate and even necessary course of action when adding features. I see this as a failure of the development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a huge amount of development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices.

##The Cycle of Unmaintainable Code
The lack of designing testable code and refactoring skills are the source of these software rewrites. Without breaking the cycle developers will continue re-writing and recreating unmaintainable code until eventually the entire system is deemed in need of a rewrite. 

###Untestable Code
The problem with developers not knowing how to write testable code results in every rewrite resulting in the same low-quality software that is difficult to change. The time spent rewriting the code results in the same low-quality code. Just low-quality code that hopefully includes the missing features.

###Lack of Refactoring
Now when untestable code is combined with the lack of refactoring, developers know of no way to improve the codebase to be able to add a necessary feature. Over time features will get hacked in degrading the design further over time until the straw that breaks the camel's back. The last feature requested when developers decide there is no way they can further modify the software.  



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
To break the cycle the first step is that rewrites cannot be accepted by the development organization. Coaching the organization on working with poorly designed code without unit tests would be the first order of business. Relying on Michael Feather's book Working Effectively with Legacy Code to teach techniques to improve poor code without unit tests while adding new functionality.

The next step would be to coach the team on refactoring techniques until they feel comfortable identifying code smells and refactoring to improve the code.  By not accepting software rewrites now the team will be put in situations where they have to improve these two skills.

Finally, the team will need to be coached on not writing poorly-designed code to start with. Teaching testable design and unit testing techniques will help.