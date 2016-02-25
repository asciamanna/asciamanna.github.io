---
layout: post
section-type: post
title: Creating a Great Development Culture - Part 1
comments: true
category: development practices
tags: ['code quality', 'code ownership', 'retrospectives', 'unit testing']
---
Over the years I've worked on some amazing development teams. Unfortunately, I've also worked on some I would consider fairly poor. Something I spend a lot of time thinking about is building great development teams. The amazing teams I've worked on had a lot of common qualities and I'm going to discuss those in this post. 

This is one of my lengthier posts so I'll just be scratching the surface of some of these topics. I plan on going much deeper on several of these topics in future posts. When those posts are complete they will be linked from here. 

The qualities that I've found common to the best development organizations I've grouped into three main categories, which are interrelated. The first is a **focus on code quality and development practices**. The second is a **culture of continuous learning**. And lastly, a **lack of crunch mode or overtime**. 

<!--more-->

This post will be split into two parts. Come back for the second part that will address continuous learning and the lack of crunch mode.

## Focus on Code Quality and Development Practices
The best teams I've worked on understood that producing working software was not the goal. Working software is the low bar set by the industry. They believed that being a professional developer meant producing working software that communicated the intent of the code in the clearest manner possible. Well designed code that not only worked but was easy to maintain, easy to reason about, easy to test, and easy to extend. __*That*__ was the goal! 

