---
layout: post
section-type: post
title: Delivery, Feedback, and Iteration 
comments: true
category: development practices
tags: ['agile development', 'anti-pattern']
---

Frequent deliveries of working software, acquiring customer feedback, iterating based on that feedback, and the engineering practices to support these activities are the things I most commonly see missing from poor agile implementations. When I hear developers complain about how much they hate agile software development they are missing some of these key activities. Often they are missing all of these activities.

By contrast XP teams who have embraced agile engineering practices, continuously improve, and consistently iterate on their features based on frequent customer feedback tend to love the way they work. It took me leaving the XP world and joining my first Scrum team to finally understand the frustration developers have with the state of agile software development. I know I am not alone in that sentiment having spoken to many XP developers about this topic. 

## The Antiquated Factory Model 

The reason why such a stark difference exists is that when agile is done right it embraces the unknowns and challenges of building software. Creating software is experimental, creative, and it contains lots of unknowns. When software organizations cling to their old manufacturing mindsets they continue to embrace this dissonance. This is where ideas like developers as fungible resources, estimates treated as deadlines, and separating decision maker responsibility from those doing the work continue to thrive. 

It's impossible to know everything up front but these companies still batch big deliverables as *projects*. They consider success hitting a date with what the customer originally asked for. They hold any feedback for the end of the large project, never mind that we have accrued decades of evidence that "requirements up front" doesn't work. They oversimplify the challenges of building unknown features and believe that estimates can be translated directly into due dates on Gantt charts, making developers "work harder" if they provided a bad estimate based on a high-level, fifteen-minute conversation six months ago.

Alternatively, a focus on the activities that depend on frequent feedback and iteration throws all of this old thinking out and embraces how software creation actually works. It embraces the nature of software development and that's why developers love it. From first hand experience I know that removing this dissonance creates a low stress and highly productive environment. This leads to happy, productive developers and a better product. Everybody wins!

## Where we Go Wrong 

Unfortunately, it is easy in Scrum (or one of the scaling frameworks) to go through the motions, buy in to all of the Scrum ceremonies, but not address any of the organizational issues that prevent teams from really becoming agile. In some cases this is a company's first step towards something greater, but all too often organizations stop here. 

### Delivering

Teams can't iterate unless there is something to iterate on. Delivering frequently to production is a necessary activity on agile software teams. Too often organizations hide behind the idea that *"our customers can't handle the rate of change that Amazon or Google's customers do."* But these are just excuses that are rooted in a old way of thinking. This leads to batching up changes over long periods of time and releasing less frequently. Large batches and infrequent releases are consistently problematic. 

#### The Misuse of Feature Flags

Feature flags can be a great tool for development teams. They can be used to enable Continuous Integration and for AB testing to gather feedback from users. Too often though they are misused to keep features dark in production for long periods of time. Organizations can claim they are releasing after every timeboxed iteration but use feature flags to enable features after long periods of time in large batch projects. This cripples the teams ability to solicit feedback or iterate. 

Ths separation of deploying a feature and enabling it in production allows a situation to arise where teams are completely disconnected from their software being enabled in production. It's another part of the organization's responsibility to flip feature flags when enough work has accumulated behind them. If teams have no idea when their software will be enabled in production they can't possibly hope to gather feedback. 

### Customer Feedback

Too often organizations don't gather feedback at all or the feedback they do gather happens outside of the development teams. Unless the teams are empowered to change their backlog of work based on feedback it stands to reason they don't *need* to get that feedback themselves. Further, big batch projects make it impossible to use feedback effectively to steer the day-to-day work. Typically in these cases a new big batch project is created based on the feedback received by someone in the organization outside of the team.

Organizations still rooted in old ways of thinking will separate determining what to build from the team that actually builds it. If the thought is that developers are fungible resources and the company wants high-utilization of these resources, just tell those resources what to build. Don't take up their valuable cycles determining what to build or what to make of feedback. Just batch up another project and tell them to build it. The telephone game effect is very likely in these situations. It is a contributing factor to the common problem with software not meeting the needs of its users.

### Iterating

Teams cannot iterate without feedback. As a cornerstone of agile software development I would contend that if you aren't iterating based on customer feedback, you are aren't getting the benefits of your agile implementation. Acknowledging that building great software requires experimentation and addressing a lot of unknowns requires teams to iterate. However, if all work is batched into large deliverables the ability to iterate is lost. A common indicator of this is if the organization assigns version numbers to features. For example, *"We'll get feedback after the new billing pages are live and sometime next year if we can fit it in the roadmap we'll address that feedback in Billing v2"*.

#### The "MVP"

The abuse of the term *Minimum Viable Product* (MVP) is a topic for its own blog post. However, I want to point out that I often see the term "MVP", used improperly, to make excuses why big batch projects are necessary and why its preferred to deliver less often. 

### Engineering Practices

Even if organizations try to embrace all of these activities but don't invest in the engineering practices that enable them they are going to run into problems. The XP engineering practices, including refactoring / Evolutionary Design, TDD, pair programming, collective code ownership, and Continuous Integration all enable teams to incrementally deliver. These practices take time to learn and they are very different than how developers are used to working. Adopting Scrum without any focus on engineering practices (which appears to be the norm) only sets teams up for failure.

## The Challenges of Scrum

I find both Scrum and XP valuable but I would chose XP (and the more recent practices that have merged from it) over Scrum given the choice. There is one really huge challenge with Scrum, its greatest benefit but also it's achilles heel: Teams can start practicing Scrum in a day or two. Scrum ceremonies can be adopted, it can seem like teams are following everything in the Scrum Guide (LINK) but without making a single substantitive change to the way they work or their organization. 

Ron Jeffries discusses this in his post, Business Agile: Built on Sand. Teams that practice Scrum and ignore the engineering practices are ignoring half of the story. More dangerously they may be doing more damage to the organization than they have before adopting Scrum. 

## Conclusion
Is your organization agile because you have standups, planning ceremonies and sprints? Or are you releasing often, getting customer feedback, and iterating based on that feedback? Are the teams doing the work the ones receiving this feedback? Does the team own the decision making about the work or is that pushed from above them? These are all important questions to ask yourself. Acting on these can help improve your organization and the quality of employees you can atract and retain. 
