---
layout: post
section-type: post
title: The Problem with Software Metrics
comments: true
category: development practices
tags: ['extreme programming', 'agile development']
---

This is a follow up to my article, [The Dangers of Development Tools](/2015/02/21/the-dangers-of-development-tools.html). That post described the problems that typically arise when teams adopt workflow tools. Tools like Jira and VersionOne, for example, that tout themselves as "Agile Tools." When teams choose a workflow tool over a  physical card wall they commonly begin to track a lot of meaningless and potentially harmful metrics. This tends to happen for a number of reasons. These workflow tools:

* Provide a certain level of built-in metric tracking
* Make tracking custom metrics easy
* Recommend tracking some of these metrics as a "best practice"

Collecting metrics may seem like the right thing to do for your organization but I argue more times than not managing agile teams by metrics will devalue your practices and instead push you in a direction that violates the agile principles and values. I'm certainly not saying all metrics are bad. But metrics should be collected for very specific purposes, beyond that **they are at best a distraction and at worst harming your organization**.

## What Problem Are We Solving?
The first question to ask yourself when collecting a metric is what problem are you trying to solve or what specific question are you trying to answer? If you can answer those questions then, by all means, collect the metric. If you can't answer that or just want the data to "analyze later" I would strongly recommend avoiding the metric altogether. 

## Transparency

I've seen many well-intentioned organizations collect these metrics believing that by doing so they are gaining visibility and transparency into the cross-functional development teams. Transparency, as we know, is one of the core values of agile software development. I would argue, however, that there are other ways to get that kind of transparency. 

### Information Radiators

One way to provide transparency is to use information radiators in the common areas where the team works. These could be the story card wall, a card wall tracking team blockers, etc.

### Burn Downs

Release and iteration burn downs are very important in providing visibility outside of the individual team. These burn downs can help illuminate issues that teams are having. But for organizations still clinging to a command and control structure, they will commonly use burn downs to tell teams to just go faster, resulting in lower quality work and taking ownership away from the team.

> When you see a turn coming up, you don’t speed up, you adjust your steering. Same thing with burn down: use it to decide what to do, not to drive your speed up.
> &mdash; _Ron Jeffries, Do You Want Crappy Agile?_
 
Some metrics are absolutely useful but the ones that are most commonly tracked encourage organizations to focus on the wrong things (e.g., velocity, planned vs. actual release dates, number of stories completed in an iteration). Teams who have a deep understanding of Agile practices recognize these metrics as nonsense. This will foster distrust in your best teams if they are being measured by their velocity (which is metric to assist planning not an efficiency / productivity measure), or whether they hit a predefined release date. Agile would recommend you release incremental improvements regularly so a missed date doesn't make sense as a metric. 

## Metrics to Support Retrospective Goals

While I do believe people should be generally skeptical of metrics there is one type I see a lot of value in, problems that come out of team retrospectives. Teams should use metrics to measure these problems if possible. Also metrics should be used to see if any proposed retrospective goals are improving the problem. What makes these metrics different are two very important characteristics. 

* They are created by the cross-functional team
* They are temporary
 
Once the goal has been accomplished the team can stop tracking the metric. Who better to know how to improve the team than the team actually doing the work. They should be having regular retrospectives and continuously improving.

## Leadership Driven Metrics or Cross Team Metrics

In contrast, a vast majority of metrics collected for use outside of the cross-functional team are the problematic ones. In some cases the organization wants to measure some things across the different cross-functional teams (which, by the way, is a very bad idea in itself). These types of metrics put your organization at risk to unravel your agile practices and oppose agile principles. 

### A Symptom of Command & Control 

The biggest problem that I see with these types of metrics is that they can be a tell-tale sign of an organization not ready to truly embrace Agile software development. As organizations adopt agile practices, leadership accustomed to working in an environment where they tell development teams what to do, when to do it, and when the deadline is, start to fear that they are losing too much control. They cannot give ownership to the individual cross-function teams. So, instead they let them "play at agile" while continuing to operate as a command and control organization. One way to assert that control is to use metrics to continue to manage the team. They collect metrics to use so that they can tell the team to work longer hours, refactor less, "create less technical debt", write less automated tests, etc.  

Even if your organization has embraced agile and doesn't suffer from these alarming problems, leadership-driven metrics are still an issue. 

### Lacking Team Input

These metrics lack the individual team's input. The team would know best what metrics actually matter to them and how best to improve themselves. By making the team aware of what problem the organization is trying to solve they may be able to help come up with a different way to address the problem. Instead these metrics are used so that the leadership of the organization can address problems for the cross-functional team. Again, these are well-meaning decisions. Maybe the organizational leadership is trying to address an organization wide issue or trying to allow the team to focus on story work instead of addressing the issue. However this can result in disenfranchising the team and taking away the ownership of their work.

### Too Low Level

Another risk of leadership driven metrics is that they are too low level, focusing on the story level or even below that. This commonly results in micro-managing the cross-functional teams and taking away team ownership and their ability to self-organize. If the leadership focuses on release burn downs and information at that level and leave all of the day-to-day, story related metrics to the cross-functional teams there is less of a chance of using these metrics to manage the team.


### Gaming Metrics
  
[Ron Jeffries](http://ronjeffries.com/) has written an article about managing an agile team via metrics, [Do You want Crappy Agile](http://ronjeffries.com/articles/016-03/you-want/)?  There he discusses risks of managing teams via metrics. If they are working as hard and as smart as they can and are being asked to increase velocity, for example, story point estimates will increase. If they are being asked to get more stories done, they will write smaller stories. 

## Agile Values at Stake

When metrics are used to manage an agile team this results in team's gaming the metrics. This ruins transparency on the team. Furthermore, if metrics are used as a way to assert control over a cross-functional team the team loses ownership of their work and their ability to self-organize. If you really want to know if you agile teams are doing well, favor measuring outcomes over metrics. 

## Further Reading

I highly recommend reading [Ron Jeffries'](http://ronjeffries.com/) article I've mentioned in this post, [Do You want Crappy Agile?](http://ronjeffries.com/articles/016-03/you-want/) It inspired me to publish this post discussing the problems I've encountered with software metrics.