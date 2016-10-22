---
layout: post
section-type: post
title: The Code Quality Vs. Speed Fallacy
comments: true
category: development practices
tags: ['']
---

I often write about organizations that have software quality problems since I care very much about helping teams improve their code. There is a common problem that occurs in organizations with quality problems, the developers and even organizational leadership try to avoid any attempts at improving the code. From an outsider just coming in it may seem crazy that developers are working harder than they need to be working and slowly churning through features constantly frustrated by the codebase. However, through all this they don't want to try something different. Change is challenging for any organization and most people will think outsiders to the organization don't understand their challenges. They may think their professional abilities are being questioned if someone is recommending improvements to how they build software.  

While care certainly needs to be taken to introduce these types of changes into an organization one of the first defenses of organizations holding on to problematic code and development practices is what I call the __*Code Quality vs. Speed Fallacy*__. This is the incorrect belief that you can't care about both code quality and shipping code quickly.

## No Time for Improvement

*"We would like to clean up the code but we're too busy shipping features."*

 This is something that I've heard a lot in my career. Going into
organizations with quality problems and trying to improve them will expose a lot of people claiming that caring about code quality is somehow
unprofessional. That going fast and getting features into production as quickly as possible is the **only** responsibility of the professional developer, not self improvement, not mentoring junior developers, not improving the readability of the code. All of these things, they believe, are things that take time away from "shipping".

<img src="/img/lego.jpg" class="img-responsive" />

A tell tale sign of organizations with quality problems is one where people have no time to learn. The developers are constantly in a reactive mode fighting fires in production because of quality issues and wrestling with the codebase just to get features into production. They can't slow down enough to see how much extra effort their shortcuts are costing them. What they really are saying when claiming that they are too busy shipping is *"We don't have time to learn the skills to improve our code"* in a lot of cases. In other cases they just don't feel like they have time to slow down and actually think about the problem. The first software design idea is the one that will end up in production. Half-way through the feature development, when it is clear the design is not working, they continue to fight through it to force it to work. In the process adding more cruft to the codebase to slow down future developers.

## Unprofessional?

Let's discuss the question around professionalism briefly mentioned in the previous section. There is typically a lot of blustering about how caring about code quality makes you unprofessional. These arguments stem from people really not deeply understanding the cost of poorly written code. They think code quality is simply a matter of aesthetics. That it is purely subjective and there's no way to justify my "preference" for the code to be organized a certain way. People will try argue that developers who care about quality just want to sit in a cube all day refactoring code without out ever shipping code to production or giving a single thought to the product organizations deadlines. This is the crux of the fallacy and one that is absolutely false. It's meant to silence those trying to improve the code. I've heard more than once that developer's claim that they *"aren't interested in falling in love with the code."* Sadly they really miss the point of high quality code.

## Turning the Tables

Not only are these arguments inaccurate, just the opposite is true. The developers caring about quality care very deeply about shipping features to production quickly. In fact, the best way to ship faster is not to rush through the code as fast as possible. Rather, slowing down to ensure that the code is always in a state that allows for easy modification is the only way to improve the efficiency of development teams over time. Writing high quality code is the only way to ensure that development teams can ship features to production as fast as possible.

### Ease of Change

One universal rule of software development is that code is always going to change. To be able to address this constant change in a manner that doesn't grind the team to a halt, the quality of the code has to be one of the highest priorities.

As martin fowler discusses in his talk Workflows of Refactoring, the argument around code quality is a simple one. It is entirely about the ability to change code (and obviously the ability to read and understand the code). The ability to react to a world of changing requirements, feature enhancements, etc. The world of working software requires the ability to read and change code easily.

The incredible thing about high quality codebases are they are as easy to change on day one as they are on year ten. If the software is any more than a prototype a focus on quality is not only appropriate it is the only professional option.  

### Qualities

There are plenty of qualities of this type of code that I have talked about at length in other posts.  Here are just a few:
* Low coupling
* High cohesion
* Small classes
* Short methods
* Unit Tested
* Dependencies injected / IOC Principal
* No duplication

Since code will always be read and modified optimizing for these two activities is vital. So one could argue that a measure of software professionalism would be deeply caring about the quality of the code and always trying to improve the code so that it is always in a state that is easily read and easily changed.

### Techniques

Often arguments about code improvement slowing teams down is that they have accumulated so much cruft they incorrectly believe that the only way out is a re-write. Something I have discussed in this post, previously (LINK)
It is absolutely necessary to introduce developers to incremental improvement techniques. Whether it is Uncle Bob's Boy Scout Rule or Martin Fowler's Opportunistic Refactoring, the sentiment is the same. Incrementally improve the quality of the code you are currently working on. Have a plan where you want to go, and find incremental steps to get there. This is not an easy skill to learn by any means. But developers will only get better at this technique with practice.

## Technical debt
Now, I'm not saying there aren't reasons to make non-ideal decisions to get something into production quickly. But bad code is not that. Technical Debt has come to mean any poor code. But the original definition from Ward Cunningham was that the code had to be of high quality so it is easy to change so that the debt can be reversed easily in the future.
