---
layout: post
section-type: post
title: The Code Quality Vs. Speed Fallacy
comments: true
category: development practices
tags: ['']
---

I often find myself writing about organizations that have software quality problems. This is due to my passion for helping teams improve the way they work, and in doing so improving their code. It is not uncommon for organizations with quality problems to avoid attempts at improvement for a variety of reasons. From the perspective of someone just coming in to the organization it may seem crazy that developers are working harder than they need to just to slowly churn through features. These developers are constantly frustrated by the codebase. However, enduring this pain is more comfortable than trying something different. Change is challenging for any organization and most people will think outsiders or newcomers to the organization don't understand their challenges. They may think their professional abilities are being questioned if someone is recommending improvements to how they build software.  

While care certainly needs to be taken to introduce these types of changes into an organization, one of the first defenses of organizations holding on to problematic code and development practices is what I call the __*Code Quality vs. Speed Fallacy*__. This is the absolutely incorrect belief that you can't care about both code quality and shipping code quickly.

## No Time for Improvement

*"We would like to clean up the code but we're too busy shipping features."*

This is something that I've heard a lot throughout my career. Going into organizations with quality problems and trying to improve them will expose a lot of people claiming that caring about code quality is somehow
unprofessional. That going fast and getting features into production as quickly as possible is the **only** responsibility of the professional developer, not self improvement, not mentoring junior developers, not improving the readability of the code. All of these things, they believe, are things that take time away from "shipping".

> Communication is the professional developer's first order of business. Perhaps you thought that 'getting it working' was the first order of business for a professional developer. I hope by now, however, this book has disabused you of that idea.<br/>
> &mdash; [Robert Martin](https://twitter.com/unclebobmartin/following "Uncle Bob's Twitter "), Clean Code page 76

A tell tale sign of organizations with quality problems is one where people have no time to learn. The developers are constantly operating in a reactive mode. They spend their time fighting fires in production because of quality issues and wrestling with the codebase just to get features into production. They can't slow down enough to see how much extra effort their shortcuts are costing them. What they really are saying when claiming that they are too busy shipping is *"We don't have time to learn the skills to improve our code"* in a lot of cases. In other cases they just don't feel like they have time to slow down and actually think about the problem. The first software design idea is the one that will end up in production. Half-way through the feature development, when it is clear the design is not working, they continue to fight through it to force it to work. In the process adding more cruft to the codebase to slow down future developers.

<img src="/img/lego.jpg" class="img-responsive" />

## Unprofessional?

Let's discuss the question around professionalism briefly mentioned in the previous section. There is typically a lot of blustering about how caring about code quality makes you unprofessional. These arguments stem from people not really understanding the cost of poorly written code. They think code quality is simply a matter of aesthetics. That it is purely subjective and there's no way to justify my "preference" for the code to be organized a certain way. People will try argue that developers who care about quality just want to sit in a cube all day refactoring code without out ever shipping code to production or giving a single thought to the organization's commitments. This is the crux of the fallacy and one that is absolutely false. It's meant to silence those trying to improve the code. I've heard more than once that developer's claim that they *"aren't interested in falling in love with the code."* Sadly these protestors miss the point of high quality code altogether.

## Turning the Tables

Not only are these arguments inaccurate, just the opposite is true. The developers caring about quality care very deeply about shipping features to production quickly. In fact, the best way to ship faster is not to rush through the code as fast as possible. Rather, slowing down to ensure that the code is always in a state that allows for easy modification is the only way to improve the efficiency of development teams over time. Writing high quality code is the only way to ensure that development teams can continuously ship features to production as fast as possible.

### Ease of Change

One nearly universal rule of software development is that code is always going to change. To be able to address this constant change in a manner that doesn't grind the team to a halt, the quality of the code has to be one of the highest priorities.

As Martin Fowler discusses in his talk Workflows of Refactoring, the argument around code quality is a simple one. It is entirely about the ability to change code (and obviously the ability to read and understand the code). Developers are working in a world of changing requirements, feature enhancements, changes in team members, etc. This requires the ability to read and change code easily forever.

The incredible thing about high quality codebases are they are as easy to change on day one as they are on year ten. If the software is any more than a prototype a focus on quality is not only appropriate it is the only professional option.  

### Qualities

There are plenty of qualities of this type of code that I have talked about at length in other posts. Here are just a few:
* Low coupling
* High cohesion
* Small classes
* Short methods
* Unit Tested
* Dependencies injected / IOC Principal
* No duplication

Since code will always be read and modified, optimizing for these two activities is vital. So one could argue that a measure of software professionalism would be deeply caring about the quality of the code and always trying to improve the code so that it is always in a state that is easily read and easily changed.

### Techniques

Often arguments about code improvement slowing teams down comes from teams working in codebases that have accumulated so much cruft they incorrectly believe that the only way out is a re-write. Something I have discussed in this post, previously (LINK)

It is absolutely necessary to introduce developers to incremental improvement techniques. Whether it is Uncle Bob's Boy Scout Rule or Martin Fowler's Opportunistic Refactoring, the sentiment is the same. Incrementally improve the quality of the code you are currently working on. Have a plan for where you want to go, and find incremental steps to get there. This is not an easy skill to learn by any means. But developers will only get better at this technique with practice.

## Technical Debt

Now, I'm not saying there aren't reasons to make non-ideal decisions to get something into production quickly. But bad code is not that. Technical Debt has come to mean any poor quality code, shortcuts in code quality to get something done quickly. Ward Cunningham originally coined the phrase *Technical Debt*. The first I heard of it is in a paper from [OOPSLA '92](http://www.oopsla.org/oopsla-history/). In Ward's original definition the code had to be of high quality. It was necessary for it to remain easy to change so that the debt can be reversed easily in the future.

## Conclusion

When trying to help organizations improve their code you may be faced with this *code quality vs. speed fallacy*. It is not only false but just the opposite is true. Recognize that expecting quality code to be written is the only way to ensure that the team can continue to deliver consistently.
