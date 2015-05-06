---
layout: post
title: Project Teams and Poor Code Quality 
comments: true
category: Development Process
---

A large, and often overlooked, impact on code quality is how development teams are organized. Several times in my career I have experienced software quality issues that are a result of teams organizing around projects rather than products. This is something that I have been concerned with for several years, so I am happy to see that there is now a "No Projects" movement gaining steam in the software industry. With the rise of microservices and some high profile successes that organizations have had organizing around products, it seems that the masses are starting to take notice. This way of organizing teams and work isn't new but it's certainly not as prevalent as it should be.

<!--more-->
##Product Organization as an Alternative

Organizing by product can be described by several names. Some teams call it "organizing by product area" or "business capability", or simply "organizing by product." Regardless of what it is called the way the teams organize around work is the same. If the codebase is large, "products" end up being sub-components of the larger system which are team-owned. Teams are permanent and own the code for their product. The software communicates with other "products" through defined interfaces. Each product team has a product owner who is empowered to make decisions about the direction of the product without requiring buy-in from the larger organization. The product owner is analogous to a funnel, taking feature requests from various sources (e.g., users, stake-holders, customer service, the CEO, etc.) and proiritizing the work

##Problems with Project Teams
There are a number of problems that occur when teams are organized around projects rather than products.
 
###Temporary
The organization around a project is temporary. A team comes together to work on a project, if they are lucky they meet their predefined deadline, the software is shipped, and the team dissolves as the developers get assimilated into new project teams. When bugs or feature requests arise the team no longer exists to address them. While the project is temporary the code that gets created is permanent. This dissonance, in my opinion, is the root of all of the other issues that are created out of project team organization.

###Lack of Code Ownership
The temporary nature of the project leads to a lack of code ownership. I have seen a direct correlation between the amount of refactoring done in a code base and the amount of ownership a team feels that is has. Collective code ownership is such an important part of eXtreme Programming (XP) because it encouraged team-owned quality and made the entire team responsible for keeping the code and design clean and bug-free. Extending code ownership across multiple teams however causes team-owned quality to break down. When code is owned across multiple teams who don't regularly communicate and/or aren't all committing their code to the same repository branch, refactoring stops. Teams worry that the refactoring that they do may change the system in a way that is incompatible with another team. **Essentially, when code ownership extends beyond a single team no one owns the code.**

###Large Merge Conflicts
Yet another barrier to refactoring is that when organized by project, teams overlap areas of the code and this often results in regularly occurring large merge conflicts. These conflicts encourage developers to stop refactoring code because no one wants to manually merge large conflicts. You can read more about this in my post <LINK>Remove Refactoring Barriers</LINK>

###Loss of Institutional Knowledge
As people are constantly switching into and out of areas of the codebase a depth of knowledge that comes with working in the same area of the code for an extended period of time is lost. This leads to a decline in code quality and a lack of larger scale refactorings. 

####Design Rot
A side-effect of the loss of institutional knowledge and the temporary work in an area of the codebase is that the design degrades rapidly. One project team will begin to steer the part of the system in one direction with a set of refactorings only to be undone by the next team who had little or no knowledge of the design goals of the original team.

###Focus on Short-term Deadlines 
Projects tend to be large and, by their nature, are organized like waterfall projects. The focus is on meeting a short-term deadline providing a predefined set of features. This is at odds with current trends in the software industry for building quality software like shipping small, incremental improvements and subscribing to practices like Continuous Integration and Continuous Delivery.

###Scalability Problems

Scalability is a challenge in any organization. The way you work on a small system with a handful of developers is very different than how you work on a large system with many developers. However, that transition tends to be a very painful one. One of the most important aspects of organizing teams around products is that it scales. Project teams are broken from the start but organizations may have more success when there is only two or three project teams. As the organization grows beyond that the negative effects of project teams will cripple the development organization.

Organizing by product will scale. As the system increases in size and scope, additional product teams can be created to own areas of the growing system. 

##Why are Project Teams Popular?
Given these issues why is organizing work this way so popular? One reason is that, on the surface, it seems like it is the easiest way to organize a team for work. It appears like it is going to make the project manager's job a piece of cake. And in the short term it may actually do that. Unfortunately, what appears to be less work for project managers in the short-term leads to code quality issues that will make all future work harder for the entire organization. Given that in the software industry project managers tend to have positions of authority over developers (some double as the team manager, etc.) it is no surprise that team organization is skewed towards making their jobs easier even if it is a misconception.

The idea that a project manager can have some amount of work and create a team for it out of thin air is a seductive one. They can pick and choose from the development team members and customize a team for every project that comes along. As a colleague of mine once said, *"that way of working would be fantastic if we were bricklayers. But knowledge work doesn't work that way."* The complexities in software development require specific effort in ensuring that the code and design are of high quality and stays that way. So that adding new features on year ten of a project is just as easy as adding features on day one.

##Arguments Against Product Team Organization

###Development Team Starvation

The often-used argument against product team organization is, *"What if we organize around products and one team has no work for a specific product? That's why it won't work here!"* This is an argument that is rooted in a project-thinking mindset. As teams coalesce around products and those teams have dedicated product owners, the team is now responsible for pushing that product forward. 

Typically, products should be small enough that teams will have multiple products. This reduces the likelihood that one team starves for work. If a specific product team really does have no work, which is unlikely, products can be shifted but teams should be kept together. When products are shifted a team still owns that code and you still get the benefits of code ownership. While it's not ideal, you are trading institutional knowledge for team flexibility. 

###Consistency

Another argument is keeping consistency across these product teams. I would contend that you have the same exact consistency problems if you organize around projects. Nonetheless, concerns about consistency across product teams can be addressed by having cross team discussions regularly and building Communities of Practice (e.g., Database Community of Practice, UX Community of Practice, Unit Testing Community of Practice, etc.). The team at Spotify appears to do an especially good job of this.  

###One Product
Another very popular argument is, *"We only have one big product not a lot of little products, there's no way to split the system up to accomplish this way of working."* I've worked on several large products that were designed in a way that allowed for smaller, team owned subsystems to exist. They had very minimal interfaces between subsystems so teams could work independently for a majority of their work. The line of thought that a large product cannot be broken into smaller subsystems is common when working in systems without an architecture. When everything is one big ball of mud it is difficult to see the lines where subsystems could be broken out.  While effort is required to do this the benefits are worth the effort.  At a minimum your organization will not scale as project teams. 

##Conclusion 
If you find yourself struggling with code quality issues and your team is organizing around projects it may be time to discuss how your teams are organized. If your system lacks an architecture or at least one that allows for the existence of subcomponents start having lunch sessions where you brainstorm how to break out areas of the code. You may see after a few sessions some definite subcomponents starting to form. The lines between them may be blurry but you can iterate on it until you find the right responsibilities of each subcomponent.

