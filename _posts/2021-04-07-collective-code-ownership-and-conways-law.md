---
layout: post
section-type: post
title: Collective Code Ownership and Conway's Law
subtitle: 
comments: true
excerpt_separator: <!--more-->
description: Collective code ownership is an essential practice but often misapplied in enterprises and multi-team software organizations, leading to churn, expensive integration bugs, and morale issues. Conway's Law can help to organize teams to get the benefits of collective code ownership.
category: team organization
tags: ['code ownership', 'code quality', 'anti-patterns']
---
<figure>
    <figcaption style='text-align:center'>
        <img src="/img/weeding-mowing-small.jpg" alt="mowing an overgrown lawn of a historic house" class="img-responsive" />
        Photo by <a href="https://unsplash.com/@awcreativeut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Winger</a> on <a href="https://unsplash.com/s/photos/weeding-a-garden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </figcaption>
</figure>
<br />


Collective code ownership is an essential practice for modern agile software organizations. It was introduced to the masses via Extreme Programming (XP) in the late 1990s. However, in enterprises and multi-team software organizations, it is often mischaracterized. The misapplication of this practice is the source of expensive integration bugs, churn, and morale issues on teams. 
<!--more-->

The value of collective code ownership cannot be overstated. One of many brilliant aspects of XP is how its practices support and reinforce each other. Collective code ownership when combined with Test-Driven Development, refactoring, and team coding practices like pair or mob programming creates an environment where code can be created, improved, and maintained by the entire team. It reduces risks for the organization, decreases [the bus factor](https://en.wikipedia.org/wiki/Bus_factor), eliminates towers of knowledge in software organizations, and encourages the continuous improvement of the codebase by the entire team.  

## Common Misapplication

When considering collective code ownership the collective is the team. To be clear, I define the "team" to be the small group of people who are collaborating daily on changes in the shared codebase, hopefully relying on collaborative development techniques. Commonly, multi-team organizations misunderstand collective code ownership to mean that anyone on any development team can make any code changes to any part of the codebase at any time. I call this organization-wide code ownership and it often has disastrous effects on the quality of the software and the morale of the teams. 

## Problems with Organization-Wide Code Ownership
As features get created and code is developed and changed to support these new features, it is important to have long-term care of the codebase. Having a team focused on the health and vision of the codebase enables iterative and emergent techniques like [evolutionary design](https://www.industriallogic.com/blog/evolutionary-design/) and [opportunistic refactoring](https://martinfowler.com/bliki/OpportunisticRefactoring.html). Allowing anyone to make any change to a codebase without the vision or context of the code often results in churn for the software organization and defects escaping into production.

There are a few reasons why companies rely on organization-wide code ownership. The most common culprit is the design and architecture of the system. Commonly, I see this practice in organizations supporting monolithic applications with no separation of concerns, which results in a [Big Ball of Mud](https://en.wikipedia.org/wiki/Big_ball_of_mud). When there are no boundaries in the code there exists no team organization that can provide collective code ownership. 

### Decision Delays & Long Lead Times
When code ownership spans the entire organization it is common for no one to be an expert at anything in the codebase. Every change requires input from the entire organization. When code and design decisions leave the team they become expensive to make and lead times increase for every change to the software. 

### Change Implications & Cognitive Load
When someone makes even a simple change to the code the expectation is that they know all of the implications of their change, which is not possible in a system like this. Furthermore, when something does go wrong, it often takes the organization much longer to diagnose the problem in organizations with monolithic codebases practicing organization-wide code ownership. [Raffi Krikorian](https://twitter.com/raffi) (former VP of Engineering at Twitter) talks about these challenges and why he transitioned Twitter infrastructure from a monolithic Ruby on Rails application to a service-oriented architecture in his talk _**[How Your Organization is Killing Your Software](https://www.youtube.com/watch?v=9Zqt7UrAXns)**_. When code can be modularized and teams own the modules, the cognitive load required becomes reduced, making it much easier and safer to make changes and understand their implications to the rest of the system. 

### The Tragedy of the Commons 

> When everyone owns the code, no one owns the code.

When everyone owns the code no one owns the code. That is a mantra that I've used in organizations that applied weak code ownership models across the organization. This organization-wide code ownership often results in a [Tragedy of the Commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons). Multiple teams will change the same areas of code for different reasons, often resulting in tricky integration bugs that are discovered late or not at all. Since no one is responsible for the long-term care of the code, typically the most expedient or convenient change is made and internal quality suffers. 


> Once you understand Conway’s Law many things that seem surprising about software development make sense. When many teams work in the same code base, able to touch any part of it, there’s a tendency toward the Tragedy of the Commons. When individual teams concentrate on their own area of the code, the code reacts by modularizing over time.   
> _**&mdash;Michael Feathers - [Symbiosis - A Provocation About Organizations](https://www.r7krecon.com/provocation)**_ 

### Enter Conway's Law
To address this problem one only has to look as far as Conway's Law, named after Melvin Conway who introduced the law in his 1968 publication, [_How Do Committees Invent?_](http://www.melconway.com/Home/Committees_Paper.html). Conway's law states:
> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.  
> _**&mdash;Melvin E. Conway**_

A humorous, often told, example of Conway's Law is that _"if a compiler is designed by four groups, you will get a four-pass compiler."_ In what is ostensibly a simple law there lies a deep understanding of the impacts social dynamics and team interaction have on the creation of software systems. 

## The Inverse Conway Maneuver
[The Inverse Conway Maneuver](https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver) is an idea stemming from Conway's law. This approach recommends that you structure your software teams to promote your desired architecture. The teams will naturally modularize their code so that it mimics their structure. In command-and-control organizations (usually giving lip service to agile in poor Scrum or SAFe implementations) teams aren't often empowered to make the necessary changes to the software to modularize it, so they continue to churn. However, with the appropriate skills and authority, this is a good approach to achieving collective code ownership. 

My recommendation is for team boundaries and code boundaries to be aligned. When this is achieved a team API is established. Dependencies between teams are explicit and the need for everyone to own everything quickly dissipates. 

> Align team boundaries and code boundaries

## Open Source Approach
With the ubiquity of git and Github, open source workflows are being adopted to address the issue of collective code ownership. While there is some merit to these techniques in very specific circumstances, there are problems with their general application. Open source (branch and pull request) models of software development aren't ideal within teams. Remember, a team is the small group that collaborates daily in the codebase. When looking through the lens of lean, the bottlenecks and queueing of value delivery that this model creates is not ideal and can be improved upon by more collaborative development techniques. 

However, if collective code ownership is established, an open source approach can be used when someone outside of the team wants to make a change to code within the team's areas of ownership. The owning team can merge the pull request only when it aligns with their vision and standards and they take ownership of that code going forward.

For this approach to be successful these outside code contributions need to be the exception, not the rule. If the inverse is true, experts in the code spend all of their time reviewing other contributors' code and not enough time actively working in their codebase. I've seen this specific examplme in an organization struggling with multiple teams in a monolithic codebase. It resulted in a reduction in internal and external software quality and a significant number of software engineers leaving to find work elsewhere. 

## Further Study
<img src='/img/team-topologies.jpg' alt='Team Topologies book' class='img-responsive' />

* Raffi Krikorian gave an insightful talk at PhillyETE 2016 - [How Your Organization is Killing Your Software](https://www.youtube.com/watch?v=9Zqt7UrAXns) about how he helped restructure Twitter as VP of Engineering 
* The book [Team Topologies: Organization Business and Technology Teams for Fast Flow](https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819/) by Matthew Skelton and Manuel Pais, describes models for organizing multi-team software products for high quality and fast flow of value delivery. It describes how to find fracture planes to split monolithic codebases, the types of teams to create, and interaction models for those teams. 
