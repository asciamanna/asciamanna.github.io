---
layout: post
section-type: post
title: Software Development & the Law of Holes 
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: To improve our software quality and our ability to continuously deliver customer value, we need to stop doing things the way we always have before.
category: coaching 
tags: ['coaching', 'consulting', 'code quality']
---

When I work with software organizations to help them improve their ability to delivery high quality software and thus customer value, it is common for them to resist the time and effort it takes to learn new ways of working and improve. I'll hear things like:
- _"We just need to get this next feature out the way we've always done it."_
- _"We have to hit this date, so we'll start the 'new way' after the deadline."_

In some cases there are valid reasons to delay and maybe I've joined them at the wrong time. However, it is more common that software organizations set deadlines (sometimes arbitrarily) without any variability in feature scope because that's how they've always done it. When we acquiesce once there is always another reason to delay the learning on the horizon, the rush and frantic way of working is often built into the DNA of software organizations.

There is a compounding factor here. Software organizations that struggle with software quality work in ways that makes their work unpredictable by nature. Messy and challenging areas of the code that resist change, action at a distance bugs (a.k.a. _bug whack-a-mole_) slow development efforts, handoffs where work sits idle waiting for the next person to free up so they can start the work, and a large integration effort late in the development cycle all lead to making the work hard to predict. The result is that software estimation does little to help the organization understand when the team will be done the work. 

When I encounter this I like to quote the adage, **the Law of Holes.**. Sometimes called the **the First Law of Holes**, it states: **_"if you find yourself in a hole, stop digging_**. The Law of Holes is a real law after all, it has its own [wikipedia page](https://en.wikipedia.org/wiki/Law_of_holes)!

When organizations bring in coaching consultants they are dedicating their time and money to improvement, and improvement comes with a learning cost. I use the **Law of Holes** like a mantra to remind the organization, that the more time we spend working the old way the deeper the hole we will need to dig ourselves out of. Safely improving poorly designed and implemented code often takes much longer than hacking it into existence in the first place. The more untested code we write, the more low quality code we patch into the system, the harder it will be to improve. There's an opportunity cost as well, it's important to encounter challenges in your work while the coaches are there to help, not after we leave. 

<LAW OF HOLES HERE>
## Development Team Rules for Improvement

One way I've helped focus on continuous improvement in the past, both in engagements with my Industrial Logic colleagues and solo efforts, is to add two rules to team working agreements. They are simple but powerful rules for change if the development team and organization takes them seriously:

1. All new code comes with automated microtests at the commit level (other forms of tests are encouraged as well but not always required)
2. All changes to existing code come with tests for the changes at the commit level

These two simple rules help encourage a collection of development practices that shift quality left and help teams improve the way they work. These include Test-Driven Development, Microtesting / Unit testing upskilling, refactoring, legacy code rescue techniques, and collaborative development practices. 

<Quote Bryan Helmkamp>

When teams employ these two rules they start to learn how to use these practices in their codebase. 


## Old Code is Not Improving

It's possible through some Legacy Code techniques that old code can be patched around and not improved. That's where the second law of holes comes in handy. It states, _**"When you stop digging, you are still in a hole."**_. As the team's refactoring abilities and confidence increases, I recommend larger scale refactorings and other legacy code techniques to safely tame and improve some of the scariest areas in the codebase to interact with (when the business need takes us to those code areas).

<DOCTOR JOKE>
## Conclusion
If it hurts, stop doing it! The best way to improve the way you work is dedicating yourself to the daily practice of coding habits that shift quality left. Collaborative development practices (Mob / Ensemble or Pair Programming) will help build those skills in your team. Bringing in a coach with those experiences 


