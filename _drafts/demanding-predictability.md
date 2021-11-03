---
layout: post
section-type: post
title: Stop Pursuing Predictability
subtitle: The Costs of Predictive Software Practices 
comments: true
excerpt_separator: <!--more-->
category: leadership
tags: ['agile development', 'anti-patterns']
---

One of the main reasons software organizations want to adopt agile ways of working is to become more predictable. Software drives businesses and businesses want to know when products will be delivered, the funding and personnel required to meet organizational goals, etc. The problem with how I see this being realized in the industry is that the vast majority of these companies have not made the cultural and organizational shifts to fundamentally change the way they work. Trying to demand predictability from teams creating software, which is uncertain and unpredictable by its nature, is a recipe for disaster. Often I tell organizations if they embrace agile ways of working, push authority to self-organizing software development teams, and focus on technical excellence and continuous improvement they are likely to become more predictable. But I will caution that this is not "predictability" as these organizations currently understand it. 
<!-- more -->

It sounds like a riddle, but adopting agile practices that embrace the unpredictable and uncertain nature of knowledge work will enable organizations to better plan and address the challenges of the work. By planning for **now**, and not assuming they know exactly what their users want delivered in one large batch, or assuming that they know what their users want six months from now, they can work towards becoming more predictable in their delivery. According to [the 14th Annual State of Agile Report](https://stateofagile.com/#ufh-i-615706098-14th-annual-state-of-agile-report/7027494), 39% of respondents adopted agile to become more predictable. Without understanding how they need to shed their old ways of planning and predicting they will be undermining their own efforts to improve the way they deliver value to their customers. 

<img class="img-responsive" src="/img/reasons-for-adopting-agile.png" />

When software organizations focus first on achieving predictability without achieving the essence of agility, they are unwittingly pushing their development teams further away from being predictable. 

## Agile is Adaptive Not Predictive

You may have heard of this saying before, **Agile is adaptive not predictive**. Waterfall is predictive, which is why it is a bad choice for software development. In waterfall, scope is fixed upfront; software organizations attempt to predict when they can deliver a specific set of features before they start the work. Those predictions become deadlines, traditional project management focuses on the iron triangle: managing a project to deliver all defined scope on time and on budget. In an attempt to make an unpredictable practice more predictable the organization works the development teams harder, resulting in quality issues. Quality is often abandoned first when trying to meet unrealistic deadlines. What results is missed dates, unhappy customers, and overworked and burnt out personnel. 

Alternatively, agile embraces the unpredictable and uncertain nature of software development by being adaptive. To harness these benefits organizations need to get away from trying to fix feature scope and schedule upfront or to work their teams harder when agile didn't give them the fixed scope and date guarantee they were looking for (_it won't ever give you that_). 

Agile is adaptive in nature, in fact Scrum (the most popular agile framework) is built on empiricism. This allows organizations to make decisions based on experience. By introducing regular intervals to inspect the work, get feedback through various feedback loops, and adapt their plan they can become more predictable. 

> Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk. Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaptation.
> &mdash;[The Scrum Guide](https://www.scrumguides.org/scrum-guide-2017.html)

Every Scrum implementation I've personally seen (and one of the reasons why I typically won't recommend development teams adopt Scrum) is that empiricism is never adopted in order to more easily fit scrum events into the old and comfortable ways of working. 

## Shed the Old Ways
In command-and-control, waterfall organizations that still rely on traditional project management methods, plans are made upfront. Any deviation from the plan is considered a problem. The team's estimates of uncertain work often don't match actual time spent, which is to be expected when doing knowledge work. All too often estimates are treated as deadlines. As teams fall behind on the plan, well-intentioned management will add more people to the project (a modern day _"Nobody got fired for buying IBM"_), which typically results in further delays, achieving the opposite of the intended goal. I talk about this at length in this post [here]. 

Software development, like other forms of knowledge work, is unpredictable. A detailed plan for more than a few weeks is not only wasteful but a work of fiction. **Stop using adherence to a detailed plan as a measure of success.** It is common to see teams spend significant amounts of time estimating work, re-estimating work, and refining estimates. Estimation is a waste activity (as defined by lean), and a focus on improving estimates is a fool's errand. Teams should spend more time delivering customer value, improving the quality of the codebase, and improving their practices instead of endless hours spent guessing and projecting dates in the future. Instead organizations should rely on ways of working that don't require certainty in uncertain work for success. 

## The Cost of Demanding Predictability
When demanding predictability for work that is inherently unpredictable, like software development, the organization incurs significant costs. 

### Quality Degrades
Quality degrades as teams struggle to meet upfront plans. This further jeopardizes future plans, as quality issues in the software creates a tax on all future features, making it harder to deliver features quickly without defects. 

### Increase in Waste Activities
Developers spend more time estimating work and trying to "improve estimation." Spending skilled developers' time trying to get better at estimating instead of delivering the next most valuable feature for customers is wasteful. Estimating is a waste activity as defined by lean, and as lean teaches us, trying to find ways to spend less time estimating is critical to increase value delivery to customers. 


### Absence of Experimentation, Improvements, and Learning
The best software development teams continuously experiment. Its through this experimentation the team continuously improves how they work and innovate. These activities will stop altogether when teams are under pressure. Without experimentation innovation is lost. 

