---
layout: post
section-type: post
title: Programming By Coincidence
subtitle: A Barrier to High-Performing Teams
comments: true
excerpt_separator: <!--more-->
summary: Programming by Coincidence is a common programming practice that presents an obstacle to team learning and technical excellence. It's important to learn how to spot it and reverse the trend if you want to create high-performing, modern software development teams. 
image: /img/pocket-developer.jpg
category: code craft
tags: ['extreme programming', 'coaching', 'mob programming', 'tdd']
---

<figure>
    <img class='img-responsive' src='/img/pocket-developer.jpg' alt='Pocket Developer' height='50%' width='50%' />
    <figcaption style='text-align:center'>Pocket Developer from <a href="https://pretendstore.co/collections/office/products/pocket-developer">Pretend Store</a></figcaption>
</figure>
<br />

One of my primary roles as a development coach is helping software development teams and their organizations build a culture of technical excellence (often helping them build the skills to get to Continuous Delivery). When teams begin their journey to becoming high-performing they need to shed their current habits that are obstacles to their advancement. One of the most common and problematic practices I see is called _Programming by Coincidence_. It is important to be able to spot this practice and help reverse its negative impact on codebases and teams.
<!--more-->

## What is Programming by Coincidence?

Programming by Coincidence is one of the most detrimental practices for a team and their codebase. I first discovered the term Programming by Coincidence as the title of Chapter 31 of _The Pragmatic Programmer (First Edition)_. You may refer to this practice as [Copy-and-Paste programming](https://en.wikipedia.org/wiki/Copy-and-paste_programming), which is a common travel companion to Programming by Coincidence. Or maybe you call it _"Stack Overflow programming."_ Regardless of what you call it, its effects remain the same. 

> We should avoid programming by coincidence&mdash;relying on luck and accidental successes&mdash;in favor of _programming deliberately_.    
> _**&mdash;Andy Hunt & David Thomas, The Pragmatic Programmer (First Edition), page 172**_


A team practicing Programming by Coincidence favors working in isolation instead of collaboratively. They spend time hunting for code that looks like it is similar enough to solve their problem (whether it be in another part of their codebase, open source code examples, or websites like Stack Overflow). They copy and paste this code and tweak and edit the code until it works, without ever having an understanding of what the code is doing and why it addresses their problem. They often ignore automated tests unless they can copy them exactly from other areas of the codebase as well. When the code breaks no one knows why because they never understood why it worked in the first place.  

## The Problems it Creates
When teams program by coincidence they never achieve a better understanding of their domain, their programming languages, development tools, or environment. This stifles growth, eliminates learning opportunities, and makes experimentation impossible. Focusing on copy-paste programming and tinkering with the code until it works reinforces the idea that development teams have to work in long-running feature branches and need time to "harden" the code before it's ready for release. This delays integration, letting the code deviate from trunk for the lifetime of the feature branch, which creates unnecessary integration risks when the feature branch can finally be merged. 

### The Telltale Signs

Code written in this manner share some common characteristics. They often contain significant amounts of:
* Dead Code
* Misleading Comments
* Code Duplication
* Long-lived Branches

#### Dead Code 

Dead code is everywhere in these codebases obscuring the code's intent and creating an unnecessary maintenance burden. Unused fields and methods in classes, unused classes, unnecessary or invalid tests that still get run, and unused third-party libraries are all a result of copying and pasting code from elsewhere.


####  Misleading Comments 
Since code is copied without understanding, the comments from other areas of code come along for the ride. Because comments don't affect the runtime behavior and the developers don't refactor or clean up the code, inaccurate comments are left in the codebase. These comments only serve to mislead future developers who make the mistake of trusting the comment instead of trying to understand some inscrutable code. 


#### Code Duplication 
The act of copying code from elsewhere results in a massive amount of code duplication. The system bloats and defects increase. Understanding the code isn't a priority, so refactoring to remove duplication never occurs. Instead, more and more code is duplicated and modified until it works. 

### A Codebase Death Spiral
This way of programming results in a "death spiral" for the codebase. Since developers don't rely on understanding code to change it, they continue programming by coincidence without ever trying to improve the code's readability or design. This results in an increase in defects as internal and external quality suffers. Quickly a codebase developed in this manner can accumulate so many problems that the organization chooses to abandon it in favor of a rewrite (since they lack the skills within the team to incrementally improve the code).

> Number one in the stink parade is duplicated code. If you see the same code structure in more than one place, you can be sure that your program will be better if you find a way to unify them.  
> _**&mdash;Martin Fowler & Kent Beck, Refactoring (First Edition), page 76**_

## Modern Development Practices
Two of the most important practices that I focus on with teams to help them build a culture of technical excellence is Test-Driven Development (TDD) and collaborative development practices, ([pair]({{ site.baseurl }}{% post_url 2017-12-31-benefits-of-pair-programming %}) and [mob/ensemble programming]({{ site.baseurl }}{% post_url 2018-06-29-practices-for-effective-mob-programming %}). Programming by Coincidence is barrier to adopting both of these practices. 

## Practice Intentional Programming

Test-Driven Development requires intentionality. When we write a failing test first, we need to be thinking about what the method we want to write needs to do. We focus on _what_ it needs to do before we worry about _how_ it is going to do that. In other words, we need to know where we are headed. What is the behavior this class and method are responsible for? What is its signature? How does it interact with its callers? What other objects does it need to interact with to do its job? Every TDD cycle includes refactoring, which creates many opportunities throughout the day to improve the design both the production code and tests. Programming by Coincidence makes it impossible to practice TDD. 

Similarly, collaborative practices require this same intentionality when we create software. A mob/ensemble programming session where the driver codes alone while others in the group remain silent, not able to guide the driver, is a sign that they are accustomed to Programming by Coincidence and working in isolation. To be a good pairing partner or ensemble member, you need to work deliberately. 


## Create A Culture of Learning and Experimentation

<img src='/img/modern-agile-wheel.png' alt='Modern Agile' class='img-responsive' height='50%' width='50%' />

I've seen software organizations stuck in this way of working. They were faced with this dilemma when TDD and collaborative development practices were introduced. Instead of facing the challenge head-on, the organizations opted to conclude that _"collaborative development and TDD aren't practices that make sense for how we work."_ They lost an opportunity to remove a detrimental programming practice because learning something new was uncomfortable. If instead, a culture of learning was established and developers weren't managed to be 100% utilized, the team would have had the slack to learn, improve, and become a much higher-performing team as a result. 

## Lack of Improvement & Learning
Teams who Program by Coincidence are primarily concerned with "getting the code working" and moving on. Improving the design, reducing the cognitive load for future developers, and making the code more intention revealing are skipped in favor of starting on the next feature. Successful software development teams prioritize both code improvement and learning. They spend time continuously learning and experimenting. This is how teams improve.


> Improving daily work is even more important than doing daily work.       
> _**&mdash;Gene Kim, The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win**_

## Conclusion
Programming by Coincidence is a poisonous development practice that can ruin a codebase quickly and prevent a team from learning and growing. To combat it, adopt intentional, quality-focused development practices like TDD, pair, and ensemble programming. Push through the discomfort and experiment with practices. Finding an experienced coach will help get you there faster. 