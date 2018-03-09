---
layout: post
section-type: post
title: Safety, Accuracy, Efficiency, then Scale
comments: true
category: development practices
tags: [agile-development, coaching, anti-patterns]
---

It's quite common for companies to attempt to scale their development organization by adding developers and teams before improving the system of work. Too often companies incorrectly equate growth with hiring, resulting in a focus on staffing instead of identifying opportunities to improve the system of work. These system improvements have a positive effect on the efficiency, and often morale, of the existing organization. Adding more people to a problematic system of work not only makes fixing these problems harder, but exacerbates existing problems. 

Each new employee in a broken system adds less value than the previous. At some point the organization crosses the Rubicon and each new hire negatively impacts the ability to deliver value to customers. Organizations with these troubled systems often don't know when they've crossed this threshold and continue to add people, believing that more people must be able to get more work done. Despite the fact that [the Mythical Man Month](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959) was published over forty years ago, companies still struggle under the false assumption that doubling the workforce will get the work done twice as fast. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">“If you hire good people into a broken system, it doesn’t fix the system, it breaks the people!” Jez Humble</p>&mdash; Nicole Rauch (@NicoleRauch) <a href="https://twitter.com/NicoleRauch/status/960827149585395712?ref_src=twsrc%5Etfw">February 6, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Improve the System Before Scaling

Achieve safety, then accuracy, then efficiency, then add people to scale the organization. Adding people before accomplishing the previous steps will result in exacerbating existing problems. Organizations have to backtrack to improve the system before they can realize the value of these new employees.

> Underlying it all: Learn to go safe, then accurate, then fast, then big. It's the only order that makes any sense. When we skip one we end up having to go back and pick it up  
> &mdash; _[Tim Ottinger](https://www.twitter.com/tottinge)_


## Gather Feedback

Before adding developers, examine the system of work in detail and get feedback from teams. If you aren't a member of a cross-functional team you won't see the same problems the teams do. The teams know where the obvious pain points are. Ask them for feedback and act on the feedback you have already received. Developers aren't _"petulant children"_ as they are often treated in Tayloristic organizations. Every team I've worked with wanted to do great work and make their customers happy. They bring complaints to management when the system of work is preventing them from improving. 

If you have development coaches or scrum masters encourage them to identify issues. It often helps to have someone not actively doing the work but embedded with the team identify points of waste. 

## Where to Focus Improvement 

The remainder of this article describes the areas I recommend focusing on before adding more people to a troubled system of work. 

### Continuous Integration / Continuous Delivery

Are the teams practicing Continuous Integration (CI)? Are they integrating code with each other at least once per day? How about Continuous Delivery (CD)? Is the code always in a deployable state or does go through periods of being broken? Is the build and release pipeline completely automated? Can a single click deploy changes in a matter of minutes or is manual intervention and manual testing required to release the software? By improving development team practices, automated tests, and the deployment strategy, existing teams will be working safer, more accurately (creating less bugs), and become much more efficient. There should be a focus on getting to fast, repeatable, and wholly automated builds and deployments.

### Long Build Times

Are teams waiting for builds that take more than ten to fifteen minutes on build servers? This is downtime that every developer experiences. Adding developers makes the problem worse for the existing developers, as there is more contention on build servers and more queuing waiting for builds to finish. 

Investigate the source of slow builds. Is it an issue that can be improved by upgrading server hardware or adding build agents? Adding hardware or additional software licenses is a inexpensive activity that can increase the productivity of the entire organization. 

Are tests the slowest part of the build? Get help with the design of the existing test suite. Often teams who do not have experience with TDD or microtesting end up writing very large and slow tests. Are tests accessing a database, the file system, or relying on an external service? Can tests only be written against the user interface of the system because of software design issues? Refactor the tests to no longer interact with these parts of the system (which almost always involves refactoring the code under test to make it amenable to unit testing). Encourage teams to track test runtimes and fix slow running tests. 

### Developer Hardware

Are teams working in a huge monolithic codebase? I've seen large, poorly designed codebases drive up local compile and test times. Improving the local build times and development environment can create another huge improvement in developers' workflow. Not only does it get developers the time back waiting on the build, it has a much larger impact, keeping them in flow longer and preventing them from getting distracted every time they build.

#### Monitor Local Build Times

Monitor the local build times and make sure you understand when a security patch or new virus scanning software has negatively effected it so they can be rolled back and investigated further. If you have a separate IT or security department make sure that your organizations are aligned. Slowing the development effort of multiple teams for the sake of security is often a false optimization. There is nearly always a way to work safely and securely without sacrificing the performance of the developer's environment.

### Reduce Cross-Team Dependencies

One of the biggest issues that negatively affects team performance is cross-team dependencies and handoffs. Teams often block each other and must begin other work, increasing work in progress (WIP) which leads to creating inventory. It's important to reduce these cross-team dependencies in both the scope of work (i.e., don't split features or projects across teams) and the areas of the application. There is a huge cost to the overhead in communication and churn when multiple teams are changing the same areas of the code. 

