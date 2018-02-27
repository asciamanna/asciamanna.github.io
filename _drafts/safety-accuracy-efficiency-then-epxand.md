---
layout: post
section-type: post
title: Safety, Accuracy, Efficiency, then Expand 
comments: true
category: development practices
tags: [anti-patterns, agile-development, coaching]
---

One of the unfortunate things I've seen companies do is jump right to scaling their development organization, by adding developers, before improving the system of work. Too often companies equate growth with hiring. However, there is often a lot of improvements to the organization that can happen before scaling to add more developers. These improvements have a huge positive effect on the efficiency of the existing teams. Frequently adding more people to a problematic system of work makes fixing these problems significantly harder and exacerbates the existing problems. 

Each new hire in a broken system adds less value than the previous new hire, and at some point the rubicon is crossed and each new hire negatively impacts the delivery of value to customers. Organizations with these troubled systems often don't know when they've crossed the threshold and continue to add people, because more people must be able to get more work done. Despite the Mythical Man Month being published over forty years ago, companies still struggle with the false assumption that doubling the workfoce will get the work done twice as fast. 

There is an order to helping development teams and organizations succeed. This order ends with expanding the organization, it doesn't begin there. 

## The Order

Go Safe, then go accurately, then go efficiently, then expand your organization. Skipping to expanding before accomplishing the previous steps will result in trouble. 

IMAGE HERE

## Gather Feedback

Before adding developers and new teams of developers take a look at the existing system. Get feedback from the teams. They know where the pain points are. Ask them for more feedback, listen to the feedback you've already gotten. The developers aren't "complainers." Every team I've worked with wanted to do good work and resort to complaining when the system of work is preventing them from improving. If you have an organization with development coaches or Scrum Masters have them look for waste. It sometimes helps to have someone not actively doing the work but embedded with the team to identify points of waste. 


## Where to Focus Improvement 

The remainder of this article describes all of the things I recommend focusing on before adding more people.

### Continuous Integration / Continuous Delivery

Are your teams practicing Continuous Integration (CI), are they integrating with each other at least once per day? How about Continuous Delivery? Is the code always in a deployable state or does go through periods of being broken? Is the build and release process completely automated? Can a single click deploy changes in a matter of minutes or is manual intervention and manual testing required to release the software? By improving development teams practices, automated tests, and the deployment strategy the existing teams will be working safer, more accurately (creating less bugs), and become much more efficient.

### Long Build Times

Are teams waiting for builds that take over a half hour on build servers? This is downtime that every developer experiences and it will only be exacerbated by adding more developers to the organization. Investigate the slowness of the build. Is it a problem with the build server hardware or number of build agents? Adding hardware is a typically cheap activity that can increase the productivity of the entire organization? Are tests the slowest part of the build? Get help with the design of existing tests. Often teams who do not have experience with TDD or microtesting end up writing very large tests that tend to be slow. Are your tests hitting a database, accessing the file system, utilizing an external service? These all tend to be slow. Refactor the tests and the code under test to no longer interact with these parts of the system. Empower teams to track test timings and fix slow running tests. In one investigation I've found a a test that took thirteen seconds be reduced to microseconds by replacing the usage of a auto-mocking library with a handrolled stub.

### Developer Hardware

Are your teams working in a huge monolithic codebase? If so I've often seen it make building the application (if you are working with a compiled language) and running the test locally another area of waste. Improving the build times can create another huge improvement to developer workflow. Not only does it get developers the time back waiting on the build, it has a much larger impact keeping them in flow longer and preventing them from getting distracted on every build.

#### Monitor Local Build Times

Monitor the local build times and make sure you understand when a security patch or new virus scanning software has negatively effected build times so it can be rolled back and investigated further. 

### Reduce Cross-Team Dependencies

There are a lot of ways to accomplish this but one of the biggest issues is when development teams have dependencies on other teams. They often end up getting blocked and must start something else that increases work in progress (WIP). It's important to reduce these cross-team dependencies in both the scope of work and the areas of the application. This helps to enable team autonomy. There is a huge cost to the overhead in communication and churn when multiple teams are changing the same areas of the code. I've even seen teams separated by several timezones change the same exact object. These poor developers would go home ready to refactor an object in the morning only to come to work and find it was completely rewritten and moved somewhere else by a team working on the opposite side of the globe.

### Identify Explicit Boundaries 

In a large system removing cross team dependencies can be very hard or seemingly impossible. Alternatively put a focus on teams' areas of code communicating through well-defined interfaces. Instead of fighting Conway's law work with it! Decomposing these areas has the added benefit of improving local build times. This helps encourage developers to practice TDD. If the test and build cycle is so long developers struggle with practices like TDD that rely on nearly instantaneous feedback loops.

### Focus on Highest Value Work

Are teams spending time on low value work? Are features sitting for months without being deployed and enabled in production or sometimes not being deployed at all? Just focusing teams on the highest value work can yield an immediate increase in productivity. There are longer term gains that come from increased morale when teams know that what they are working on matters.

### End-of-Life Low Value Features

Every existing feature limits the solution space for future features. The maintenance cost of existing features is not negligible and is an ongoing tax to the organization. It's important to identify and remove unused and low-value features.  Organizations that are used to organizing around projects and instead of products tend to think of features in terms of the cost to create. Once the project is over that code is no longer costs them money and teams can move on to create the next batch of features in the next project. Unfortunately, just the opposite is true. 

### Customer Access

Ensure that development teams are close to their customers so they understand their experience and what matters to them. This will help everyone in the organization with the prioritization of work. Too often companies rely on outdated, Tayloristic organization design to create masters and minions (or thinkers and workers). This results in having a seprate organization that is responsible for interacting with the customer and figuring out exactly what to do. They deliver prescriptive solutions to development teams instead of trusting the team with a problem and access to their customer. There is a lot of inefficiency built into this way of organizing. Delivering teams solutions and not problems limits their solution space, often resulting in more expensive solutions to customer problems. Further, the people making the decisions don't understand the system the same way the developers do. By getting the team access to the customer at the problem definition stage the developers can help identify very different solutions. Teams will develop solutions more efficiently and those solutions have a much better chance of directly addressing the needs of the customer. This is a huge morale booster to teams who currently feel like they are order takers.

### Office Space

Does the office space that the team works in optimize for collaboration. The best work is done when teams collaborate. If the rooms are noisy, if there is an open floor plan, or if team rooms are jammed with multiple teams this will all decrease the effectiveness of the team. If developers choose to wear headphones and interact less the work will suffer because of it. 

## Conclusion
 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fast, automated builds<br>Powerful dev machines<br>Team autonomy<br>Managed, explicit team dependencies<br>Strict prioritization<br>Fast, closed feedback loops<br><br>Those sound universal to me.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/958403407617888256?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Tim Ottinger](https://www.twitter.com/tottinge)'s tweet sums up this post perfectly. Fast, closed feedback loops, strict prioritization of work, managed and explicit dependencies between teams, and team autonomy. These are the things that help teams work safer, with less bugs, and eventually faster. These are things every development organization should look at continuously improving. These are the things that really need to be improved before expanding the development organization.  

> Underlying it all: Learn to go safe, then accurate, then fast, then big. It's the only order that makes any sense. When we skip one we end up having to bo back and pick it up
> &mdash __[Tim Ottinger](https://www.twitter.com/tottinge)__
