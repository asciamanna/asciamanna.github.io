---
layout: post
section-type: post
title: DRY and Incidental Duplication
comments: true
category: software craft
tags: ['code smells']
---

I remember being introduced to functions early in my introductory programming class. This introduction came with a warning that code duplication was VERY bad, and functions were a way to avoid duplicating code in a program. I assume some of you who first learned to program in a classroom setting have had similar experiences. And while I agree that duplication is indeed bad, very bad in fact, identifying the kind of duplication we should be avoiding is a bit more challenging.

## The First Code Smell
<img src="/img/refactoringBook.jpg" class="img-responsive float-left" style="display:inline" />

The very first code smell described in Chapter Three of [Martin Fowler's](http://www.martinfowler.com) Refactoring book is code duplication. Martin Fowler and [Kent Beck](https://www.twitter.com/kentbeck) thought that code duplication was bad enough that it warranted being the first code smell discussed. 

> Number one in the stink parade is duplicated code. If you see the same code structure in more than one place, you can be sure that your program will be better if you find a way to unify them.  
> _&mdash;[Martin Fowler](http://www.martinfowler.com) & [Kent Beck](https://www.twitter.com/kentbeck) - Refactoring_  

## DRY

The DRY principle has been credited to Andy Hunt and Dave Thomas. The term first appeared in their book The Pragmatic Programmer, where they gave the principle its name. But the idea behind it certainly predated the book. 

The DRY principle, **_Don't Repeat Yourself_**, is aimed at reducing duplication and repetition via abstractions to remove redundancy from systems. In fact, Andy and Dave have lamented[^1] that most people misunderstood the principle to include only code duplication. But it was meant to encompass more than just source code, to include database schemas, test plans, build systems, documentation, etc.

> Every **piece of knowledge** must have a single, unambiguous, authoritative representation within a system.   
> _&mdash;Andy Hunt & Dave Thomas - The Pragmatic Programmer_  

## Removing Duplication of Knowledge
When applied appropriately, removing duplication improves the quality of the code, making the code easier to change and maintain. When a behavior needs to change, the code is changed in one place. This makes future modifications easier to implement, verify, and deploy safely. 

Removing duplicated code reduces the probability that a single behavior change necessitates changes in many disparate locations. These types of changes, by their nature, are risky and increase the opportunity to introduce issues since the surface area of the affected code is so large. 

## DRY Misapplied

Unfortunately, DRY gets misapplied quite often. The idea that _"code duplication is bad"_ is maybe not specific enough and adds to the confusion. I would recommend reading the definition of DRY again and focus on phrase I listed in bold. If you focus on avoiding duplication of behavior or concepts you won't fall into the trap. 


## Incidental Duplication 

Those who misapply DRY do not understand the concept of incidental duplication. 
Corey Haines quote - "stuff that looks alike now but it’s not going to look alike six months from now."  

Incidental duplication is the duplication of syntax but not knowledge nor concepts. Removing incidental duplication creates the opposite of the desired effect. It actually makes the code harder to change in the future. 

As an example consider removing incidental duplication from two objects A and B. This is accomplished by introducing a third object C that both object A and B are dependent on. This introduces a coupling (i.e., increases efferent coupling for objects A and B) in objects A and B only to share syntax. As this code continues to grow apart this coupling needs be removed later (the best case scenario) or continuously managed (the worst case scenario). 

IMAGE HERE

## Static Analysis Tooling
I am a big proponent of static analysis tools. I think they are an important tool for software organizations who want to maintain the quality of their software. But like any tool, they can be misused and are never a replacement for thinking. Some static analysis tools identify code duplication as issues. This is one area where static analysis tools don't excel. Static analysis tools can only identify duplication of syntax, they cannot detect duplication of knowledge. 

I've seen developers blindly remove all duplication that triggered issues in static analysis tools. This often results in leaving the code in a worse state by removing incidental duplication. I don't recommend ignoring this issues either, but rather using these code duplication issues to identify areas of the code that require additional investigation for DRY violations.  

## Three Strikes And You Refactor
<img src="/img/strike-three.jpg" class="img-responsive float-left" style="display:inline" />

It's important to learn to identify the difference between duplication of behavior and incidental duplication. There are heuristics to help prevent mis-identifying duplication, like _[Three Strikes And You Refactor](http://wiki.c2.com/?ThreeStrikesAndYouRefactor)_. The idea behind this heuristic is that you can duplicate something once, but once you are ready to introduce a third instance of the duplicated concept you refactor. At this point you should be armed with enough information about what is the same vs. what is different, helping you devise a better abstraction. Also, it helps ensure that you are removing duplication of behavior and not incidental duplication. 




https://www.artima.com/intv/dry.html
