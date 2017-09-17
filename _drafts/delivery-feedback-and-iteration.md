---
layout: post
section-type: post
title: Delivery, Feedback, and Iteration 
comments: true
category: development practices
tags: ['agile development', 'anti-pattern']
---

Frequent deliveries of working software, acquiring customer feedback, iterating based on that feedback, and the engineering practices to support these activities are the things I most commonly see missing from poor agile implementations. When I hear developers complain about how much they hate agile software development they are missing some of these key activities, and typically missing all of these activities.

By contrast XP teams who have embraced agile engineering practices, continuously improve, and consistently iterate on their features based on frequent customer feedback tend to love the way they work. It took me leaving the XP world and joining my first Scrum team to finally understand the frustration developers have with the state of agile software development. I know I am not alone in that sentiment having spoken to many XP developers about this topic. 

## Software Creation Dissonance

The reason why such a stark difference exists is that when agile is done right it embraces the unknowns and challenges of building software. Building software is well soft, it's virtual, it's experimental, and it contains lots of unknowns. When software organizations cling to their old manufacturing mindsets they continue to embrace this dissonance. 

It's impossible to know everything up front but these companies still batch big deliverables as *projects*. They consider success hitting a date with what the customer originally asked for. They hold any feedback for the end of the large project, never mind that we have accrued decades of evidence that "requirements up front" doesn't work. They oversimplify the challenges of building unknown features and believe that estimates can be translated directly into due dates on Gantt charts, making developers "work harder" if they provided a bad estimate based on a high-level, fifteen-minute conversation six months ago.

Alternatively, a focus on the activities that depend on frequent feedback and iteration throws all of this old thinking out and embraces how software creation actually works. It embraces the nature of software development and that's why developers love it. From first hand experience I know that removing this dissonance creates a low stress and highly productive environment. This leads to happy, productive developers and a better product. Everybody wins!

## Where we Go Wrong 

Unfortunately, it is easy in Scrum (or one of the scaling frameworks) to go through the motions, hold all of the Scrum ceremonies, but not address any of the organizational issues that prevent teams from really becoming agile. In some cases this is the first step towards something greater, but all to often organizations stop here. They get the easy parts but never get past them.

### Delivering

Teams can't iterate unless there is something to iterate on. Delivering frequently to production is a necessary activity on agile software teams. Too often organizations hide behind the idea that *"our customers can't handle the rate of change that Amazon or Google's customers do."* But this is just being stuck in a old way of thinking. This leads to batching up changes over long periods of time and releasing less frequently. 

#### The Misuse of Feature Flags

Feature flags can be a great tool for development teams. They can be used to enable Continuous Integration and for AB testing to gather feedback from users. Too often though they are misused to keep features dark in production for long periods of time. Organizations can claim they are releasing after every timebox but use feature flags to enable features after long periods of time in large batch projects. This cripples the teams ability to get feedback or iterate. 

Ths separation of deploying a feature and enabling it in production allows a situation to arise where teams are completely disconnected from their software being enabled in production. It's another part of the organization's responsibility to flip feature flags when enough work has accumulated behind them. If teams have no idea when their software will be enabled in production they can't possibly hope to gather feedback. 

### Customer Feedback

Too often organizations don't gather feedback at all or the feedback they do gather happens outside of the development teams. Unless the teams are empowered to change their work based on the feedback it stands to reason they don't *need* to get that feedback themselves. Further, big batch projects make feedback useless in the day-to-day work. Typically in these cases a new project is created to gather all of the feedback and deliver it to the team, and the cycle continues. 

Organizations still rooted in old ways of thinking will separate determining what to build from the team that actually builds it. If the thought is that developers are fungible resources and the company wants high-utilization of these resources, just tell those resources what to build. Don't take up their valuable cycles determining what to build or what to make of feedback. Just batch up another project and tell them to build it. The telephone game effect is very likely in these situations. It is a contributing factor to the common problem with software not meeting the needs of its users.

### Iterating

Iteration is tied very closely to feedback. Iteration is one of the cornerstones of agile development. Acknowledging that building great software requires experimentation and addressing a lot of unknowns requires teams to iterate. However, if all work is batched into large deliverables the ability to iterate is lost. A common indicator of this is if the organization assigns version numbers to features. For example, *"We'll get feedback after the new billing pages are live and sometime next year if we can fit it in the roadmap we'll address that feedback in Billing v2"*.

The timeboxes common in agile methodologies are designed so that teams can iterate on features. Without the ability to iterate timeboxes tend to lose a lot of their value. They can become random stopping points between picking from a large list of tasks to complete for a larger project. 

#### The "MVP"


### Engineering Practices

Even if organizations try to embrace all of these activities but don't invest in the engineering practices that enable them they are going to run into problems. The XP engineering practices, including refactoring, TDD, pair programming, Continuous Integration, and Evolutionary Design all enable teams to incrementally deliver. These practices take time to learn and they are very different than how developer are used to working. Adopting Scrum without any focus on engineering practices (which appears to be the norm) only sets teams up for failure.

## The Challenges of Scrum

I don't want to make a Scrum sucks and XP is great argument. I find both valuable but I would chose XP (and the more recent practices that have merged from it) over Scrum given the choice. There is one really huge challenge with Scrum, its greatest benefit but also it's achilles heel: Teams can start practicing Scrum in a day or two. Scrum ceremonies can be adopted, it can seem like teams are following everything in the Scrum Guide (LINK) but without making a single substantitive change to the way they work. 

Ron Jeffries discusses this in his post, Business Agile: Built on Sand. Teams that practice Scrum and ignore the engineering practices are ignoring half of the story. More dangerously they may be doing more damage to the organization than they have before adopting Scrum. 