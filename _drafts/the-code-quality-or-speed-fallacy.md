---
layout: post
section-type: post
title: The Code Quality or Speed Fallacy
comments: true
category: development practices
tags: ['']
---

"We would like to clean up the code but we're too busy shipping features." This is something that I've heard a lot in my career. Going into
organizations with quality problems and trying to improve them will expose a lot of people claiming that somehow caring about code quality is somehow
unprofessional. I find this to be exactly the opposite of reality and know those people who have worked on clean codebases and have been able to add features without
fighting the source code know exactly what I mean.

##  No time to learn

A tell tale sign of organizations with quality problems is one where people have no time to learn. Learning is time not spent "shipping," so it is frowned upon. These organizations will almost always have issues with the quality of their software. They can't slow down enough to see how much extra effort their shortcuts are costing them. What they really are saying is "We don't have time to learn the skills to improve our code" in a lot of cases. In other cases they just don't feel like they have time to slow down and actually think about the problem. The first software design idea is the one they stick with. Half-way through the feature development when it is clear the design is not working they need to fight through it to force it to work.

### Unprofessional?

Bad code is code without tests
Code that is not constantly improved
This is code that is hard to change

Code quality is not just an aesthetic. I've heard people "we aren't interested in falling in love with the code" or "it just has to be good enough" to try minimize the voice of those who want to improve the quality of the code. But this argument is entirely off base and is meant to silence those who want to improve the code. As martin fowler discusses in his talk Workflows of Refactoring, the argument around code quality is simple. It is entirely about the ability to change code. The ability to react to a world of changing requirements, feature enhancements, etc. _The_ world of working software requires the ability to change code easily.

The incredible thing about high quality codebases are they are as easy to change on day one as they are on year ten. If the software is any more than a prototype a focus on quality is not only appropriate it is the only professional option.  

## Technical debt
Now I'm not saying there aren't reasosns to make non-ideal decisions to get something into production quickly. But bad code is not that. Tech Debt has come to mean any poor code. But the original defintion from Ward C. was that the code had to be of high quality so it is easy to change so that the debt can be reversed easily in the future.


Time spent learning how to practice TDD, to get good test coverage, and to write well designed code that is easily maintainable is not wasted.

## Unclean Code
Bugs slow you down
Bug whack a mole - as bryan helmkamp called it
features take longer and longer to implement

A little focus on quality over long periods of time make code easier to change. 
