---
layout: post
section-type: post
title: The Benefits of Pair Programming
comments: true
category: development practices
tags: ['pair programming', 'extreme programming']
---

In my [previous post]({{ site.baseurl }}{% post_url 2017-11-30-misconceptions-of-pair-programming %}) I discussed the misconceptions about pair programming. When trying to encourage skeptical development organizations to try pair programming its not only important to understand the misconceptions but also be able to articulate its benefits. Pair programming avoids many traditional software project issues that managers typically have to address. It is because of this and its many other benefits that I consider it an essential practice for modern agile software development teams.

## A Social Activity

Software development is a social activity. The greatest software teams are expert collaborators. Time and time again I've seen teams who pair program consistently, collaborate incredibly well. Pair programming creates daily opportunities to practice this collaboration. If I were to pick the most important aspect of pair programming it's that it promotes continuous collaborative software design and development. 

## Mentoring

While I see benefits to formal mentoring programs and the relationship between a manager and her direct reports, neither of these are a replacement for the mentoring that happens on teams who pair program. Mentoring that occurs as a result of pair programming happens every day in the code, providing real-time feedback on decisions. Pairing sessions are continuous, multi-hour conversations about the code, design decisions, design trade-offs, problem solving, etc. 

It is no coincidence that I achieved my greatest growth during my time on an XP team and greatly improved my coaching skills as well. On teams who pair program, every team member becomes a coach and mentor.

