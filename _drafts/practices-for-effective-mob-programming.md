---
layout: post
section-type: post
title: Practices for Effective Mob Programming
comments: true
category: development practices
tags: ['mob-programming']
---

For the last several months I've been fortunate to coach development teams with [Industrial Logic](https://www.industriallogic.com) consultants [Tim Ottinger](https://www.twitter.com/tottinge) and [Michael Rieser](https://twitter.com/MichaelRieser). A key aspect of this coaching is introducing teams to mob programming. As word spread in the organization other teams became interested in mob programming. Without the benefit of going through an Industrial Logic workshop they asked for a primer on effective mob programming practices.

The topics in this post came from a conversation [Tim Ottinger](https://www.twitter.com/tottinge) and I had with one of those teams. 

## Use a Mob Programming Tool

Those who know me know that I prefer pen, paper, and index cards over most workflow tools. However, I cannot overstate the importance of a mob programming tool. There are several that exist, but my favorite is [mobster](http://mobster.cc). The tool encourages consistent switching intervals, ensuring that everyone in the session takes a turn as driver. This increases the overall engagement of the members of the session. It also supports disciplined break taking, a very important aspect of mobbing. I've witnessed teams who avoided using a mobbing tool only to fall back on old habits making the mobbing sessions much less effective. 

### Experiment with Switching Intervals

For the teams I've worked with I've found that a seven minute switching interval is optimal in a mob session with six to eight people. This can be modified in mobster to tune both the driving and break duration. I recommend adjusting the time based on what works best for your circumstances. However, **I would challenge you to keep the switching interval small and to experiment with making it increasingly smaller.**

### Disciplined Break Taking 

An important aspect of mob programming is the inclusion of the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) for disciplined break taking. Being disciplined about taking frequent breaks helps the mob stay focused and productive during the day. 

<img src="/img/pomodoro.jpg" class="img-responsive" />

## TDD

I have only every practiced mob programming when teaching or practicing Test-Driven Development (TDD). While you can practice mob programming without TDD, pairing them together leads to additional benefits. TDD is an important practice in its own right and mobbing is a great way to learn it. Due to TDD's fast feedback cycles (i.e., red, green, refactor, and integrate), achieving flow in TDD does not require loading the entire problem state into a single developer's head. This enables the mob to work in very small batches and take frequent breaks without setbacks.

## Strong-Style Pairing Model

While mobbing [Llewellyn Falco's strong-style pairing](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) model is recommended. The driver is the person at the keyboard and they are the only person in the mobbing session not coding, instead they are operating the machinery. All ideas from the mob has to go through their hands to make it into the code. Switching regularly, everyone gets a chance to be the driver and to program. This enables a lot of other effective practices including inviting non-developers to take part in the mob session.

>  For an idea to go from your head into the computer it **MUST** go through someone else's hands.  
> _&mdash; Llewellyn Falco describing the Strong Style Pairing Golden Rule_

## Encourage Full Team Participation

Since the driver does not need to know how to program, an opportunity emerges to include the entire team in mob sessions. Resist the urge to make mob programming _"only a developer practice."_ Poor collaboration within development teams remains too common in the industry, having been influenced by decades of waterfall processes and functional reporting silos. This practice can help you reverse that. Once you see how effective teams are when everyone is working on the same thing at the same time, you won't settle for communicating with teammates through comments in Jira issues anymore.

I recommend that everyone take part in a mob session who is required to take a single story or task from start to completion (from concept to cash). Typically this means developers, QA, UX, Operations, and product owners will all take part in mob programming sessions depending on the nature of the work. 

Individuals can still leave and rejoin the mob for any reason, but the mobbing session will continue without them. For example, if a large refactoring is taking place some of the non-programmers may want to step away if they don't feel like they are contributing. But they are welcome to return to the mobbing session at any point.

### Introduces WIP limits

When the full team takes part in mob sessions it naturally reduces Work in Process (WIP) and can help the team introduce WIP limits. By limiting WIP, teams reduce inventory and increase their throughput.

### Increases First Time Through and Decreases Cycle Time

When the entire team to works together on a single piece of work, First Time Through (FTT) increases, work no longer goes backwards on the board, and as a result the team's [cycle time](https://kanbantool.com/kanban-library/analytics-and-metrics/kanban-definition-of-lead-time-and-cycle-time) decreases.

### Single Piece Flow

Full team mobbing and its reduction in WIP enables the lean concept of single piece flow (or [one piece flow](http://www.kaizenworld.com/kaizen/one-piece-flow.html)). Often individuals are so accustomed to being busy they will start multiple streams of work in an effort to _"stay productive"_, or so they think. This results in the opposite of the intended effect, reducing the performance of the overall team by increasing WIP which increases inventory and decreases throughput. It's important to remind teams in these situations to **_"watch the baton not the runners,"_**, to focus on the flow of the work through the system and not on individual busyness. 

## Waste Snake

[Tim Ottinger](https://www.twitter.com/tottinge) introduced the concept of a waste snake to the teams we worked with. Unfortunately, working alone or within functional silos makes it easy to accept waste in the development process. It is common during solo work to start additional tasks when met with an impediment, increasing WIP and reducing overall productivity. 

When everyone in a mobbing session has to wait due to an impediment, the pain becomes obviously visible and magnified. When teams are met with impediments while mobbing they document it on the waste snake board. The waste snake items can then be worked off by the team to continuously improve their daily work.

> Improving daily work is even more important than doing daily work.  
> _&mdash; Gene Kim - The DevOps Handbook_ 

## Learnings Board

Learning happens rapidly when teams work closely together in a mob session. When the team learns new keyboard shortcuts, new facts about the system, the domain, the technology, etc. they document this on a learnings board in the team room. At the end of each day what was learned is captured and sent to each team member.

## Avoid Runaway

Practicing strong-style pairing ensures that the person at the keyboard is not the person coding. If teams stray from this practice, it's easy for the driver to runaway and start coding their own ideas, reducing focused mob participants to easily-distracted bystanders. It's important to recognize this and call it out when it happens. Strive for an environment where everyone in the mob is contributing to the work. 

## Debate In Code

When debates arise about different ways of approaching a problem, debating in code is encouraged. Try both approaches and let the mob decide which way is best. 

## Shared Team Settings

While mobbing it's important that the team has shared editor settings. The development experience should be the same regardless of whose computer is being used. This avoids the lost time and focus that is required to adapt to individual editor plug-ins and keymaps.

## Promise Debt

As the mob encounters issues they want to address but don't want to get distracted from the main goal, they add a card describing the work to a promise debt board. It's important to work these off before the work is considered complete. Preserving and addressing improvement ideas without distracting the mobbing session is the goal of this board.

## Invite the Boss(es)

Agile teams value transparency. Inviting organizational leaders to a mobbing session is an effective way to teach the organization what developing software is really like. Additionally it builds empathy for development teams throughout the organization. Again, practicing  strong-style pairing enables the addition of non-programmers to the session. I've taken part in mobbing sessions with CTOs, CFOs, development managers, product managers, and others.

This is especially important in organizations that treat developers like cookie-cutter, fungible resources. Unfortunately, it is still common to encounter organizations that view software development as the mechanical process of typing commands into a computer, completely removing a developer from their context, their expertise in technology, the domain, and/or the system. These organizations tend to:

* Move developers and project work constantly to meet scheduling needs
* Create schedules dictated by management (consistently fixing both scope and time for projects) 
* Add developers to projects in a misguided attempt to increase throughput and pull in deadlines
* Separate development teams from their customers (or any decision making about the work) perpetuating a "masters-and-minions" organization where the development teams are told what to do
* Treat development teams as order takers and not problem solvers 

Giving people in the organization an opportunity to see what programming is really like will go a long way in addressing this organizational dysfunction. Hopefully, with a better understanding of how development teams operate organizations will begin adopting more effective practices.

Even in organizations that lack this level of dysfunction, having leadership experience team impediments in real-time will help the them resolve the organizational issues causing the impediments.

## Conclusion

<img src="/img/mobbing-practices.jpg" class="img-responsive" />

These are just a few of the techniques we've found that make for effective mob programming sessions. There are most certainly more, keep experimenting to discover them. 

## Additional Resources

Here are a few resources to learn more about mob programming:

* [Mob Programming - A Whole Team Approach](https://www.agilealliance.org/resources/experience-reports/mob-programming-agile2014/) - Woody Zuill, creator of Mob Programming
* Woody's [mobprogramming.org](http://mobprogramming.org/) website
* [A Day of Mob Programming - 2012](https://www.youtube.com/watch?v=p_pvslS4gEI) - A time-lapse video of mob programming at Hunter Industries
* [A Day of Mob Programming - 2016](https://www.youtube.com/watch?v=dVqUcNKVbYg) - Catch up with Hunter Industries four years later to see how mob programming has changed the organization in another time-lapse video