I recently experienced teams separated by several timezones who needed to modify the same exact object. One team would end of their day ready to refactor an object in the morning only to come to work and find it was completely rewritten and moved somewhere else overnight by a team working on the opposite side of the globe. This type of churn decreases team effectiveness and slows teams down given the amount of detailed communication and delay required to accomplish any work.

#### Vertical Slicing Features

One simple way to reduce dependencies is to make sure that entire features are given to teams. I continue to see organizations split the work for a single feature across multiple teams. This increases cycle time, adds integration risk, creates additional integration testing, and promotes the accumulation of inventory. One team invariably gets blocked waiting for an input from another team. Get the right people working together to solve the problem, and stop spreading individual features across teams.

### Identify Explicit Boundaries 

In a large, poorly designed software system removing cross team code dependencies can be a challenging effort. An alternative to breaking apart the system is to focus on each team's areas of code. Ensure that teams are communicating through well-defined, explicit interfaces. Instead of fighting Conway's law embrace it! This is often the first step in decomposing applications. 

#### Improve Feedback Loops

Decomposing these areas of code has the added benefit of improving local build times. This helps encourage developers to practice TDD and work in very small increments. If the test and build cycle is long (more than a few seconds) developers struggle with practices like TDD that rely on nearly instantaneous feedback loops. Fast feedback loops are one keys to productive development teams. 

### Focus on Highest Value Work

Are teams spending time on low value work? Are features sitting for months without being deployed or sometimes not being deployed at all? Just focusing teams on the highest value work can yield an immediate increase in productivity. There are longer term gains that come from increased morale when teams know that their work really matters.

### End-of-Life Low Value Features

Existing features are a constraint on the system and they are often the reason why it takes increasingly longer for features to be added to systems over time. The maintenance cost of features is non-negligible and is an ongoing tax on the organization. It's important to identify and remove unused and low-value features. Organizations that are accustomed to focusing on projects instead of products tend to think of features in terms of the creation cost. Once the project is over that code is no longer costing them money and teams can move on to create the next batch of features for the next project. Unfortunately, just the opposite is true. 

### Customer Access

Ensure that development teams have a close and ongoing relationship with their customers. This will help everyone in the organization with the prioritization of work. Many technology companies still rely on outdated, Tayloristic organization design to create a _masters and minions_ command-and-control structure. This results in having a separate organization that is responsible for interacting with the customer and determining the details of the work. This kind of organization delivers prescriptive solutions to development teams instead of trusting the team with a problem and access to their customer. 

There is a lot of inefficiency built into this way of organizing. Handing teams solutions and not problems limits the possibilities of potential solutions, which often results in more expensive and complicated solutions. Further, the people making the decisions don't understand the application the same way those who built it do. By getting the team access to the customer at the problem definition stage, the developers can frequently help identify signficantly better solutions. This is a huge morale booster to teams who currently feel like they are just _"development resources"_ and order takers.

To read more about the importance of autonomous product teams I recommend [this article](https://www.mindtheproduct.com/2018/02/team-smarter-autonomous-product-teams-work-better/).

### Work Area

Are the teams' work areas optimized for collaboration? The best work is done when teams can collaborate effectively. If work areas are distracting this will decrease a team's effectiveness. If developers choose to wear headphones, focus on solo work, and interact less, the work will suffer because of it. 

## Conclusion
 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fast, automated builds<br>Powerful dev machines<br>Team autonomy<br>Managed, explicit team dependencies<br>Strict prioritization<br>Fast, closed feedback loops<br><br>Those sound universal to me.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/958403407617888256?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  

[Tim Ottinger](https://www.twitter.com/tottinge)'s tweet sums up this post perfectly. Fast, closed feedback loops, strict prioritization of work, managed and explicit dependencies between teams, and team autonomy. These are qualities of effective development teams, and should be the focus of improvement for all development ogranizations. More so, these are the things that *must* be improved before scaling a development organization.  
