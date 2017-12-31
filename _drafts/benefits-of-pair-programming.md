---
layout: post
section-type: post
title: Benefits of Pair Programming
comments: true
category: development practices
tags: ['pair programming', 'extreme programming']
---

In my [previous post]({{ site.baseurl }}{% post_url 2017-11-30-misconceptions-of-pair-programming %}) I discussed some misconceptions of pair programming. When trying to encourage skeptical development organizations to try pair programming, it's not only important to dispel its misconceptions, but be able to articulate its benefits as well. Teams who practice pair programming avoid many traditional issues associated with software projects. It is because of this, and its many other benefits, that I consider pair programming an essential practice for modern agile development teams.

## A Social Activity

Software development is a social activity. The greatest software teams are expert collaborators. Without fail, teams who pair program consistently collaborate incredibly well. Pair programming creates daily opportunities to practice this collaboration. If I were forced to choose the most important benefit of pair programming, it would be that it promotes continuous collaborative software design and development. 

## Mentoring

While I see benefits to formal mentoring programs and the relationship between a manager and their direct reports, neither of these are a replacement for the mentoring that happens on teams who pair program. Mentoring that occurs as a result of pair programming happens every day in the code, providing real-time feedback on decisions. Pairing sessions are continuous, multi-hour conversations about the code, design decisions, design trade-offs, problem solving, etc. 

It is no coincidence that I achieved my greatest growth during my time on an XP team and greatly improved my coaching skills as a result. On teams that pair program, every team member becomes a coach and mentor.

