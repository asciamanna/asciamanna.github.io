---
layout: post
section-type: post
title: Data Classes and the Feature Envy Code Smell
comments: true
category: development practices
tags: ['refactoring']
---

When introducing refactoring techniques and code smells to teams I usually recommend starting with code smells that are both easy to identify and commonplace in most code bases. This gives teams the opportunity to practice the refactorings more often and build their confidence as they learn some of the more involved refactorings. 

One of the code smells I like to start with is _**Feature Envy**_ because it is often, but certainly not always, accompanied by the overuse of data classes. Data classes are easy to spot, and poor object-oriented systems tend to have a lot of them. Data classes are objects that consist of data without any behavior, consisting of public fields or getters and setters. 

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

Once a candidate data class is located find all references to the data class in the code. Often code that interacts with data classes is performing behavior that should exist in the data class. Pick an object that is hosting a data class and locate areas of the code in the class that are interacting heavily with the data class properties. The next step is to move this behavior into the data class.  There are typically two steps to do this, and we rely on the refactoring tools in modern IDEs to handle the heavy lifting for us. 

### Extract Method

First we find the code accessing data class properties and acting on its behalf, we perform an _**Extract Method**_ refactoring to extract it into a private method in it's current object. 

### Move Method

Again relying on automated refactoring tools, we perform a _**Move Method**_ refactoring and move the extracted private method to a public method on the data class. We continue doing this until the properties are no longer referenced in the host class, being replaced with well named methods on the original data class. In doing so we are improving the interface to the original data class. Our goal is to eventually remove the properties from the public interface of the data object and replace them with appropriate public methods that encapsulate data *AND* behavior.

## What about Parameter Objects?

Those who know the _**Introduce Parameter Object**_ refactoring pattern (http://wiki.c2.com/?ParameterObject) may wonder why it's a recommended refactoring if data objects are problematic. A Parameter Object encapsulates multiple parameters, alleviating the _**Long Parameter List**_ code smell. It's all about making incremental improvements to a code base. When several parameters are passed around to multiple objects and methods it is an indicator of an abstraction not yet realized. Introducing a parameter object groups data together that belongs together. Once this data is grouped and has a unifying name, behavior that belongs with the data often becomes apparent.