---
layout: post
title: The Vicious Circle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, coaching]
---

When adding a feature, if the only recourse a team feels it has is to rewrite a significant amount of code, this is indicative of code quality issues in the organization. This should be a red flag, and it should be something that is addressed in team retrospectives until it is remedied. This rewrite cycle is something that I have seen frequently. It is something that is so commonplace in some organizations that it is not questioned. *"This is version 3 of feature x, version 5 of feature y."* But each one of those versions has been a delete and rewrite cycle. Unfortunately, this prevents the developers involved from ever mastering the skills necessary for creating and maintaining high-quality code.

<!--more-->
It surprises me how many organizations believe that a code rewrite is an appropriate and even necessary course of action when adding features. This is failure of the development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a large development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices. The time and effort spent on rewrites could be used in much more productive ways by the organization.

##Rewrite Scope
One of the hard things to describe is how much rewrite is appropriate and how much is not. Rewriting individual methods and even individual small classes, when the code is covered by unit tests, can be the appropriate decision when adding features.  This __"rewrite in the small"__ can be part of your refactoring work. However, in a lot of these cases there are refactoring steps that can get you from where you currently are to your destination design safely, without unintentionally modifying the behavior. 

In well designed software, where methods and classes are very small, rewriting a method or class amounts to rewriting a very small amount of system functionality. In a recent [.NET Rocks podcast](https://www.dotnetrocks.com/?show=1207) featuring [Justin Searls](https://twitter.com/searls) he talks about Mature TDD. Specifically he describes how TDD allows him to break down problems into such small classes and methods that adding features usually results in rewriting some very small classes as part of his refactoring to add new features. This helps keep the code in a maintainable state such that a larger rewrite is never necessary.

However, by contrast, in poorly designed systems deleting a public method or a class could result in a significant amount of functionality being deleted and rewritten. This amounts to throwing away features and rewriting them from scratch to include some new behavior, usually without a test suite.  

##The Cycle of Unmaintainable Code
The source of these rewrites is usually two-fold.

### Poorly Designed Code 
_**The team does not write well-designed code.**_ The code is tightly coupled, not testable, and difficult to change. This is usually the result of a skill gap in the team that is not being addressed. This is common for organizations who believe code quality is subjective, or that the only measure of quality is that the QA team did not find any bugs. Often times these teams feel pressured by the larger organization to churn out features by strict deadlines. These teams also tend to not adopt practices that encourage high-quality code.
 
A common practice that leads to these code problems is that developers determine a design up front. They feel pressure to complete the feature quickly. While implementing the feature they don't take the time to re-examine the design when it becomes obvious that it is not working. They push through their original design which results in very poor quality code that is now a tax on the entire organization.

###Lack of Refactoring
_**The team does not continuously refactor code.**_ So every code change further degrades the quality of the code that has already started out in a state that makes it very difficult to extend. 

Without breaking the cycle developers will continue rewriting and recreating unmaintainable code until eventually the entire system is deemed in need of a rewrite. **A significant amount of time and effort is put in to these rewrites which never result in increasing the quality of the code.** It only ensures that another rewrite is coming some time in the future.

<img class="responsive-img" src="/images/circle_of_software_rewrite.png"/>


##Breaking the Cycle
To break this cycle the first step is that rewrites cannot be accepted by the development organization. 

###Working with Legacy Code
Coaching the organization on working with poorly designed code without unit tests would be the first order of business. This is where [Michael Feather](https://twitter.com/mfeathers)'s book, _Working Effectively with Legacy Code_, can be used to teach techniques to improve poor code without unit tests while adding new functionality.

###Refactoring
The next step would be to coach the team on refactoring techniques until they feel comfortable identifying code smells and refactoring to improve the code. It is vital to get the team's commitment that when problems in the code are encountered they will be refactored. By the organization not accepting rewrites the team will be put in situations where they have to improve these two skills. 

###Software Design Skills
Finally, the team will need to be coached on not writing poorly-designed code to start with. Teaching testable design techniques, test-driven development (TDD), and identifying patterns and their appropriate use can all help improve the team's design skills. Furthermore, ensuring that code reviews are happening can also help arrive at quality designs and be a mechanism for coaching developers.

####Code Reviews
Creating good abstractions is hard. The joke that _"the hardest part about software development is naming things."_ is true. Giving something a good name is part of creating the appropriate abstraction in the code. Developers writing some new piece of functionality are authors; they've presumably had their head in the problem for a while. Like every great writer needs an editor, great developers need editors too. In organizations with quality problems there are certainly problems with their code reviews, if they are happening at all.

For teams to advance their software design skills, code reviews have to be happening at every level of the organization. There can't be any rubber stamps based on seniority, title, etc. Developers who haven't adopted code reviews as a common practice tend to view them as negative. Comments on code reviews or rejected pull requests can be seen as a negative, and developers can take offense to this. It is important to identify this early and work with the team to make it known that code review comments and/or failed pull requests are the signs of a healthy development organization.  

##Fix it Before it's Too Late
It is important to figure out if your organization is stuck in this vicious software rewrite circle and to do all you can to help break free of it. This prevents the organization from ever achieving its potential. It will continue to operate inefficiently, releasing bug-ridden and brittle software into production. Furthermore, great developers will not thrive in environments like this and will likely find work elsewhere.
