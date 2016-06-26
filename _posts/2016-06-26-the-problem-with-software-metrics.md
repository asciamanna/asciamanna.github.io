---
layout: post
section-type: post
title: The Problem with Software Metrics
comments: true
category: development practices
tags: ['extreme programming', 'agile development']
---

This is a follow up to my article, [The Dangers of Development Tools](/2015/02/21/the-dangers-of-development-tools.html). In that post I described the problems that typically arise when teams adopt workflow tools. Tools like Jira and VersionOne, for example, that tout themselves as "Agile Tools." When teams choose a workflow tool over a physical card wall they commonly begin to track several meaningless and potentially harmful metrics. This tends to happen for a number of reasons:

* Workflow tools provide a level of built-in metric tracking
* Workflow tools make tracking custom metrics easy
* Workflow tools recommend tracking some of these metrics as a "best practice"

Collecting metrics may seem like the right thing to do for your organization, but I would caution that managing agile teams by metrics will devalue your practices. It will likely push you in a direction that violates the agile principles and values. I'm certainly not saying all metrics are bad, however, metrics should be collected for specific purposes. Beyond that **they are at best a distraction and at worst harming your organization**.

## What Problem Are We Solving?

When collecting a metric ask yourself (or your team) what problem are you trying to solve or what specific question are you trying to answer? If you can't answer those questions or just want the data to "analyze later," I would strongly recommend avoiding the metric altogether. 

<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Just because something is easy to measure, doesn’t mean you should.</p>&mdash; chet hendrickson (@chethendrickson) <a href="https://twitter.com/chethendrickson/status/742898138168463360">June 15, 2016</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Transparency

I've seen many well-intentioned organizations collect these metrics believing that by doing so they are gaining visibility and transparency into the cross-functional development teams. Transparency, as we know, is one of the core values of agile software development. I would argue, however, that there are other ways to get that kind of transparency without falling victim to optimizing teams via metrics. 

### Information Radiators

One way to provide transparency is to use information radiators in the common areas where the team works. These could be the story card wall or a card wall tracking team blockers, to name a few. There's a lot of information available about the various types of information radiators teams use. 

### Burn Downs

Release and iteration burn downs are very important in providing visibility outside of the cross-functional team. These burn downs can help illuminate issues that teams are having. As for organizations still clinging to a command and control structure, they will commonly use burn downs to pressure teams to just go faster, resulting in lower quality work and taking ownership away from the team.

> When you see a turn coming up, you don’t speed up, you adjust your steering. Same thing with burn down: use it to decide what to do, not to drive your speed up.  
> &mdash; _Ron Jeffries, Do You Want Crappy Agile?_
 
Some metrics are useful, but the ones that are most commonly tracked encourage organizations to focus on the wrong things (e.g., velocity, planned vs. actual release dates, number of stories completed in an iteration). Teams who have a deep understanding of agile practices recognize these metrics as nonsense. This will foster distrust in your best teams if they are being measured and managed by their velocity, for example. Velocity is a metric to assist planning not a productivity or efficiency measure.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">What metrics exist on the value of metrics?</p>&mdash; Bob Marshall (@flowchainsensei) <a href="https://twitter.com/flowchainsensei/status/743404959031562240">June 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Metrics to Support Retrospective Goals

While I do believe people should be generally skeptical of metrics, there is one type I see a lot of value in. Metrics to support problems that come out of team retrospectives. Teams should use metrics to measure these problems if possible. Metrics can also be used to see if any proposed retrospective goals are improving the problem or removing it altogether. What makes these metrics different are two very important characteristics. 

* They are created by the cross-functional team
* They are temporary
 
Once the goal has been accomplished, the team can stop tracking the metric. Who better to know how to improve the team than the team actually doing the work. They should be having regular retrospectives and continuously improving.

## Leadership-Driven Metrics or Cross Team Metrics

In contrast, a vast majority of metrics collected for use outside of the cross-functional team are the problematic ones. Often, organizations want to collect metrics so that they can make comparisons between cross-functional teams (which, by the way, is a bad idea). These types of leadership-driven metrics put your organization at risk to unravel your agile practices and oppose agile principles. 

### A Symptom of Command & Control 

The biggest problem that I have seen with these types of metrics is that they are commonly
 a tell-tale sign of an organization not ready to truly embrace agile software development. As organizations adopt agile practices, leadership accustomed to working in an environment where they tell development teams what to do, when to do it, and when the deadline is, start to fear that they are losing too much control. They cannot give ownership to the individual cross-function teams. Instead they let them "play at agile" while continuing to operate as a command and control organization. One way to assert that control is to use metrics to continue to manage the team. They collect metrics to use so that they can tell the team to work longer hours, refactor less, focus on new features, create less technical debt, write less automated tests, etc.  

Even if your organization has embraced agile and doesn't suffer from these alarming problems, leadership-driven metrics are still an issue. 

### Lacking Team Input

These metrics lack the cross-functional team's input. The team knows how to improve themselves and whether any metrics will assist them in doing so. By making the team aware of what problem the organization is trying to solve, they may be able to devise a better approach to addressing the problem. Instead, these metrics are used so that the leadership of the organization can address problems for the cross-functional team. Again, these are well-meaning decisions. Perhaps the organizational leadership is trying to address an organization-wide issue or trying to allow the team to focus on story work instead of addressing the issue. However, this can result in disenfranchising the team and taking away their ownership.

### Too Low Level

Another risk of leadership driven metrics is that they are too low level, focusing on the story level or even below that. This commonly results in micro-managing the cross-functional teams and taking away the team's ownership and their ability to self-organize. If the leadership focuses on release burn downs and information at that level and leaves all of the day-to-day, story related metrics to the cross-functional teams there is less of a chance of the organization falling into the trap of using these metrics to manage the team.


### Gaming Metrics
  
[Ron Jeffries](http://ronjeffries.com/) has written an article about managing an agile team via metrics, [Do You want Crappy Agile?](http://ronjeffries.com/articles/016-03/you-want/)  In it, he discusses the risks of managing teams via metrics and the natural progression for teams game these metrics. If teams are working as hard and as smart as they can and are being asked to increase velocity, for example, story point estimates will increase. If they are being asked to get more stories done, they will write smaller stories, etc.

## Agile Values at Stake

When metrics are used to manage an agile team this results in teams gaming the metrics. This begins chipping away at trust and transparency in the organization. Furthermore, if metrics are used as a way to assert control over a cross-functional team, the team loses ownership of their work and their ability to self-organize. If you really want to know if your agile teams are doing well, favor measuring outcomes over metrics. 

## Further Reading

I highly recommend reading [Ron Jeffries'](http://ronjeffries.com/) article that I've mentioned in this post, [Do You want Crappy Agile?](http://ronjeffries.com/articles/016-03/you-want/) It inspired me to publish this post discussing the problems I've encountered with software metrics.
