---
layout: post
section-type: post
title: Project Teams and Poor Code Quality 
comments: true
category: team organization 
tags: ['code quality', 'code ownership', 'project teams']
---

A large, and often overlooked impact on code quality is how development teams are organized. Several times in my career I have experienced software quality issues that are a direct result of teams being organized around projects. This is something that I have been concerned about for several years, so I am happy to see that there is now a "No Projects" movement gaining steam in the software industry. With the rise of agile software development practices, microservices and some high profile successes that organizations have had organizing around products, it seems that the masses are starting to take notice. This way of organizing teams and work isn't new, but it's certainly not as prevalent as it should be.

<!--more-->

## Alternatives to Project Team Development

There are alternatives to project team development. Some examples are product teams, business capability teams and feature teams (depending on how they are organized). Regardless of what these types of teams are called they share some common characteristics that have a positive affect on the quality of the codebase. Teams are permanent and own their area of the code. They communicate with other areas of the code through defined interfaces where necessary. However, the code that they own is aligned in such a way that the cross-team communication is not required to complete features. The team has a product owner who is empowered to make decisions about the direction of the product and has the final say on feature priority without requiring buy-in from the larger organization. 

## Problems with Project Teams
There are a number of problems that occur when teams are organized around projects.
 
### Temporary
The organization around a project is temporary. A team comes together to work on a project, if they are lucky they meet their deadline, the software is shipped and the team dissolves as the developers get assimilated into new project teams. When bugs or feature requests arise the team no longer exists to address them. While the project is temporary the code that gets created is permanent. This dissonance, in my opinion, is the root of all of the other issues that are created out of project team organization.

### Lack of Code Ownership

The temporary nature of the project leads to a lack of code ownership. I have seen a direct correlation between the amount of refactoring done in a code base and the amount of ownership a team feels that it has. Collective code ownership is such an important part of eXtreme Programming (XP) because it encourages team-owned quality and makes the entire team responsible for keeping the code and design clean and bug-free. Extending code ownership across multiple teams however causes team-owned quality to break down. When code is owned across multiple teams who don't regularly communicate and/or aren't all committing their code to the same repository branch, refactoring stops. Teams worry that any refactoring that they do may change the system in a way that is incompatible with another team. **Essentially, when code ownership extends beyond a single team no one owns the code.**

### Large Merge Conflicts

Yet another barrier to refactoring is that when organized by project, teams overlap areas of the code and this often results in regularly occurring large merge conflicts. These conflicts encourage developers to stop refactoring code because no one wants to manually merge large conflicts. You can read more about this in my post [Remove Refactoring Barriers](/2014/09/06/remove-refactoring-barriers.html)

### Lack of Institutional Knowledge

As developers are constantly switching into and out of areas of the codebase, a depth of knowledge that comes with working in the same area of the code for an extended period of time is lost. This leads to a decline in code quality and a lack of larger scale refactorings. 

#### Design Rot

A side-effect of temporarily working in an area of the codebase is that the design degrades rapidly. One project team will begin to steer the part of the system in one direction with a set of refactorings only to be undone by the next team who had little or no knowledge of the design goals of the previous team.

No single developer understands all of the design decisions, the design constraints, or the tradeoffs that were made that resulted in the current design. The design is an unfortunate result of several disparate teams making changes to the same area of code over a long period of time (often between months of inactivity in that area of the code). It is not uncommon for teams to churn, repeating the same mistakes as previous teams.

### Focus on Short-term Deadlines 

Projects tend to be large and they are organized like waterfall software projects. The focus is on meeting a short-term deadline while providing a predefined set of features. This is at odds with current trends for building quality software like shipping small incremental improvements and subscribing to practices like Continuous Integration and Continuous Delivery.

### Scalability Problems

Scalability is a challenge in any organization. The way you work effectively on a small system with a handful of developers is very different than how you work effectively on a large system with many developers. However, that transition tends to be a very painful one. One of the most important aspects of organizing teams around products is that it scales. Organizations may have more success when there is only two or three project teams. As the organization grows beyond that, the negative effects of project teams will cripple the development organization. By contrast, as the system increases in size and scope, additional product teams can be created to own areas of the growing system. 

