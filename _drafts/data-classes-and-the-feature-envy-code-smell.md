---
layout: post
section-type: post
title: Data Classes and the Feature Envy Code Smell
comments: true
category: development practices
tags: ['refactoring']
---

When introducing refactoring techniques and code smells to teams I usually recommend starting with code smells that are both easy to identify and commonplace in most code bases. This gives teams the opportunity to practice the refactorings more often and build their confidence as they learn some of the more involved refactorings. 

One of the code smells I like to start with is Feature Envy because it is often, but not always, accompanied by the overuse of data classes. Data classes are easy to spot, and poor object-oriented systems tend to have a lot of them. Data classes are objects that consist of data without any behavior, consisting of public fields or getters and setters. I don't think I've ever worked in a code base that didn't have quite a few data classes not pulling their weight. 

## What is Feature Envy?

In his book [Refactoring]() [Martin Fowler](http://www.martinfowler.com) defines feature envy as ..... 
Feature envy is a problem because it is a _"coupling code smell."_ It couples two objects together inappropriately. This coupling introduces a larger surface area of change in the code when one of the two objects has to be modified. Less isolated changes then lead to an increase in the likelihood of introducing bugs. Since it increases coupling it reduces cohesion of the host class, making it responsible for additional behavior and more than likely introducing a [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)(SRP) violation.

## Data Classes as Detectors for Feature Envy

Data classes are often accompanied by _**Feature Envy**_ because objects interacting with them often perform behavior utilizing the data class. This behavior should exist in the data class itself, transforming it from an anemic data class into an object that encapsulates data and its behavior. This refactoring commonly results in implementing the principle of [Tell Don't Ask](https://pragprog.com/articles/tell-dont-ask).

### Tell Don't Ask

_**Tell Don't Ask**_ is an object oriented principle that reminds us that we should tell objects what we want them to do rather than query them for state (_"ask"_) and then act on that data stored in the object's state.

> Procedural code gets information then makes decisions. Object-oriented code tells objects to do things.    
> &mdash; Alec Sharp, Smalltalk by Example

## Mechanics of the Refactoring

I first direct developers to code that is interacting with these data classes. Often code that interacts with data classes is performing behavior for the data class. So I encourage developers to locate areas of the code that is interacting heavily with the data class properties. The next step is to move this behavior into the data class.  There are typically just two steps to do this, and we rely on the refactoring tools in modern IDEs to handle the heavy lifting for us. 

Extract method
First we find the code in question that we'd like to move and extract it into private method in it's current object, performing a extract method command. 

We then perform a move method and move the extracted method to the data object. We continue doing this for each property of the data class. In doing so we are improving the interface to the former data class. Our goal is to eventually no longer expose the properties on the public interface and replace them with appropriate public methods that wrap data *AND* behavior.  This moves us towards "tell don't ask" a pattern for OO software development.


Next Step
Start identifying feature envy without the existence of data classes

When is the split of behavior OK - Visitor and Strategy pattern - dynamically change - or when objects get to big

