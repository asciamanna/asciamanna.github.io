---
layout: post
section-type: post
title: Avoid Technical Improvement Backlogs
comments: true
category: development practices
tags: ['anti-pattern', 'refactoring']
---

Several times in my career I've encountered agile coaches who recommend creating, what they call, a technical debt backlog. They believe this backlog should be managed, in addition to the product's feature backlog, by the product owner (often combining the two). They discuss some ratio of product-to-technical debt stories that each cross-functional team should be picking up in their iterations / sprints. While they do a good job describing the benefits of such an approach, they never describe why an organization would want to avoid this practice. Generally, it seems a lot of agile coaches accept this as a "best practice." In my experience putting technical issues on the backlog is problematic. They are band-aides covering up a greater problem on the development team (and more likely the larger organization) that needs to be addressed. **Refactoring and addressing technical issues in the code does not belong on a team's backlog.**

## Technical Debt?

Using the right terminology is important. Often I've heard this backlog referred to as a "technical debt" backlog. One of my pet peeves is that technical debt has come to mean any type of sloppy code, which is the very opposite of [Ward Cunningham](https://twitter.com/WardCunningham)'s original definition.

According to Ward's original definition of technical debt, code needs to be of high quality so it can easily be changed in the future as the understanding of the domain being modeled by the software increases. Consequently, I refer to this as a "technical improvement backlog" or "refactoring backlog" but it is synonymous with the "tech debt backlogs" that teams and agile coaches talk about.

## Benefits of a Separate Technical Improvement Backlog

Now I don't see these backlogs as being entirely without merit. As a short-term solution to bring issues to light in an organization that was otherwise ignoring them, it can be a very powerful tool. So, I will discuss the short-term benefits of these backlogs before I describe why they should be avoided.

### Dealing with Feature Factories

There are a lot of reasons why organizations have quality problems with their code. Sometimes it's educational but in a lot of cases teams lack empowerment to push back. They are given fixed scope and fixed date work and told they have to meet a deadline. They are working in an organization that is only concerned with churning out more features and never step back to improve on what they have already built or even determine if the features already in production are valuable. These organizations often concern themselves with ensuring development teams are 100% utilized at all times, giving them no time to learn and improve. [John Cutler](https://twitter.com/johncutlefish) refers to this as a feature factory in his article on the subject, *[12 Signs you are working in a Feature Factory](https://hackernoon.com/12-signs-youre-working-in-a-feature-factory-44a5b938d6a2#.ve7bjxiu2).*

By adding these technical issues to the backlog and getting some agreement about a ratio of technical vs. feature tasks enables the teams to start addressing problems that have been left to fester over time.

### Visibility

Related to the previous benefit is the visibility it achieves in the organization. Even in organizations that aren't run like feature factories if there isn't visibility into problems they may not get the priority they deserve. If the organization has so much bad code that teams need a significant amount of time to come up with a plan to address it, it may be important that it is visible to the rest of the organization. Development teams working in a codebase that is so bad that it is a permanent drag on every new feature (which is not an uncommon problem unfortunately) could benefit from making this visible in the organization. In these cases software quality has obviously been ignored for quite some time.

### Quality Concerns

If the organization has never really discussed quality before, making these issues visible can be the start of measuring (hopefully both qualitatively and quantitatively) the quality of the codebase. If developers don't ever discuss software quality, creating a separate backlog can get the team starting to talk and decide how they are going to move the code in a better direction.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Technical debt does not go on the backlog. <a href="https://twitter.com/RonJeffries">@RonJeffries</a> said it best <a href="https://t.co/6jqwNmBMhq">https://t.co/6jqwNmBMhq</a> <a href="https://twitter.com/AntonyMarcano">@AntonyMarcano</a> <a href="https://t.co/q8O4CamuGz">https://t.co/q8O4CamuGz</a></p>&mdash; Joe Schmetzer (@tumbarumba) <a href="https://twitter.com/tumbarumba/status/776702044090531840">September 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Problems with This Approach

Now if you've read every one of these "pros" and are thinking that I am missing the root cause of these issues, you are correct! That is the crux of my argument. Technical improvement backlogs should be avoided if at all possible. Depending on how mature the team is with respect to writing clean code and refactoring, how bad of a state the codebase is in, and the development organization's relationship with the business organization, it may seem necessary to have one. I would urge any organization that creates a technical improvement backlog to view it as temporary and work to get rid of it.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;The moment you have thrown the majority of your technical debt on a backlog you have lost. &quot; - great session with <a href="https://twitter.com/martincronje">@martincronje</a></p>&mdash; Sandy Mamoli (@smamol) <a href="https://twitter.com/smamol/status/773369220335710208">September 7, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Obscures Definition of Done

When teams complete a user story, the functionality should be ready for production. In organizations where teams are rushing to meet their commitments I've seen the technical improvement backlog act as a crutch. Let's look at this example, the development team really needs to address some sloppy code and has introduced duplication by repeating a concept somewhere else in the application. Without a technical improvement backlog the team should refactor that code as part of the user story where it was introduced. However, with the technical improvement backlog they can implement the feature as quickly and sloppily as possible, hit their date, and add a new "tech debt" story in the backlog to address the problem later. I'm sure you can see where this is going, those stories either never get prioritized or there are so many that the team can't keep up with them even when they are addressing some technical improvements each iteration. The organization has legitimized continuing short-cuts and band-aides, as long as the corresponding "tech debt" story was written. Over time the issues continue to accumulate and the team cannot address all of them. There's a bit of irony in the situation when the technical improvement backlog enables the exact type of issues it is meant to address.

