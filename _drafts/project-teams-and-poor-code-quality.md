---
layout: post
title: Project Teams and Poor Code Quality 
comments: true
category: Development Process
---

A large, and often overlooked, impact on code quality is how development teams are organized. Something that I have experienced several times in my career is the software quality issues that arise when teams organize around projects rather than products. This is something that I have been concerned with for several years, so I am happy to see that there is now a "No Projects" movement gaining steam in the software industry. With the rise of microservices and some high profile successes that organizations have had organizing around products, it seems that the masses are starting to take notice.

<!--more-->
##Problems
There are a number of problems that occur when teams are organized around projects. 
###Temporary
The organization around a project is temporary. A team comes together to work on a project, if they are lucky they meet their predefined deadline (that deadline in itself is a problem), the software is shipped, and the team dissolves as the developers get assimilated into new project teams. When bugs or feature requests arise the team no longer exists to address them. While the project is temporary the code that gets created is permanent. This problem, in my opinion, is the root of all of the additional issues that are created out of project team organization.

###Lack of Code Ownership
The temporary nature of the project leads to a lack of code ownership. I've have seen a direct correlation to the amount of refactoring done in a code base and the amount of ownership a team feels that is has. Code ownership is extremely important. For the same reasons why collective code ownership is such an important part of XP, extending code ownership across multiple teams is a problem. When code is owned across multiple teams who don't regularly communicate (i.e., communicate daily), refactoring stops. Teams are worried that the refactoring that they do may change the system in a way that is incompatible with another team. **Essentially, when code ownership extends beyond a single team no one owns the code.**

###Large Merge Conflicts
Yet another barrier to refactoring is that when organized by project, teams overlap areas of the code and this often results in regularly occurring large merge conflicts. These conflicts encourage developers to stop refactoring code because no one wants to manually merge large conflicts. You can read more about this in my post <LINK>Remove Refactoring Barriers</LINK>

###Loss of Institutional Knowledge
As people are constantly switching into and out of areas of the codebase a depth of knowledge that comes with working in the same area of the code for an extended period of time is lost. This leads to a decline in code quality and a lack of larger scale refactorings.

####Design Mess
Since so much of the code is always new to the team and they are moving on before making lasting improvments on the code base the design degrades rapidly. One team will begin to steer the system in one direction with a set of refactorings only to be undone by the next team who had little or no knowledge of the design goals of the original team.

###Project Size 
Projects tend to be large and are at odds with the current trends for building quality software like shipping small incremental improvements and subscribing to practices like Continuous Integration and Continuous Delivery. 

###Focus on Short-term Deadlines 
As I alluded to earlier the focus of a project is to implement a certain set of requirements in a predefined time. They tend to be organized like waterfall projects. The focus is on meeting a short-term deadline and then dissolving the team. Often these coincide with fixing both time and project scope which leads to shipping poor quality software to meet predefined deadlines. Again continuous and incremental improvement is not an option when organizing the work in this way.

##Why are Project Teams Popular?
Given all of these issues why are they so popular? One reason that project teams are popular is that on the surface, they make it seem like it makes team organization easier. It seems like it is going to make the project manager's job a piece of cake. Unfortunately, what appears to be less work for project managers in the short-term leads to code quality issues that will make all future work harder for the entire organization. The idea that a project manager can have some amount of work and just create a team for it out of thin air is a seductive one. They can just pick and choose from the development team and customize a team for every project that comes along. Given that in the software industry project managers tend to have positions of authority over developers (some double as the team manager, etc.) it is no surprise that this way of organizing work is popular.

The often-used argument against proudct teams organization is, *"What if we organize around products and one team has no work for a specific product? That's why it won't work here!"* This is an argument that is rooted in a project-thinking mindset. As teams coalesce around products and those teams have dedicated product owners, the team is now responsible for pushing that product forward. Concerns about consistency across product teams can be addressed by having cross team discussions regularly or building Communities of Practice (e.g., Database Community of Practice, UX Community of Practice, Unit Testing Community of Practice, etc.). The team at Spotify appears to do an especially good job of this.  

Typically, products should be small enough that teams will have multiple products. This reduces the likelihood that one team starves for work. If a specific product team really does have no work, which is unlikely, products can be shifted but teams should be kept together. When products are shifted a team still owns that code and you still get the benefits of code ownership. While it's not ideal, you are trading institutional knowledge for team flexibility. 

##Scalability
Scalability is challenge in any organization. The way you work on a small system with a handful of developers is very different than how you work on a large system with many developers. However, that transition tends to be a very painful one. One of the most important aspects of organizing teams around products is that it scales.  Project teams are broken from the start but organizations may have more success when there is only two or three project teams.  As the organization grows beyond that the negative effects of project teams will cripple the development organization.

Organizing by product will scale. As the system increases in size and scope, additional product teams can be created to own areas of the system. 



