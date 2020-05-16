---
layout: post
section-type: post
title: Specialization on Agile Teams 
subtitle: Increased Lead Times and a Risk to Flow
comments: true
excerpt_separator: <!--more-->
category: coaching
tags: ['coaching']
---

It's been nineteen years since the creation of the agile manifesto, and with it came the popularization of an idea that teams should be organized cross-functionally. These cross-functional teams work together on solutions rather than being organized by function, relying on handoffs between organizational silos. While a lot of progress has been made on organization and team design I still see a lot organizations struggling with issues stemming from an overreliance on specialized teams and specialists. 
<!-- more -->

## Specialization and Solo Work 
The problems with specialization within teams is compounded when teams (or their organizations) rely exclusively on solo work. Teams of specialists who don't collaborate on work create single points-of-failure and bottlenecks in development. One person getting sick or taking a vacation interrupts team flow making it harder to deliver consistently. How often have you seen user stories or features get started and then shelved because the expert is taking a vacation? This is a common indicator of over-specialization and solo work. 

## Flow and Delivery Consistency
Teams trying to achieve delivery consistency, whether they are focusing on flow and continuous delivery, or still relying on story point estimates and velocity will struggle when only certain user stories can be routed to individual team members. Teams that still use story points and rely on specialists embark on the fool's errand to track individual velocity to populate sprints with work. Rather than doubling down on story points and forgetting that the team is the atomic unit of delivery not the individual, their time would be better spent finding ways to collaborate on the work to improve flow. 

### Collaboration 
Collaboration is often misunderstood by those who have never experienced it on a development team (a topic for a future post). Going to team stand-ups or attending the same meetings may be a place to start but it isn't sufficient. When I talk about collaboration I mean teammates working together on a solution, this means group design sessions, pair programming, and mob programming. 

Collaborative development techniques are a great way to share expertise on the team. Collaborative software development techniques and an organizational culture that prioritizes learning is required to move specialists from I-Shaped to T-Shaped and eventually E-Shaped individuals. Today's development teams are best suited by being populated by people who have deep expertise in a few key areas but are generalists in the other areas and activities necessary to continuously deliver working software. 

### From I-Shaped to E-Shaped Developers

<img src="/img/devops-handbook.jpg" alt="The DevOps Handbook" class="img-responsive" />

_The DevOps Handbook_ describes the importance of enabling every team member to become a generalist. 

> When departments over-specialize, it causes siloization...Any complex operational activity then requires multiple handoffs and queues between the different areas of the infrastructure, leading to longer lead times.
> _**&mdash;Gene Kim, Jez Humble, Patrick Debois, & John Willis, The DevOps Handbook, page 85.**_ 

The accompanying table from _The DevOps Handbook_ describes the important shift from specialist to E-Shaped team members. 
<figure>
    <img src="/e-shaped-devops-handbook-table.png" alt="E-Shaped Skills - The DevOps Handbook" class="img-responsive" />
    <figcaption>Specialists vs. Generalists vs. "E-Shaped" Staff - The DevOps Handbook, page 86</figcaption>
</figure>

## Specialized Teams

A greater challenge for organizations seeking flow and delivery consistency is when they fall back on teams of specialists, often returning to teams organized by function or speciality. With the rise of front-end, cloud and infrastructure technologies the antipattern of organizing around these technologies is common. This results in the problems that cross-functional agile teams were attempting to mitigate. Once teams are organized by function they create a system where features must span more than one (often several) teams. This slows feature delivery to a crawl, increases lead time and creates quality issues as with every team handoff the opportunity for mistakes, miscommunications, and defects arise. 

### A Real World Example
I once worked at a company that was beginning a large project for a new product offering. One manager decided that he would have the back-end team in the local office while offshoring the front-end team. His argument was that front-end technology stacks have become so complicated the only way to be successful was to have separate front-end and back-end teams.

This created a disastrous waterfall project. The offshore front-end team was several weeks and even months ahead of other teams, they were busy building experiences against mock APIs. When the back-end onshore teams caught up rework ensued as the front-end and back-end didn't align. All of this work created integration risk and required waterfall testing strategies like an integrated test phase at the end of the project. 

The result was a massive, year-long waterfall project in a self-proclaimed agile organization. Because it took the better part of a year to get any feedback it was an extremely expensive bet that eschewed all of the benefits of consistently delivering working software, fast feedback cycles, and tuning the solution to meet the users' needs. 


## Cross-functional or Full Stack?

A key misunderstanding of specialization is conflating cross-functional teams with full stack developers. A cross-functional team doesn't mean you have to have all full stack developers from the beginning. Finding only full stack experts as front-end and cloud technologies have emerged is a challenging proposition. This doesn't mean you don't hire specialists, it just means you mix teams with specialists and generalists and focus on collaborative behaviors. Hire specialists, but optimize for collaboration and a path towards the emergence of E-shaped, full stack team members. 


!!!! QUOTE FROM MOUNTAIN GOAT SOFTWARE

## A Place for Specialized Teams?
While I recommend not creating teams of specialists by function (e.g, front-end, back-end, middleware, infrastructure, database, etc.) there is a place for specialized teams. When organizing teams for fast flow you may find that there is a specific function of your software that is so specialized that it cannot be accomplished by generalists (PHds for example.). In these cases it may be necessary to create a specialized team, but these should be the exception not the rule. They should exist to help the other teams in the organization deliver faster and safer. 

To learn more about this concept I highly recommend reading Team Topologies. In the book the authors describe four types of teams. One team type is a team of specialists (the complicated subsystem team). These teams exist to help improve the flow and safety of the stream-aligned teams. 

## Conclusion
Specialization is often misunderstood or overlooked. It can have disastrous effects on an organization's ability to deliver working software on a consistent basis. It often increases lead times and is a barrier to continuous delivery.

I recommend:
* Populating teams with a mix of specialists and generalists
* Hiring specialists with a focus on learning and collaboration
* Hiring specialists who are on a path to becoming an E-shaped contributor
* Encouraging collaborative development practices on teams (team-based design, mob and pair programming)
* Create the environment where learning happens on the job during the work day (learning hours, code katas, etc.)
* Organize teams for a few to no handoffs
* Create complicated subsystem teams where necessary for complex domain knowledge not technical knowledge
