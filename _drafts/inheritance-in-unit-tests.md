---
layout: post
title: Inheritance in Unit Tests
comments: true
category: software-craft
tags: [unit-testing, code-quality]
---

This is the second post in a series about questions that typically get asked as developers learn how to write effective unit tests. 
The first post in the series discussed what to do when confronted with the motivation to test a private method on a class directly.
This post is going to focus on whether unit tests should have an inheritance hierarchy. 
<!-- more -->

As developers gain momentum writing unit tests I've often seen inheritance hierarchies emerge in unit tests. Over time these get quite complex and are almost always problematic which leads to the heuristic, **avoid inheritance in unit tests**.

##Optimize for Simplicity
In a previous post 