> Always strive to be mentoring and mentored.   
> &mdash; _[David Bernstein](https://twitter.com/ToBeAgile), Beyond Legacy Code_

## Knowledge Acquisition & Onboarding

Pair programming accelerates knowledge acquisition on teams. Onboarding new developers happens fast. Instead of working in isolation and getting feedback after going too far in the wrong direction new team members are getting immediate real-time feedback on their work. 

Learning curves begin to flatten on these teams as members level each other up on the various skills and technologies needed to address their customer's problems. Knowledge travels throughout the team incredibly quickly. Teams who switch pairs at least once per day (or sometimes even more) realize these benefits even faster.

### Promiscuous Pairing

If the idea of pair programming is alarming than I am certain the idea of switching pairs once or more per day seems counter-intuitive as well. [Here is a great article on the concept and benefits of Promiscuous Pairing](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf) and the benefit to embracing Beginner's Mind, by Arlo Belshee. 

## Trust Building

Trust is a foundation that high performing teams are built on. Teams that trust each other eliminate numerous issues that traditional software development managers have to deal with. 

This constant and close collaboration on teams that pair programming creates an environment where trust thrives. Friendships are built and trust grows as collaborative teams really do look out for each other and succeed as a team. They don't just give lip service to term "team." The developers I have had the opportunity to work with everyday on an XP team have continued to be my closest professional colleagues and great friends, years after no longer working together. 

## Collective Code Ownership

One of the twelve XP practices is collective code ownership. Pair programming helps create collective code ownership on teams. It avoids the problems that arise when individual developers take ownership of an area of the code and work on it in isolation.

Code developed by lone developers continues to be the lowest quality code I encounter. These developers have spent months or years learning the idiosyncracies of poor code and learn how to work with the mess. Worse still, they continue to contribute to that mess keeping the code in a state of obfuscation. Holes in their software design knowledge combined with the stress of deadlines and production issues creates an environment for poor code to thrive. The resulting code often doesn't get seen by any other developer before landing in production. This poor code becomes a drag on the organization as soon as it is introduced, making every future change harder and riskier.

### Eliminates Towers of Knowledge
Pair programming and collective code ownership eliminates towers of knowledge in companies. Towers of knowledge are a risk that no software company should be willing to take. In an industry where (for better or worse) developers get promotions and grow by switching jobs, the reality is you cannot keep a developer forever. Companies often allow towers of knowledge to emerge and throw money at these developers to keep them. But at some point the developer will get another offer, win the lottery, or just get tired of the specific workplace dysfunction they are dealing with and move on. 

On teams who pair program the most senior level developers can leave the team without a significant impact. When a team member leaves or a new one begins the dynamic on the team always changes. Teams need to rebuild trust and it does take some time. But this is much preferred to taking ownership of huge amounts of a system no one has ever seen because it has been one developer's "baby" for a decade. 

### Single Coding Standard

A single team coding standard is another XP practice and pair programming also encourages this. To support eliminating towers of knowledge having code without an individual developers fingerprint on it is helpful. It's much harder to be protective of code and argue against changing code you created when you have to check git logs to figure out what pair made the change.

### Non-Blocking Code Reviews

Since the code review happens continuously as the code is being developed the blocking aspect of both traditional and "git flow" code reviews can be avoided. In these blocking code reviews the author has to switch contexts and start other work until the comments are ready to be addressed. This context switching adds significant inefficiencies into the daily work. 

I believe both members of a pair, being the authors of the code, still require a code review. Specifically they benefit from an independent editor to review the code for clarity and understanding. I recommend addressing this by switching pairs more frequently during the work day and finding other ways to practice non-blocking reviews before introducing blocking code reviews.

## Limits WIP

One common characteristic of ["feature factory"](https://hackernoon.com/12-signs-youre-working-in-a-feature-factory-44a5b938d6a2) software organizations is that they optimize for having a great deal of work in progress (WIP). The more features actively being worked on at the team level __*and*__ at the organization level gives the illusory sense of progress. It creates the illusion of keeping developers busy. Unfortunately not creating a WIP limit is problematic. Building more features at once makes all of them take longer to complete and results in tasks completed with much lower quality. 

Pair programming encourages limiting WIP at the team level by having the work done in pairs. Further I've seen teams who value pair programming adopt a practice called swarming that further limits WIP.

### Swarming

When swarming, developers (or pairs of developers) work on tasks for the same piece of functionality to get it through their development pipeline and into production as quickly as possible. They do this before starting the next piece of work. This not only helps get features to production faster but prevents building inventory. This concept is known as __*One Piece Flow*__ and comes to lean software development from lean manufacturing techniques.

## Reduces Distractions

Pair programming reduces many types of distractions on development teams.

### Blocks Interruptions

People are more likely to interrupt someone working by themselves rather than interrupt a pair while they are collaborating. This leads to developers staying in flow longer and being more productive. 

### Social Pressure to Stay Focused

Pair programming also reduces distractions within the team. When developers work by themselves it is easy to get themselves distracted. Whether it's surfing the web, investigating a different issue, or getting caught up in a water cooler conversation. All of these situations require the developer to get back into flow to continue making progress on their problem. 

When pair programming there is a positive pressure not to get distracted and stay focused. Developers who pair program tend to stay in flow longer than those who don't.[^1]

## Results in Higher Quality Code 

For all the reasons listed in this article, I've found the quality of code on teams who pair significantly higher than on teams who do not. 

## What about Mobbing?

You may have heard of [mob programming](https://en.wikipedia.org/wiki/Mob_programming) and wonder how it compares to pair programming. Mob programming is built on a lot of the principles of XP and pair programming. It is another fantastic collaborative practice for teams. The benefits I describe in this article  will be achieved with Mob Programming as well.

I have heard of some teams using Mob Programming as a step towards Pair Programming and eventually settling on using both practices.

## Conclusion

<img src="/img/pairing-books.png" class="img-responsive" alt="Pair Programming Books"  />

I have been lucky to witness every one of these benefits first hand on several teams I've worked on and coached. But I am certainly not the first to recognize them. I highly recommend these three books that discuss pair programming (among other valuable team practices). They are Rich Sheridan's _Joy, Inc._, James Shore's _The Art of Agile Development_, and David Bernstein's _Beyond Legacy Code_.

[^1]: [James Shore](http://www.jamesshore.com) discusses the resulting increase of time in flow for developers who pair in [this](http://www.jamesshore.com/Agile-Book/pair_programming.html) chapter of his book.
