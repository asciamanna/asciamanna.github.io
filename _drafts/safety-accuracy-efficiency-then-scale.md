---
layout: post
section-type: post
title: Safety, Accuracy, Efficiency, then Scale
comments: true
category: development practices
tags: [agile-development, coaching, anti-patterns]
---

Companies commonly attempt to scale their development organization by adding developers instead of improving the system of work. This results in a focus on staffing instead of identifying improvement opportunities. Adding people to a system that isn't working well further strains it, exacerbating existing problems and making them harder to fix. 

Each new employee in a problem-riddled system adds less value than the previous. If the systemic problems are not addressed these diminishing returns become negative returns, and each new hire negatively impacts the ability to deliver value to customers. Organizations with these troubled systems often don't know when they've crossed this threshold and continue to add people, believing that more hands on keyboards is the solution to their problems. Despite the fact that [the Mythical Man Month](https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959) was published over forty years ago, companies still struggle under the false pretense that doubling the workforce will get the work done twice as fast. 

> When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.
> &mdash; _Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering_

## Improve the System Before Scaling

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">“If you hire good people into a broken system, it doesn’t fix the system, it breaks the people!” Jez Humble</p>&mdash; Nicole Rauch (@NicoleRauch) <a href="https://twitter.com/NicoleRauch/status/960827149585395712?ref_src=twsrc%5Etfw">February 6, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Achieve safety, then accuracy, then efficiency and then add people to scale the organization. Adding people before accomplishing the previous steps will result in exacerbating existing problems. Organizations have to backtrack to improve the system of work before they can realize the value of these new employees.

> Underlying it all: Learn to go safe, then accurate, then fast, then big. It's the only order that makes any sense. When we skip one we end up having to go back and pick it up  
> &mdash; _[Tim Ottinger](https://www.twitter.com/tottinge)_


## Gather Feedback

Before adding developers, examine the system of work in detail and get feedback from teams. If you aren't a member of a team delivering software you often won't see the problems they are experiencing. Ask teams for feedback and act on the feedback you have already received. Developers aren't _"petulant children"_ as they are often treated in Tayloristic organizations. Every team that I've worked with wanted to do great work and make their customers happy. They bring complaints to management when the system of work is preventing them from doing so.

## Where to Focus Improvement 

### Continuous Integration & Continuous Delivery

Are the teams practicing Continuous Integration (CI)? Are they integrating code with each other at least once per day? How about Continuous Delivery (CD)? Is the code always in a deployable state, or does go through periods of being broken? Is the build and release pipeline completely automated? Can a single click deploy changes in a matter of minutes, or is manual intervention and manual testing required to release the software? 

CI helps identify integration bugs when they occur, and can often prevent them entirely. Without CI, integration bugs get identified much later, causing delays late in the development cycle. As companies add more developers the likelihood of integration issues increases. The introduction of CI and CD ensures that a working version of the software is always available to test or release. 

By improving development team practices, automated tests, and the deployment pipeline, existing teams will begin to work safer, more accurately, and efficiently. There should be a focus on getting to fast, repeatable, and wholly automated builds and deployments before adding more teams.

### Decrease Long Build Times

Are teams waiting for builds that take more than ten minutes on build servers? This is downtime that every developer experiences. Adding more developers makes the problem worse for everyone as there is more contention on build servers and more queuing waiting for builds to finish. 

Investigate the source of slow builds. Is it an issue that can be improved by upgrading server hardware or adding build agents? Adding hardware or additional software licenses is an inexpensive activity that can increase the productivity of the entire organization. 

Are tests the slowest part of the build? Get help with the design of the existing test suite. Often teams who do not have experience with TDD or microtesting end up with very large and slow tests. Are tests accessing a database, the file system, or relying on an external service? Can tests only be written against the user interface of the system because of software design issues? Refactor the tests to no longer interact with these parts of the system (which almost always involves refactoring the code under test to make it amenable to testing). Encourage teams to track test run times and fix slow running tests. 

#### An Example Improvement

For example, let's imagine an organization has 50 developers who are paid $75 per hour (on average). They all have to wait on a single build that takes 30 minutes due to the fact that the build server needs to build a large, monolithic application and has a suite of slow tests (some of which test business logic through the UI via selenium tests). Given how long the build takes there is additional time lost to builds queueing when the build agents are exhausted. Developers decide they do not want to wait so they commit and integrate code less often. These longer feedback cycles makes them even less productive. 

Now if the build time can be reduced to 15 minutes, assuming that each developer is committing four times per day and there are 260 work days in a year, this would result in a time savings of at least 13,000 man-hours per year and a cost savings of over $975,000 per year. This does not include the time spent for distracted developers and the increase in work in progress (WIP) waiting for builds to finish.

#### Inappropriate UI Testing

A common source for slow builds is a suite of tests that test exclusively through the user interface of the system using tools like selenium. In some cases this may be the result of a poorly designed system. However, it's just as likely to occur because "automation testing" is often considered an activity that happens outside of cross-functional development teams. This results in "automation engineers" who only have access to the external interface since they lack the knowledge of the internal system. 

Some level of automated UI testing can be appropriate, but there should be very few of these tests. Most of the tests should probe below the UI, leaving the majority of the tests to execute at the object level.

### Improve Developer Hardware

Are teams working in a huge monolithic codebase? I've seen large, poorly designed codebases drive up local compile and test times. Improving the local build times and the development environment can create another huge improvement in developers' workflow. Not only does it get developers the time back waiting on the build, it has a much larger impact, keeping them in flow longer and preventing them from getting distracted every time they build.

Using the same numbers from above, if the local compile takes two minutes and it can be reduced to 10 seconds by decomposing the application so that developers don't always have to build the entire application we find another significant source of savings. Developers practicing TDD compile somewhere between 250 and 400 times per day (compiling every minute or two while working). If we estimate that these developers compile 50 times per day, reducing the build to 10 seconds results in a time savings of 19,861 man-hours per year. Resulting in a savings of nearly $1.5 million dollars per year. Again this does not include the cost of distraction. 

### Reduce Cross-Team Dependencies

One of the biggest issues that negatively affects team performance is cross-team dependencies and handoffs. Teams often block each other and must begin additional work, thus increasing WIP which leads to creating inventory. All of this reduces productivity. It's important to reduce these cross-team dependencies in both the scope of work (i.e., don't split features or projects across teams) and the areas of the application. There is a huge cost to the overhead in communication and churn when multiple teams are changing the same areas of the code. 

