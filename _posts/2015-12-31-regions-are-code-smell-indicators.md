---
layout: post
section-type: post
title: Regions are Code Smell Indicators
comments: true
category: software craft
tags: ['code quality', 'refactoring']
---

I have had a draft of this post in progress for a few months. Recently [Erik Dietrich](http://www.daedtech.com/) wrote a post called [Regions are a Code Smell](http://www.daedtech.com/regions-are-a-code-smell). Since it covers a lot of my thoughts on regions, I decided not to publish this post. However, there are a few points Erik didn't make or places where our thoughts on regions may differ so I decided to finish this post and publish it after all.  

<!--more-->

If you haven't read Erik's post you should. Erik's writing is brilliant and I agree with a lot of his points in that post. 

## What are Regions?
If you aren't a .NET developer you may not be familiar with regions. Regions are preprocessor directives that allow you to make a section of code collapsible in Visual Studio (the .NET IDE). Visual Studio allows for collapsing code by namespace, class, and method without the use of regions. However, the region directive allows you to collapse any arbitrary area of the code. There are some rules about how they overlap with other preprocessor directives, but ignoring those, any section of code can be made collapsible. 

## But Regions are a Feature
I am a very strong believer that regions are problematic. There is no reason to use regions in newly created code. But that doesn't mean there is no use for them at all. I'll discuss a reasonable usage for regions later in this post.  

Some developers struggle with the idea that a language feature is something that you would want to avoid in a majority of cases. As developers grow and mature they start to understand that not everything a language provides is going to increase the quality of the code. And most "bad features" still have some, albeit limited and very specific, uses that are valid. As developers get more experience these gray areas will start to make more sense to them. 

Another example of this is the null propagation operator introduced in C# 6.0, which I will discuss in more detail in a future post. The null propagation operator does have an appropriate, albeit limited, use on data classes. For example, classes used to store deserialized JSON or XML, or other similar data objects. Wider use however only encourages [Law of Demeter](http://c2.com/cgi/wiki/LawOfDemeter?LawOfDemeter) violations. As such, I would have preferred that it was never added to the language as I see its opportunity for misuse outweighing its benefits.


## Heuristics for Identifying Code Smells
I don't believe that regions themselves are code smells, but rather they are an indicator of the presence of a code smell. They indicate that refactoring is necessary. 

### Large Class Code Smell
The typical usage of regions are to make sections of a class collapsible. It should come as no surprise that if you require regions to organize your class you most likely have a class that is too large. **Large Class** is one of the code smells described in [Martin Fowler](http://martinfowler.com/ "Martin Fowler's website")'s [*Refactoring*](http://refactoring.com/ "Refactoring Book") book. 

Large classes present several problems to a codebase. They nearly always violate the [Single Responsibility Principle](http://www.oodesign.com/single-responsibility-principle.html) (SRP). This in turn makes maintenance and extension of that area of the code more costly than it needs to be. Large classes often contain too many instance variables. As Martin Fowler points out in his *Refactoring* book, if there are too many instance variables (and more generally too much code) code duplication is not far behind. I should not need to describe the issues surrounding duplicated code, but it is considered the most problematic of all of the code smells. 

Regions are a lot like code comments. A heuristic described in *Refactoring* is that code comments describing a block of code identify the long method code smell. These are places  where extract method refactorings should be utilized using the comment to name the newly extracted method. Similarly, the existence of regions in a class are a heuristic used to identify the large class code smell and can potentially indicate places where extract class refactorings can be made.

### Long Method Code Smell
While using regions to organize sections of a class is the most common usage, there are others. I have seen regions used inside of methods. People look at me like I'm crazy when I mention this, and I'm glad they do because they probably think this is an absurd usage of regions. I would agree with them, but I have seen it occur in legacy code quite frequently. 

If you do come across regions in a method then you are dealing with the **Long Method** code smell. You can add regions to the list of heuristics used to diagnose the long method code smell. These include: 

* Comments indicating blocks of code
* White space indicating blocks of code
* The existence of conditionals or loops in methods

## Reasonable Usage
While I feel quite strongly that regions should not be used in newly created code, I don't think they are all bad. They can be used successfully as a temporary technique to improve the code. In this regard, I see them as being similar to TODO comments.

### TODO Comments
TODO comments, much like regions, should not be used in new code. However, TODO comments can be used in a positive way. While working on a task you may encounter something that needs to change, but the change doesn't directly affect the current work. You can use a TODO comment to document its location so that you don't forget about it. IDEs create task lists of all of the TODO comments that exist in the code to make it easier to work them off.

TODO comments can help you by not allowing you to get distracted when working on a task. Their use is a slippery slope however, since TODO comments existing for any long period of time are a problem. They can hang around forever, long after the developers who added them are long gone or have forgotten why they added them in the first place. At this point they just become meaningless comments that slow down and confuse future developers. At best, long-term TODO comments suffer from all of the problems other types of code comments do. I recommend avoiding comments in code if possible as they provide more trouble than value and would also recommend avoiding any long-term TODO comments. 

These TODO comments should be worked off before committing the code changes if possible. However, if you are committing small changes regularly to your VCS, which you should be doing, it is likely that you will check in one or more of these TODO comments. That's okay, but they should be addressed and removed quickly (i.e., the next thing you do after committing your last batch of changes for your current task).

### Regions as a Refactoring Visualization Technique
When working with existing code and a large class is encountered there are several techniques which can be used to help break it down. [Michael Feathers](https://twitter.com/mfeathers) recommends several techniques in his book *Working Effectively with Legacy Code*. One technique he recommends is printing out the class and highlighting the methods, fields, and properties that belong together. Another technique he recommends is finding methods and fields with similar names or similar prefixes or suffixes. These can help determine what should be included when extracting classes.

When faced with a large class, regions can be used to organize the different parts of the class that belong together as they are discovered. In this way they serve as a visualization technique. In code that contains large classes you'll often find that there isn't just one class hiding in another. There's usually a few and sometimes more than a few being disguised in a single class. 

The benefit of using regions in this way is that every extract class refactoring that is possible doesn't have to be executed on the first pass through the code. This is where regions help, you can come back to the class and extract the next region when you are ready. Like TODO comments it's important to not let these regions live on too long, but that doesn't mean they should be avoided entirely. 

## Conclusion
Regions should be avoided in new code. If you feel like you need them to organize a class there's a very good chance the class you are writing is too large and violates the SRP. However, regions can be a beneficial visualization technique to organize areas of a class that are separate responsibilities. These can be used to indicate **extract class** refactorings, so that you can incrementally make the class you are working on smaller.

  
