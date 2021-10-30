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

One of my primary roles as a development coach is helping software development teams and their organizations build a culture of technical excellence (often helping them build the skills to get to Continuous Delivery). When teams begin their journey to becoming high-performing they need to shed their current habits that are obstacles to their advancement. One of the most common and problematic practices I see is called _Programming by Coincidence_. It is important to be able to spot this practice and help reverse its negative impact on codebases and teams.
<!--more-->

## What is Programming by Coincidence?

Programming by Coincidence is one of the most detrimental practices for a team and codebase. It goes by a few different names but its effects are the same. 
QUOTES FROM THE PRAGMATIC PROGRAMMER 

A team practicing _Programming by Coincidence_ favors working in isolation instead of collaboratively. They spend time hunting for code that looks like it is similar enough to solve their problem (whether it be in their another part of their codebase, open source code examples, or websites like Stack Overflow). They copy and paste this code and tweak and edit the code until it works, without ever having an understanding of what the code is doing and why it addresses their problem. They often ignore automated tests unless they can copy them exactly from other areas of the codebase as well. 

## The Problems it Creates
When teams program by coincidence they never get to a better understanding of their domain, their programming languages, development tools, or environment. This stifles growth, eliminates opportunities for learning, and makes experimentation impossible. Focusing on copy-paste programming and "tinkering" with the code until it worksre inforces the idea that dvelopment teams have to work in long-running feature branches and need time to "harden" the code before it's ready for release. This delays integration and pushes development risks into the future. 

### The Tell Tale Signs

Code written in this manner share some common characteristics. They contain significant amounts of:
* Dead Code
* Misleading Comments
* Code Duplication
* Long-running Feature Branches

#### Dead Code 

Dead code is everywhere in these codebases, obscuring the codes intent and creating an enormous maintenance burden. Unused fields and methods in classes, unused classes, unused tests, unused third-party libraries are all a result of copying and pasting code from elsewhere.


####  Misleading Comments 
Since code is copied without understanding the comments from other areas of code come along for the ride. Since comments don't affect the runtime behavior, inaccurate comments are left in the codebase to mislead future developers who make the mistake of trusting the comment instead of trying to understand some inscrutable code. 


#### Code Duplication 
Since code is copied and pasted from elsewhere, this results in a massive amount of code duplication. The system bloats and defects increase. Understanding of the code isn't a priority, so refactoring to remove duplication never occurs. Instead, more code is duplicated and modified until it works. 

### A Codebase Death Spiral
This way of programming results in a "death spiral" for the codebase. Since developers don't rely on understanding code to change it they continue programming by coincidence without ever trying to improve its readability or design. This results in an increase in defects as internal and external quality continues to suffer. Quickly a codebase developed in this manner can accumulate so many problems that the organization chooses to abandon it in favor of a rewrite (since they lack the skills within the team to incrementally improve the code).


QUOTE ABOUT CODE SMELLS.


## Modern Development Practices
Two of the most important practices that I focus on with teams to help them build a culture of technical excellence Test-Driven Development and collaborative development practices, (pair and mob/ensemble programming). _Programming by Coincidence_ is barrier to adopting both of these practices that I consider essential. 


## Practice Intentional Programming

Test-Driven Development requires intentionality. When we write a failing test first that means we need to be thinking in terms of software design. What is the behavior this class and method are responsible for? What is its signature? How does it interact with its client objects? What other objects does it need to interact with to do its job? Every TDD cycle includes refactoring, which creates many opportunities throughout the day to improve the design of our code and the design of our tests. Programming by Coincidence, by its very nature makes it impossible to practice TDD. 

Collaborative practices become impossible. Trying to teach mob/ensemble programming and seeing a team that is entirely silent not able to guide the driver is a sign that they are accustomed to _Programming by Coincidence_ working in isolation. Again, to guide an ensemble or be a good pairing partner, you need to work intentionally. 

GEE PAW QUOTE HERE


## Create A Culture of Learning and Experimentation

Modern Agile image here. 

I've seen software organizations stuck in this way of working. They were faced with this dilemma when TDD and collaborative development practices were introduced. Instead of facing the challenge head on, the organizations opted to conclude that _"collaborative development and TDD aren't practices that make sense for how we work."_ They lost an opportunity to remove a detrimental programming practice because learning something new was uncomfortable. 

## Lack of Learning
Teams who Program by Coincidence are primarily concerned with "getting it working" and moving on. Improving the design, reducing the cognitive load of future developers, and making the code more readable are skipped in favor of starting on the next feature. Successful software development teams prioritize learning and spend time continuously learning and experimenting. This is how teams improve.


GENE KIM QUOTE.

## Conclusion
Programming by Coincidence is an especially poisonous development practice that can ruin a codebase quickly and prevent a team from learning and growing. To combat it, adopt intentional, high-quality development practices likes TDD, pair, and ensemble programming. 