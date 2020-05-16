---
layout: post
section-type: post
title: Specialization on Agile Teams 
comments: true
excerpt_separator: <!--more-->
category: coaching
tags: ['coaching']
---

* Commonly see over-specialized teams
* makes it harder for teams to commit to work --- if you are still using story points
* single-points and bottlenecks
* too much individual work and not enough collaboration
* specialized teams vs. specialized individuals
    * specialized teams from Team Topologies
    * personal example - front-end and back end
* misunderstanding specialists value on agile teams
    * need all fullstack developers? - impossible not true
    * we want to build t shaped or A shaped people
    * do that by having people who are experts work collaboratively
    * my definition of collaboration - quick overview -



It's been nineteen years since the creation of the agile manifesto, and with it came the popularization of an idea that teams should be organized cross-functionally. These cross-functional teams work together on solutions rather than being organized by function, relying on handoffs between organizational silos. While a lot of progress has been made on organization and team design I still see a lot organizations struggling with issues stemming from an overreliance on specialized teams and specialists. 

## Specialization and Solo Work 
The problems with specialization within teams is compounded when teams (or their organizations) rely exclusively on solo work. Teams of specialists who don't collaborate on work create single points-of-failure and bottlenecks in development. One person getting sick or taking a vacation interrupts team flow making it harder to deliver consistently. How often have you seen user stories or features get started and then shelved because the expert is taking a vacation? This is a common indicator of over-specialization and solo work. 

## Flow and Delivery Consistency
Teams trying to achieve delivery consistency, whether they are focusing on flow and continuous delivery, or still relying on story point estimates and velocity will struggle when only certain user stories can be routed to individual team members. Teams that still use story points and rely on specialists embark on the fool's errand to track individual velocity to populate sprints with work. Rather than doubling down on story points and forgetting that the team is the atomic unit of delivery not the individual, their time would be better spent finding ways to collaborate on the work to improve flow. 

### Collaboration 
Collaboration is often misunderstood by those who have never experienced it on a development team (a topic for a future post). Going to team stand-ups or attending the same meetings may be a place to start but it isn't sufficient. When I talk about collaboration I mean teammates working together on a solution, this means group design sessions, pair programming, and mob programming. 

Collaborative development techniques are a great way to share expertise on the team, helping create the idea of the T-Shaped or more recently A-Shaped developer. The idea that teams are best suited by being populated by people who have deep expertise in a few key areas but a generalist in the other areas and activities necessary to continuously deliver working software. 

!!!!! Quote from DevOps Handbook here!!!!!!


## Specialized Teams

A greater challenge for organizations seeking flow and delivery consistency is when they fall back on teams of specialists, often returning to teams organized by function or speciality. With the rise of front-end, cloud and infrastructure technologies there pattern of organizing around these technologies is common. This results in the problems that cross-functional agile teams were attempting to address. Once teams are organized by function they create a system where features must span more than one (often several) teams. This slows feature delivery to a crawl and creates quality issues as with every team handoff the opportunity for mistakes, miscommunications, and defects arise. 

### A Real World Example
I once worked at a company that was beginning a large project for a new product offering. One manager decided that he would have the back-end team in the local office while offshoring the front-end team. His argument was that front-end technology stacks have become so complicated the only way to be successful was to have separate front-end and back-end teams.

This led to a disaster of a project. The offshore front-end team was several weeks ahead of everyone else building experiences against mock APIs. When back-end onshore teams caught up many rework ensued as the front-end and back-end didn't align. All of this work created integration risk and required waterfall testing strategies like an intergrated test phase at the end of the project. 

The result was a massive, year-long waterfall project in a self-proclaimed agile organization. Because it took the better part of a year to get any feedback it was an extremely expensive bet that aschewed all of the benefits of delivering working software, fast feedback cycles, and tuning the solution to meet the users' needs. 



## Cross-functional Doesn't Mean Full Stack

A key misunderstanding of specialization is conflating specialization with full stack developers. A cross-functional team doesn't mean you only want to hire or have full stack developers on your team. Finding only full stack experts as front-end and cloud technologies have emerged is not practical. This doesn't mean you don't hire specialists, it just means you mix teams with specialists and generalists and focus on collaborative behaviors. To me this means hiring for learning and collaborative qualities over specific technologies. 


!!!! QUOTE FROM MOUNTAIN GOAT SOFTWARE

## A Place for Specialized Teams?
While I recommend not creating teams of specialists by function (e.g, front-end, back-end, middleware, database, etc.) there is a place for specialized teams. When organized teams for fast flow you may find that there is a specific function of your software that is so specialized that it cannot be accomplished by generalists (PHds for example.). In these cases it may be necessary to create a specialized team, but these should be the exception not the rule. They should exist to help the other teams in the organization deliver faster and safer. 

TO learn more about this concept I highly recommend reading Team Topologies. In the book the authors describe four types of teams. One team type is a team of specialists (the complicated subsystem team). These teams exist to help improve the flow and safety of the value stream aligned teams. 

## Conclusion
Specialization is often misunderstood or overlooked. It can have disastrous effects on an organization's ability to deliver working software and customer value on a consistent basis. 
I recommend:
* Populating teams with a mix of specialists and generalists
* Hire specialists with a focus on learning and collaboration
* Encouraging collaborative development practices on teams (team-based design, mob and pair programming)
* Create the environment where learning happens on the job during the work day (learning hours, code katas, etc.)
* Organize teams for a few to no handoffs
* Create complicated subsystem teams where necessary but should follow specific domain expertise not technology expertise