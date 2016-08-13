---
layout: post
section-type: post
title: Pair Programming and Code Reviews
comments: true
category: development practices
tags: ['pair programming']
---

The advice for XP teams practicing pair programming has long been that as long as two developers see the code that counts as the code review. One benefit of pair programming was that the need to have separate code reviews was unnecessary and even wasteful. I took this advice for a long time even in light of the fact that there were specific scenarios where it failed me and my team. The twelve XP practices are brilliant and I contend that they would dramatically improve any development team that took the time to master them. I am a huge proponent for XP (and that includes Pair Programming) and it remains one of my biggest passions. However, I think one of the blindspots of the folks originally teaching XP is that pair programming can replace code reviews.  

There is still a contingent of people who believe this. I often see blog posts recommending increasing team efficiency by replacing code reviews with pair programming. I even saw a conversation between some of the original XP practitioners stating that the pull request code review model was wasteful for teams that pair program. Being on a team that does both I have to disagree. I have found that combining these practices have been incredibly helpful for our team. 

<div class="well">
	<h6>Twelve XP Practices</h6>
	Pair Programming<br/>   
    Planning Game<br/>
	Test Driven Development<br/>
	Whole Team<br/>
	Continuous Integration<br/>
	Design Improvement<br/>
	Small Releases<br/>
	Coding Standard<br/>
	Collective Code Ownership<br/>
	Simple Design<br/>
	System Metaphor<br/>
	Sustainable Pace<br/>
</div>

## Advice Of the Time

The advice at the time wasn't bad. When compared to the standard practices at the onset of agile and XP it was a huge improvement. In fact you still don't have to look too hard to find organizations working this way. When developers work by themselves without any checks whatsoever all too often no one sees any of their code before it gets shipped into production. Furthermore, organizations levying unrealistic deadlines on the team only makes the problem worse. Now developers have no one checking their code and they are feeling rushed so they are never coming back to look over the code a second time. 

## A Response to Big Code Reviews

Even when teams did practice code reviews they were handled at the end of a large project. They are usually held as large meetings where everyone has to be interrupted to attend the meeting in person. The attendees have to spend a significant amount of time reviewing huge amounts of code prior to the meeting. In the meeting they are expected to give detailed feedback and recommendations about the code. 

This practice fails for a number of reasons. It is often way too late to give anything more than trivial feedback. Any significant changes would typically cause the team to miss the schedule. This works to frustrate both the author and the reviewer; feeling that these meetings are a waste of time. Furthermore, it is very hard for someone to be able to give a detailed and high-quality review of such large amounts of code. Typically things slip through the cracks when having code reviews of this magnitude.

Given this was typical for the time, the recommendation that code reviews could replace these problematic practices was indeed true. Pair Programming was certainly an improvement over this.
 
## Enter Github and Pull Requests

More recently, one of the great things that Github has brought us is the concept of pull requests. Using the pull request model (and some discipline) teams can review code and overcome the challenges of code reviews. As long as teams are issuing pull requests for small amounts of code they can get asychronous feedback on their code in a positive way prior to getting it committed to their repositories. They can get this feedback at the appropriate time in their project and with enough time to react to feedback. It is this practice combined with pair programming that I think has benefits.

## It Depends

Like most things in software development if someone would ask me if pair programming is a substitute for code reviews my answer would be, "it depends." There are some cases where I think it can work. Specifically when a team has worked together for significant amount of time and have a complete understanding of the team's coding standards. However, my belief is that in general there is still a significant benefit to having code reviews even when practicing pair programming. 

## The Issues with Skipping Code Reviews
For the ten years I have practiced Pair Programming I would say roughly half of that time we skipped code reviews for all code that was paired on. I want to describe the problems we encountered.

### Coaching

Frequently we brought new team members on to the team. Some were new to the domain, some were new to our technologies, some were new to our development practices, and some were new to all three! In each of these cases the pairing session was very different than when a pair of seasoned developers worked together. The focus of these sessions were split between getting the task accomplished as well as coaching the new team member. Now, this is a fantastic usage of pairing and one of the great benefits of teams regularly practicing pair programming. However, the problem arises when this code is now no longer reviewed by the rest of the team because it was "paired on." We've found problems coming out of this code because it was basically worked on by one team member who has experience in the codebase and they were also trying to coach a new team member at the same time. 

### Junior Pairs

### Author vs. Editor


It is for these reasons I believe combining pair programming and Pull Requests is ideal. 

## Our Process
My team pairs on a majority of production code as a team rule. There are exceptions but they are just that, exceptions not the rule. We have combined this practice with issuing pull requests to get our code merged into our master branch. I will describe our process here. 