### Morale Issues
As a developer I have had first hand experience having my estimates used deadlines and then reprimanded when we didn't hit dates. Being the team's technical lead I sat with Product Managers explaining agile estimation, the cone of uncertainty, estimate ranges, and not to commit to features but outcomes. Operating in a low-trust, dysfunctional organization none of these approaches worked. Product Managers were perceived to be in a position of power over developers (they were the thinkers not the builders). So if the developers couldn't deliver what the Product organization told them to they'd just keep hiring more developers and offshoring more work. Not surprisingly, this further exacerbated the problem, slowed the development organization to a crawl, and the best developers left to find work elsewhere.  

## Focus on Real Agility
Software organizations become more predictable as a result of other practices that are typically absent when organizations push teams to meet their velocity targets or a "say/do ratio." 

## Becoming More Predictable?
Predictability has nothing to do with learning how to "estimate better", more time spent estimating, nor having teams push hard to meet their Say/Do ratio or known velocity. These are antipatterns because predictability is a result of a number of other practices. Rather than a continued focus on improved estimation, focus the organizations efforts in these areas instead.


> Teams don't estimate their way to predictability.

### 1. Always Releasable 
Teams should adopt the agile technical practices that enable Continuous Integration and Continuous Delivery (CI/CD). Think of all of the waterfall testing approaches that still creep into agile projects; integration testing, UAT, regression testing, etc. What if all of these test phases can be dropped by a focus on CI/CD? The code is always in a releasable state, making releasing software a business decision not a technical one. 

### 2. Strive for Technical Excellence
Legacy codebases consisting of poorly designed code that is not microtestsed slows development and makes seemingly simple sounding changes difficult to execute safely. Continuously improving the internal quality of the codebase will allow the team to move faster and deliver continuously.

### 3. Focus on Agile Technical Practices
In my more than 20 years in the software industry the agile technical practices have been the biggest differentiator for successful software teams and organizations, not adherence to Scrum, certainly not massive scaling frameworks like SAFe, and teams don't get there by adding more project management and focusing on "better plans" and "better estimates."


#### Test-Driven Development
I recommend Test-Driven Development as the most important agile technical practice. When teams learn how to do TDD well, every commit comes with its own automated tests. Pairing TDD with learning how to create high-quality microtests means the team will have to learn software design skills. High quality microtests become the commit stage test suite of their build pipeline. TDD enables practicing CI and CD. 
By learning TDD a focus on refactoring (one of the stages of TDD) will result. Having development teams focus on improving the design of code continuously the team will be encouraged to improve their software design and refactoring skills. 

#### Continuous Integration / Continuous Delivery
Integrate code continuously, more than once per day. This means integrating code that doesn't necessarily complete user stories or features. Teams will need to learn how to integrate code that is not finished without breaking the system. This means learning new skills, and often organizing the work and the code differently. Feature branches delay integration and create risk. Integration defects are often caught late and harder to fix as the exist in the space between the interaction of separate pieces of work, for this reason alone continuous integration is important. Don't fall into the trap that just because you have a build server that you call a CI server that you are doing Continuous Integration. Many organizations use build servers to build feature branches and think they are doing CI. If you aren't doing trunk based development and creating branches, those branches need to live for less than a day, or you aren't practicing Continuous Integration.

Focus on automating the build pipeline where every commit results in a version of the software running in a test environment (to start with). By focusing on a real CI/CD pipeline and pairing it with a feature flag solution teams can continuously deliver integrated, working software and toggle switches to enable features. 

### 4. Organize Teams for Delivery Flow
One of the most important aspects of continuous delivery is how work and teams are organized. I recommend to align teams to value streams, focus on the fast flow of delivery to customers. This means eliminating handoffs so teams can deliver high-quality, working features within the team. This means not organizing around software components, not having front-end and back-end teams where every feature must span multiple teams, etc. Instead, teams need to truly be cross-functional with all of the skills required to deliver working features from inception to production. In the past I've recommended reading the book [Team Topologies](), as it is one of the best books about how to organize teams for fast flow and quality. 

#### Focus on Decreasing Cycle Time
Little's law states that if we want to decrease lead times (or cycle times) we increase throughput and decrease work-in-progress (WIP). To improve delivery flow focus on decreasing lead and cycle times of work. This often means breaking work into smaller pieces, removing and reducing handoffs and places in your process where inventory accumulates and actively monitoring and decreasing WIP. 


## Conclusion
Do you want your teams to be more predictable? Adopt a set of software development practices that allows the team to continuously deliver value to customers. Replace upfront, detailed plans with smaller bets. Interview users, run experiments, gather feedback from those experiments and let that drive your development. You can't estimate your way to becoming more predictable. You can become more predictable by continuously delivering valuable software. 
<!-- ## The Myth
There is a myth that you can be agile and have deadlines. This couldn't be further from the truth. We operate in a world where software is ubiquitous. This means we often have to meet regulatory dates or incur fines, deliver a feature before a competitor, or demonstrate a new capability at an important conference. By focusing on the aforementioned practices and not fixing specific scope for a deadline, there is no better way to hit a date than by using agile practices.   -->

