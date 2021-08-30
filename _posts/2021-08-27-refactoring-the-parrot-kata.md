---
layout: post
section-type: post
title: Refactoring - The Parrot Kata
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: Follow along while I practice the Parrot Kata in Java, making use of two refactorings introduced in Martin Fowler's book Refactoring to eliminate the Switch Statement code smell.
image: /img/parrot-kata/parrot-kata-header2.jpg
category: code craft
tags: ['screencast', 'code kata', 'refactoring', 'java']
---

<img src="/img/parrot-kata/parrot-kata-header1.jpg" alt="The Parrot Kata" class="img-responsive" />

Code katas provide an opportunity to practice our software development skills, recognize patterns, and learn how to apply practices. In general, we professional software engineers don't spend enough time practicing. Code katas are one way we can practice. The Parrot Kata is based on a code sample in [Martin Fowler](https://martinfowler.com/)'s Refactoring book. It is inspired by Monty Python's Flying Circus [Dead Parrot sketch](https://en.wikipedia.org/wiki/Dead_Parrot_sketch).
<!--more-->

## Code Smells & Refactorings

The Parrot Kata introduces the _Switch Statement_ smell as described by the Refactoring book. In this video, I describe the kata and demonstrate two refactorings (also defined in the Refactoring book) to remove the code smell. We'll start with _Replace Type Code with Subclasses_ to establish the class hierarchy infrastructure. Then we'll move on to the _Replace Conditional with Polymorphism_ refactoring to eliminate the Switch Statement code smell. 

I use Java for this exercise but the [Parrot Kata code repository](https://github.com/emilybache/Parrot-Refactoring-Kata) has projects for many programming languages. If you like the video reach out to me and let me know. I plan on providing more coding content on my blog in the future.
## Video 

<iframe width="560" height="315" src="https://www.youtube.com/embed/KW-jvdZ8a_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

