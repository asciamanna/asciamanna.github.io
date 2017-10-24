---
layout: post
section-type: post
title: Delivery, Feedback, and Iteration 
comments: true
category: development practices
tags: ['agile development', 'anti-patterns']
---

The nucleus of agile software development can be found in a few key activities. 

* Team collaboration
* Frequent / continuous delivery of working software
* Obtaining ongoing customer feedback
* Iterating based on customer feedback
* Team reflection and continuous improvement / learning

I often see several of these key activities missing in poor agile implementations. These organizations claiming to be agile aren't frequently delivering working software, don't regularly acquire customer feedback, don't iterate based on that feedback, and aren't utilizing any of the XP development practices to support these activities. 

By contrast, teams who have embraced XP team practices, continuously improve, and consistently iterate on their features based on frequent feedback tend to love the way they work. It took me leaving the eXtreme Programming (XP) world and joining my first Scrum team to really understand the frustration developers have with the state of agile software development [^1]. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m sad to realize that most people only experience scrum in a corrupted form; <br>Most of them believe the corruption is the intended form.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/913761095860604928?ref_src=twsrc%5Etfw">September 29, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## The Antiquated Factory Model 

This stark contrast exists because when agile is done well it embraces the unknowns and challenges of building software. Creating software is experimental and creative. It is a process of discovery. When software organizations cling to their old manufacturing mindsets, they create dissonance between how they plan and run a software project and the reality for the teams creating the software. 

Within these [Tayloristic](https://en.wikipedia.org/wiki/Scientific_management) organizations,  process continues to thrive that ostensibly simplifies project planning at the expense of the software and the people who create it. While impacts may not be immediately visible to the decision makers, these poor decisions have an ongoing and damaging effect on the organization's ability to deliver value to their customers. How many of these sound familiar?

* Developers are fungible resources who can be moved between teams and projects to meet scheduling needs
* Code-ownership is fluid and shared between any collection of teams in the organization so that work can be moved to any team 
* Teams lack an identity tied to expertise and work in a specific area of the system(s) 
* Estimates are treated as deadlines 
* Decisions about the work are disconnected from those doing the work
* More time is spent on long term, high-level estimation sessions than on running experiments and learning

## Sticking to the Plan

These companies plan and batch features in big deliverables as projects. They consider success meeting a date with a set of features that the customer originally requested. Feedback is held until the end of the large project, since reacting to the feedback would disrupt the plan. They oversimplify the challenges of building unknown features and believe that estimates can be translated directly into due dates on Gantt charts. Developers have to *"work harder"* if they provided an inaccurate estimate based on a high-level, fifteen-minute conversation six months ago. These organizational behaviors eliminate any possibility for experimentation and learning on the development teams.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Meeting the initial targets is more a definition of failure since it assumes we didn&#39;t learn what the customer really wants...&quot;</p>&mdash; David Bernstein (@ToBeAgile) <a href="https://twitter.com/ToBeAgile/status/912743657836548097?ref_src=twsrc%5Etfw">September 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Alternatively, a focus on frequent feedback and iteration throws out this old way of thinking. It embraces the nature of software development and that's why developers love it. Removing this dissonance creates a low stress and highly productive environment for creating not only great software,  but great business outcomes. 

## Where we go Wrong 

Unfortunately, it's too easy in Scrum to go through the motions, buy in to all of the Scrum ceremonies, but not address any of the organizational challenges that prevent teams from really becoming agile. In some cases, this is a company's first step towards something greater, but all too often organizations stop here. 

### Delivering

Teams can't iterate unless there is something to iterate on. The ability to deliver frequently is a necessity on agile teams. Too often organizations hide behind the idea that *"our customers can't handle the rate of change that Amazon or Google's customers can"*. These are just excuses that are rooted in an old way of thinking. This leads to batching up changes over long periods of time and delivering less frequently. Large batches and infrequent deliveries are consistently problematic, delaying and limiting the kinds of feedback that can be collected.

#### On site Customer

XP has the concept of the on site customer so that delivering to production is not required to get customer feedback. In fact, in this model the customer is always available to the development team. Unfortunately, in these challenged Scrum implementations the Product Owner is really a project manager or business analyst under a new name, not an on site customer (typically with a new, shiny CSPO certification). User stories are just waterfall requirements reworded in a user story template and not a *"promise for a conversation"* as Alistair Cockburn has described them. In these situations the valuable feedback comes after releasing to production.

#### Releasing is a Business Decision

There is a belief in agile that releasing software is a business decision, but teams need *the ability to constantly deliver*. I agree with this advice assuming that the business decision is not to release every six months to a year. Sometimes it makes sense to enable a few features together, but it is still important to keep these batches small and deliveries frequent. 

### Feedback

Too often organizations don't gather feedback until the end of a big project. When they do get feedback, it's typically not collected by the team doing the work. In these organizations teams aren't empowered to change their work based on feedback, so it should come as no surprise that they wouldn't be in a position to obtain customer feedback. Big batch projects make it impossible to use feedback to effectively steer the day-to-day work. Usually,  feedback gets to the team in the form of another big batch project some months later. This is an incredibly error-prone and inefficient process.

Organizations still entrenched in old ways of thinking will separate determining what to build from the team that actually builds it. If the organization believes developers are fungible resources and they want high-utilization of these resources, they accomplish that by telling those resources what to build. They don't want to take up the developer's valuable time determining what to build or obtaining feedback. They just start another project to address the feedback and tell the team to build it. 

#### The Workers vs. the Decision Makers 

This separation of workers and decision makers has a very negative consequence. It results in teams being handed prescriptive solutions (as requirements) instead of working closely with their customers to discover and solve problems. Great software does not get created by telling teams exactly what to build. Delivering prescriptive solutions to teams limits their creativity, limits the possible solution space, and damages morale. The best developers will move on to help other companies solve their business problems.

### Iterating

Teams cannot iterate without feedback. It's an essential aspect of agile software development. Acknowledging that building great software requires experimentation necessitates iteration. However, when organizations stick to long term plans, large projects, and infrequent deliveries, their ability to iterate is lost. 

### Engineering Practices

Even when organizations embrace all of these activities but don't invest in the technical practices that enable them, they struggle to find success. The XP practices that include refactoring, evolutionary / emergent design, TDD, pair programming, collective code ownership, and continuous integration, equip teams to incrementally deliver. These practices take time to learn and are not typically taught in schools. Adopting Scrum without a focus on technical team practices (which appears to be the norm) only sets teams up for failure.

> Without technical learning, Agile often harms both the enterprise and the developer...weak technical practice is building upon sand.    
> &mdash; Ron Jeffries, [Business Agile: Built Upon Sand](http://ronjeffries.com/articles/017-08ff/sand/)

## Next Questions

Is your organization agile because it uses Jira and has standups, planning meetings and sprints? Or, does the organization deliver frequently and iterate based on feedback? Do the development teams use XP engineering practices to ensure that they can continue to deliver in a constantly changing environment? These are important questions to assess where your organization is on its journey.  

[^1]: This is not an indictment of Scrum, but in my experience I've seen a lot of "agile in name only" Scrum implementations. Also known as [Dark Scrum](http://ronjeffries.com/categories/dark-scrum/), [Flaccid Scrum](https://martinfowler.com/bliki/FlaccidScrum.html), or [Zombie Scrum](https://twitter.com/tottinge/status/913890035845517312).
