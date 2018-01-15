---
layout: post
section-type: post
title: Refactoring Code Smells - Long Method
comments: true
category: development practices
tags: ['refactoring']
---

First in a series about refactoring code smells. 
Define code smells

Define Refactoring

Define long method - show an example

heuristics for identifying long method 

blocks of code 
region directive
a method where every line of code must be examined to understand what it is doing.
people look for a specific number of lines. Which I think is important but misses the point. The exact number may be different for each team. I do like having specific numbers of lines to look for. If nothing else it spurs a conversation about the method in question.  But more important than the exact number of lines is that the code requires the reader to understand every single detail, every single line of code. In fact that's how I define a long method.

A long method is too much detail to understand. It requires a developer to read every single line of code, every single detail of the method to understand the whole. It doesn't help the reader understand the code, because it contains no abstractions. Interferes with developer's ability to glance at the code and understand the method's intent. One of the greatest skills a developer can learn is to design their software and choose names that enhance readability. Given how many more times code is read than it is written.

Problems with long method - in addition to readability which should be enough to refactor away from these methods they are also harder to modify, harder to reason about and harder to test. Further, breaking long methods out into well-named smaller methods often brings to light code duplication. Developers can then rely on other refactoring techniques to remove this duplication that's often hiding in long methods.   

Developers say "it's just moving code around." Misses the point.

Show example of long method 

Refactoring techniques I use. First is extract method, also sometimes inline method or inline variable to better organize the code that is there. 

On automated refactoring tools - Some enviroments don't have them. But those that do you should me making use of them. When I work in .NET I cannot work without Resharper. I've too often seen developers complain that resharper slows opening visual studio so they avoid it. Unfortunately this comes at a cost to the code while these developers optimize for the wrong thing. Because they have to do all of these refactorings by hand they tend to avoid them. Most of the teams I see shy away from automated refactoring tools don't refactor as much as they should be. 

There are very few universal truths in software development. But one I stand behind is that code needs to be continuously refactored. Teams that aren't continuously refactoring are making their code base worse and contributing to its decline.