---
layout: post
section-type: post
title: The DRY Principle and Incidental Duplication
comments: true
category: software craft
tags: ['code smells']
---

I remember being introduced to functions early in my first programming classes. This introduction came with a warning that code duplication was VERY bad, and functions were a way to avoid duplicating code in a program. I assume that some of you who first learned to program in a classroom setting have had similar experiences. And while I agree that duplication is a big problem, identifying the kind of duplication we should be avoiding is a bit more nuanced.

## The First Code Smell

<img src="/img/refactoring-book-small.jpg" class="img-responsive float-left" style="display:inline" />

The very first code smell described in Chapter Three of [Martin Fowler's](http://www.martinfowler.com) Refactoring book is code duplication. Martin Fowler and [Kent Beck](https://www.twitter.com/kentbeck) thought that code duplication was bad enough that it warranted being the first code smell discussed. There are several heuristics and principles for dealing with duplication. The most well known being the DRY (**_Don't Repeat Yourself_**) principle. 

> Number one in the stink parade is duplicated code. If you see the same code structure in more than one place, you can be sure that your program will be better if you find a way to unify them.  
> _&mdash;[Martin Fowler](http://www.martinfowler.com) & [Kent Beck](https://www.twitter.com/kentbeck) - Refactoring_  

## DRY

<img src="/img/pragmatic-programmer.jpg" class="img-responsive float-left" style="display:inline" />

The DRY principle is credited to Andy Hunt and Dave Thomas. The term first appeared in their book The Pragmatic Programmer, where they gave the principle its name. But the ideas behind the principle have certainly predated the book. 

The DRY principle is aimed at reducing duplication and repetition via abstractions to remove redundancy from systems. In fact, Andy and Dave have lamented that most people misunderstood the principle to include only code duplication[^1]. It was meant to encompass more than just source code; including database schemas, test plans, build systems, documentation, etc.

> Every **piece of knowledge** must have a single, unambiguous, authoritative representation within a system.   
> _&mdash;Andy Hunt & Dave Thomas - The DRY Principle - The Pragmatic Programmer_  

## Removing Duplication of Knowledge

When applied appropriately, removing duplication improves the quality of the code, making the code easier to change and maintain. This makes future modifications easier to implement, verify, and deploy safely. Removing duplication reduces the probability that a single behavior change necessitates changes in many disparate locations. These types of changes, by their nature, are risky and increase the opportunity to introduce issues since the surface area of the affected code is large.  

## DRY Misapplied

Unfortunately, DRY gets misapplied quite often. I recommend reading the definition of DRY again and taking note of the emphasized text. If you focus on avoiding duplication of behavior or concepts you won't fall into the trap of removing **_incidental duplication_**.

## Incidental Duplication 

Incidental duplication is code that looks the same but represents different behaviors in the system. It is a duplication of code or syntax that doesn't duplicate behavior, knowledge, nor system concepts. Those who misapply DRY often don't understand the concept of incidental duplication. Removing incidental duplication creates the opposite of the desired effect. It makes the code harder to understand and harder to change in the future. 

Identifying duplicated behavior is a more advanced topic than identifying duplicated syntax, and it often requires a good understanding of the domain being modeled in the code. The first step in identifying duplicated behavior requires finding code that looks the same, so it should comes as no surprise that developers often end up removing incidental duplication. When trying to identify duplication I'll ask _"are we looking at syntax duplication or knowledge duplication?"_

### The Problem with Removing Incidental Duplication

Let's consider removing incidental duplication from two objects A and B. This is accomplished by creating a third object C that both object A and B are dependent on. This introduces a coupling (i.e., increases efferent coupling) in objects A and B only to share syntax. As objects A and B continue to evolve in different directions this coupling needs to be eventually removed (the best case scenario) or continuously managed (the worst case scenario). 

### Controller Objects Example

A specific example I've recently encountered was an attempt to remove all similar looking code from .NET Web API controllers. This resulted in every controller for a new project inheriting from a base controller that contained the duplicated syntax. As the project progressed and additional teams joined, the hierarchy grew and the ability to understand any endpoint that the controllers implemented became increasingly more challenging. Learning what a single endpoint did required traversing convoluted code dispersed throughout several objects in a hierarchy.

Not only was inheritance misapplied in this example (i.e., it was used to share syntax and not for the specialization of related objects) but the code would have been in a much better state if the incidental duplication was left in each controller. This is because each controller represented a different and unique behavior in this system. 

## Static Analysis & Duplication

I am a big proponent of static analysis tools. I think they are an important tool for software organizations who want to maintain the quality of their software. But relying on them to identify duplication is problematic. This is one area where static analysis tools and code analyzers do not excel. They can only detect duplication of syntax not duplication of knowledge. 

I've seen developers blindly remove all duplication that triggered issues in static analysis tools. This often results in leaving the code in a worse state by removing incidental duplication. I don't recommend ignoring these issues either, but rather using these code duplication issues to identify areas of the code that require additional investigation for DRY violations.  

## Three Strikes And You Refactor

<img src="/img/strike-three-small.jpg" class="img-responsive float-left" style="display:inline" />

It's important to learn to identify the difference between duplication of behavior and incidental duplication. There are heuristics to help prevent misidentifying duplication, like _[Three Strikes And You Refactor](http://wiki.c2.com/?ThreeStrikesAndYouRefactor)_. This heuristic is often stated as _**"It is better to have some duplication than a bad abstraction."**_ The idea behind this heuristic is that you can duplicate something once, but when you are ready to introduce a third instance of the duplicated concept, you refactor. At this point you should be armed with information about the similarities and differences of each instance, helping you design a better abstraction. This practice also helps avoid the removal of incidental duplication by not blindly removing similarities encountered in the code, but rather waiting for shared concepts to emerge.  

[^1]: [Andy Hunt and Dave Thomas interviewed by Bill Venners](https://www.artima.com/intv/dry.html).
