---
layout: post
title: Project Teams and Poor Code Quality 
comments: true
category: Development Process
---

A large, and often overlooked, impact on code quality is how development teams are organized. Something that I have experienced on more than one occassion is the software quality issues that arise when teams organize around projects rather than products. This is something that I have been concerned with for a number of years, so I am happy to see that there is now a "No Projects" movement gaining steam in the software industry. With the rise of microservices (for better or worse) and some high profile successes that organizations have had organizing around products, it seems that the masses are starting to take notice.

<!--more-->
##Problems
There are a number of problems that occur when teams are organized around projects. 
###Temporary
First is that the organization around a project is temporary. A team comes together works on a project, meets their predefined deadline (that deadline in itself is a problem) the software is shipped and the team dissolves as the developers get assimilated into new project teams. When bugs or feature requests arise the team no longer exists to address them.

###Lack of Code Ownership
This leads to a lack of code ownership. I've have seen a direct correlation to the amount of refactoring done in a code base and the amount of ownership a team feels that is has. Code ownership is extremely important. For the same reasons why collective code ownership was such an important part of XP, extending code ownership across multiple teams is a problem. When code is owned across multiple teams who don't regularly communicate (i.e., communicate daily), refactoring stops. Teams are worried that the refactoring that they do may change the object in a way that is incompatible with another team. 

###Large Merge Conflicts
Yet another barrier to refactoring is that when organized by project, teams overlap areas of the code and this often results in regularly occurring large merge conflicts. These conflicts encourage developers to stop refactoring code. You can read more about this in my post <LINK>Remove Refactoring Barriers</LINK>

###Loss of Institutional Knowledge
####Design Mess

##Why are Project Teams Popular
One reason that project teams are popular is that on the surface, they make it seem like it makes team organization easier. It seems like it is going to make the project manager's job a piece of cake. Unfortunately, what appears to be less work for project managers in the short-term leads to code quality issues that will make all future work harder for the entire organization. The idea that a project manager can have some amount of work and just create a team for it out of thin air is a seductive one. They can just pick and choose from the development team and customize a team for every project that comes along. Given that in the software industry project managers tend to have positions of authority over developers (some double as the team manager, etc.) it is no surprise that this way of organizing work is popular.

The often-used argument against proudct teams is, *"What if we organize around products and one team has no work for a specific product? That's why it won't work here!"* This is an argument that is rooted in a project-thinking mindset. As teams coalesce around products and those teams have dedicated product owners, the team is now responsible for pushing that product forward. Concerns about consistency across product teams can be addressed by having cross team discussions regularly or building Communities of Practice (e.g., Database Community of Practice, UX Community of Practice, Unit Testing Community of Practice, etc.). The team at Spotify appears to do an especially good job of this.  

If a specific product really does have no work, which is unlikely, products can be shifted but teams should be kept together. When products are shifted a team still owns that code and you still get the benefits of code ownership. While it's not ideal, you are trading some institutional knowledge for team flexibility. 



##Obstacles
###Ball of Mud Architecture

##Not New
This is not a new idea. Segmenting the code 

##


##Scalability

##Product Thinking

