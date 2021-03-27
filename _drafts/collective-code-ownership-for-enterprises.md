---
layout: post
section-type: post
title: Collective Code Ownership and Conway's Law
subtitle: 
comments: true
excerpt_separator: <!--more-->
category: leadership
tags: ['agile development', 'anti-patterns']
---

Collective code ownership is an essential practice (from Extreme Programming) for modern agile software organizations. However, in enterprises and multi-team software organizations it is often misunderstood. This misunderstanding is the source of expensive integration bugs, churn, and morale issues. 
<!-- more -->

The value of collective code ownership can't be overstated. One of many brilliant aspects of Extreme Programming (XP) is how its practices support and reinforce each other. Collective code ownership when combined with TDD, refactoring, and team coding practices like pair or mob programming creates an environment where code can be created, improved, and maintained by the entire team. It reduces risk for the organization, decreases the bus factor, eliminates towers of knowledge in software organizations, and encourages the continuous improvement of the codebase by the entire team.  

## Common Misunderstandings

When considering collective code ownership the collective is the team. Now, the word team can mean different things to different people. By team, I mean the group of people who are collaborating daily on the codebase, hopefully using techniques like mob and pair programming. Commonly, multi-team organizations misunderstand collective code ownership to mean that anyone on any development team can make any code changes to the codebase. This often has disastrous effects for the quality of the software and the morale of the teams. 

## Problems with Organization-Wide Code Ownership
As features get created, updated, and maintained it is important to have long term care of the codebase. Having a team focused on the health and vision of the codebase enables iterative and emergent techniques like evolutionary design. Allowing anyone to make any change to a codebase without the vision or context of the code often results churn for the development team and worse yet defects escaping into production.

### The Tragedy of the Commons 

> When everyone owns the code, no one owns the code.

When everyone owns the code no one owns the code. That is a mantra that I've used in organizations that applied weak code ownership models across the organization. This effect often results in a [Tragedy of the Commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons). Multiple teams will change the same areas of code for different reasons, often resulting in tricky integration bugs that are discovered late or not at all. Since no one is responsible for the long term care of that area of the code, typically the most expedient change is made and internal quality suffers. 


> Once you understand the Conway’s Law many things that seem surprising about software development make sense. When many teams work in the same code base, able to touch any part of it, there’s a tendency toward the Tragedy of the Commons. When individual teams concentrate on their own area of the code, the code reacts by modularizing over time.   
> _**&mdash;Michael Feathers - [Symbiosis - A Provocation About Organizations](https://www.r7krecon.com/provocation)**_ 

### Enter Conway's Law
To address this problem one only has to look as far as Conway's Law, named after Melvin Conway who introduced the law in 1967. Conway's law states:
> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.  
> _**&mdash;Melvin E. Conway**_

A humorous, often told, example of Conway's Law is that _"if a complier is designed by four groups, you will get a four-pass compiler."_ In what is ostensibly a simple law there lies deep understanding of the impacts people, teams, and their interactions have on the creation of software. 

## Reversing Organization-Wide Code Ownership
There a few reasons organizations rely on organization-wide ownership models. The most common culprit is the design and architecture of the system. Commonly, I see monolithic applications with no separation of concerns which results in the Ball of Mud pattern. When there are no boundaries in the code there is no team organization that can provide collective code ownership. 

## Inverse Conway Manuever
The Inverse Conway Manuever is an idea stemming from Conway's law. This approach recommends that you structure your software teams to promote your desired architecture. The teams will naturally modularize their code so that it mimics the structure of their team. The problem that I've seen in practice is that in command-and-control organizations (usually giving lip service to agile in poor Scrum and scaled agile SAFe implementations) the teams aren't empowered to make those kinds of changes to the software, so they continue to churn. However, with the appropriate skills and authority this is a good approach to achieving collective code ownership. 

My recommendation is for team boundaries and code boundaries to align. When this is achieved a team API is established. Dependencies between teams are explicit and the need for everyone to own everything quickly dissipates. 

> Align team boundaries and code boundaries

## Open Source Approach
With the ubiqutiousness of git and Github open source workflows are being adopted to address the issue of collective code ownership. While there is some merit to these techniques there are pitfalls as well. Open source (branch and pull request) models of software development aren't ideal within teams. Remember, a team is a group that collaborates daily in the codebase. When looking through the lens of lean, the bottlenecks and queueing of value delivery that this model creates isn't ideal and can be improved by more collaborative development techniques. 

However, if collective code ownership is established, an open source approach can be utilized when someone outside of the team wants to make a change to the team's areas of ownership. The owning team can merge the pull request only when it aligns to their vision and standards and they take ownership of that code going forward. F

For this approach to be successful these outside code contributions need to be the exception not the rule. If the inverse is true, experts in the code spend all of their time reviewing other contributors code and not enough time actively working in their codebase. This specific example I saw in organization struggling with multiple teams in a monolithic codebase. It resulted in a reduction in internal and external software quality and a significant number of software engineers leaving to find work elsewhere. 
## Further Study

Raffi Krikorian - 
Team Topologies

