---
layout: post
section-type: post
title: A Better Bug Tracker
comments: true
category: development tools
tags: ['extreme programming', 'agile development']
---
It is surprising to me how many development organizations don't view bug tracking software as an indicator that there is a problem with their development practices. I am a firm believer that the need for a bug tracking system is problematic. It should be an eye-opener. It should be the topic of team retrospectives, and teams should strive to iterate over their codebase and their practices until there is no need for a bug tracking system. Given the current state of your organization, you may not be able to stop using a bug tracker until you reduce your backlog. But working towards getting rid of it will pay huge dividends for the quality of your codebase, development practices, and the product you are building.  
<!--more-->  
Unfortunately the reality for a lot of organizations is that they continue to look for "better bug trackers" or "better feature trackers." Maybe they even decide that the myriad of products on the market don't meet their needs. So they decide to build their own in-house solution instead (gasp!).  

<blockquote class="twitter-tweet" lang="en"><p>Think about what it means to use a bug tracking system. You have so many bugs you need an automated system to keep track of them.</p>&mdash; Uncle Bob Martin (@unclebobmartin) <a href="https://twitter.com/unclebobmartin/status/544258609019125762">December 14, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## No Bugs
This is hardly new advice. I've heard [Uncle Bob Martin](https://twitter.com/unclebobmartin "Uncle Bob's Twitter") discuss this several times when I've had the pleasure to see him talk. It is also one of the tenets of eXtreme Programming: **No Bugs**. Details about the XP practices that support **No Bugs** can be found in [James Shore](http://www.jamesshore.com/ "James Shore's website")'s book, [*The Art of Agile Development*](http://www.jamesshore.com/Agile-Book/ "Website for The Art of Agile Development"). In fact that book will provide significantly more detail than I will describe here. I highly recommend reading it. The recommendations I'm making are really restating suggestions from his book since my team worked closely with James to improve our development practices. 


## Practices
The approach to **No Bugs** is two fold. First **fix bugs immediately** when they are found and second **write fewer bugs**. I've personally used these practices for several years. I will describe our team practices below.

### Fix Bugs First
Fix bugs as soon as they are found. Our team typically had between three to four pairs of developers working at any given time. One pair would stop story development and work on a bug if it came up. The idea is not to let bugs queue up. Having more than a couple of bugs at any given time was considered a big problem for our team (which to some organizations today seems ridiculous given the thousands of bugs in their backlog).  

Don't allow a bug backlog to accumulate. The beauty of this is that there are no bug triage meetings or the need to schedule time for bug fixes. There's no need to categorize the importance of bugs relative to other bugs. No time spent to determine which release a fix is going to be deployed in. A whole class of time consuming, cross-team coordination efforts and meetings are not needed. In some organizations there are people whose sole purpose is this type of coordination. Additionally, people outside of the cross-functional development team are not making these decisions (as usually happens when you have these processes in place). And by cross-functional development team I mean the folks who are spending their entire workday working closely on that product (Software Engineers, QA Engineers, Product Owners / Product Champions, etc.).

The team doesn't have to wait for someone outside of their team to assign them a bug or tell them what release the bug needs to be fixed in. The team owns their code and the entire team is responsible for fixing the problems.


### Write Unit Tests

Our team practiced Test-Driven Development (TDD) so we had a very thorough unit test suite that was run several times per day by the developers and on the Continuous Integration (CI) server on every developer commit. So creating a bug was possible but certainly wasn't easy (relative to other development organizations I have worked in).  

I am a big proponent of TDD and I highly recommend seriously dedicating time to getting good at it if you haven't practiced it before. It is a practice that will change the way you write code for the better. I have yet to meet a developer who has done it for any considerable amount of time and decided that they didn't like it. That post is for another day, so regardless of whether your team writes unit tests before or after the functionality you absolutely need to be writing them.  

Unit tests should also be written for every bug that is found. A bug should not be fixed until there is a failing test that exposes the bug. This will give your team the confidence that you will never have to fix the same bug twice.  

### Don't Accept Bugs
When bugs do occur (and they will) talk about why they occurred and reflect on this often. Hopefully your team is already doing regular retrospectives so you have a medium to discuss these things. Most likely these bugs will point to a breakdown in the process or a development practice. Address those things and find root causes. Use that knowledge to change your processes and practices in ways to make creating certain bugs impossible for the development team.

### Cleanup Bug Breeding Grounds
If the root cause points to messy parts of the code make refactoring that code a priority. Bugs tend to congregate with other bugs. So root out those bug breeding grounds, refactor them, and surround them with unit tests.

## Coder Utopia?
This may all seem like I'm speaking to you from Programmer Fantasy Land. You may think I'm crazy or you may just look at your codebase and think that there is no way to get there from where you are. I've definitely been in that situation, but consistently making small, incremental steps will get you there. First and foremost if you are in a hole you need to stop digging and start making those changes today! If you still don't believe me check out Jay Bazuzi's blog post: [Why I Write Horrible Code](http://jbazuzicode.blogspot.com/2015/01/why-i-write-horrible-code-and-so-can-you.html). He echoes a similar sentiment. There are ways to transform your practices and codebase but it will require work and buy-in from the rest of your team.   

As a side note, making any of these changes increases in difficulty as the size of your development team increases. This is one of the many reasons why development teams should be kept small.

## Problems with Bug Trackers
You may think, *"What's the big deal? So we don't need a bug tracking system we'll just use one anyway."* The use of these tools creates their own types of problems (or at the very least their use makes it easier for an organization to create new types of problems). In what will most likely be my  next blog post I will describe these problems in greater detail. These issues include software inventory accumulation, process paralysis, and several others.

## Conclusion
Instead of finding a better bug tracker start taking a critical look at why you need one in the first place. If your development practices and codebase are a mess you can make them better. As I've recommended in my previous post [Michael Feathers](https://twitter.com/mfeathers "Michael Feathers' twitter account")' book *Working Effectively with Legacy Code* will help you get your codebase under control so you can have more confidence in it. I am convinced the best bug tracker is not to have one at all.