> These high performance teams had few to no handoffs with other teams. They were autonomous, cross-functional, co-located teams, trained and coached in agile management, planning, testing and development. 
> &mdash; _[Joshua Kerievsky](https://twitter.com/JoshuaKerievsky) CEO of Industrial Logic, from [Size Teams for Few to No Handoffs](https://www.linkedin.com/pulse/size-teams-few-handoffs-joshua-kerievsky/)_

#### Vertically Slice Features 

One simple way to reduce dependencies is to make sure that entire features are given to teams. I continue to see organizations split the work for a single feature across multiple teams. This increases cycle time, adds integration risk, creates the need for additional integration testing, and promotes the accumulation of inventory. One team invariably gets blocked waiting for an input from another team. Get the right people working together to solve the problem and stop spreading individual features across teams.

### Identify Explicit Boundaries 

In a large, poorly designed software system, removing cross team code dependencies can be a challenging effort. An alternative to breaking apart the system is to focus on each team's areas of the codebase. Ensure that teams are communicating through well-defined, explicit interfaces. This is often the first step in decomposing applications. 

#### Improve Feedback Loops

Decomposing areas of code and improving the packaging structure has the added benefit of improving local build times. This helps encourage developers to practice TDD and work in very small increments. If the test and build cycle is long (more than a few seconds) developers struggle with practices like TDD that rely on nearly instantaneous feedback loops. **Fast feedback loops are one of the keys to unlocking productive development teams**.

### Focus on Highest Value Work and Small Batches

Are teams spending time on low value work? Are features sitting for months without being deployed or sometimes not being deployed at all? Just focusing teams on the highest value work can yield an immediate increase in productivity. There are longer term gains that come from increased morale when teams know that their work really matters.

#### End-of-Life Low Value Features

Existing features are a constraint on the system. They are often the reason it takes increasingly longer for features to be added to systems over time. The maintenance cost of features is non-negligible and is an ongoing tax on the organization. It's important to identify and remove unused and low-value features because of this fact. 

#### Avoid Project Thinking

Organizations that are accustomed to focusing on projects instead of products tend to think of features in terms of creation cost. Once a project is considered complete, developers can be dispersed to start their next projects. Projects are temporary but the code that is produced during a project is not. This kind of thinking tends to ignore the ongoing cost of existing features in a system and creates the _"feature factory"_ attitude that the organization just needs more developers churning out an endless list of features.  

A strict prioritization of work, elimination of dead code and low-value features, and a focus on keeping teams together to build expertise in an area of software creates productivity increases and expertise that is required before scaling an organization. 

### Give Teams Access to their Customer 

Ensure that development teams have a close and ongoing relationship with their customers. This will help the organization identify and prioritize the high value work. Many technology companies still rely on outdated, Tayloristic organization designs to create a _masters and minions_ command-and-control structure. This results in having a separate organization that is responsible for interacting with the customer and determining the details of the work. This kind of organization delivers prescriptive solutions to development teams instead of trusting the team with a problem and access to their customer. 

There is a lot of inefficiency built into this way of organizing. Handing teams solutions instead of problems limits the solution space before involving the experts who build the software. This often results in a more expensive and complicated solution to the customer's problem. The people making the decisions don't understand the software the same way as those who build it do. By getting a team access to the customer at the problem definition stage, the team can help identify appropriate approaches. This is a huge morale booster to teams who currently feel like they are just _"development resources"_ and order takers.

To read more about the importance of autonomous product teams I recommend [this article](https://www.mindtheproduct.com/2018/02/team-smarter-autonomous-product-teams-work-better/).

### Fix the Work Area

Are the teams' work areas optimized for collaboration? The best work is done when teams can collaborate effectively. If work areas are distracting this will decrease a team's effectiveness. If developers choose to wear headphones, focus on solo work, and interact less, the work will suffer because of it. Teams who are used to solo work will struggle to onboard new team members, making scaling the organization very difficult.

## Conclusion
 
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fast, automated builds<br>Powerful dev machines<br>Team autonomy<br>Managed, explicit team dependencies<br>Strict prioritization<br>Fast, closed feedback loops<br><br>Those sound universal to me.</p>&mdash; Tim Ottinger (@tottinge) <a href="https://twitter.com/tottinge/status/958403407617888256?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  


[Tim Ottinger](https://www.twitter.com/tottinge)'s tweet sums up this post perfectly. Fast, closed feedback loops, strict prioritization of work, managed and explicit dependencies between teams, and team autonomy. These are some of the most important qualities of effective development teams, and should be the focus of improvement for all development organizations. More so, these are the things that must be improved before scaling a development organization.  
