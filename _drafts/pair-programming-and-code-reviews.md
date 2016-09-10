---
layout: post
section-type: post
title: Pair Programming and Code Reviews
comments: true
category: development practices
tags: ['pair programming', 'extreme programming']
---

Pair programming has long been considered a replacement for code reviews. If code was written in a pair, having a code review was considered unnecessary and even wasteful. I took this advice for a long time even when faced with the fact that there were specific scenarios where it failed me and my team. I've even mentioned in previous blog posts that pair programming can replace code reviews. The twelve XP practices are brilliant and I contend that they would dramatically improve any development team that took the time to master them. I am a huge proponent of XP (including Pair Programming) and it remains one of my passions. However, there are a lot of cases where I don't think pair programming should be considered a substitute for a code review.

There is still a contingent of people who believe this. I often see blog posts recommending increasing team efficiency by replacing code reviews with pair programming. I even saw a conversation between some of the original XP practitioners stating that the pull request and code review model was wasteful for teams that pair program. Being on a team that does both I have to disagree. I have found that combining these practices have been incredibly valuable for my team.

<div class="well">
	<h6>The Twelve XP Practices</h6>
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

## Advice of the Time

The advice at the time wasn't bad. When compared to the standard practices at the onset of agile and XP, it was a dramatic improvement. In fact you still don't have to look too hard to find organizations working without any code reviews. Or even development organizations that require code reviews for "new developers" but "senior developers" get away without having any reviews for code before it goes into production.

When developers work by themselves without any checks whatsoever all too often no one sees any of their code before it gets shipped into production. Furthermore, organizations levying unrealistic deadlines on the team only serves to make the problem worse. In these cases developers are racing to meet deadlines and hacking code together to get something that "works" into production. This is terribly short-sighted because the maintenance cost of that code is a non-insignificant, ongoing tax for the organization. The total cost of that original code change is significantly higher than slowing down and delivering high quality (i.e., easily changeable) code the first time. Sadly, some organizations are just still too short-sighted to see this.

### A Response to Big Code Reviews

Even when teams did practice code reviews they were often handled at the end of a large project. They were usually held as large meetings where the attendees had to be interrupted to attend the meeting in person. The expectation is that the attendees have spent a significant amount of time pouring over huge amounts of code so that they can provide detailed advice and recommendations in the meeting.

This practice fails for a number of reasons. It is often way too late in the development cycle to give anything more than trivial feedback. Any significant changes would typically cause the team massive amounts of rework and presumably put them well behind their schedule. This works to frustrate both the author and the reviewer; feeling that these meetings are a waste of time. Furthermore, it is nearly impossible for someone to be able to give a detailed and high-quality review of such large amounts of code. Typically lots of issues slip through the cracks when having code reviews of this magnitude.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">10 lines of code = 10 issues.<br><br>500 lines of code = &quot;looks fine.&quot;<br><br>Code reviews.</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/397664295875805184">November 5, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Given that this practice was standard for the time, the recommendation that pair programming could replace these problematic practices was indeed true. Pair Programming was certainly an improvement over this.

## Enter Github and Pull Requests

More recently, one of the great things that Github has brought us is the concept of pull requests. Using the pull request model (and some discipline to keep commits small) teams can overcome the challenges of the traditional code review. While there are tools that existed prior to Github that allowed teams to review code asynchronously before getting committed to a repository, Github's model has had a much wider adoption.

As long as teams are issuing pull requests for small amounts of code (small, incremental divergences from their master branch) they can get asynchronous feedback on their code in a positive way prior to it being merged into their master branches. They can get this feedback at the appropriate time in their project and with enough time to react to feedback. It is this practice combined with pair programming that I contend has benefits.

## It Depends

Like nearly all things in software development if someone would ask me if pair programming is a substitute for code reviews my answer would be, "It depends." There are some cases where I think it can work. Specifically when a team has worked together for a significant amount of time and have a thorough understanding of the team's coding standards. However, my belief is that in general there is still a significant benefit to having code reviews even when practicing pair programming.

## The Issues with Skipping Code Reviews

