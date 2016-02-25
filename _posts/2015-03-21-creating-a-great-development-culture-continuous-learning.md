---
layout: post
section-type: post
title: Creating a Great Development Culture - Part 2
comments: true
category: development practices
tags: ['agile development', 'code kata']
---
In my previous post I described that great development cultures emphasize code quality and have a shared set of values and development practices. In this post, the second part of the series on creating a great development culture, I will describe the other qualities great development teams have, **a culture of continuous learning** and a **lack of crunch mode or overtime**.

<!--more-->

## A Culture of Continuous Learning
Several of the practices described in the previous post are concerned with learning. Great teams learn together and make learning a top priority of the organization. Deadlines don't interfere with the team getting better. In addition to retrospectives and code reviews there are several other learning techniques I've found common across development organizations.

### Lunch & Learn
Teams should regularly get together to learn as a group. Whether it be group refactoring sessions (recommended by [Bryan Helmkamp](https://twitter.com/brynary "Bryan Helmkamp's Twitter Account")), code katas, or watching a presentation. Encouraging teams to constantly improve and bring new information into the organization is critical. It is all too easy to get mired in the day-to-day work and stop improving your craft. 

One of my favorite references for code katas is Dave Thomas' (author of _The Pragmatic Programmer_) [code kata site](http://codekata.com/ "PragDave's Code Kata Website").

### Bring in Experts 
The development community has plenty of experts and thought leaders. Get in touch with those who may live in your area or are visiting and bring them in to your office to talk. I've found the experts who I've communicated with to be accessible and willing to share their expertise.

### Get Out of Your Codebase
If you are working in a legacy codebase (one that is not unit tested or more importantly is not testable in its current state) it is important to get out of it for learning opportunities. Legacy codebases tend to be hard to make better without the required skills and time. Try out new techniques in well-factored codebases or side projects before bringing them into your codebase. This will prevent your team from getting hung up on learning a new technique while also wrestling with a codebase that is difficult to change.

Too often a team will accept the codebase as their reality, put blinders on and maintain that low quality. It helps to see what others are doing. It is a huge motivator to see well crafted code, how easy it is to maintain, to unit test, and to reason about. It gives the team a tangible goal to work towards.

### Read
Start a reading group at work. There are so many great software development books and blogs available. You can seriously improve your development skills by reading a few fantastic books. A reading group at work is another opportunity to learn and talk about quality and improvement as a team. 

### We are not Unique

**The biggest barrier to continuous learning is the thought that development organizations are unique.** Any development organization that contends that it is unique is mistaken. As a development organization your product *should* be unique, your domain *may* be unique, but **the way you build software is not unique nor should it be**. As developers we all do the same things and great practices can be applied to development organizations regardless of their domain, organization, team, maturity of the product, etc. 

This line of thinking is very dangerous because it puts the development organization on an island and allows them to reason that taking advice from experts is not necessary. It promotes a "not invented here" syndrome. Development teams recreate the wheel, and end up building and maintaining code that provides no value to their business. It allows developers to ignore expert advice since the expert "does not work in my environment." Worst of all it is a breeding ground for "expert beginners." If you are not familiar with the concept of "expert beginners" I highly recommend you read the [series of blog posts](http://www.daedtech.com/tag/expert-beginner) by [Eric Dietrich](http://www.daedtech.com/blog "Eric Dietrich's Blog"), who coined the term.

## Lack of Crunch Mode
Great development organizations avoid crunch mode and overtime. [Chad Fowler](http://chadfowler.com/ "Chad Fowler's website") has a fantastic post about [killing the crunch mode antipattern](http://chadfowler.com/blog/2014/01/22/the-crunch-mode-antipattern/). The fact is, when under pressure developers produce poor quality code. Poor quality code slows your organization down, thus creating more pressure, which in turn creates more poor quality code. It's a cycle that feeds itself and leads to low morale and a terrible codebase. [Bryan Helmkamp](https://twitter.com/brynary "Bryan Helmkamp's Twitter Account")
discusses this vicious cycle (as well as many fantastic suggestions to break out of it) in his talk at Baruco 2013, [Building a Culture of Quality](https://www.youtube.com/watch?v=Jsi1YTkXwxA). While attempting to apply schedule pressure to produce software faster the organization is instead slowing down the process of producing software. 

<blockquote class="twitter-tweet" lang="en"><p>Pressure tends to create the appearance of striving, but seldom increases the quality of work.</p>&mdash; estherderby (@estherderby) <a href="https://twitter.com/estherderby/status/572402741282152449">March 2, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Estimates?
If you operate in an environment that requires estimates I would start by ensuring that the development team doing the work is providing the estimates. If a manager, CEO, or someone else in the organization is coming up with arbitrary dates you are damaging team morale and the negative affects on the codebase will be far reaching and cost your organization long term stability and speed. The worst possible environment to build software in is one where the team is racing to meet an unreasonable deadline that management has created while writing terrible code and believing they are doing the right thing as long as they hit the date. In fact, rewarding that behavior ensures that it will continue to happen.

[Esther Derby](http://www.estherderby.com/ "Esther Derby's website") has a fabulous post about the [usefulness of estimating but lack of usefulness of the actual estimates](http://www.estherderby.com/2012/03/estimating-is-often-helpful-estimates-are-often-not.html). I highly recommend you read it. Remember that estimates are just that, estimates. Too often organizations treat them as the deadlines. Estimates, by their nature are inaccurate. Too many organizations get caught up in a  ridiculous cycle where teams spend time trying to "get better at estimating" instead of getting better at building great software. If you find yourself in this predicament the problem is not the team's ability to estimate but what the organization is doing with those estimates. So, focus some attention there instead.

If there is a legitimate date that needs to be hit be flexible about what functionality is included. Remember **_time and scope cannot both be fixed_**. While I've had more than one argument with project managers about this in my career it is an absolute truth. Trying to do so is costing your organization. I would argue that a vast majority of deadlines are arbitrary. There is some great work being done in the **No Estimates** community and I recommend you read about it and challenge your organization on how they estimate. Thought workers do not produce their best work when pressured to meet unreasonable deadlines. 

## Conclusion
Take some of the practices and ideas I've described in these last two posts to your development organization and give them a try. Regardless of your domain, product, level of experience, or team, I guarantee that at least some of these suggestions will improve your team, improve your product, and hopefully make your work place more enjoyable.