<div class="well">
<h4>Further Reading</h4>
<a href="http://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/">
   Refactoring -- Not on the Backlog!</a> by <a href="http://www.ronjeffries.com">Ron Jeffries</a>
</div>

### Encourages Large Planned Refactorings

[Martin Fowler](https://martinfowler.com/) talks about the issues around what he calls "Planned Refactorings" in his
talk at OOP2014, *[Workflows of Refactoring](https://www.youtube.com/watch?v=vqEg37e4Mkw)*. He contends that these planned refactorings (i.e., putting technical improvement / refactoring stories in the backlog and planning them along with feature work) are unfortunate, "necessary evils" until teams get skilled at refactoring and opportunistic refactoring techniques. He says teams should work to rid themselves of these planned refactorings and focus on small refactorings as part of their business-facing work (i.e., user stories).

#### Encourages Re-writes

I've written before about how code re-writes prevent teams from ever learning refactoring techniques in my post [The Vicious Circle of Rewriting Software](/2015/11/27/the-vicious-circle-of-rewriting-software.html). Re-writes often cause the team to incur avoidable risks. These planned refactorings encourage re-writing large portions of the code. By contrast, refactoring within the scope of user stories encourages developers to learn and practice incremental improvement techniques.

### Changing Code without Business Value

Another consequence of planned refactorings is that teams may focus on cleaning up areas of the application that they may not return to for a long time. If teams aren't actively developing or modifying the code in question, it does not make sense for them to be the spending that time improving it. Alternatively, following [Bob Martin](https://twitter.com/unclebobmartin)'s Boy Scout Rule or [Martin Fowler](https://www.martinfowler.com)'s [opportunistic refactoring](https://martinfowler.com/bliki/OpportunisticRefactoring.html) techniques will encourage developers to focus on improving the code they are currently working on. Code that is most frequently modified will get the most of the team's attention and will be cleaned more than code that may not be looked at for years.

### Less Rigorous Testing

I have seen issues when refactoring stories, which don't have a user-facing change, don't go through the same testing rigor that user stories do. I have personally experienced working on teams where user stories would go through a typical team workflow where QA would verify the story and a product owner would sign off on it. However, for "technical debt" stories the developers were the only ones verifying the work. Often these were sources for bugs. When there are two types of stories it allows teams to come up with different rules for how to address them.

### Separating Improvements from Features

Once organizations begin splitting improvement out from feature development, it creates a false division in the work. I contend that it is a false division because high-quality code is required to continue delivering business value. In dysfunctional organizations where the product and development teams have a separate reporting structure and struggle to work together, the product team can decide to only choose to prioritize features and always ignore the improvement stories. It is easy to say, "we won't let that happen here, we always agree to a ratio." But when organizations work on fixed scope and fixed date work and have financial incentives to meet deadlines, it makes it that much harder to always do the right thing for the quality of the code. I have seen this enough times to realize it is going to happen if you choose to address quality issues separate from features.

<div class="well">
<h4>More on Refactoring</h4>
<a href="https://blog.ndepend.com/refactoring-is-a-development-technique-not-a-project/">
   Refactoring is a Development Technique Not a Project</a> by <a href="http://www.daedtech.com/">Erik Dietrich</a>
</div>

## Types of Technical Improvement Items

I have typically encountered two kinds technical improvement backlog items and each can be handled differently.

### Story Level Refactorings

These are smaller refactorings that usually impact one to several classes. These should be dealt with in the story where the issue is encountered and the story shouldn't be closed until the refactoring is complete. If your team estimates the work, then these refactorings should be included in the story estimate.

### Large-scale Refactorings

Large-scale refactorings, things that impact dozens or more classes, could be handled differently if they would significantly impact the story's scope (by requiring a significant amount of disparate code changes and therefore significant regression testing). Note that I said *could* be handled differently. If they can still be done within the scope of a story that is a perfectly reasonable way of dealing with these larger issues.

Sometimes though, these larger issues are enormous or for other reasons cannot be dealt with in the scope of a single iteration. These are typically things that become "planned refactorings." Instead, the team should discuss what their ideal end-state is, and determine the intermediate steps necessary to get there. Then they begin executing on these incremental steps. An interesting thing tends to happen, as they start making the first couple of refactorings they find a different, more favorable, approach that changes some of the intermediate steps. Doing these a few times will help teams become comfortable with incremental refactoring techniques.  

## Special Cases

I do believe there are some special cases where a technical improvement can legitimately land on a team's backlog. These are typically larger technical improvement efforts. For example, let's say the team is planning on replacing its ORM. Instead of creating this backlog item, let's say the team replaced each usage when they encountered it while working on user stories, following opportunistic refactoring techniques. After several months of development there are a half dozen places left in the application that still use the old ORM. To be able to phase out support for both I could see a technical task to get rid of the remaining usages of the legacy ORM that may not be encountered for quite some time. But these types of tasks are the exception not the rule.

## Conclusion

Refactoring doesn't belong on the team's backlog. Technical improvement, "technical debt", and/or refactoring backlogs should be avoided in favor of opportunistic refactoring and incremental code improvement techniques. Too many issues arise when teams separate code improvement from feature development. At its best it is a band-aide covering up larger issues in the organization.
