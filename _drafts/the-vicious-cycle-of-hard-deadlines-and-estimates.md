---
layout: post
section-type: post
title: The Vicious Cycle of Hard Deadlines and Estimates
comments: true
category: development practices
tags: [agile-development, anti-patterns]
---
### The Downward Spiral of a Codebase

Software organizations that create projects with hard deadlines that fix both scope and time create an unending pressure situation on development teams. These organizations maintain too much reliance on estimates, which at best are just guesses based on the experimental nature and process of discovery that is software development. Too make matters worse this pressure creates an environment for creation of poor quality code which, in turn, makes giving any type of reasonable estimate much harder. This creates a vicious cycle that destroys team morale, leads to burn-out and heroics, and ruins a company's ability to deliver value to its customers. 


## Fixing Time and Scope

This all starts by fixing time and scope. Deadlines are real for most businesses, but without an understanding of the nature of software development project managers will continue to think they can fix both time and scope. So a predefined solution gets delivered to the team via detailed requirements, and every feature for the project must be completed before a customer can begin using the system. Every feature concocted at the beginning of the project in the users hands by the date dictated at the beginning of the project is the only criteria for "success." Anything less than that is deemed a failure. 

## Pressure Leads to Mess

These deadlines often create a pressure on teams to rush. Some organizations concoct these pressure situations artificially because they think people will do their best work this way. This is a clear misunderstanding of how software really gets created. Software is experimental knowledge work that requires creativity. The fog of looming deadline pressures destroys teams' abilities to be creative nor does it give them the slack and time to focus on ensuring quality is built in from the start. 

DEMING QUOTE ON QUALITY HERE. 

Instead they rush to churn out any working code to meet their deadline. Working code for the best software teams is a starting point, then the work begins to craft the working code into its appropriate design, making it readable, understandable and changeable for the developers and teams who come after them. Unfortunately, in pressure situations "getting it working" is the end game. The codebase quickly deteriorates over time. Internal quality problems (design issues) and external quality problems (bugs) begin accumulating. 

The project ends, like most waterfall projects would, with last minute heroic bug fixes and set of bugs that are "ok to go production." The team takes a deep breath and braces for the next project to begin the cycle all over again. 

## Mess Creates Uncertainty

This mess creates uncertainty in the code. Under the fog of pressure people forget the incredible messes they have created to getting a feature working. The first design idea, regardless of how flawed it was, makes it into the codebase. After a few of these kinds of projects the messes are so deep and so different that no one can remember the details of all of them. 

This uncertainty makes estimating the work impossible. Without well-designed, well-tested, modular code teams can't count on the code to make future work easier for them. When new features need to interact or co-exist with existing features there's no way to know how challenging the work will be before you start. So teams just make guesses and hope for the best.

## Poor Estimates Create More Pressure & Imposed Deadlines

These poor estimates end up creating more pressure on teams. I've seen this happen in two different ways:
* The software organization imposes a fixed deadline on a team and uses estimates to see if they will meet the deadline
* The software organization asks for estimates and uses them to create a deadline that the team must now meet

Using estimates as deadlines is fraught with risk even for great software teams working in well-factored codebases, add the uncertainty of messy code and big ball of mud architecture and the estimates often aren't worth the time the team spends on them. 

This creates more pressure and more poor quality code. When leaders don't have a view into the codebase and they see each feature taking longer and longer to implement they think they have a motivation problem, and double down on the imposing deadlines. Eventually, this craters the codebase because there are so many problems it has become impossible to ship a feature without breaking several others. This is when companies often embark on their next vicious cycle, the software rewrite. You can read about the dangers of the rewrite in my post, <LINK> The Vicious Circle of Rewriting Software.


The nature of the work didn't change. The team doesn't know exactly what they need to do until they get started. The work is still a process of discovery, but they have a box drawn around them constraining the solution they are delivering, their approach to the solution, and the time the need to get it done. 
Woody quote - It's in the doing of the work that we discover the work that needs to be done

Software development is knowledge work and it doesn't improve by imposing hard deadlines or treating devleopers like commodities. Adding more developers doesn't often improve the work or get the work done faster. This is contrary to the common, ill-informed practice of adding developers to projects to get them done faster. 

## Alternatives

A fundamental shift in understanding of how software development works. 






After a few decades of agile and lean software development and now with the rise of practices like TDD, evolutionary design, Continuous Delivery and movements like DevOps more companies understand that the old ways of working are much more likely to lead to failure. Yet, with so many companies still stuck in the past the truly successful software companies are not yet the norm. 
