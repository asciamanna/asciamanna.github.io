---
layout: post
section-type: post
title: Programming By Coincidence
subtitle: A Barrier to High Performing Teams
comments: true
excerpt_separator: <!--more-->
summary: Want to get to Continuous Delivery and modernize your software development teams? It's time to leave practices like programming by coincidence behind. Read on to learn how to avoid it and adopt modern software development practices.
image: /img/parrot-kata/parrot-kata-header2.jpg
category: code craft
tags: ['screencast', 'code kata', 'refactoring', 'java']
---

<img src="/img/parrot-kata/parrot-kata-header1.jpg" alt="The Parrot Kata" class="img-responsive" />

As a software development consultant, one of my primary roles is helping software development teams and their organizations build a culture of technical excellence, and often focus on getting to Continuous Delivery. This includes learning modern software development practices. When teams begin their journey to becoming a high-performing team they need to shed common habits that get in their way. One in particular typically one of the first ones I encounter, _Programming by Coincidence_. I've commonly seen this nefarious practice prevent teams from getting very far in their advancement. It is important to be able to spot this practice and help reverse its negative impact on codebases and modern collaborative development practices.
<!--more-->

## What is Programming by Coincidence?

Programming by Coincidence is one of the worst practices for a team and codebase. It goes by a few different names but its effects are the same.

A team practicing Programming by Coincidence will work alone instead of collaboratively. They will spend time finding code in their codebase that looks similar to what they are writing, mix it with code found on websites like Stack Overflow and tinker with the code until it works, without ever having an understanding of what the code is doing and why it is working. They often ignore automated tests unless they can copy them exactly from other areas of the codebase. 

## The Problems it Creates
When teams program by coincidence they never get to a better understanding of the domain, their programming languages, or environment. Stifling all growth, eliminating opportunities for learning, and making experimentation impossible. With a focus on copy-paste programming and "tinkering" with the code until it works reinforces the idea that they have to work in long-running feature branches. This delays integration and pushes development risks into the future. 

### The Tell Tale Signs

It's not too hard to identify code that was written in this manner. These codebases contain:
* Dead Code
* Misleading Comments
* Code Duplication
* Long-running Feature Branches

#### Dead Code 

A significant amount of dead code can be found in these codebases. Unused fields and methods in classes, unused classes, unused tests, unused third-party libraries are all a result of copying and pasting code from elsewhere.


####  Misleading Comments 
Since code is copied without understanding the comments from other code areas come along for the ride. Since comments don't affect the runtime behavior innaccurate comments are left in the codebase to mislead future developers who make the common mistake of trusting the comment instead of trying to understand some inscrutable code. 


#### Code Duplication 
Since code is copied and pasted from other areas of the code, this results in a massive amount of code duplication. The system bloats and defects increase. 

### A Codebase Death Spiral
This way of programming results in a "death spiral" for the codebase. Since developers don't rely on understanding code to change it they continue programming by coincidence without ever trying to improve its readability or design. This results in an increase in defects as internal and external quality continues to suffer. Quickly a codebase developed in this manner can accumulate so many problems that the organization chooses to abandon it in favor of a rewrite (lacking the skills within the team to incrementally improve the code).


QUOTE ABOUT CODE SMELLS.


## Modern Development Practices
Two of the most important practices that I focus on with teams to help them build a culture of technical excellence and get to Continuos Delivery is Test-Driven Development and collaborative development practices, (pair and mob/ensemble programming). Programming by Coincidence is barrier to adopting both of these practices that I consider essential. 


## Practice Intentional Programming

Test-Driven Development requires intentionality. When we write a failing test first that means we need to be thinking in terms of software design. What does the method on this class need to do? What other objects does it need to interact with to do its job? Every TDD cycle includes refactoring which means we have many opportunities throughout the day to improve the design of our code and the design of our tests. Programming by Coincidence, by its very nature makes it impossible to practice TDD. 

Collaborative practices become impossible. Trying to teach mob/ensemble programming and seeing a team that is entirely silent not able to guide the driver is a sign that they are too used to programming by coincidence alone. 


## Create A Culture of Learning and Experimentation

Modern Agile image here. 

I've seen software organizations stuck in this way of working faced with this dilemma when TDD and collaborative development practices were introduced. Instead of facing the challenge head on, instead the organizations opted to conclude that _"collaborative development and TDD aren't practices that make sense for how we work."_ The lost an opportunity to remove a detrimental programming practice and adopt much more succesful practices because it was uncomfortable. 

Another side effect of Programming by Coincidence is that no learning happens in these teams. It is vitally important to build a culture of learning and experimentation. This is how teams improve how they work. 

GENE KIM QUOTE.

## Conclusion
Programming by Coincidence is an especially poisonous development practice that can ruin a codebase quickly and prevent a team from learning and growing. To combat it, adopt intentional, high-quality development practices likes TDD, pair, and ensemble programming. 