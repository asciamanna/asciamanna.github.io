---
layout: post
section-type: post
title: Delivery, Feedback, and Iteration 
comments: true
category: development practices
tags: ['agile development', 'anti-patterns']
---

Frequent deliveries of working software, acquiring customer feedback, iterating based on that feedback, and the technical practices to support these activities are the things I most commonly see missing from poor agile implementations. When I hear developers complain about how much they hate agile software development they are missing some of these key activities. More often they are missing all of them. 

By contrast teams who have embraced agile technical practices, continuously improve, and consistently iterate on their features based on frequent customer feedback tend to love the way they work. It only took me leaving the eXtreme Programming (XP) world and joining my first Scrum team to understand the frustration developers have with the state of agile software development [^1]. I know I am not alone in that sentiment having spoken to many XP developers about this topic. 

## The Antiquated Factory Model 

The reason why such a stark contrast exists is that when agile is done well it embraces the unknowns and challenges of building software. Creating software is experimental, creative, and it contains many unknowns. When software organizations cling to their old manufacturing mindsets they embrace the dissonance between how they run a software project and the reality for the teams creating the software. This is where bad ideas continue to thrive. Ideas like developers are fungible resources who can be moved between teams and projects to meet scheduling needs, estimates can be treated as deadlines, and the responsibility for making decisions about the work can be disconnected from those doing the work.

It's impossible to know everything up front but these companies still batch big deliverables as *projects*. They consider success hitting a date with what the customer originally asked for. They hold any feedback for the end of the large project, ignoring the decades of evidence that "requirements up front" development doesn't work. They oversimplify the challenges of building unknown features and believe that estimates can be translated directly into due dates on Gantt charts, making developers "work harder" if they provided a bad estimate based on a high-level, fifteen-minute conversation six months ago (if they were given the opportunity to estimate at all).

Alternatively, a focus on the activities that depend on frequent feedback and iteration throws all of this old thinking out and embraces how software creation actually works. It embraces the nature of software development and that's why developers love it. From first hand experience I know that removing this dissonance creates a low stress and highly productive environment. This leads to happy, productive developers and a better product. Everybody wins!

## Where we Go Wrong 

Unfortunately, it is too easy in Scrum to go through the motions, buy in to all of the Scrum ceremonies, but not address any of the organizational issues that prevent teams from really becoming agile. In some cases this is a company's first step towards something greater, but all too often organizations stop here. 

### Delivering

Teams can't iterate unless there is something to iterate on. Delivering frequently to production is a necessary activity on agile teams. Too often organizations hide behind the idea that *"our customers can't handle the rate of change that Amazon or Google's customers do."* But these are just excuses that are rooted in an old way of thinking. This leads to batching up changes over long periods of time and releasing less frequently. Large batches and infrequent releases are consistently problematic. 

#### The Misuse of Feature Flags

Feature flags can be a great tool for development teams. They can be used to enable Continuous Integration and for A/B testing to gather feedback from users. Too often though they are misused to keep features disabled in production for long periods of time. Organizations can claim they are releasing after every timeboxed iteration but use feature flags to enable features after long periods of time in large batch projects. This cripples the teams ability to solicit feedback or iterate. 

The separation of deploying a feature and enabling it in production creates situations where teams are completely disconnected from their software being enabled in production. If teams have no idea when their software will be enabled in production they can't possibly hope to gather feedback. 

### Customer Feedback

Too often organizations don't gather feedback at all or the feedback they do gather happens outside of the development teams. Unless the teams are empowered to change their backlog of work based on feedback it stands to reason (from the organization's point of view) they don't *need* to get that feedback themselves. Further, big batch projects make it impossible to use feedback effectively to steer the day-to-day work. Typically in these cases a new big batch project is created based on the feedback received by someone in the organization outside of the team.

Organizations still rooted in old ways of thinking will separate determining what to build from the team that actually builds it. If the thought is that developers are fungible resources and the company wants high-utilization of these resources, just tell those resources what to build. Don't take up their valuable cycles determining what to build or analyzing recent feedback. Just batch up another project and tell them to build it. 

The telephone game effect is very likely in these situations given the number of information handoffs are required. It is certainly a contributing factor to software not meeting the needs of its users. Great software does not get created by telling developers exactly what to build.

### Iterating

Teams cannot iterate without feedback. As a cornerstone of agile software development I would contend that if you aren't iterating based on customer feedback, you are aren't getting the benefits of your agile implementation. Acknowledging that building great software requires experimentation necessitates iteration. However, if all work is batched into large deliverables the ability to iterate is lost. 

#### The "MVP"

The abuse of the term *Minimum Viable Product* (MVP) is a topic for its own blog post. However, I want to point out that I often see the term "MVP", used improperly, to make excuses why big batch projects and infrequent deliveries are necessary. 

### Engineering Practices

Even when organizations embrace all of these activities but don't invest in the technical practices that enable them they struggle to find success. The XP technical practices, including refactoring / Evolutionary Design, TDD, pair programming, collective code ownership, and Continuous Integration equip teams to incrementally deliver. These practices take time to learn and they are very different than how developers are used to working. Adopting Scrum without any focus on technical team practices (which appears to be the norm) only sets teams up for failure.

> Without technical learning, Agile often harms both the enterprise and the developer...weak technical practices is building upon sand  
> &mdash; Ron Jeffries, [Business Agile: Built Upon Sand](http://ronjeffries.com/articles/017-08ff/sand/)

## Conclusion

Is your organization agile because you have standups, planning ceremonies and sprints? Or are you delivering often, getting customer feedback, and iterating based on that feedback? Are the teams doing the work the ones receiving this feedback? Does the team own the decision making about the work or is that pushed to them from above? Do the teams use agile technical practices to ensure that they can continue to deliver in a fast changing environment? These are all important questions to assess where your organization is on its journey.  

[^1]: This is not an indictment of Scrum, but my experience has been that I've seen a lot of "agile in name only" Scrum implementations. 
