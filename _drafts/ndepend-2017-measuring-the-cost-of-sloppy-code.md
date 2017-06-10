---
layout: post
section-type: post
title: NDepend 2017 - Measuring the Cost of Sloppy Code
comments: true
category: development tools
tags: ['code quality', 'static code analysis']
---

Static code analysis is an [essential tool](/2015/08/30/the-importance-of-static-code-analysis.html) for development teams. There are several important use cases for static analysis in a software organization. One of the most important uses is measure the quality of a code base over time. It is imperative that software teams can continuously deliver business value in a world of constant change. The rapid change in software expectations, requirements, scale, team members, and the understanding of the domain all can have an adverse affect on the ability to deliver value to customers. Unless there is a constant focus on quality software has a tendency to degrade over time. 

In the .NET technology stack [NDepend](http:/www.ndepend.com) sits above the rest in its ability to continuously measure code quality over time. In its latest version [NDepend 2017](http://www.ndepend.com/ndepend-v2017) two new features have been added that significantly advance its already thorough code quality features, _Smart Technical Debt Estimation_ and _Quality Gates_.

Too often organizations with code quality issues don't know how bad the quality is. They may make half-hearted attempts at improvement and never know if these changes are having any real effect on the quality of the system. It is not uncommon for organizations with quality problems to ignore training, workshops, and other activities that will help teams build the skills necessary to fix code quality issues. NDepend 2017 can give organizations data to address these concerns. 

## Smart Technical Debt Estimation

If you are familiar with NDepend already the way the Smart Technical Debt Estimation works will not come as a surprise. It is driven by a set of CQLinq rules introduced as presets within a new NDepend project. The importance of this cannot be understated. Within a minute or two you will be provided with a technical debt ratio and debt rating for your software. Armed with this new information you can now start to understand the the depth and types of issues in the code base, and come up with a plan to begin addressing them.  

This new Debt panel can be found in the middle of the dashboard.
<img class="img-responsive" src="/img/ndepend2017-debt-dashboard.png" />

### Debt Ratio
The debt percentage is the first calculation found in the panel. 

### Debt Rating

### Completing the Picture 
Adding test coverage enables two addtional metrics: Annual Interest and Breaking Point

#### Annual Interest

#### Breaking Point

### Explore Debt

1. Bootstrapped rules -- comes with a set of rules already just like NDepend does. YOu can start examining your code quality issues immediately. 
1. You can change rules you disagree with. It is a slippery slope. Turning off type too big or systematic complexity rules is not going to help you improve your code base. 
1. Change the estimation technique
1. Measure in hours or money

Not perfect still just an estimate.

Enables conversations with business. Coming into organizations with a lot of code issues it is hard to make the cost of years of poor coding practices and pressure visible outside of the technical organization. Some agile coaches try to do this by creating "technical debt" backlogs which I [disagree with]. 

### Visibility of Sloppy Code
Now with NDepend 2017 we have (in a matter of minutes) a debt rating (A through E) as well as the cost in money or time how long it will take to get it to the next rating. We can now talk to business about these issues. Most teams who have quality issues won't be surprised by their low rating. However, being able to see the cost of improvement decreasing as they approach the next grade level will be a great morale booster. It gives the team continuous feedback on the improvements they are making. This immediate feedback is great way to ensure that the improvements continue and the team doesn't fall back on bad habits when pressure is applied to them.

### No Time or Budget to Improve
Commonly teams are given the time or the budget. We often talk about the fact that we need "time to sharpen the axe." As professionals we need time to hone our skills and work on our tooling so we can continuously do the highest quality of work. With these NDepend Technical Debt measures a team can show a return on the company's investment in training, tooling, etc. I would just warn that like everything in software development these gains are incremental and take some time. So you would want to show these gains by improvement in these scores over a period of time. 

