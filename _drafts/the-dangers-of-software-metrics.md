---
layout: post
section-type: post
title: The Dangers of Software Metrics
comments: true
category: development practices
tags: ['extreme programming', 'agile development']
---

This post is a follow up to my article, [The Dangers of Development Tools](/2015/02/21/the-dangers-of-development-tools.html). That article described the problems that typically arise when teams adopt workflow tools. These are tools like JIRA and VersionOne for example, tools that tout themselves as "Agile Tools." One topic I didn't address in that post is that when teams choose to move away from a physical card wall to a workflow tool they typically begin to track a lot of meaningless and potentially harmful metrics. This tends to happen for a number of reasons:

* These tools provide a certain level of built-in metric tracking
* These tools make tracking custom metrics easy
* These tools recommend tracking these types of metrics

Collecting metrics may seem like the right thing to do for your organization but I argue more times than not managing agile teams by metrics will devalue your practices and instead push you in a direction that violates the agile principles and values. I'm certainly not saying all metrics are bad. But metrics should be collected for very specific purposes, beyond that **they are at best a distraction and at worst harming your organization**.

## What Problem Are We Solving?
The first question to ask yourself when collecting a metric is what problem are you trying to solve or what specific question are you trying to answer? If you can answer those questions then, by all means, collect the metric. If you can't answer that or just want the data to "analyze later" I would strongly recommend avoiding the metric altogether. 

### Transparency

I've seen many well-intentioned organizations collect these metrics believing that by doing so they are gaining visibility and transparency into the cross-functional development teams. Transparency, as we know, is one of the core values of agile software development. I would argue that there are other ways to get that kind of transparency. Some metrics are absolutely useful but the ones that are most commonly tracked are focusing on the wrong things (e.g., velocity, planned vs. actual release date, planned vs. actual stories completed in an iteration). Teams who have a deep understanding of Agile recognize these as nonsense. So you are only going to build distrust in your best teams if they are being measured by their velocity (which is metric to assist planning not an efficiency / productivity metric), or whether they hit a predefined release date. Which again, agile would recommend you release incremental improvements into production regularly so a missed date doesn't make sense as a metric. 


## Metrics to Support Retrospective Goals

While I do believe people should be skeptical of metrics there is one type I see value in. If a cross-functional team has a problem that comes out of a retrospective, using a metric to measure the problem and whether any retrospective goals are improving the problem is a very good idea. What makes these metrics different are two very important characteristics. They are created by the cross-functional team (not being levied against them my the leadership of the organization) and they are temporary. Once the goal has been accomplished the team can stop tracking the metric. Who better to know how to improve the team than the team actually doing the work. They should be having regular retrospectives and continuously improving.

## Leadership Driven Metrics or Cross Team Metrics

In contrast, a vast majority of metrics being pushed down to cross-functional development teams by the organizational leadership are problematic. In some cases the organization wants to measure some things across the different cross-functional teams (which, by the way, is a very bad idea in itself). However, these types of metrics put your organization at risk to unravel your agile practices and oppose agile principles. 

### A Symptom of Command & Control 

The biggest problem that I see with these types of metrics is that they are a tell-tale sign of an organization not ready to truly embrace Agile software development. As organizations adopt agile practices, leadership accustomed to working in an environment where they tell development teams what to do, when to do it, and when the deadline is, start to fear that they are losing too much control. They cannot give ownership to the individual cross-function teams. So, instead they let them "play at agile" while continuing to operate as a command and control organization. One way to assert that control is to use metrics to continue to manage the team. They collect metrics to use so that they can tell the team to work longer hours, refactor less, create less technical debt, but write less automated tests because "the client isn't paying us to write test code." 

Even if your organization has embraced agile and doesn't suffer from these alarming problems, leadership-driven metrics are still an issue. 

### Lacking Team Input
Another problem is that these metrics lack the team's input. The team would know best what metrics actually matter to them. By making the team aware of what problem the organization is trying to solve the team may be able to help come up with a different way to address the problem. Instead these metrics are used so that the leadership of the organization can solve the individual team's perceived problems for them, taking away the team's ownership.

### Gaming Metrics
[Ron Jeffries](http://ronjeffries.com/) has written an article about managing an agile team via metrics, [Do You want Crappy Agile](http://ronjeffries.com/articles/016-03/you-want/)?  There he discusses that a majority of metrics are useless. Furthermore, teams will game the metrics. If they are working as hard and as smart as they can and are being asked to increase velocity, for example, story point estimates will increase. If they are being asked to get more stories done, they will write smaller stories. 

### Agile Values at Stake
When metrics are used to manage an agile team the result is a gaming of the metrics. This ruins transparency on the team. Furthermore, if metrics are used as a way to assert control over a cross-functional team the team loses ownership of their work and their ability to self-organize. If you really want to know if you agile teams are doing well measure outcomes.
