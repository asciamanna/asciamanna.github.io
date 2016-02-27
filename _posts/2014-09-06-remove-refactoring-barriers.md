---
layout: post
title: Remove Refactoring Barriers
section-type: post
comments: true
category: development practices
tags: ['refactoring', 'code quality', 'unit testing', 'code ownership']
---
There are very few universal truths in software development. However, one that I would stand behind is that code needs to be continuously refactored. If developers are not constantly refactoring their code as they add functionality they are contributing to the rot of their system. 

As functionality is added, abstractions change. The developers learn more about the domain they are modeling, thus the models need to change to properly reflect that. I've personally witnessed code that has gotten to the point where it is so tangled that developers don't feel comfortable refactoring it. Instead they add another conditional statement to execute their code and continue to add to the problem making the code more and more complex with every subsequent commit. 
<!--more-->

I've heard developers rationalize this saying, _"That's what happens. Code gets more complicated and messy over time."_ Those types of comments are excuses to continue unprofessional development. Code does not have to get messy over time if we developers take care to not let that happen.

## Choose Practices That Support Refactoring
When choosing development practices the ability to refactor code should be optimized. If there are practices that make refactoring hard they should be avoided if possible. In this post I'm going to layout some practices that support refactoring and some that should be avoided.

## Write Unit Tests - And Write Them Well
Writing unit tests is possibly the most powerful practice to support refactoring. With well tested code developers can fearlessly refactor the codebase given reasonable assurances that they didn't break the existing fuctionality. In the absence of a test suite, or rather a trusted test suite, teams engage in a lot less refactoring. Developers would rather make the codebase messier than to be the person who introduced a bug.

Investing the time that is necessary to learn how to write tests well is incredibly important. It will pay dividends far into the future. In fact, a poorly written test suite may be worse than having no tests at all. A poorly written test suite will add more friction than value and teams tend to write off testing altogether, blaming the practice and not the approach to testing or the skill level of the developers. Testing is like any other development skill, it has a learning curve.  However there are plenty of resources available to help teach good unit testing practices.
  
I've talked to several developers recently who see no value in unit testing because their test suite was such a burden on them. This appears to be a common problem as Bob Martin lays out a similar scenario to the one I have witnessed in Chapter 9 - Unit Testing in his book _Clean Code_. 

In a future  blog post I will discuss some beginner pitfalls of Unit Testing and TDD and how to avoid them. 

I've similarly heard developers claim that reading documentation was a good substitute for unit tests to promote refactoring. I would argue that those developers, like a lot of development teams, are not refactoring enough if they think they can rely on reading a document. It would be nearly impossible to describe a feature in a document to the level of detail necessary to provide the required confidence when refactoring. Furthermore, **I would trust a document as much as I would trust a comment in code**, at best the document is accurate at the time of writing (though I wouldn't put money on that). As soon as it is written it is out of date. **The code is the only documentation of the system that can be trusted and that includes the set of automated unit tests that run constantly and are passing**. Now I'm not saying that all unit tests are correct, they are written by humans after all.  However, a passing unit test that runs several times per day will give a developer much more confidence than a document written sometime in the past. Additionally the tests are at the approriate abstraction and level of detail to support refactoring.


## Avoid Feature Branch Development
There is still an active debate over trunk based development versus feature branch development. While, like every practice, they both have their own set of pros and cons there is one issue with feature branch development that inhibits developers' abilities to refactor code.  

Feature branches delay integration with other changes to the codebase. The longer this period of time the larger the integration is because other developers are presumably integrating their code into the mainline during that time period.  So, there is a very real reluctance of developers to change more than they "need to" for the feature they are working on for fear of a harder merge back into the mainline. It's easy to say *"well that's a developer's job they shouldn't shy away from those refactorings"* but that isn't reality. I've seen it countless times and have been in these situations myself.  When pressure is on and deadlines are looming (which they always are) a developer will try to avoid a large, risky merge at the end of their project. 

### Ways To Mitigate Feature Branch Risk
Like a lot of practices I'm not entirely against feature branch development. Some teams try to mitigate the risks of feature branches by adopting other practices.

One approach is to constantly pull trunk into the feature branch. This isn't a bad idea but I've not seen this work well in practice. It is a manual process, since a developer needs to be involved to resolve any potential conflicts. And it is something that developers tend to delay because they don't want to get sidetracked by merge conflicts while developing features.

Another approach is to achieve separation in the source code. If the codebase is isolated following a [**microservices**](http://martinfowler.com/articles/microservices.html "microservices") architecture or some other architecture pattern that achieves isolation there are very limited areas of shared code (e.g., infrastructure, shared UI, API with other system components, etc). While developing in this isolation feature branches can be developed with less of a risk of a large merge at the end. However, with this level of isolation I would argue why not just commit to trunk?

## Continuous Integration
While Continuous Integration (CI) is related to trunk based development, integrating code often is not the complete picture. To really be able to refactor code fearlessly and trust that a majority of issues will be found at the time of creation a CI process should be in effect. There are a lot of CI tools available and if the team is small enough some are even free. Having a CI server that on every commit to trunk checks out the code, builds the code, and runs the test suite against them is a necessity in finding integration bugs at the time they are introduced (which could be the result of a refactoring). 

## Collective Code Ownership
Code ownership is a tricky problem and I'm only recently starting to understand its complexities. Individual code ownership is a bad idea. One of the tenets of eXtreme Programming (XP) is collective code ownership to avoid the types of issues individual code ownership creates. The responsibility for the codebase should be shared across the team. The obvious issue that negatively effects refactoring is that developers are not free to refactor the code as they find it necessary because it includes code owned by another developer. Additionally, this creates single-points-of-failure in the development organization and can be an accumulation point for software inventory (when work queues up for Developer X because they are the only ones who understand some part of the system). 

However, the challenge with collective code ownership is that if the team gets too large and begins to be segmented into "projects" the code ownership cannot be effectively shared across that team. When a team gets too large to work on the same set of features and they begin working in smaller groups in effect no one owns the code anymore. Developers don't feel empowered to refactor the code for fear that they are changing something that their coworkers on a different project are relying on or will want to change in a different way. Similarly if they think they may be working in a totally separate part of the codebase on their next project they feel like only _**"temporary custodians"**_ of that code.

It seems, to scale a team and properly maintain strong collective code ownership large codebases should be segmented to achieve isolation and build teams around those isolated parts of the code base. Those smaller teams can then take ownership of their code. 

## Learning How To Refactor
<img src='/img/refactoringBook.jpg' width='35%' height='35%' class='img-responsive'/>
Refactoring is its own development skill much like unit testing. Deleting an entire class and starting over is probably not the best approach in a majority of situations. The most comprehensive book and reference on the subject that I have read is Martin Fowler's [*Refactoring - Improving the Design of Existing Code*](http://www.refactoring.com).


## Conclusion
Refactoring code is every developer's responsibility and something that doesn't occur as often as it needs to. Be on the look out for any practice that is a barrier or a drag on refactoring and change it. Adopt a development culture where clean code is an expectation and hopefully no developer will want to be the one who starts to make it a mess.
