---
layout: post
section-type: post
title: DRY and Incidental Duplication
comments: true
category: software craft
tags: ['code smells']
---

One of the earliest things I remember learning in my first programming class is the concept of a function. This introduction to functions came with a warning that code duplication was VERY bad, and functions were a way to avoid duplicated code in a program. I assume that many of you have had a similar experience. And while I agree that duplication is indeed bad, very bad in fact, identifying the kind of duplication we should be avoiding is a bit more challenging.

## The First Code Smell
The very first code smell described in Chapter Three of [Martin Fowler's](http://www.martinfowler.com) Refactoring book is code duplication. Martin and [Kent Beck](https://www.twitter.com/kentbeck) thought that duplication was bad enough that it should be the first code smell discussed. 

> Number one in the stink parade is duplicated code. If you see the same code structure in more than one place, you can be sure that your proram will be better if you find a way to unify them.  
> _&mdash;[Martin Fowler](http://www.martinfowler.com) & [Kent Beck](https://www.twitter.com/kentbeck) - Refactoring_  

## DRY

The DRY principle has been credited to Andy Hunt and Dave Thomas. The term first appeared in their book The Pragmatic Programmer, where they gave the principle its name. But the idea behind it certainly predated the book. 

The principle **_Don't Repeat Yourself_** is aimed at reducing duplication and repetition via abstractions to remove redudancy from systems. In fact, Andy and Dave have lamented[^1] that most people misunderstood the principle to include only code duplication. But it was meant to encompass more than just source code, to include database schemas, build systems, documentation, etc.

> Every **piece of knowledge** must have a single, unambiguous, authoritative representation within a system.   
> _&mdash;Andy Hunt & Dave Thomas - The Pragmatic Programmer_  

## Reducing Duplication of Knowledge
When applied appropriately, reducing duplication improves the quality of the code, making the code easier to change and maintain. When a behavior needs to be changed it is changed in one (and only one) place. This makes future changes easier to implement, verify, and deploy safely. 

A reduction in code duplication reduces the probability that a single behavior change necesitating changes in many disparate locations. These types of changes, by their nature, are risky and increase the opportunity to introduce issues since the surface area of the affected code is so large. 


## DRY Misapplied

Unfortunately, DRY gets misapplied quite often. The idea that "code duplication is bad" is maybe not specific enough and adds to the confusion. I would recommend reading the definition of DRY again and focus on phrase in bold. If you focus on avoiding duplication of behavior or concepts you won't fall into the trap. 


## Incidental Duplication 
Those who misapply DRY do not understand the concept of incidental duplication. 
Corey Haines quote - "stuff that looks alike now but it’s not going to look alike six months from now."  

Incidental duplication is the duplication of syntax but not knowledge nor concepts. Removing incidental duplication creates the opposite of the desired effect. It actually makes the code harder to change in the future. 

As an example consider removing incidental duplication from two objects A and B. This is accomplished by introducing a third object C that both object A and B are dependent on. This introduces a coupling (i.e., increases efferent coupling for objects A and B) in objects A and B only to share syntax. As this code continues to grow apart this coupling needs be removed (best case) or continuously managed (worst case). 

IMAGE HERE

## Static Analysis Tooling
I am a big proponent for static analysis tools. I think they are an important tool for software organizations who want to maintain the quality of their software. But like any tool, they can be misused are never a replacement for thinking. Some static analysis tools track code duplication. This is one area where static analysis tools don't excel. Static analysis tools can only identify duplication of syntax, they cannot detect duplication of knowledge. 

I've seen developers blindly remove all code duplication that triggered issues in static analysis tools. This often results in leaving the code in a worse state. I don't recommend ignoring this issues either, but using these code duplication issues to identify areas of the code that require additional investigation for DRY violations.  


https://www.artima.com/intv/dry.html
