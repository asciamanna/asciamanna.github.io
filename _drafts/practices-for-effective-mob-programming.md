---
layout: post
section-type: post
title: Practices for Effective Mob Programming
comments: true
category: development practices
tags: ['mob-programming']
---

I've been fortunate to coach development teams with [Industrial Logic](https://www.industriallogic.com) consultants [Tim Ottinger](https://www.twitter.com/tottinge) and [Michael Rieser](https://twitter.com/MichaelRieser) for the last several months. A key aspect of this training is introducing teams to mob programming. As word spread in the organization other teams became interested in mob programming. Without the benefit of going through an Industrial Logic they asked for a primer on effective mob programming practices.

The topics in this post come from a conversation [Tim Ottinger](https://www.twitter.com/tottinge) and I had with a team. 

## Use a Mob Programming Tool

Those who know me know that I prefer pen, paper, and index cards over most workflow tools. However, I cannot overstate the importance of using a tool for mob programming. There are several that exist, but my favorite is [mobster.cc](http://www.mobster.cc). Using this tool encourages consistent switching intervals, ensuring that everyone in the mob takes a turn and driving and navigating. It also supports disciplined break taking, a very important aspect of mobbing. I've witnessed teams give up using a tool only to fall back on old habits making the mobbing sessions much less effective. 

### Experiment with Switching Intervals, Aim for Shorter

I've found that seven minute switching intervals seem be the optimal in a mob session with six to eight people. This can be modified in mobster to tune both the driving and break duration. Of course your mileage may vary, and you can adjust the time based on what works best for your circumstances. However, I would challenge you to keep the switching interval small and to experiment with making it increasingly smaller.

### Disciplined Break Taking

An important aspect of mob programming is the inclusion of the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) and disciplined break taking. Being disciplined about taking frequent breaks helps the mob stay focused and perform at their best. Don't skip these breaks as they will help you do your best work in the mob. 

<img src="/img/pomodoro.jp" class="img-responsive" />

## TDD

I have only every practiced mob programming when teaching or practicing Test-Driven Development (TDD). While you can practice mob programming without TDD, pairing them together enables a lot of good habits. TDD is an important practice in its own right. Furthermore, the flow in TDD does not require loading the entire problem state into a single developer's head due to the very fast feedback cycles (i.e., red, green, refactor, integrate). This enables the mob to work in very small batches and be able take frequent breaks without setbacks.

## Strong Style Pairing Driver/Navigator Model

While mobbing we recommend using [Llewellyn Falco's strong style pairing](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) model. The driver is the person at the keyboard and she is the only one not coding, instead she is operating the machinery. All ideas from the mob has to go through her hands to make it into the code. Switching regularly, everyone gets a chance to drive and to program. This enables a lot of other effective practices including inviting non-developers to take part in the mob session.

## Encourage Full Team Participation

Since the driver does not need to know how to program, an opportunity emerges to include the entire team in mob sessions. Resist the urge to make mob programming _"a developer practice."_ We are battling decades of waterfall processes and functional silos in development organizations where developers and QA don't collaborate on the daily work. This practice aims to change that. Once you see how effective teams can be when developers and QA are actually working on the same thing at the same time, you won't confuse communicating through comments on JIRA issues with effective team collaboration. 

We recommend that everyone take part in a mob session who is required to take a single story or task from "To Do" to completion. Typically this means, developers, QA engineers, UX experts, Operations engineers, and product owners / product managers will all take part in mob programming sessions.  

### Introduces WIP limits

By getting the full team to take part in the mob session it naturally reduces Work in Process (WIP) and can help the team introduce WIP limits. By limiting WIP teams reduce inventory and increase their throughput.

### Increases First Time Through and Decreases Cycle Time


We've found that by getting the entire team to work together on a single piece of work, First Time Through (FTT) increases, work never goes backwards on the board, and as a result the team's cycle time decreases.

### Single Piece Flow

When the entire team joins a mob session they reduce WIP to one and achieve what is referred to in Lean as single piece flow (or [one piece flow](http://www.kaizenworld.com/kaizen/one-piece-flow.html)). This reduction in WIP increases the team's throughput. Often individuals are so accustomed to being busy they will instead start multiple streams of work in an effort to "stay productive." This has the opposite of the intended effect, reducing the performance of the team by increasing WIP which increases inventory. We remind teams in these situations to **_"watch the baton not the runners,"_**, to focus on the flow of the work through the system and not on individual busyness. 

## Waste Snake

[Tim Ottinger](https://www.twitter.com/tottinge) introduced the concept of a waste snake to teams. Unfortunately, working alone or within functional silos encourages accepting waste in the development process. Instead ridding our processes of waste and waits we pick up additional work when met with an impediment, which increases WIP and reduces overall productivity. However, when everyone in a mobbing session has to wait the pain becomes obviously visible and magnified. When teams are met with waits and impediments while mobbing they document it on the waste snake board. The waste snake items then can be worked off by the team to continuously improve their daily work.

> Improving daily work is even more important than doing daily work.  
> _&mdash; Gene Kim - The DevOps Handbook_ 

## Learnings Board

Learning happens rapidly when teams work closely together in a mob session. When the team learns new keyboard shortcuts, new facts about the system, the domain, etc. they document this on a learnings board in the team room. At the end of each day what was learned is captured and sent to each team member.

## Avoid Runaway

Practicing strong-style pairing ensures that the person at the keyboard is not the person coding. If teams stop practicing this it's easy for the driver to runaway and start coding her own ideas, reducing a focused mob of programmers to easily-distracted bystanders. It's important to recognize this and call it out when it happens. Strive for an environment where everyone in the mob is contributing to the work. 

## Debate In Code

When debates arise about different ways of approaching a problem, instead of discussing the approaches we encourage debating in code. Try both approaches and let the mob decide which way is best, remembering that your idea should go through someone elses hands into the code. 

## Shared Team Settings

When mobbing it's important that the team has shared editor settings. The experience should be the same regardless of whose computer is being used. This avoids losing time and focus adapting to every team member's custom editor plug-ins and keymaps. 

## Promise Debt
As the mob encounters issues they want to address, but don't want to get distracted from the main goal they add a card describing the work to a promise debt board. It's important to work these off before the work is considered complete. Preserving and addressing improvement ideas without distracting the mobbing session is the goal of this board.

## Invite the Boss(es)

Agile teams value transparency. Inviting organizational leaders into a mobbing session is an effective way to teach the organization what developing software is really like, and to build empathy for development teams. Again, the benefits of strong-style pairing means that the people driving the machine don't have to be programmers. I've taken part in mobbing sessions with CTOs, CFOs, development managers, product managers, etc.

This is especially important in organizations that treat developers like cookie-cutter, fungible resources. It is still common to encounter organizations that view software development as the mechanical process of typing commands into a computer, completely removing a developer from their context, their expertise in technology, the domain, and/or the system. These organizations tend to:

* Move developers and project work constantly to meet scheduling needs
* Create schedules dictated by management (consistently fixing both scope and time for projects) 
* Add developers to projects in a misguided attempt to increase throughput and pull in deadlines
* Separate development teams from their customers (or any decision making about the work) perpetuating a "masters-and-minions" organization where the developers are told what to do
* Treat development teams as order takers and not problem solvers 


Getting people in the organization to see what programming is really like will go a long way in addressing this organizational dysfunction. Hopefully with a better understanding of how development teams operate organizations will start adopting more effective organizational practices.

## Conclusion

<img src="/img/mobbing-practices.jpg" class="img-responsive" />

These are just a few of the techniques we've found that made mob programming a valuable practice. There are most certainly more, keep experimenting to discover what they are.