For the ten years I have practiced Pair Programming most of that time I was on teams that had a process that allowed developers to skip code reviews as long as the code was paired on. I am going to describe the issues associated with that practice in this article.

### Coaching

Frequently we brought new team members on to the team. Some were new to the domain, some were new to our technologies, most were new to our development practices, and some were new to all three! In each of these cases the pairing session was very different than when a pair of more experienced developers worked together. The focus of these sessions was split between getting the task accomplished as well as coaching the new team member. Now, coaching is a fantastic usage of pairing and one of the great benefits of teams regularly practicing pair programming. However, the problem arises when this code is not reviewed by the rest of the team because it was "paired on." We've found problems coming out of "coaching pair code" because it was worked on by only one team member who had experience in the codebase while they were also trying to coach a new team member.

Splitting the experienced developer's focus between accomplishing the task and coaching a new developer is, at times, too much juggle in a pairing session. That can manifest itself as reduced quality code coming out of those pairing sessions. Also, when coaching the information is usually being communicated in one direction from the more experienced developer to the new developer. While when two experienced developers pair they are constantly sharing ideas typically resulting in a better solution.

### Junior Pairs

At one point the company I worked for decided that we needed additional development staff to accomplish our goals. During this time we also lost some key, senior developers. This resulted in doubling our development team in an extremely short period of time (i.e., a number of weeks). This created an environment where we had four experienced developers and four new developers on the team. The result was very problematic for the quality of our code. On a typical day this meant that every pair was engaged in coaching. While again, I believe this was good for the new members to come up to speed, we were getting very little value out of the pairing session other than coaching.

Even more problematic were the situations that would arise when one of the experienced developers was sick, on vacation, or in a meeting. In these cases two new developers would pair together and all too often would not know when to stop and ask questions. Frequently the team would have to come back and fix a fair amount of code towards the end of the iteration after the junior pair had already committed to the master branch.

### Author vs. Editor

The last example I wanted to discuss is something that [Bryan Helmkamp](https://twitter.com/brynary "Bryan Helmkamp's Twitter Account"), founder and CEO of [Code Climate](https://codeclimate.com/), described in his Baruco 2013 Conference, [Building a Culture of Quality](https://www.youtube.com/watch?v=Jsi1YTkXwxA). In his talk he describes that every author requires a great editor. As professional developers we should be taking the same approach with code reviews. In fact while code reviews are absolutely useful for finding issues in the code, I think their best use is to ensure that the code's intent is easy to understand by someone who did not author it. It is this editing stage that helps ensure the code is as clear and concise as possible.

When a pair of developers work on the code they both share the "author's mind" and because of this they cannot act as an effective editor. They have both spent a significant amount of time thinking about the problem in detail while writing the code and cannot effectively see code as a new developer would when they first encounter it. Or even how the author would view the code if he/she had to make a modification to it at some point in the future.

It is for these reasons I believe combining pair programming and code reviews is ideal and eliminates a lot of these problematic situations.

## Our Process

My team pairs on a majority of production code as a team rule. There are exceptions but they are just that, exceptions not the rule. We have combined this practice with issuing pull requests to get our code merged into our master branch.

A pair of developers will pick a task for the highest priority story that is currently in progress. They will make sure that they can work on the task without interfering with another pair, otherwise they will start a task associated with the next highest priority story. Once they begin development they create a branch off of our master branch. When the task is complete they issue a pull request back to the master branch. Every other developer on the team is included on the pull request. The pair needs to address all pull request comments and get at least two approvals before merging their code back into the master branch.

Even though we pair we still get great comments and have valuable conversations about the code through our code review process. In fact comments that come out of the pull request will often be used as a conversation to determine if we want add to or modify our coding standards.

## Conclusion

I find that pair programming results in significantly higher quality code, is great for building trust on a team, and very beneficial to share knowledge across a development team. However, I have found that pairing alone is not a replacement for code reviews. The combination of the two has had a positive affect on my team and the quality of our software. Code reviews help foster a team's long-term, continued focus on quality and continually improving their code.