## Why are Project Teams Popular?

Given all of these issues, why is organizing work this way so popular? One reason is that, on the surface, it seems like it is the easiest way to organize a team for work. It appears like it is going to make the project manager's job a piece of cake. And in the short term it may actually do that. Unfortunately, what appears to be less work for project managers in the short-term leads to code quality issues that will make all future work harder for the entire organization. Given that in the software industry project managers tend to have positions of authority over developers (some doubling as the team manager, etc.) it is no surprise that team organization is skewed towards making their jobs easier even if it is a misconception.

The idea that a project manager can have some amount of work and create a team for it out of thin air is a seductive one. They can pick and choose from the development team members and customize a team for every project that comes along. As a colleague of mine once said, *"That way of working would be fantastic if we were bricklayers. But knowledge work doesn't work that way."* The complexities inherent to software development require specific effort to ensure that the code and design are high quality and stay that way. So adding new features on year ten of a system is just as easy as adding features on day one.

## Arguments Against Product Team Organization

### Development Team Starvation

The often-used argument against product team organization is, *"What if we organize around products and one team has no work for a specific product? That's why it won't work here!"* This is an argument that is rooted in a project-thinking mindset. As teams coalesce around products and those teams have dedicated product owners, the team is now responsible for pushing that product forward. 

Typically, products should be small enough that teams will have ownership of multiple products. This reduces the likelihood that one team starves for work. If a specific product team really doesn't have work, which is unlikely, products can be shifted but teams should be kept together. When products are shifted a team still owns that code and you still get the benefits of code ownership. While it's not ideal, you are trading institutional knowledge for team flexibility. 

### Consistency

Another argument is keeping consistency across these product teams. I would contend that you have the same exact consistency problems if you organize around projects. Nonetheless, concerns about consistency across product teams can be addressed by having cross team discussions regularly and building Communities of Practice (e.g., Database Community of Practice, UX Community of Practice, Unit Testing Community of Practice, etc.). The team at Spotify appears to do an especially good job of this.  

### One Product

Another very popular argument is, *"We only have one big product not a lot of little products, there's no way to split the system up to accomplish this way of working."* I've worked on several large products that were designed in a way that allowed for smaller, team owned subsystems to exist. They had very small interfaces between subsystems so teams could work independently for nearly all of their work and only rarely need to message between subsystems. The line of thought that a large product cannot be broken into smaller subsystems is common when working in systems without an architecture. When the architecture is a big ball of mud it is difficult to see the lines where subsystems could be broken out. While effort is required to do this the benefits are worth the effort. 

## Conclusion 

If you find yourself struggling with code quality issues and your team is organizing around projects, it may be time to discuss how your teams are organized. If your system lacks an architecture, start having lunch sessions where your team can brainstorm how to break out areas of the code. You may see after a few sessions some definite subcomponents starting to form. The lines between them may be blurry at first, but you can iterate on it until you find the right responsibilities of each subcomponent.

## Other Resources
The product team vs. project team discussion has been active for a long time. I've seen a move away from project teams coincide with the focus on agile software practices. Here are some great articles describing why project teams should be avoided in favor of product teams:

* [No Projects - Beyond Projects](http://www.infoq.com/articles/kelly-beyond-projects "No Projects - Beyond Projects") by Allan Kelly
* [Project vs. Product](http://www.thoughtworks.com/insights/blog/project-vs-product "Project vs. Product") by Tabassum Farooque Memon (Thoughtworks)
* [Projects are Evil and Must Be Destroyed](http://evan.bottch.com/2010/08/29/projects-are-evil-and-must-be-destroyed/ "Projects are Evil and Must Be Destroyed") by Evan Bottcher
* [Dedicated Product Teams](http://svpg.com/dedicated-product-teams/ "Dedicated Product Teams") by Marty Cagan
