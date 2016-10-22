---
layout: post
section-type: post
title: Avoid Technical Improvement Backlogs
comments: true
category: development practices
tags: ['']
---

NOTES:
Agile coaches recommending keeping "tech debt" backlogs. Or even have a tech backlog and a product backlog. Teams commit to a percentage of stories from each backlog. This is an antipattern. Used to cover for the fact that the product organization won't prioritize technical improvement stories.

Technical debt is a misused term so I call it a technical improvement backlog

two types of tech improvement backlog stories
* Large technical changes cover a fairly large area of the
* Smaller refactorings

Large tech changes discourages incremental improvement and allowing teams to practice incrementally improving towards the desired state. Ignores opportunistic refactoring.

Smaller changes allows developers to just "do whatever it takes" to get the code working and let's them delay improvements ignoring opportunistic refactoring and the boy-scout rule since they can just write up the improvements they'd like to make in another story.

Separating code improvement from features --- Product organization will continue to select features over improvements.  
Can't blame them separate stories means the team has to stop delivering business value while they make improvements. Why should we give the team time to improve the code when they didn't do it the first time?

Leads to code you are not currently working on 
Creates a divide between product and development organization -
