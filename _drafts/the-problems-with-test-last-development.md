---
layout: post
title: The Problems with Test Last Development
comments: true
category: software-craftsmanship
tags: [code-quality, tdd]
---

I love test-driven development (TDD). It along with the other XP practices have helped me advance as a professional developer. There are several benefits that TDD has over test last development. And of course, TDD has enormous benefits over not writing any unit tests for your code. It is common when trying to convince a team to start writing unit tests to ignore TDD and take the stance that "as long as you are writing tests it doesn't matter whether you are writing them first or last." I am absolutely guilty of saying this in the past and I think it is a mistake. 

<!--more-->

I do believe that people who have obtained a level of mastery of writing high quality unit tests and designing testable code can write tests first or last and they would be indistiguishable from each other after the fact. However, even folks who have achieved this level of mastery lean towards practicing TDD, and there is good reason for this. TDD is a practice, a workflow. It provides a way of working that allows developers to quickly add fully-tested, working features to the system. And the system is **ALWAYS** in a working state. The team is always in a position where they are one test (60 seconds or less) away from a perfectly working system.

##TDD as a Teaching Tool
