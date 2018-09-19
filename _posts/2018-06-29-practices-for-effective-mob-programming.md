---
layout: post
section-type: post
title: Practices for Effective Mob Programming
comments: true
category: development practices
tags: ['mob programming']
---

For the last several months I've been fortunate to coach development teams with [Industrial Logic](https://www.industriallogic.com) consultants [Tim Ottinger](https://www.twitter.com/tottinge) and [Michael Rieser](https://twitter.com/MichaelRieser). A key aspect of this coaching is introducing teams to mob programming. We've found that mob programming is a fantastic way to teach technical practices like Test-Driven Development (TDD), refactoring, evolutionary design, etc. Teams adopt these practices quickly and continue to improve through mob programming sessions. 

As word spread in the organization, other teams became interested in mob programming. Without the benefit of going through an [Industrial Logic workshop](https://www.industriallogic.com/blog/real-work-workshops/) a team asked for a primer on effective mob programming practices. The topics in this post come from a conversation [Tim Ottinger](https://www.twitter.com/tottinge) and I had with one of those teams. 

Tim recently published a post about this topic based on that conversation we had with the team: [A Few Tips for Mob Programming](https://www.industriallogic.com/blog/a-few-tips-for-mob-programming/).  

## Use a Mob Programming Tool

<img src="/img/mobster-small.png" class="img-responsive" />

Adopting a mob programming tool is one of the simplest things you can do to improve your mob programming sessions. These tools will help the team build and maintain good habits while mobbing. Several tools exist, but my favorite is [mobster](http://mobster.cc) written by [Dillon Kearns](http://www.dillonkearns.com/). The tool encourages consistent switching intervals, ensuring that everyone in the session takes a turn as the driver. This increases the overall engagement of the members of the session. It also supports disciplined break taking, a very important aspect of mobbing. Teams who avoid using a mobbing tool often fall back on old habits making mobbing sessions much less effective. 

### Experiment with Switching Intervals

For the teams I've worked with we've found that a seven minute switching interval is preferred in a mob session with six to eight people. This can be modified in mobster to tune both the driving and break duration. I recommend adjusting the time based on what works best for your circumstances. However, **I would challenge you to keep the switching interval small and to experiment with smaller switching intervals.** Shorter intervals help the mob participants stay engaged and focused. 

### Disciplined Break Taking 

<img src="/img/pomodoro.jpg" class="img-responsive float-left" style="display:inline" />

An important aspect of mob programming is the inclusion of the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) for disciplined break taking. The Pomodoro technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work intervals, traditionally 25 minutes in length, separated by short breaks. The intervals are named __*pomodoros*__ the plural of the Italian word for tomato, named after the tomato-shaped kitchen timer. 

Being disciplined about taking frequent breaks helps the mob stay focused and productive during the day. For more information about disciplined break taking take a look at the article, [Taking Breaks in a Disciplined Way](http://agileotter.blogspot.com/2017/11/taking-breaks-in-disciplined-way.html) by Tim Ottinger.

## Test-Driven Development

<img src="/img/tdd.jpg" class="img-responsive float-left" style="display:inline" alt="The TDD Cycle" />

We pair mob programming with Test-Driven Development (TDD), often teaching and coaching teams on TDD in mob programming sessions. While you can practice mob programming without TDD, pairing them together leads to additional benefits. TDD is an important practice in its own right and mobbing is a great way to learn it. Due to TDD's fast feedback cycles (i.e., red, green, refactor, and integrate), achieving flow in TDD does not require loading the entire problem state into a single developer's head. This enables the mob to work in very small batches and take frequent breaks without setbacks.

## Strong-Style Pairing Model

While mobbing [Llewellyn Falco's strong-style pairing](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) model is recommended. The driver is the person at the keyboard and they are the only person in the mobbing session not actively coding. All ideas from the participants have to go through the driver's hands to make it into the code. Switching regularly, everyone gets a chance to be the driver and to program. This enables other effective practices including inviting non-developers to take part in the mob session.

>  For an idea to go from your head into the computer it **MUST** go through someone else's hands.  
> _&mdash; Llewellyn Falco describing the Strong Style Pairing Golden Rule_

## Encourage Full Team Participation

Since the driver does not need to be a programmer, an opportunity emerges to include the entire team in mob sessions. **Resist the urge to make mob programming _"only a developer practice."_** It is common in the industry for development teams to collaborate poorly, if at all, having been influenced by decades of waterfall processes and functional reporting silos. This practice can help reverse that. Once you see how effective teams are when everyone is working on the same thing at the same time, you won't settle for communicating with teammates through comments in Jira issues anymore.

I recommend that everyone take part in a mob session who is required to take a single story or task from start to completion. Typically, this means developers, QA, UX, Operations, and Product Owners will all take part in mob programming sessions depending on the nature of the work. 

Individuals can still leave and rejoin the mob for any reason, but the session continues without them. For example, if a large refactoring is taking place, some of the non-programmers may want to step away if they don't feel like they are contributing. However, they are encouraged to return to the mobbing session at any point.

> Mob programming is a software development approach where the whole team works on the same thing, at the same time, in the same space, and at the same computer.    
> _&mdash; Woody Zuill - Mob Programming - A Whole Team Approach_

### Introduces WIP limits

When the full team takes part in mob sessions, it naturally reduces Work in Process (WIP) and can help the team introduce WIP limits. By limiting WIP, teams reduce inventory and increase their throughput.

### Increases First Time Through and Decreases Cycle Time

When the entire team works together on a single piece of work, First Time Through (FTT) increases, work no longer goes backwards on the board, rework is eliminated, and as a result the team's [cycle time](https://kanbantool.com/kanban-library/analytics-and-metrics/kanban-definition-of-lead-time-and-cycle-time) decreases. 

### Single Piece Flow

Full team mobbing and its reduction in WIP enables the lean concept of single piece flow (or [one piece flow](http://www.kaizenworld.com/kaizen/one-piece-flow.html)). Often individuals are so accustomed to being busy they will start multiple streams of work in an effort to _"stay productive"_. This results in the opposite of the intended effect, reducing the performance of the overall team by increasing WIP which increases inventory and decreases throughput. It's important to remind teams in these situations to **_"watch the baton not the runners,"_**, to focus on the flow of the work through the system and not on individual busyness. 

## Waste Snake

<img src="/img/waste-snake.png" class="img-responsive float-left" style="display:inline" />

[Tim Ottinger](https://www.twitter.com/tottinge) introduced the concept of a waste snake to the teams we've worked with. Unfortunately, working alone or within functional silos makes it easy to accept waste in the development process. It is common during solo work to start additional tasks when met with an impediment, increasing WIP, and reducing overall productivity. 

When everyone in a mobbing session has to wait due to an impediment, the pain becomes obviously visible and magnified. When teams are met with impediments while mobbing they document it on the waste snake board. The waste snake items can then be worked off by the team to continuously improve their daily work.

> Improving daily work is even more important than doing daily work.  
> _&mdash; Gene Kim - The DevOps Handbook_ 

## Learnings Board

Learning happens rapidly when teams work closely together in a mob session. When the team learns new keyboard shortcuts, new facts about the system, the domain, the technology, etc., they document this on a learnings board in the team room. At the end of each day what was learned is captured and sent to each team member. This board should be placed in a location where it is visible to the mob participants. 

## Avoid Runaway Drivers
<img src="/img/speeding.jpg" class="img-responsive" />

Practicing strong-style mobbing ensures that the person at the keyboard is not the person coding. If teams stray from this practice, it's easy for the driver to runaway and start coding their own ideas. This reduces focused mob participants to easily-distracted bystanders. It's important to recognize this and call it out when it happens. Strive for an environment where everyone in the mob is contributing to the work. 

## Debate In Code

<img src="/img/debate.jpg" class="img-responsive" />

When debates arise about different ways of solving a problem, debating in code is encouraged. Try both approaches and let the mob guide the solution. It is easy to get lost debating abstract ideas. Implementing them often results in better solutions emerging from the collaboration of the mob.

## Shared Team Settings

While mobbing it's important that the team has shared editor settings. The development experience should be the same regardless of whose computer is being used. This avoids the lost time and focus that is required to adapt to individual editor plug-ins and keymaps.

## Promise Debt

As the mob encounters issues they want to address, but don't want to get distracted from the main goal, they add a card describing the work to a promise debt board. It's important to work these off before the work is considered complete. Preserving and addressing improvement ideas without distracting the mobbing session is the goal of this board.

## Invite the Leaders 

Inviting organizational leaders to a mobbing session is an effective way to teach the organization what developing software is really like. Additionally, it can build empathy for development teams. I've taken part in mobbing sessions with CTOs, CFOs, development managers, product managers, and others. Having leadership experience impediments and their effects on a team in real-time, will help them address the organizational issues causing the impediments.

## Additional Resources

<img src="/img/mobbing-practices.jpg" class="img-responsive float-left" style="display:inline" />

These are just a few of the techniques we've found that make for effective mob programming sessions. There are most certainly more. Keep experimenting to discover them. 

Here are some resources to learn more about mob programming:

* [Mob Programming - A Whole Team Approach](https://www.agilealliance.org/resources/experience-reports/mob-programming-agile2014/) - Woody Zuill, creator of Mob Programming
* [A Day of Mob Programming - 2012](https://www.youtube.com/watch?v=p_pvslS4gEI) - A time-lapse video of mob programming at Hunter Industries
* [A Day of Mob Programming - 2016](https://www.youtube.com/watch?v=dVqUcNKVbYg) - Catch up with Hunter Industries four years later to see how mob programming has changed the organization in another time-lapse video
* Woody's [mobprogramming.org](http://mobprogramming.org/) website