> Always strive to be mentoring and mentored.   
> &mdash; _[David Bernstein](https://twitter.com/ToBeAgile), Beyond Legacy Code_

## Knowledge Acquisition & Onboarding

Pair programming accelerates knowledge acquisition on teams. On-boarding new developers happens quickly. Instead of working in isolation and getting feedback after going too far in the wrong direction, new team members are getting immediate real-time feedback on their work. 

Learning curves begin to flatten on these teams as members level each other up on the various skills and technologies needed to address their customers' problems. Knowledge travels throughout the team incredibly quickly. Teams who switch pairs at least once per day (or sometimes more) realize these benefits at an even quicker pace.

### Promiscuous Pairing

If the idea of pair programming is alarming, than I am certain that the idea of switching pairs once or more per day seems strange as well. I've found that the teams I've worked on achieved the greatest benefit from the practice when they switched pairs at least once per day. [This article describes the benefits of Promiscuous Pairing](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf) and embracing Beginner's Mind. 

## Trust Building

Trust and safety are foundations that high performing teams are built upon. Teams who trust each other eliminate numerous issues that software development managers typically have to address.

This constant collaboration resulting from pair programming creates an environment where trust thrives. Friendships are built and trust grows as collaborative teams look out for each other and succeed as a team. They don't just give lip service to the term "team," but actually operate as one. When a team practices pair programming and refuses individual assignments, they create a culture where every effort and every new feature is a team effort.

The developers I have had the opportunity to pair with everyday on an XP team have continued to be my most trusted professional colleagues and closest friends. These relationships continue to this day, despite not working together for years. 

## Collective Code Ownership

Pair programming helps create collective code ownership on teams. Collective code ownership, another one of the twelve core XP practices, prevents problems that arise when individual developers take ownership of an area of the code and work on it in isolation.

Code developed by lone developers continues to be the most problematic code I encounter. I often see developers working alone spending significant time learning and working with the idiosyncracies of extremely poor code. Worse still, they continue to contribute to the mess and keep the code in a state of obfuscation. Gaps in their software design knowledge combined with the stress of deadlines and production issues, creates an environment for poor quality code to thrive. The resulting code often doesn't get seen by any other developer before ending up in production. This poor code becomes a drag on the organization as soon as it is introduced, making every future change harder and riskier.

### Eliminates Towers of Knowledge

Pair programming and collective code ownership eliminates towers of knowledge in companies. Towers of knowledge are a risk that no software company should be willing to take. In an industry where (for better or worse) developers get promotions and grow by changing employers, the reality is that the best developers aren't going to stay at one company for their entire career. Companies often allow towers of knowledge to emerge and throw money at these developers to keep them. However,at some point the developer will get another offer, win the lottery, or just get tired of the specific workplace dysfunction they are dealing with and move on. 

On teams who pair program, the most senior developers can leave the team without a significant impact on the team's day-to-day work. The importance of this cannot be overstated. 

### Single Coding Standard

A single team coding standard is another XP practice that pair programming encourages. To support eliminating towers of knowledge, having code without an individual developer's fingerprint on it is helpful. It's much harder to be protective of code when git logs need to be examined to figure out who made the change.

Pairing offers the opportunity to teach the team's coding standard and ensure it is being adhered to without requiring frequent, blocking code reviews.  

### Non-Blocking Code Reviews

Since code is reviewed continuously as it is being developed, the blocking aspect of both traditional and git-flow inspired code reviews can be avoided. In these blocking code reviews, the author has to switch contexts and start other work until the review is completed and the comments are ready to be addressed. This context switching adds significant inefficiencies into the team's daily work. 

#### Author's Mind

I believe both members of a pair, being the authors of the code, benefit from a code review. Specifically, an independent editor to review the code for clarity and understanding is helpful. I recommend addressing this by switching pairs more frequently during the work day or finding other ways to introduce non-blocking reviews before requiring blocking code reviews.

## Limits WIP

One common characteristic of ["feature factory"](https://hackernoon.com/12-signs-youre-working-in-a-feature-factory-44a5b938d6a2) software organizations is that they optimize for large amounts of work in progress (WIP). The more features actively being worked on at the team level __*and*__ at the organization level creates the illusory sense of progress. It creates the illusion of keeping developers busy. Unfortunately, working without a WIP limit is problematic. Building multiple features at once makes all of them take longer to complete and results in tasks completed with much lower quality.[^1] 

Pair programming encourages limiting WIP at the team level. Furthermore, I've seen teams who value pair programming adopt a practice called swarming that further limits WIP.

### Swarming

When swarming, developers (or pairs of developers) work on tasks for the same piece of functionality to get it through their development pipeline and into production as quickly as possible. This not only helps get features to production faster, but prevents the creation of software inventory. This concept is known as __*One Piece Flow*__ and comes to lean software development from lean manufacturing techniques.

## Reduces Distractions

Pair programming reduces many types of distractions on development teams.

### Blocks Interruptions

People are more likely to interrupt someone working by themselves than interrupt a pair while they are collaborating. This leads to developers staying in flow longer and being more productive. 

### Social Pressure to Stay Focused

When developers work alone it is easy for them to get distracted. Whether it's surfing the web, investigating a different issue, or getting caught up in a conversation. All of these situations require the developer to get back into flow to continue making progress on their problem. 

When developers pair there is a positive pressure not to get distracted. Developers who pair program tend to stay in flow longer than those who don't.[^2]

## Results in Higher Quality Code 

As a result of these benefits, I've found the quality of code on teams who pair significantly higher than on teams who do not. 

## What about Mob Programming?

You may have heard of [mob programming](https://en.wikipedia.org/wiki/Mob_programming) and wonder how it compares to pair programming. Mob programming is built on a lot of the principles of XP and pair programming. It is another fantastic collaborative practice for teams. The benefits I describe in this article can be achieved with mob programming as well.

I have heard about some teams using mob programming as a step towards adopting pair programming and eventually settling on using both practices.

## Conclusion

<img src="/img/pairing-books.png" class="img-responsive" alt="Pair Programming Books"  />

I have been lucky to witness every one of these benefits on several teams I've worked on and coached. However, I am certainly not the first to recognize them. I highly recommend these three books that discuss pair programming (among other valuable team practices). They are [David Bernstein](https://tobeagile.com/)'s _Beyond Legacy Code_, [Richard Sheridan](https://twitter.com/menloprez)'s _Joy, Inc._, and [James Shore](http://www.jamesshore.com/)'s _The Art of Agile Development_.

[^1]: You can read about the importance of limiting WIP and reducing task switching in [The Myth of Multitasking](https://www.amazon.com/Myth-Multitasking-Doing-Gets-Nothing/dp/0470372257/)

[^2]: [James Shore](http://www.jamesshore.com) discusses the resulting increase of time in flow for developers who pair in [this](http://www.jamesshore.com/Agile-Book/pair_programming.html) chapter of his book.
