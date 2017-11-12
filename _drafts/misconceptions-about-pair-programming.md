---
layout: post
section-type: post
title: Misconceptions about Pair Programming
comments: true
category: development practices
tags: ['pair programming', 'extreme programming']
---

Pair Programming has increased in awareness over the years with it's inclusion in eXtreme Programming (XP), as one of the twelve core XP practices. However after two decades of XP, Pair Programming remains misunderstood and under utilized by agile software teams. In this post I am going to discuss the misconceptions about Pair Programming. In a follow-up post I will discuss its benefits, and how to encourage the practice in organizations that have doubts about its merits. I recommend it as an essential practice for modern development teams. Hopefully, dispelling some of the myths and misconceptions and focusing on its benefits will encourage more organizations to not only try, but master this practice. 

I group the misconceptions into two categories. Both of these have their genesis in old Information Technology (IT) practices that treat software development like industrial revoluation era manufacturing / factory work. Companies are often slow to change. As a result these beliefs can be found entrenched in organizational processes preventing companies from achieving excellence. Creating great software is a process of discovery and like most knowledge work, it is a creative endeavor. We need to start shedding these old beliefs to achieve better outcomes for our customers and create the next generation of brilliant technologists.

## The Manufacturing Mindset

The most common argument against Pair Programming is the belief that it is two people doing the work of one person. Therefore it must reduce the productivity of the team by 50%, so people assume it is a mostly wasteful practice. I have heard this argument about pair programming so many times I have lost count. If organizations continue to measure the value of software development in output they will most likely avoid a practice like pair programming (although studies have shown that it does not reduce team's output). When optimizing for developer busyness, measuring a team by velocity, and aiming for 100% utilization of "development resources" organizations are unlikely to try pair programming. 


### The Costs and Benefits of Pair Programming

Agile Manifesto co-author Alistair Cockburn and Laurie Williams published a study, [the Costs and Benefits of Pair Programming](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF) in 2000. In the paper they describe that there was not a 50% decrease in team productivity, as one would assume if *"two people were doing the work of one."* What they did find was that there was an increase of 15% in development program hours for teams who pair. However, there was a reduction in bugs escaping to production, an increase in the quality of the code, and other benefits (that will be mentioned in a future post) that more than made up for the 15% increase in initial development hours. 

If we shift the measure of team success from output to value delivered to the customer there is a compelling case for pair programming. It often results in getting individual features to production faster given the higher quality code it yields and its support in limiting work in progress at the team level. 


## Selective Pair Programming

The other misconception that I often hear typically comes from developers. It is the idea of "Selective Pair Programming" or sometimes it's referred to as "Pragmatic Pair Programming." The thought is that pair programming, as described by XP, is too prescriptive.  Instead teams will *"pair when it's appropriate."* The problem with this approach is that it assumes that developers are experts at this practice without ever having done it. 

These teams reserve pair programming for only very specific circumstances, like onboarding a new developer or helping a teammate out when that person gets stuck. 

I've heard teams who selectively pair program make remarks like *"we wouldn't pair on everything...only when it makes sense, where it is appropriate"* insinuating that somehow pairing more often then what they feel is correct is somehow unprofessional. Unfortunately pairing when someone gets stuck is not how I define pair programming (and I think the XP founders would agree with me). I expect a high amount of collaboration on teams and pairing on the day-to-day work is a way to achieve that. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sometimes pair programming doesn&#39;t &quot;take&quot; -- most frequently when it&#39;s framed as one programmer helping out another who&#39;s struggling.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/916016522388135936?ref_src=twsrc%5Etfw">October 5, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Software Development is a Social Activity

One of the problems with teams who only selectively pair is that software development is a social activity. Great software gets created by teams who are great collaborators. Teams who pair program are highly skilled collaborators. Teams who rarely pair, or don't pair at all, tend to struggle with collaboration. 

Watching a strong XP team work is an amazing thing to behold, and it shows how different they are from traditional development teams. Their team area is a hive of activity. Three developers at a white board diagramming a solution, a developer sitting with two QA members discussing corner cases of the latest feature, two other developers pairing on a task. The room is in constant motion and there is always a level of noise coming from everyone discussing the work. The energy is palpable. It is obvious something creative and special is happening on these teams. 

For contrast, observe a team that "selectively pairs" and you will find a very different scenario. Every time I observe a team that "selectively pairs" I see the backs of heads buried in computer monitors and everyone has their headphones on. The room is completely silent as very little collaboration happens. It seems much more like a library than a place where software is being built. 

### Pairing takes Practice

Pair programming is a deceptively challenging technique and it, like all other practices, requires consistent practice and repetition to improve. Teams who only pair in very specific circumstances never gain the skills required for effective pairing. This results in them doing it less. The less they do it the less useful it is for them. This creates a vicious circle on teams and the team's never get to realize the benefits of pair programming. 

#### The Selective Pair Programming Catch-22

 I refer to this as the Selective Pair Programming Catch-22

 <img class="img-responsive" src="/img/selective-pair-programming-catch22.png" />

### A Nuanced View

On the surface I would agree with the idea that teams shouldn't be required to pair on 100% of their work. However, my view of how much teams should pair and the view of developers who have not mastered pair programming is very different. I would consider pairing time somewhere around 80% or more for a team, where a vast majority of the work would get paired on. For a team that is just learning these practices, I would expect something much higher and closer to 100% until they begin to master the practice.  

The teams I see that claim to selectively pair program tend to pair much less than this, somewhere in the 20% or less range. It is interesting when I observe teams who find the idea of pair programming the way its described in XP as too prescriptive, I don't see much collaboration happening. It is certainly not the level of collaboration I would expect from a modern, agile software team. These teams end up missing a huge number of benefits that come from pair programming and team collaboration. 

## Conclusion 

Pair Programming is one of the most valuable software development techniques but there still remains a lot of myths and misconceptions about it. It's important to start dispelling these misconceptions so that teams can learn how to do it effectively. When making a case for pair programming I find it useful to both understand the misconceptions around it, but also to be able to articulate the laundry list of benefits to the software team and the larger development organization. Those benefits will be discussed in my next post. 