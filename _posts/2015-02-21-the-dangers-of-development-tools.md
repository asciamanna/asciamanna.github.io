---
layout: post
section-type: post
title: The Dangers of Development Tools
comments: true
category: development tools
tags: ['extreme programming', 'agile development']
---
This is my second post in a series about development tools. In my  [previous post](/2015/01/17/a-better-bug-tracker.html "A Better Bug Tracker") I discussed why bug tracking software is a sign that there is a problem with the development practices / processes of an organization. This post will focus on the problems that development tools create in general.

By development tools I'm talking strictly about tracking software, whether it be a bug or feature tracking software. This includes software to manage the workflow of the development team. I'm not talking about IDEs, text editors, or third-party libraries your team may be using.  

I've experienced working on a team who used a card wall to manage its work and later adopted software tools. My recommendations come from experiencing the problems that development tools create in an organization. Reflecting on this and discussing it with other developers I've realized that the problems these tools create are common and avoidable. I will be discussing some of my personal experiences in this post as I believe there are parallels to most software organizations.
<!--more-->  

## Low Tech Wins

If you read the original literature on Agile software development and take a look at the eXtreme Programming (XP) practices you will notice that they prescribe no tools. In fact, read the [Agile Manifesto](http://www.agilemanifesto.org/ "Agile Manifesto") if you haven't in a while. The first value mentioned is **Individuals and interactions over processes and tools**. It isn't that the manifesto authors thought tools weren't useful, but preferred the interactions of individuals over tools. There is no greater example of this than the physical card wall. In books and articles about agile development some of the Agile Manifesto authors (those who met at Snowbird, UT) recommended story cards which are physical index cards. These cards are placed in an open area so that they are visible to the entire organization. This became known as the "Agile Card Wall" or "Story Wall."

XP is amazing for a lot of reasons and this low technology recommendation is one of them. The manifesto authors are all brilliant technologists who have been in the industry long enough to understand the issues with workflow tools. However, as an industry we disregard their warning and march forward adopting new (and increasingly complicated) tracking software for our development organizations. In fact there are several software companies churning out *"Agile Development Tools"* at an alarming rate. This should be worrisome to those who go back and read the original intent of agile software development.

I can't say all of the tracking software currently on the market are bad. In fact some of the tools I have used in the past are quite good. Some are **significantly** better than others. However, it's important to carefully decide if your organization needs software to track the development work. If your organization still decides to use tracking software, I want you to be aware of the pitfalls so that you can position your organization to avoid them.

Before I discuss the problems with these tools I will recommend the card wall as the best solution. It avoids all of the pitfalls I will discuss in this post. The organization changes once you open Pandora's Box and begin using a tool to manage the development workflow. Once these things happen they are very difficult to undo.

## The Tool Becomes the Process
Once software is adopted to manage development workflow the tool becomes the process. It may be hard to notice at first because the team will likely adopt a tool that supports how they are currently working.  

### Process Paralysis
The first time the team has a retrospective and decides to change something about the way they work the friction will begin. When using a card wall everything can be changed, however by contrast when working with a tool the team is restricted to only change its process in ways that the tool permits.

The team may even make valiant efforts to customize the tool. They will build software to interact with it so that it can be adapted to the changing process. However, this exacerbates the problem because now there is custom code dependent on the tool, further entrenching the organization in the use of that specific tool.

### Process Improvement Stops
After adopting a tool, teams stop talking about and thinking about how to make positive changes to their process(es). It may be because there is now a barrier to changing the process. The way the tool works is accepted as *the* process and the conversations stop happening. Instead of having a process that supports the values of the cross-functional development team the process exists because the tool supports it. This is extremely detrimental to a development organization. One of our responsibilities as professional developers is to identify issues with our processes that are inefficient or the source of bugs and change them.

### New Roles in the Organization
Another barrier to changing the process is that quite commonly positions are created to manage the tool and the development process the tool supports. In a majority of the situations I've experienced, these are people who are not stakeholders nor are they part of the cross-functional development team. Now there is an external person the team needs to convince that a process or tool needs to change. This person has a different set of goals than the team. In cases when this person is in a position of authority over the development team it makes the changes nearly impossible. The creation of this role amplifies the next issue, complexity in the process.

## Complexity Will Accrete
The agile card wall enables a simple development process. Development teams should be sensitive to any complexity creeping into their development process or practices. This is one of the Agile (XP) values: [_**Travel Light**_](http://c2.com/cgi/wiki?TravelLight "XP Travel Light"). Remember building the software, releasing the software, figuring out what to work on next, etc. should be simple. If it isn't there is a huge opportunity for improvement. To be frank, if you think it needs to be complex you are wrong.

Once there is a position created around managing a tool and/or process there is a vested interest by that person to keep the tool and process as complicated as possible. I'm not saying people in this role are bad, not intelligent, or even that they are making the process harder intentionally. But if it is someone's full time job to manage a process and/or tool they are not thinking in the same way that the team who needs to use it are. The most important thing to the development team is for the tool to stay out their way which is **_not_** the most important thing for the person managing the tool.

If a tool allows for the addition of complexity it will find a way into your development process. I'm not entirely sure why this happens but I have encountered this several times.

I will recount an example of this from my personal experience. A team I was on spent a significant amount of time using index cards and a card wall. This allowed us to focus on the communication between people instead of the documentation of the communication. This process worked very well. However, once our team adopted a tool we continuously butted heads with other people in the organization who requested that all conversations about a feature be documented in the tool. This took the team away from developing software for considerable amounts of time and was an unattainable goal. The team slowed down considerably to document every conversation that was occurring and obviously missed important details when trying to recount discussions and get them written up in the tool while still being productive developing software. We had team conversations about "documenting our discussions better" and these took time away from conversations we should have been having about "building better software." It was interesting that this request was never made when using the card wall.

## Software Inventory Accumulation
An additional issue with using a tool is the ease at which a backlog can be created that is out of control and a drag on the team. Backlogs in software development organizations often become problematic very quickly. You'd be hard pressed to find a development organization without one, but it is possible to work without them. I have spent several years working with a single iteration feature backlog and __*no bug backlog*__. Backlogs often slow your organization down. There are specific XP development principles and practices to eliminate the need for both feature and bug backlogs. The reason that they become problematic is that they are a point where software inventory accumulates, and software inventory slows your organization down everyday. I won't get into the details here but if you want to read about the perils of software inventory check out Joel Spolsky's post about it [here](http://www.joelonsoftware.com/items/2012/07/09.html). Any organization that has meetings to *__"prune the backlog"__*, to *__"triage bugs"__*, or to re-estimate stories as new information is acquired is wasting valuable time that could be spent building the product.

### Signal Vs. Noise
As software inventory accumulates it becomes increasingly harder for the team to know what is actionable work or a priority. Additionally, the work described in the backlog quickly becomes outdated and incorrect.

This is another problem I've experienced. Once the XP team I worked on had tracking software in place, it became a dumping ground for half-baked user stories and placeholders.  Some of these never became actual work and those that did changed drastically before they became something the development team built. This cost the team time wading through these to find the "real work." Eventually we convinced the organization to move this backlog to another part of the tracking software so the development team could ignore it but we could not convince the rest of the organization to get rid of this backlog altogether. Even though we had several successful years behind us working without a backlog.  

### Keep Everything!
Another interesting side-effect was that the organization decided that deleting anything was a bad idea. When we used a card wall, story and bug cards would be discarded constantly. After adopting the tracking tool a bug was created in our tool by someone internal to the company. After investigating it the team realized that it was a misunderstanding of a recent user story. Instead of deleting it the team was pressured to keep that "bug" in the system "just in case someone in the future gets confused in exactly the same way." It appears that it is just too easy to keep everything forever in a tracking tool so it allows for this accumulation. This noise in the software tool costs teams time and makes discovering the valuable work more difficult.

In my experience the most important / critical development work for a team does not come from having months or even years old, incomplete data in a development tracking tool somewhere. The critical work comes from other sources as the backlog continues to stagnate. This results in the accumulation of inventory until the organization hits a tipping point and has to declare bankruptcy and start over. Then the cycle begins again.

## One Place for Everything
Once a tool is in place there is a natural urge in the organization to make it the place for everything. These are well-intentioned decisions since everyone knows the tool, and it may be "close enough" to what the team needs so they don't want to adopt another piece of software. There may even be cost restrictions to adopting another tool that appears to do similar things. So, the tool becomes a bug tracker for development, a feature tracker, a production issue tracker from customer service and help-desk employees, a 3-month road map for the business analysts, and a multi-year road map for the executive team. Eventually the system breaks because it can't do all of those things well and inventory is now accumulating at an alarming rate.

## Entrenched Development Tool
Given all of these reasons, once a tool is adopted it is very hard to eliminate from an organization. So before committing to a development tool, I would consider using a card wall instead. A lot of people are skeptical of the low technology approach (we are technologists after all). If you are, try out the card wall for a while and see if it works for your team. It has an extremely low adoption cost and no risk. The best teams I've worked on kept their process and tools very simple. The tools stayed out of their way and the team spent their workday building software, learning from one another, and figuring out how to build software better as a team.
