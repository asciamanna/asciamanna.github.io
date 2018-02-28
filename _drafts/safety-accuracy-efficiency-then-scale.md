---
layout: post
section-type: post
title: Safety, Accuracy, Efficiency, then Scale
comments: true
category: development practices
tags: [agile-development, coaching, anti-patterns]
---

Often companies attempt to scale their development organization by adding developers and teams before improving the system of work. Too often companies incorrectly equate growth with hiring. By focusing on hiring they ignore opportunities to improve the system of work. These improvements have a huge positive effect on the efficiency, and often morale, of existing teams. Adding more people to a problematic system of work makes fixing these problems significantly harder and exacerbates existing problems. 

Each new hire in a broken system adds less value than the previous new hire. At some point they cross the rubicon and each new hire negatively impacts the ability to deliver value to customers. Organizations with these troubled systems often don't know when they've crossed the threshold and continue to add people, because they believe that more people must be able to get more work done. Despite the fact that [the Mythical Man Month](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959) was published over forty years ago, companies still struggle with the false assumption that doubling the workforce will get the work done twice as fast. 

There is a sequence to improvements that help development teams and organizations succeed. It ends with increasing the staff in the organization if necessary, it doesn't begin there. 

## Improve the System Before Scaling

Achieve safety, then accuracy, then efficiency, then add people to scale the organization. Adding people before accomplishing the previous steps will result in exacerbating existing problems. Organizations have to double back to improve the system before they can realize the value of these new employees.

> Underlying it all: Learn to go safe, then accurate, then fast, then big. It's the only order that makes any sense. When we skip one we end up having to bo back and pick it up  
> &mdash; _[Tim Ottinger](https://www.twitter.com/tottinge)_


IMAGE HERE

## Gather Feedback

Before adding developers, examine the system of work in detail and get feedback from the teams. If you aren't a member of a cross-functional team you don't see the same problems the teams do. The teams usually know where the obvious pain points are. Ask them for more feedback and act on the feedback you have already received. The developers aren't _"complainers"_ as they are often described in Tayloristic organizations. Every team I've worked with wanted to do a great job and make their customers happy. They bring complaints to management when the system of work is preventing them from improving. 

If you have an organization with development coaches or Scrum Masters have them look for waste. It sometimes helps to have someone not actively doing the work but embedded with the team to help identify points of waste. 


## Where to Focus Improvement 

The remainder of this article describes the areas I recommend focusing on before adding more people to a troubled system of work. 

### Continuous Integration / Continuous Delivery

Are your teams practicing Continuous Integration (CI), are they integrating with each other at least once per day? How about Continuous Delivery? Is the code always in a deployable state or does go through periods of being broken? Is the build and release process completely automated? Can a single click deploy changes in a matter of minutes or is manual intervention and manual testing required to release the software? By improving development teams practices, automated tests, and the deployment strategy the existing teams will be working safer, more accurately (creating less bugs), and become much more efficient. You should be focusing on getting to fast, repeatable, and wholly automated builds and deployments.

### Long Build Times

Are teams waiting for builds that take more than fifteen to twenty minutes on build servers? This is downtime that every developer experiences and it will only be exacerbated by adding more developers to the organization. In these cases new developers make the problem worse for the existing developers, as there is more contention on build severs and more queuing waiting for builds to finish. 

Investigate the source of slow builds. Is it a problem with the build server hardware or number of build agents? Adding hardware is a cheap activity that can increase the productivity of the entire organization. Are tests the slowest part of the build? Get help with the design of the existing test suite. Often teams who do not have experience with TDD or microtesting end up writing very large tests that tend to be slow. Are your tests hitting a database, accessing the file system, relying on an external service? These all tend to be slow. Refactor the tests and the code under test to no longer interact with these parts of the system. Empower teams to track test timings and fix slow running tests. In one investigation I've found a test that took thirteen seconds. It was reduced to microseconds by replacing the usage of a auto-mocking library with a hand-rolled stub.

### Developer Hardware

Are your teams working in a huge monolithic codebase? If so I've often seen it make building the application (if you are working with a compiled language) and running the test locally a source of significant waste. Improving the local build times and environment can create another huge improvement to developer workflow. Not only does it get developers the time back waiting on the build, it has a much larger impact, keeping them in flow longer and preventing them from getting distracted on every build.

#### Monitor Local Build Times

Monitor the local build times and make sure you understand when a security patch or new virus scanning software has negatively effected build times so it can be rolled back and investigated further. If you have a separate IT department or security department make sure that your organizations are aligned. Slowing the development effort of multiple teams for the sake of security is often a false optimization. There is nearly always a way to work safely and securely without sacrificing developer time and effort.

### Reduce Cross-Team Dependencies

One of the biggest issues that negatively affects team performance is cross-team dependencies and handoffs. Teams often end up getting blocked and must start something else, increasing work in progress (WIP) and building inventory. It's important to reduce these cross-team dependencies in both the scope of work (i.e., don't split features / projects across teams) and the areas of the application. There is a huge cost to the overhead in communication and churn when multiple teams are changing the same areas of the code. 

