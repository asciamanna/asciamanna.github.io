---
layout: post
section-type: post
title: The Benefits of Pair Programming
comments: true
category: development practices
tags: ['pair programming', 'extreme programming']
---

In my previous post <LINK> I discussed the misconceptions about pair programming. When trying to encourage skeptical development organizations to learn pair programming its not only important to understand the misconceptions but also be able to articulate its benefits. Pair programming addresses so many traditional sofwtare project issues in development organizations I consider it an essential practice of modern software development teams. 

## A Social Activity

Software development is a social activity. The greatest software teams are expert collaborators. Time and time again I've seen teams who pair program consistently, collaborate incredibly well. Pair programming creates daily opportunities to practice this collaboration. If I were to pick the most important aspect of pair programming it's that it encourages continuous collaborative software design and development. 

## Mentoring

While I see benefits to formal mentorship programs and the relationship between a manager and her direct reports, neither of these are a replacement for the mentoring that happens on teams who pair program. Mentoring that occurs as a result of pair programming happens every day in the code, providing realtime feedback on decisions. The feedback cycle in these pairing sessions is incredibly short, providing many opportunities per day for mentoring. Pairing sessions are continuous, multi-hour conversations about the code, design decisions, trade-offs, etc. 

It is no coincidence that I achieved my greatest growth during my time on an XP team and greatly improved my coaching skills as well. On teams who pair program, everyone becomes a coach and mentor.

> Always strive to be mentoring and mentored.   
> &mdash; _[David Bernstein](https://twitter.com/ToBeAgile), Beyond Legacy Code_

## Knowledge Acquisition & Onboarding

Pair programming accelerates knowledge acquisition on teams which provides many benefits to teams. Onboarding new developers happens fast. Instead of working in isolation and getting feedback after going too far in the wrong direction they are getting immediate feedback on their work. 

Learning curves begin to flatten on these teams as members level each other up on the various skills and technologies needed to address their customer's problems. Knowledge travels throught the team incredibly quickly. Teams who switch pairs at least once per day (or sometimes even more) realize these benefits even faster.

### Promiscuous Pairing

If the idea of pair programming is alarming than I am certain the idea of switching pairs once or more per day seems counter-intuitive as well. [Here is a great article on the concept and benefits of Promiscuous Pairing](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf) and the benefit to embracing Beginner's Mind. 

## Trust Building

Teams with high trust are incredibly effective. Trust on teams is essential and is a foundation that high performing teams are built on. Teams that trust each other eliminate so many issues that traditional software development managers have to deal with. 

 This constant and close collaboration on teams that pair program creates an environment where trust thrives. Developers get to really know and care about their teammates. The XP teams I've worked on ate together regularly, another act that builds trust on teams. This is because they all truly cared for one another as people _and_ colleagues. The handful of folks I worked with everyday on an XP team have continued to be my closest professional colleagues and great friends, years after no longer working together. 

## Collective Code Ownership

One of the twelve XP practices is colletive code ownership. Pair programming helps create collective code ownership on teams. You avoid all of the problems that come from individual developers taking ownership of an area of the code and work on it in isolation.

Code developed by lone developers continues to be the lowest quality code I encounter. These developers have spent months (and sometimes years) learning the idiosyncracies of poor code and after a while don't see the mess that is in front of them, and that they continue to contribute to. Their own lack of knowledge of software design affects their decisions, so they just push through incredibly low-quality, brittle, and obfuscated code to meet their deadlines. There is no visibility in the organization that the code that was committed to codebase creates a drag on the organization for years to come. 

### Eliminates Towers of Knowledge

Pair programming eliminates towers of knowledge in companies. Towers of knowledge are a risk that no software company should be willing to take. In an industry where (for better or worse) developers get promotions and grow by switching jobs the reality is you cannot keep a developer forever.  A lot of companies allow this to happen and throw money at these developers to keep them. But at some point the developer will get another offer, win the lottery, or just get tired of the specific workplace dysfunction they are dealing with and move on. 

On teams who pair program senior level developers can leave the team without a significant impact on the team. When a team member leaves or a new one begins the dynamic on the team always changes. Teams need to rebuild trust and it does take some time. But this is much preferred to taking ownership of huge amounts of a subsystem no one has ever seen because it has been one developer's "baby" for a decade. 

### Single Coding Standard

A single team coding standard is another XP practice and pair programming also encourages this. To suport eliminating towers of knowledge having code without an individual developers fingerprint on it is helpful. It's much harder to be protective of code and argue against changing code you created when you have to check git logs to figure out what pair made the change.

### Non-Blocking Code Reviews

Since the code review happens continuously as the code is being developed the blocking aspect of both traditional and "git flow" code reviews where a developer has to do something else while waiting for feedback from his pull request. This context switching adds a lot of inefficiencies into the daily work. 

While I think pairs both have the "author's mind" when writing code and they benefit from having an editor review the code, I recommend addressing this by switching pairs more frequently during the work day before introducing blocking code reviews.

## Limits WIP

One common characteristic of ["feature factory"](https://hackernoon.com/12-signs-youre-working-in-a-feature-factory-44a5b938d6a2) software organizations is that they optimize for a lot of work in progress (WIP). The more features actively being worked on at the team level __*and*__ at the organization level gives the illusion of progress. It creates the illusion of keeping developers busy. Unfortunately not creating a WIP limit is problematic. Building more features at once makes all of them take longer to complete and results in tasks completed with much lower quality. 

Pair programming encourages limiting WIP at the team level by having all of the work done in pairs. Further I've seen teams who value pair programming adopt a practice called swarming that further limits WIP.

### Swarming

When swarming, developers (or pairs of developers) work on tasks for the same user story to get it through their development pipeline and into production as quickly as possible before picking up the next piece of work.

## Reduces Distractions

Pair programming reduces many types of distractions on development teams.

### Blocks Interruptions

People are more likely to interrupt someone working by themselves rather than interrupt a pair while they are collaborating. This leads to developers staying in flow longer and dealing with questions asynchronously via email or chat. 

### Social Pressure to Stay Focused

Pair programming also reduces distractions within the team. When developers work by themselves they tend to take regular breaks, surfing the web, texting their friends, etc. However, when pair programming there is a pressure not to get distracted and stay focused. Developers who pair program tend to stay in flow longer than those who don't.[1] When I finish a day of pairing I'm exhausted but feel great because of the amount of progress that we make.

## Results in Higher Quality Code 

For all the reasons listed in this article, I've found the quality of code on teams who pair significantly higher than on teams who do not. 

## What about Mobbing?

You may have heard of [mob programming](https://en.wikipedia.org/wiki/Mob_programming) and wonder how it compares to pair programming. Mob programming is built on a lot of the principles of XP and pair programming. It is another fantastic collaborative practice for teams. Much of the benefits I desribe you will also achieve with Mob Programming. 