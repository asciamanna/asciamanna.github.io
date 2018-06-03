---
layout: post
section-type: post
title: Data Classes and Feature Envy 
comments: true
category: development practices
tags: ['code smells', 'refactoring']
---

When introducing refactoring techniques and code smells to teams, I usually recommend starting with code smells that are both easy to identify and commonplace in most code bases. This gives teams the opportunity to practice the refactorings more often and build their confidence as they learn some of the more advanced refactorings. 

One of the code smells I like to start with is _**Feature Envy**_ because it is often, but not always, accompanied by another code smell, _**Data Classes**_. Data classes are easy to spot, and poorly designed object-oriented systems tend to have a lot of them. Data classes are objects that consist of data without any behavior, containing only public fields or getters and setters. 

## What is Feature Envy?

> The whole point of objects is that they are a technique to package data with the processes used on that data. A classic smell is a method that seems more interested in a class other than the one it actually is in. The most common focus of the envy is data.  
> &mdash;_[Martin Fowler](http://www.martinfowler.com) on Feature Envy from Refactoring (p. 80)_

Feature envy is a problem because it is a _coupling code smell._ It couples two objects together inappropriately. This coupling introduces a larger surface area of change in the code when one of the two objects has to be modified. Less isolated changes then lead to an increase in the likelihood of introducing bugs. Since it increases coupling, it reduces cohesion of the host class; making it responsible for additional behavior and likely introducing a [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)(SRP) violation.

## Data Classes as Detectors for Feature Envy

Data classes are often accompanied by _**Feature Envy**_ because objects interacting with them often perform behavior utilizing their data. This behavior should exist in the data class itself, transforming it from a data structure into an object that encapsulates data and its behavior. This refactoring commonly results in implementing the principle of [Tell Don't Ask](https://pragprog.com/articles/tell-dont-ask).

### Tell Don't Ask

_**Tell Don't Ask**_ is an object oriented principle that reminds us that we should tell objects what we want them to do rather than query them for their state and then act on that data.

> Procedural code gets information then makes decisions. Object-oriented code tells objects to do things.    
> &mdash; _Alec Sharp, Smalltalk by Example_

## Mechanics of the Refactoring

Once a candidate data class is located, find all references to the data class in the code. Often code that interacts with data classes performs behaviors that should exist in the data class itself. Choose an object that is hosting a data class and locate areas of the code in the host object that are interacting heavily with the data class properties. The next step is to move this behavior into the data class. There are typically two steps to do this. By relying on the refactoring tools in modern IDEs these refactorings are safe and straightforward. 

### Extract Method

The first step is to find the code accessing data class properties and acting on its behalf. Perform an _**Extract Method**_ refactoring to extract this code into a method on the host object. 

### Move Method

Now that the code that interacts with the data class is isolated in a method, perform a _**Move Method**_ refactoring and move the extracted method to a public method on the data class. 

Continue following these steps until none of the properties are referenced in the host class. By following this advice the interface to the data class is incrementally improved. The ultimate goal is to remove the properties from the public interface of the data class entirely, replacing them with public methods that encapsulate data *AND* behavior.

## Exceptions (Valuable Data Classes)

### Parameter Objects

Those who are familiar with the [_**Introduce Parameter Object**_](http://wiki.c2.com/?ParameterObject) refactoring pattern may wonder why it's a recommended refactoring if data classes are a code smell. A Parameter Object encapsulates multiple parameters in a single object, alleviating the _**Long Parameter List**_ code smell. 

Although Parameter Objects are data classes, their introduction incrementally improves the code they are found in. Parameter Objects often increase cohesion and create a more change resilient interface for method signatures. When several parameters are passed together to multiple objects and methods, it is often an indicator of an abstraction not yet realized. Introducing a parameter object groups data together that belongs together. Once this data is grouped and has a unifying name, behavior that belongs with the data often becomes apparent.

### DTOs and the Risk of Hybrid Objects

Data classes do serve a purpose in object-oriented code. Data Transfer Objects (DTOs) are a specific form of data classes that are used to transfer "raw" data across a system boundary. This might be to a presentation layer, or parsing messages from a socket, etc. It is common for developers to not recognize these as DTOs and instead, assume they are examples of the data class code smell I've described above. This leads to the creation of hybrid objects that contain both public getters and setters for data, along with behavior that operates on them. These hybrid objects are problematic as they serve multiple purposes and are often the source of SRP violations (i.e., changing for multiple reasons).

> Such hybrids make it hard to add new functions but also make it hard to add new data
> structures. They are the worst of both worlds. Avoid creating them. They are indicative of a
> muddled design whose authors are unsure of—or worse, ignorant of—whether they need
> protection from functions or types.
>   
> &mdash; _Robert Martin, Clean Code_

For more information about DTOs, data classes, and hybrid objects, I recommend reading chapter six of Clean Code.

<img class='img-responsive' src='/img/clean-code.jpg' alt='Clean Code book' />
