---
layout: post
section-type: post
title: Delivery, Feedback, and Iteration 
comments: true
category: development practices
tags: ['agile development', 'anti-patterns']
---

Frequent deliveries of working software, acquiring customer feedback, iterating based on that feedback, and the development practices to support these activities are the things I most commonly see missing from poor agile implementations. When I hear developers complain about how much they hate agile software development they are missing some or all of these key activities. 

By contrast, teams who have embraced agile technical practices, continuously improve, and consistently iterate on their features based on frequent customer feedback tend to love the way they work. It took me leaving the eXtreme Programming (XP) world and joining my first Scrum team to understand the frustration developers have with the state of agile software development [^1]. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m sad to realize that most people only experience scrum in a corrupted form; <br>Most of them believe the corruption is the intended form.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/913761095860604928?ref_src=twsrc%5Etfw">September 29, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## The Antiquated Factory Model 

The reason why such a stark contrast exists is that when agile is done well it embraces the unknowns and challenges of building software. Creating software is experimental and creative. It is a process of discovery. When software organizations cling to their old manufacturing mindsets they create dissonance between how they plan and run a software project and the reality for the teams creating the software. 

Within these [Tayloristic](https://en.wikipedia.org/wiki/Scientific_management) organizations process continues to thrive that ostensibly simplifies project planning at the expense of the code and the people who create it. While impacts may not be immediately visible to the decision makers, these poor decisions have a damaging effect on the organization's ability to deliver value to their customers. How many of these sound familiar?

* Developers are fungible resources who can be moved between teams and projects to meet scheduling needs
* Code-ownership is fluid and shared between any collection of teams in the organization so the work can be moved to any team who may be free 
* Teams lack an identity tied to expertise and work in a specific area of the system(s) 
* Estimates are treated as deadlines 
* Decisions about the work are disconnected from those doing the work
* More time is spent on long term high-level estimation sessions than on running experiments and learning

## Sticking to the Plan

It's impossible to know exactly what software should do before starting the work, but these companies still batch big deliverables as *projects*. They consider success hitting a date with a set of features that the customer originally asked for. They hold any feedback for the end of the large project, as reacting to the feedback would disrupt the plan. They oversimplify the challenges of building unknown features and believe that estimates can be translated directly into due dates on Gantt charts. Developers have to "work harder" if they provided a bad estimate based on a high-level, fifteen-minute conversation six months ago. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Meeting the initial targets is more a definition of failure since it assumes we didn&#39;t learn what the customer really wants...&quot;</p>&mdash; David Bernstein (@ToBeAgile) <a href="https://twitter.com/ToBeAgile/status/912743657836548097?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Alternatively, a focus on frequent feedback and iteration throws all of this old thinking out. It embraces the nature of software development and that's why developers love it. Removing this dissonance creates a low stress and highly productive environment. This leads to happy, productive developers and a better product. 

## Where we go Wrong 

Unfortunately, it is too easy in Scrum to go through the motions, buy in to all of the Scrum ceremonies, but not address any of the organizational challenges that prevent teams from really becoming agile. In some cases this is a company's first step towards something greater, but all too often organizations stop here. 

### Delivering

Teams can't iterate unless there is something to iterate on. The ability to deliver frequently is a necessity on agile teams. Too often organizations hide behind the idea that *"our customers can't handle the rate of change that Amazon or Google's customers can"*. These are just excuses that are rooted in an old way of thinking. This leads to batching up changes over long periods of time and delivering less frequently. Large batches and infrequent deliveries are consistently problematic, delaying and limiting the kinds of feedback that can be collected.

#### On site Customer

XP has the concept of the on site customer so that delivering to production is not required to get feedback. In fact, in this model the customer is always available to the development team. Unfortunately, in these challenged Scrum implementations the Product Owner is really a project manager under a new name, not a customer. User stories are just up-front requirements reworded in a user story template and not a *"promise for a conversation"* as Alistair Cockburn has described. In these situations the valuable feedback comes after releasing to production.

#### Releasing is a Business Decision

There is a belief in agile development that releasing software is a business decision but teams need *the ability to constantly deliver*. I agree with this advice assuming that the business decision is not to release every six months to a year. Sometimes it makes sense to batch a few features together but it is still important to keep these batches small and frequent. 

### Feedback

Too often organizations don't gather feedback until the end of a big project. When they do get feedback it typically bypasses the team. Unless the teams are empowered to change their backlog based on feedback it stands to reason (from the organization's point of view) they don't *need* to get that feedback themselves. Further, big batch projects make it impossible to use feedback effectively to steer the day-to-day work. Typically in these cases the feedback gets to the team in the form of another big batch project some months later. This is an incredibly error-prone and inefficient process.

Organizations still entrenched in old ways of thinking will separate determining what to build from the team that actually builds it. If the organization believes developers are fungible resources and they want high-utilization of these resources, they accomplish that by telling those resources what to build. Don't take up their valuable cycles determining what to build or obtaining feedback. Just start another project to address the feedback and tell the team to build it. 

The telephone game effect is very likely in these situations given the number of information handoffs that are required. This is a contributing factor to software consistently not meeting the needs of its users. Great software does not get created by telling developers what to build.

### Iterating

Teams cannot iterate without feedback, it's an essential aspect of agile software development. Acknowledging that building great software requires experimentation necessitates iteration. However, if all work is batched into large deliverables the ability to iterate is lost. 

### Engineering Practices

Even when organizations embrace all of these activities but don't invest in the technical practices that enable them they struggle to find success. The XP technical practices, including refactoring, Evolutionary / Emergent Design, TDD, pair programming, collective code ownership, and Continuous Integration equip teams to incrementally deliver. These practices take time to learn and are not typically taught in school. Adopting Scrum without a focus on technical team practices (which appears to be the norm) only sets teams up for failure.

> Without technical learning, Agile often harms both the enterprise and the developer...weak technical practices is building upon sand  
> &mdash; Ron Jeffries, [Business Agile: Built Upon Sand](http://ronjeffries.com/articles/017-08ff/sand/)

## Next Questions

Is your organization agile because you have standups, planning meetings, and sprints? Or are you delivering frequently, getting customer feedback, and iterating based on that feedback? Do the teams use agile technical practices to ensure that they can continue to deliver in a fast changing environment? These are important questions to assess where your organization is on its journey.  

[^1]: This is not an indictment of Scrum, but in my experience I've seen a lot of "agile in name only" Scrum implementations. Also known as [Dark Scrum](http://ronjeffries.com/categories/dark-scrum/), [Flaacid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html), or [Zombie Scrum](https://twitter.com/tottinge/status/913890035845517312).