One recent example I have seen: teams separated by several timezones needed to modify the same exact object. One team would go home at the end of their day ready to refactor an object in the morning only to come to work and find it was completely rewritten and moved somewhere else overnight by a team working on the opposite side of the globe.

#### Vertical Slicing Features

One very simple way to reduce dependencies is to make sure that entire features are given to teams. I continue to see organizations split the work for a single feature across multiple teams. This increases cycle time, adds integration risk, and promotes the accumulation of inventory. One team invariably gets blocked waiting for an input from another team. Get the right people working together to solve the problem, and stop spreading individual features across teams. 

### Identify Explicit Boundaries 

In a large, poorly-designed system removing cross team dependencies can be vary from being very hard to seemingly impossible. An alternative to breaking apart the system is to focus on teams' areas of code. Ensure that teams are communicating through well-defined interfaces. Instead of fighting Conway's law embrace it! This is often the first step in decomposing applications. 

Decomposing these areas has the added benefit of improving local build times. This helps encourage developers to practice TDD and work in very small increments. If the test and build cycle is long (more than a few seconds) developers struggle with practices like TDD that rely on nearly instantaneous feedback loops.

### Focus on Highest Value Work

Are teams spending time on low value work? Are features sitting for months without being deployed and enabled in production or sometimes not being deployed at all? Just focusing teams on the highest value work can yield an immediate increase in productivity. There are longer term gains that come from increased morale when teams know that what they are working on really matters.

### End-of-Life Low Value Features

Every existing feature in a system limits the solution space for future features. The maintenance cost of existing features is not negligible and is an ongoing tax to the organization. It's important to identify and remove unused and low-value features. Organizations that are used to focusing on projects instead of products tend to think of features in terms of the creation cost. Once the project is over that code is no longer costing them money and teams can move on to create the next batch of features for the next project. Unfortunately, just the opposite is true. 

### Customer Access

Ensure that development teams have a close and ongoing relationship with their customers. This will help everyone in the organization with the prioritization of work. Too often companies rely on outdated, Tayloristic organization design to create masters and minions (or thinkers and workers if you prefer). This results in having a separate organization that is responsible for interacting with the customer and figuring out exactly what to do. This kind of organization delivers prescriptive solutions to development teams instead of trusting the team with a problem and access to their customer. 


There is a lot of inefficiency built into this way of organizing. Handing teams solutions and not problems limits their solution, which often results in more expensive and complicated solutions to customer problems. Further, the people making the decisions don't understand the application the same way those who built it do. By getting the team access to the customer at the problem definition stage, the developers can help identify very different solutions. Teams will develop solutions more efficiently and those solutions will have a much better chance of directly addressing the needs of the customer. This is a huge morale booster to teams who currently feel like they are just "development resources" and order takers.

To read more about the importance of autonomous product teams I recommend [this article](https://www.mindtheproduct.com/2018/02/team-smarter-autonomous-product-teams-work-better/)

### Work Area

Are the team's work areas optimized for collaboration? The best work is done when teams collaborate. If rooms or open floors are filled with multiple teams this will decrease their effectiveness. This reduces teams' ability to effectively collaborate. If developers choose to wear headphones and interact less the work will suffer because of it. 

## Conclusion
 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fast, automated builds<br>Powerful dev machines<br>Team autonomy<br>Managed, explicit team dependencies<br>Strict prioritization<br>Fast, closed feedback loops<br><br>Those sound universal to me.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/958403407617888256?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Tim Ottinger](https://www.twitter.com/tottinge)'s tweet sums up this post perfectly. Fast, closed feedback loops, strict prioritization of work, managed and explicit dependencies between teams, and team autonomy. These are the things that help teams work safer, producing less bugs, and eventually faster. These are the things every development organization should focus on continuously improving. More so, these are the things that *must* be improved before scaling development organizations.  
