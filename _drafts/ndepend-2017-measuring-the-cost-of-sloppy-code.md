---
layout: post
section-type: post
title: NDepend 2017 - Measuring the Cost of Sloppy Code
comments: true
category: development tools
tags: ['code quality', 'static code analysis']
---

If you have been reading my blog you know that I think static code analysis is an essential tool for development teams. 
I've previously written about the [importance of static code analysis here](/2015/08/30/the-importance-of-static-code-analysis.html). As I work with teams that spend the vast majority of their time in the .NET technology stack I recommend [NDepend](http://www.ndepend.com) as I believe it's the best tool available to measure
and track code quality for .NET applications.

I find several important use cases for static code analysis in development organizations. I won't go over them in detail but here but generally the one I think is most important is that developers trying to improve code quality issues in a code base or trying to keep the code quality high in a world where constant change is the norm. Whether it be change in team expectations, team members, understanding of the domain, etc. This is really where [NDepend](http://www.ndepend) shines. In its latest version it has added two new features that significantly advance it's already thorough code quality features. These are what Patrick Smacchia (creator of NDepend) calls _Smart Technical Debt Estimation_ and _Quality Gates_.

## Smart Technical Debt Estimation
I was originally planning on describing in detail how to configure and use these new features, however [Erik Dietrich](http://www.daedtech.com) has written two fantastic articles....

1. Bootstrapped rules -- comes with a set of rules already just like NDepend does. YOu can start examining your code quality issues immediately. 
1. You can change rules you disagree with. It is a slippery slope. Turning off type too big or systematic complexity rules is not going to help you improve your code base. 
1. Change the estimation technique
1. Measure in hours or money

Not perfect still just an estimate.

Enables conversations with business. Coming into organizations with a lot of code issues it is hard to make the cost of years of poor coding practices and pressure visible outside of the technical organization. Some agile coaches try to do this by creating "technical debt" backlogs which I [disagree with]. 

### Visibility of Sloppy Code
Now with NDepend 2017 we have (in a matter of minutes) a debt grade (A through E) as well as the cost in money or time how long it will take to get it to the next grade. We can now talk to business about these issues. I think most teams who have quality issues in their code base won't be surprised by their low grade. However, being able to see the cost of improvement decreasing as they approach the next grade level will be a great morale booster. It gives the team continuous feedback on the improvements they are making to their code base.

### No Time or Budget to Improve
Commonly teams are given the time or the budget. We often talk about the fact that we need "time to sharpen the axe." As professionals we need time to hone our skills and work on our tooling so we can continuously do the highest quality of work. With these NDepend Technical Debt measures a team can show a return on the company's investment in training, tooling, etc. I would just warn that like everything in software development these gains are incremental and take some time. So you would want to show these gains by improvement in these scores over a period of time. 

