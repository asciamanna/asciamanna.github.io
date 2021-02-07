---
layout: post
section-type: post
title: Demanding Predictability
subtitle: The Costs of Predictive Software Practices 
comments: true
excerpt_separator: <!--more-->
category: leadership
tags: ['agile development', 'anti-patterns']
---

One of the main reasons software organizations want to adopt agile ways of working is to become more predictable. Software drives businesses and businesses want to know when products will be delivered, the funding and personnel required to meet organizational goals, etc. The problem with how I see this being realized in the industry is that the vast majority of these companies have not made the cultural shifts to fundamentally change the way they work. Trying to demand predictability from teams creating software, which is uncertain and unpredictable by its nature, is a recipe for disaster. Often I tell organizations if they embrace agile ways of working and truly change the way they operate they are likely to become more predictable, but this is not "predictability" as they currently understand it. 
<!-- more -->

It sounds like a riddle, but adopting agile practices that embrace the unpredictable and uncertain nature of knowledge work will enable organizations to better plan and address the challenges of the work. According to [the 14th Annual State of Agile Report](https://stateofagile.com/#ufh-i-615706098-14th-annual-state-of-agile-report/7027494), 39% of respondents adopted agile to become more predictable. Without understanding how they need to shed their old ways of planning and predicting they will be undermining their own efforts to improve the way they deliver value to their customers. 

<img class="img-responsive" src="/img/reasons-for-adopting-agile.png" />

## Agile is Adaptive Not Predictive

You may have heard of this saying before, **Agile is adaptive not predictive**. Waterfall is predictive, which is why it is usually a bad choice for software development. In waterfall scope is fixed upfront; software organizations attempt to predict when they can deliver a specific set of features before they start the work. Those predictions become deadlines, traditional project management focuses on the iron triangle: managing a project to deliver all defined scope on time and on budget. In an attempt to make an unpredictable practice more predictable the organization works the development teams harder, resulting in quality issues. Quality is often abandoned first when trying to meet unrealistic deadlines. What results is missed dates, unhappy customers, and overworked and burnt out personnel. 

Alternatively, agile embraces the unpredictable and uncertain nature of software development by being adaptive. To harness these benefits organizations need to get away from trying to fix feature scope and schedule upfront or to work their teams harder when agile didn't give them the fixed scope and date guarantee they were looking for (_it won't ever give you that_). 

Agile is adaptive in nature, in fact Scrum (the most popular agile framework) is built on empiricism. This allows organizations to make decisions based on experience. By introducing regular intervals to inspect the work, get feedback through various feedback loops, and adapt their plan they can become more predictable. 

> Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk. Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaptation.
> &mdash;[The Scrum Guide](https://www.scrumguides.org/scrum-guide-2017.html)

## Shed the Old Ways
In command-and-control, waterfall organizations that still rely on traditional project management methods, plans are made upfront. Any deviation from the plan is considered a problem. The team's estimates of uncertain work often don't match actual time spent, which is to be expected when doing knowledge work. All too often estimates are treated as deadlines. As teams fall behind on the plan, well-intentioned management will add more people to the project (a modern day _"Nobody got fired for buying IBM"_), which typically results in further delays, achieving the opposite of the intended goal. I talk about this at length in this post [here]. 

Software development, like other forms of knowledge work, is unpredictable. A detailed plan for more than a few weeks is not only wasteful but a work of fiction. **Stop using adherence to a detailed plan as a measure of success.** It is common to see teams spend significant amounts of time estimating work, re-estimating work, and refining estimates. Estimation is a waste activity (as defined by lean), and a focus on improving estimates is a fool's errand. Teams should spend more time delivering customer value and improving those practices instead of endless hours spent guessing and projecting dates in the future. Instead organizations should rely on ways of working that don't require certainty in uncertain work for success.  

## The Cost of Demanding Predictability
When demanding predictability for work that is inherently unpredictable, like software development, the organization incurs significant costs. 

### Quality Degrades
Quality degrades as teams struggle to meet upfront plans. This further jeopardizes future plans, as quality issues in the software creates a tax on all future features, making it harder to deliver features quickly without defects. 

### Increase in Waste Activities
Developers spend more time estimating work and trying to "improve estimation." Spending skilled developers' time trying to get better at estimating instead of delivering the next most valuable feature for customers is wasteful. Estimating is a waste activity as defined by lean, and as lean teaches us, trying to find ways to spend less time estimating is critical to increase value delivery to our customers. 

### Buffering of Estimates
Teams will inflate estimates to account for the uncertain nature of the work if they know they will be used as deadlines. This lack of transparency impacts the ability to plan, inspect, and adapt. 

### Absence of Experimentation, Improvements, and Learning
The best software development teams continuously experiment. Its through this experimentation the team continuously improves how they work and innovate. These activities will stop altogether when teams are under pressure. Without experimentation you lose all innovation at the team-level. 

### Morale Issues
As a developer I have had first hand experience having my estimates used deadlines and then reprimanded when we didn't hit dates. As a technical lead I sat with Product Managers explaining agile estimation, the cone of uncertainty, estimate ranges, and not to commit to features but outcomes. Operating in a low-trust, dysfunctional organization - none of these approaches worked. Product Managers were perceived to be in a position of power over developers (thinkers versus the workers). So if the developers couldn't deliver what the Product organization told them to they'd just keep hiring more developers and offshoring more work. Not surprisingly, this further exacerbated the problem, slowed the development organization to a crawl, and the best developers left to find work elsewhere.  

## Conclusion
Now that I've discussed the considerable costs of demanding predictability, I'm sure you're still wondering how to achieve more predictability in software development. Organizations and teams become more predictable as a result of other practices that are typically absent when organizations push teams to meet the velocity or "say/do ratio." The next blog post will discuss the agile practices that result in increased predictability.

## Becoming More Predictable
Predictability has very little to do with teams learning how to "estimate better", more time spent estimating, nor having teams push hard to meet their Say/Do ratio or known velocity. These are antipatterns because predictability is a result of a number of other practices. Rather than a continued focus on improved estimation, focus the organizations efforts in these areas.

### 1. Always Releasable 
If teams can finish every increment of work so that is is releasable the organization knows at the end of every timeboxed increment the software could be released. This helps make organizations more predictable as there isn't the unknown batch of work that gets pushed to the end of the project. Think of all of the waterfall testing approaches that still creep into agile projects; integration testing, UAT, regression testing, etc. All of the required testing should be happening within the timebox to avoid _**integration risk**_ that accumulates at the end of waterfall projects.

### 2. Organize Teams for Delivery Flow
One of the most important aspects of predictability is how work and teams are organized. I recommend to align teams to value streams, focus on the fast flow of delivery to customers. This means eliminating handoffs so teams can deliver high-quality, working features within the team. This means not organizing around software components, not having front-end and back-end teams where every feature must span multiple teams, etc. Instead, teams need to truly be cross-functional with all of the skills required to deliver working features into production at the end of each increment. 

In the past I've recommended reading the book [Team Topologies](), as it is one of the best books about how to organize teams for fast flow and quality. 

#### Focus on Decreasing Cycle Time
Little's law states that if we want to decrease lead times (or cycle times) we increase throughput and decrease WIP. To improve delivery flow focus on decreasing lead and cycle times of work. This often means breaking work into smaller pieces, removing and reducing handoffs and places in your process where inventory accumulates. 

### 3. Prioritize Agile Technical Practices
In my 20 years in the industry the agile technical practices have been the biggest differentiator for successful software teams and organizations. 

#### Continuous Integration
Integrate code continuously, more than once per day. This means integrating code that doesn't necessarily complete user stories or features. Teams will need to learn how to integrate code that is not finished without breaking the system. This means learning new skills, and often organizing the work and the code differently. Feature branches delay integration and create risk. Integration defects are often caught late and harder to fix as the exist in the space between the interaction of separate pieces of work, for this reason alone continuous integration is important. Don't fall into the trap that just because you have a build server that you call a CI server that you are doing Continuous Integration. Many organizations use build servers to build feature branches and think they are doing CI. If you aren't doing trunk based development and creating branches, those branches need to live for a day or less, or you aren't practices Continuous Integration.

#### Test-Driven Development
For me, the place I start most teams in with Test-Driven Development. 

#### Refactoring 

#### Pair and Mob Programming


### 4. Roadmap Outcomes Not Specific Features

#### Focus on Sprint Goals 

#### Push Authority to the Information

### 5. Continuously Prioritize

### 6. Forecast Based on Actual Work Not Guesses
Quote L David Marquet quote

### 9. Continuously Refine the Plan 
Small detail 
#### Cone of Uncertainty

#### Defer Constraining Commitments
https://www.scrum.org/resources/defer-constraining-commitments

## Conclusion
As I wrap up this two part series about how to become more predictable when you are doing something inherently unpredictable like product development I want you to take away two things. You can't estimate your way to becoming more predictable. Avoid focus on meeting an upfront plan, instead the organization should be focusing on the practices laid out in this artice.

<!-- ## The Myth
There is a myth that you can be agile and have deadlines. This couldn't be further from the truth. We operate in a world where software is ubiquitous. This means we often have to meet regulatory dates or incur fines, deliver a feature before a competitor, or demonstrate a new capability at an important conference. By focusing on the aforementioned practices and not fixing specific scope for a deadline, there is no better way to hit a date than by using agile practices.   -->

