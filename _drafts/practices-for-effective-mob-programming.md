---
layout: post
section-type: post
title: Practices for Effective Mob Programming
comments: true
category: development practices
tags: ['mob-programming']
---

I've been fortunate to have an opportunity to coach with [Industrial Logic](https://www.industriallogic.com) consultants [Tim Ottinger](https://www.twitter.com/tottinge) and [Michael Rieser](https://twitter.com/MichaelRieser) for the last several months. A key aspect of this training is introducing development teams to mob programming. As word spread in the organization other teams became interested in mob programming. Without the benefit of going through an Industrial Logic workshop that focuses on mob programming they asked for a primer on effective mob programming practices.

The topics in this post come from a conversation [Tim Ottinger](https://www.twitter.com/tottinge) and I had with a team. 

## Use a Mob Programming Tool

Those who know me know that I prefer pen, paper, and index cards over most tooling. However, I cannot recommend using a tool for Mob Programming enough. There are several that exist, but my favorite is [mobster.cc](http://www.mobster.cc). Using this tool encourages consistent switching intervals so that everyone in the mob takes a turn and driving and navigating. It also encourages disciplined break taking which is very important. I've witnessed teams give up using a tool only to fall back on bad habits making the mobbing sessions much less effective. 

### Seven Minute Timer

We've found that seven minutes seems to be the optimal time to switch drivers in a mob session with six to eight people. This can be modified in mobster to tune to your mob session and number of people taking part in it. Of course YMMV and you can adjust the time based on what works best for your circumstances. However, I would challenge you to keep the switching interval small and to experiment with making the switching increasing shorter. 

### Disciplined Break Taking

An important aspect of Mob Programming is the inclusion of the Pomodoro technique and disciplined break taking. Being disciplined about taking frequent breaks helps the mob stay focused and perform at their best. Too often I see teams struggling with problems, walk away for ten minutes, and have a solution immediately upon reconvening. 

## TDD

I have only every practiced Mob Programming when teaching or practicing Test-Driven Development (TDD). While you can practice mob programming without TDD, pairing them together enables a lot of good habits. TDD is an important practice in its own right. Furthermore, the flow in TDD does not require loading the entire problem state into a single developer's head, due to having very small and fast feedback cycles (i.e., red, green, refactor, integrate). The enables the mob to work in very small batches and be able take frequent breaks without setbacks.

## Strong Style Pairing Driver/Navigator Model

While mobbing we recommend using [Llewellyn Falco's strong style pairing](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html) model. The driver is the person and the keyboard and she is the only person not coding, she is operating the machinery. All ideas from the mob has to go through her hands to make it into the code. Switching regularly everyone gets a chance to drive and to program. This enables a lot of other great practices including inviting non-developers to take part in the mob session.

## Encourage Full Team Participation

Since the driver does not need to know how to program this opens up the opportunity to include the entire team in mob sessions. Resist the urge to make mob programming "a developer thing." We are battling decades of waterfall practices and functional silos in development organizations where developers and QA don't work together. This practice aims to change that. We recommend that everyone take part in a mob session who is required to take a story or task from "To Do" to completion. Typically this means, developers, QA engineers, UX experts, Operations engineers, and product owners / product managers will all take part in mob programming sessions.  

### Introduces WIP limits

By getting the full team to take part in the mob session it naturally reduces Work in Process (WIP) and can help the team introduce WIP limits. By limiting WIP teams reduce inventory and increase their throughput.

### Increases First Time Through and Decreases Cycle Time


We've found that by getting the entire team to work together on a single piece of work that First Time Through (FTT) increases, work never goes backwards on the board, and because of this the team's cycle time decreases.

### Single Piece Flow

When the entire team joins a mob session they reduce WIP to one and achieve what lean calls single piece flow (or one piece flow). This reduction in WIP increases the team's throughput. Often individuals are used to being busy and will instead start multiple pieces of work to "stay productive" and instead end up reducing the performance of the team by increasing WIP which increases inventory.  We remind teams in these situations to "watch the baton not the runners," to focus on the flow of the work and not on individual busyness. 

## Waste Snake

Tim Ottinger introduced me to the concept of a waste snake. Unfortunately, working alone and within funtional silos encourages accepting (instead of waste) waste in the development process. Instead ridding our process of waste we pick up additional work when met with an impediment, which increases WIP and reduces overall productivity. . However, when everyone on the team has to wait the pain becomes obvious and magnified across every member of the team. When teams waits and impediments while mobbing they document it on the waste snake. The waste snake items then can be worked off by the team to continuously improve the daily work.

## Learnings Board

Learning happens rapidly when teams work closely together in a mob session. When the team learns new keyboard shortcuts, new facts about the system, etc. they document this on a learnings board in the team room. At the end of each day what was learned is captured and sent to each team member.

## Avoid Runaway

Practicing strong-style pairing ensures that the person at the keyboard is not the person coding. If teams stop practicing this it's easy for the driver to runaway and start coding her own ideas, leaving the rest of team to be bystanders. It's important to recognize this and call it out when it happens. We want to strive for an environment where everyone in the mob is contributing to the work. 

## Debate In Code

When debates arise about different ways of approaching a problem, instead of discussing the debate we encourage debating in code. Try both approaches and let the mob decide which way is best, remembering that it would be best for your idea to go through someone elses hands into the code. 

## Shared Team Settings

When pairing or mobbing it's important that the team has shared editor settings. We want the experience for the team to be the same regardless of whose computer is being used, or better yet setup your shared settings on a shared team development machine. 

## Promise Debt
As things come up in the mob that we want to address but don't want to get distracted from our main goal we add a card describing the work to a promise debt board. It's important to work these off before we consider our work complete though. It's important to not lose improvement ideas but also not derail the mobbing session by getting distracted from the work at hand.

## Invite the Boss(es)

Agile teams value transparency. One of the most effective ways for the organization to build empathy for developers is for them to join a mob session.  Again, the benefits of strong-style pairing means that the people driving the machine don't have to be programmers. I've taking part in mobbing sessions with CTOs, CFOs, development managers, product managers, etc.

This is especially important in organizations that treat developers like fungible resources. It is still too common for organizations to view software development as the mechanical process of typing commands into a keyboard, completely removed from expertise in the domain and a developer's context. Organizations that move developers and project work constantly to meet scheduling needs, that add more developers to projects in a misguided attempt to increase throughput and pull in deadlines, and that separate development teams from their customers (or really any decision making about the work) are all examples of this dysfunction. 

Getting people in the organization to see what programming is really like, that is far more thinking and experimenting than typing will go a long way in addressing this organizational dysfunction.


https://www.itworld.com/article/2940562/development/introducing-mob-programming-the-best-team-technique-youve-probably-never-heard-of.html


