---
layout: post
section-type: post
title: Avoid Technical Improvement Backlogs
comments: true
category: development practices
tags: ['anti-pattern', 'agile development']
---

Several times in my career I've encountered agile coaches who recommend creating,
what they call, a technical debt backlog. They believe this separate backlog should be managed in addition
to the product's feature backlog. They often discuss some ratio of product-to-technical debt
stories that each cross-functional team should be picking up in their iterations. while they
do a good job describing the benefits of such an approach, they never describe the problems
with this approach. In my experience these separate backlogs for technical issues are a problem for the
organization. They are band-aides covering up a larger problem on the development team (and probably
the larger organization) that needs to be addressed.

## Technical Debt?

Naming things is important. Often I've heard this backlog referred to as a "technical debt" backlog. One of my pet-peeves is the fact that technical debt has come to mean any type of sloppy code, which is the very opposite of Ward Cunningham's original definition. I refer to this as a "technical improvement backlog" but it is synonymous with the "tech. debt backlogs" that teams and agile coaches talk about.

## Benefits of a Separate Technical Backlog

Now I don't see these backlogs as being entirely without merit. As a short-term solution to bring issues to light in
an organization that was otherwise ignoring them, it can be a very powerful tool. So, I will discuss the short-term benefits of these backlogs before I describe why they should be avoided.

### Dealing with Feature Factories

There are a lot of reasons why organizations have quality problems with their code. Sometimes it's educational but in a lot of cases teams lack empowerment to push back. They are given fixed scope and fixed date work and told they have to meet the deadline. They are working in an organization that is only concerned with churning out more features and never step back to improve on what they have or even determine if their features are being used. John Cutler refers to this as a feature factory in his <LINK HERE> article on the subject.

By creating a separate backlog and getting some agreement about a ratio of technical vs. feature tasks enables the teams to start addressing technical issues that have been left to fester over time.

### Visibility
Somewhat related to the last benefit is the visibility. Even in organizations that aren't run like feature factories if there isn't visibility into problems they won't get the priority they deserve. If the organization has so much bad code that they need a significant amount of time to come up with a plan to address it, it is important that it is visible to the rest of the organization.

#### Quality Concerns

If the organization has never really discussed quality before, making these issues visible can be the start of measuring (qualitatively and quantitatively) the quality of the code base. If developers aren't talking about quality, creating a separate backlog can get the team starting to talk and think about how they are going to start moving the code base in a better direction. k

## Problems with This Approach

Now if you've read every one of these "pros" and are thinking that we are missing the root cause of these issues, you are correct! And that is the crux of my argument. Technical improvement backlogs should be avoided if at all possible. Depending on how mature the team is with respect to writing clean code and how bad of a state the code base is in it may be necessary to have one. I would urge any organization that creates a technical improvement backlog to view it as temporary and work to get rid of it.

### Blurs definition of done
can ship crap and come back later with a tech debt story

### encourages large planned refacotrings
Talk about Martin Fowler workflows of refactoring.  A Necessary evil...teams should work to rid themselves of these.
This ignores the opportunistic refactoring & the

#### Encourages re-writes

### Changing code without business value
 Can be an entry point for bugs..is QA testing it? leads to code you are changing just to improve. What if you never come back to it.

### Separating Improvements from features
Once you go down this road of splitting them out, in dysfunctional organizations product can only choose the story and always ignore the improvement. By including the improvement in the scope of the story we aren't creating a false separation.  
Tell story --- when we refused to do this we got the, well estimate the quick version and the right version and we will pick.

### Divide between tech and product in the organization




_________________________________________________________________________
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
