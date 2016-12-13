---
layout: post
section-type: post
title: Avoid Technical Improvement Backlogs
comments: true
category: development practices
tags: ['anti-pattern', 'refactoring']
---

Several times in my career I've encountered agile coaches who recommend creating,
what they call, a technical debt backlog. They believe this separate backlog should be managed, in addition
to the product's feature backlog, by the product owner. They often discuss some ratio of product-to-technical debt stories that each cross-functional team should be picking up in their iterations. while they do a good job describing the benefits of such an approach, they never describe the problems with this approach. In my experience these separate backlogs for technical issues are a problem for the organization. They are band-aides covering up a greater problem on the development team (and probably the larger organization) that needs to be addressed. Refactoring and addressing technical issues in the code does not belong on a team's backlog.

## Technical Debt?

Naming things is important. Often I've heard this backlog referred to as a "technical debt" backlog. One of my pet-peeves is the fact that technical debt has come to mean any type of sloppy code, which is the very opposite of Ward Cunningham's original definition. I refer to this as a "technical improvement backlog"  or "refactoring backlog" but it is synonymous with the "tech. debt backlogs" that teams and agile coaches talk about.

## Benefits of a Separate Technical Backlog

Now I don't see these backlogs as being entirely without merit. As a short-term solution to bring issues to light in an organization that was otherwise ignoring them, it can be a very powerful tool. So, I will discuss the short-term benefits of these backlogs before I describe why they should be avoided.

### Dealing with Feature Factories

There are a lot of reasons why organizations have quality problems with their code. Sometimes it's educational but in a lot of cases teams lack empowerment to push back. They are given fixed scope and fixed date work and told they have to meet the deadline. They are working in an organization that is only concerned with churning out more features and never step back to improve on what they have already built or even determine if their features are being used. John Cutler refers to this as a feature factory in his <LINK HERE> article on the subject.

By creating a separate backlog and getting some agreement about a ratio of technical vs. feature tasks enables the teams to start addressing technical issues that have been left to fester over time.

### Visibility

Somewhat related to the previous benefit is the visibility it achieves in the organization. Even in organizations that aren't run like feature factories if there isn't visibility into problems they may not get the priority they deserve. If the organization has so much bad code that teams need a significant amount of time to come up with a plan to address it, it is important that it is visible to the rest of the organization.

### Quality Concerns

If the organization has never really discussed quality before, making these issues visible can be the start of measuring (hopefully both qualitatively and quantitatively) the quality of the code base. If developers don't ever discuss software quality, creating a separate backlog can get the team starting to talk and decide how they are going to move the code base in a better direction.


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Technical debt does not go on the backlog. <a href="https://twitter.com/RonJeffries">@RonJeffries</a> said it best <a href="https://t.co/6jqwNmBMhq">https://t.co/6jqwNmBMhq</a> <a href="https://twitter.com/AntonyMarcano">@AntonyMarcano</a> <a href="https://t.co/q8O4CamuGz">https://t.co/q8O4CamuGz</a></p>&mdash; Joe Schmetzer (@tumbarumba) <a href="https://twitter.com/tumbarumba/status/776702044090531840">September 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Problems with This Approach

Now if you've read every one of these "pros" and are thinking that I am missing the root cause of these issues, you are correct! And that is the crux of my argument. Technical improvement backlogs should be avoided if at all possible. Depending on how mature the team is with respect to writing clean code and how bad of a state the code base is in it may be necessary to have one. I would urge any organization that creates a technical improvement backlog to view it as temporary and work to get rid of it.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;The moment you have thrown the majority of your technical debt on a backlog you have lost. &quot; - great session with <a href="https://twitter.com/martincronje">@martincronje</a></p>&mdash; Sandy Mamoli (@smamol) <a href="https://twitter.com/smamol/status/773369220335710208">September 7, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Obscures Definition of Done
When teams complete a user story that piece of functionality should be ready to go to production.
In organizations where teams are rushing to meet their commitments I've seen the technical improvement
backlog act as a crutch. They really need to address some sloppy code or maybe the team has introduced duplication by repeating a concept somewhere else in the application. Without a technical improvement backlog the team should refactor that code as part of the story. However, with the technical improvement backlog they can implement the quick and dirty feature, hit their date, and add a new "tech debt" story in the backlog to resolve the problem later. I'm sure you can see where this is going, those stories never get picked up and the organization has legitimized continuing short-cuts and band-aides, as long as the corresponding "tech debt" story was written.

### Encourages Large Planned Refacotrings
Talk about Martin Fowler workflows of refactoring.  A Necessary evil...teams should work to rid themselves of these.
This ignores the opportunistic refactoring & the

#### Encourages re-writes

### Changing code without business value
 Can be an entry point for bugs..is QA testing it? leads to code you are changing just to improve. What if you never come back to it.

### Separating Improvements from features
Once you go down this road of splitting them out, in dysfunctional organizations product can only choose the story and always ignore the improvement. By including the improvement in the scope of the story we aren't creating a false separation.  
Tell story --- when we refused to do this we got the, well estimate the quick version and the right version and we will pick.

### Divide between tech and product in the organization
Team doesn't have to break from building features to fix issues.

## Types of Technical Improvement Items
I have typically encountered two kinds technical improvement backlog items and each should be handled differently.

### Story Level Refacotrings

Should be dealt with in the story where the issue is encountered.

### Large-scale Refactorings

Rewrites or things like "Replace our ORM." Enormous things. Need to come up with a plan to get there, understand intermediate steps, and begin executing on them.

## Special Cases
I do believe there are some special cases where a technical improvement can legitimately land on a team's backlog. Let's use the example of "Replace our ORM" technical backlog item. Instead of creating this let's say the team replaced each usage when they encountered it, following opportunistic refactoring techniques. Let's say there are a half dozen places left in the application that still uses the old ORM. To be able to phase out support for both I could see a technical task to get rid of some of the other usages that may not be encountered for quite some time.
http://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/



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