> Communication is the professional developer's first order of business. Perhaps you thought that 'getting it working' was the first order of business for a professional developer. I hope by now, however, this book has disabused you of that idea.<br/>
> &mdash; [Robert Martin](https://twitter.com/unclebobmartin/following "Uncle Bob's Twitter "), Clean Code page 76

Great teams have a set of shared values and adhere to practices that support those values. I will discuss this in greater detail in a future post. But I want to talk about some of the practices that encourage high quality code.

### Code Reviews
Code needs to be reviewed. No one in the organization gets a pass on this. All too often I've seen code reviews for junior developers but once you meet some milestone they are no longer necessary. Unfortunately your status in the organization is not directly related to your ability to write high quality code. I've seen significant amounts of poor code written by senior developers trying to meet unreasonable deadlines which in turn makes significantly more work for the rest of the development staff to cleanup.  

My one caveat with respect to code reviews is that if you are pairing on 100% of your production code the pair can be considered the code review. I still prefer to get some input outside the pair at times but as long as the pair doesn't consist of two "green" developers the pair can be considered the second set of eyes on the code.

#### Use a Tool for Code Reviews
Most people who are familiar with me would probably be surprised that I recommend a tool for code reviews. I am skeptical about development tools, and you should be too. See my previous posts about [bug trackers](/2015/01/17/a-better-bug-tracker.html) and [development tools](/2015/02/21/the-dangers-of-development-tools.html). However, this is an exception. A tool that promotes code reviews on a per commit basis is very important. In addition to allowing for asynchronous code reviews, it is an invaluable tool to keep a history of conversations about the quality of the code. It provides visibility to code quality conversations for the entire organization, becoming a valuable learning resource. Furthermore, it promotes the review of smaller changesets. All too often the amount of code that needs to be reviewed is so large that the review becomes a multi-day, Herculian task and usually ends up providing very little value.

#### Discuss Code Quality
Once code reviews become commonplace developers will begin to get comfortable discussing the quality of the code. If your development organization doesn't frequently talk about code quality, code reviews are even more important to kickstart those discussions. The developers in your organization who think software design is purely subjective or a matter of preference will not be able to disregard valid advice when it is documented. Or if they do it will at least be visible to the entire team. More than anything else, it is a fantastic opportunity to share knowledge and learn. Great teams never pass up practices that help them learn.

### Unit Testing
Again, if you know me you know that I value unit testing more than nearly any other practice. Great teams test their code themselves. They don't rely on a QA department to do it for them. They also understand the value in unit testing: That it promotes a high quality (loosely coupled, highly cohesive) software design and provides a safety net for refactoring. Furthermore, it leaves your team with a fast, automated test suite that should be finding problems as they arise (e.g., integration bugs).

#### Test-Driven Development & Pair Programming
Test-Driven Development (TDD) provides several benefits over writing unit tests after the production code. Combining TDD with pair programming creates a development workflow that results in creating high-quality code quickly. Pair programming is another fantastic way to spread knowledge throughout your team and mentor developers.

### Continuous Refactoring
Refactoring is possibly the most important practice of all. Code needs to be constantly refactored in order to keep the quality of the codebase high. See my post [**Remove Refactoring Barriers**](/2014/09/06/remove-refactoring-barriers.html) for more on that topic. Since you cannot continuously refactor without a unit test suite it makes unit testing just as important as continuous refactoring.

### Coding Standards
For a team to operate like a team they need to have some common standards. While formatting standards and coding conventions may seem like they are trivial concerns, try working in an organization without them. When opening each new source file you have no idea what to expect from the code, no idea what third-party libraries you'll need to learn to be efffective, etc. Every part of the codebase looks different, there are tens of ways to do the same thing, duplicated code and concepts are found throughout the codebase. Onboarding new developers, maintenance, and creating new features takes longer and longer and continues to get worse as more code is developed. Typically organizations in this position will add more developers and this further exacerbates the problem.

An additional benefit of coding standards is that the consistency in the codebase becomes a powerful tool in finding problems. If you cannot get your team to agree on standards that in itself should be an indicator that there are other issues at play in your organization (e.g., are your teams too large, are there trust issues within the team, can your team not communicate effectively?).

### Retrospectives
Great teams hold regular retrospectives. Without putting aside time regularly to discuss how they are doing and how to get better it just doesn't happen. As I've said previously great teams take advantage of opportunities to learn and improve. 

<blockquote class="twitter-tweet" lang="en"><p>Without time to reflect, we have no time - or chance - to learn.</p>&mdash; Bob Marshall (@flowchainsensei) <a href="https://twitter.com/flowchainsensei/status/572308115384901633">March 2, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Continuous Integration
Continuous integration reduces the opportunities for integration bugs to occur in a system. It brings integration issues to light as early in the process as possible since developers are constantly integrating with each other. Practicing continuous integration prevents large code merges late in the development cycle that are a common source of bugs. Furthermore, having a unit test suite run on every commit on an integration server as well as constantly running in each developer's environment should give the team an enormous amount of confidence in their code changes.

More generally, great teams are always looking for opportunities to optimize their processes or practices to reduce the opportunities for bugs.

### Simplify and Automate
There is value in simplifying complex processes and refactoring complexity out of complicated code. Builds should be automated, releases should be automated, tests should be automated, etc. Not only does it save time but humans introduce errors. The organizations that believe complicated processes or manual releases are necessary are wrong. Complicated processes like code complexity are bug breeding grounds.

### Organize Around the Product Not Projects
The best teams I've worked with organized themselves around the product, product areas, business capabilities, etc. This promotes a high degree of code ownership that results in a much higher code quality. Organizing teams around projects are temporary, however the code that gets created is permanent. Project organization does not encourage the right practices. It shifts the focus to meeting short-term deadlines, before the team splits up to move on to their next projects. Because of this there is no consistency in the team or the code they are developing. This shallow experience in the code and lack of code ownership leads to a much lower quality codebase. As temporary custodians of the code, developers are much less likely to invest the effort necessary for refactoring and cleanup. Since multiple projects can modify the same code developers are even more concerned that their changes may conflict with another project team's changes. Instead, a focus on incrementally making the system better and keeping teams together for longer periods of time in the same area of the code provides greater opportunities for improvement.

### Document Your Values and Practices
Once your team has a set of values and practices, document them. Commit it to your VCS and post it on a team wiki or website. It should always be visible and easy to update. Give it to new developers coming in to the organization and make those values known when interviewing potential team members. In my experience the dissolution of the best teams I've worked on happened when the organization pushed people onto the team who did not share the team's values.

## To Be Continued...
In the next post I will discuss the two remaining qualities of great development teams, **a culture of continuous learning** and a **lack of crunch mode**.
