---
layout: post
section-type: post
title: NDepend 2017 - Measuring the Cost of Sloppy Code
comments: true
category: development tools
tags: ['code quality', 'static code analysis']
---

Static code analysis is an [essential tool](/2015/08/30/the-importance-of-static-code-analysis.html) for development teams. Among the many uses of static analysis tools, one of the most important is to measure the quality of a code base over time. It is imperative that software teams can continuously deliver business value in a world of constant change. The rapid change in software expectations, requirements, scale, team members, and the understanding of the domain all can have an adverse affect on the ability to deliver value to customers. Unless there is a constant focus on quality software has a tendency to degrade over time. 

In the .NET technology stack [NDepend](http:/www.ndepend.com) sits above the rest in its ability to continuously measure code quality over time. In the latest version, [NDepend 2017](http://www.ndepend.com/ndepend-v2017) two new features have been added that significantly advance its already thorough code quality features, _Smart Technical Debt Estimation_ and _Quality Gates_.

Too often organizations with code quality issues don't know how bad the quality is. They may make half-hearted attempts at improvement and never know if these changes are having any real effect on the quality of the system. It is not uncommon for organizations with quality problems to ignore training, workshops, and other activities that will help teams build the skills necessary to fix code quality issues. NDepend 2017 can give organizations data to address these concerns. 

## Smart Technical Debt Estimation

If you are familiar with NDepend already the way the Smart Technical Debt Estimation works will not come as a surprise. It is driven by a set of CQLinq rules introduced as presets within a new NDepend project. The importance of this cannot be understated. Within a minute or two you will be provided with a technical debt ratio and debt rating for your software. Armed with this new information you can now start to understand the the depth and types of issues in the code base, and come up with a plan to begin addressing them.  

This new Debt panel can be found in the middle of the dashboard.
<img class="img-responsive" src="/img/ndepend2017-debt-dashboard.png" />

### Debt Ratio
The debt percentage is the first calculation found in the panel. This [debt ratio in NDepend](http://www.ndepend.com/docs/technical-debt#DebtRating) is based on the [SQALE method](http://www.sqale.org/) debt ratio. This ratio is the estimated technical-debt compared to the effort it would would take to completely rewrite the problem areas of the code. Further, to estimate the effort to rewrite the size of the problematic code (in lines of code) along with an estimated number of working days to write 1000 logical lines of code is used. 

### Debt Rating
The debt rating, also based on the [SQALE method](http://www.sqale.org) is derived from a debt ratio threshold. These thresholds are set to defaults but are configurable in NDepend along with the number of working days to write a line of code. However, this value is called **Estimated number of man-days to develop 1000 logical lines of code** in the NDepend debt settings.

Just below the rating you see debt expressed as the total amount of working days to fix. As with other calculations in NDepend clicking debt, the debt ratio, or debt rating will show the CQLinq rule used to perform the calculation. As with other panels in NDepend trending metrics will show next to the value as analysis is run over time.  

### Completing the Picture 
Adding test coverage enables two additional metrics, which are related: _Annual Interest and Breaking Point_

#### Annual Interest & Breaking Point
The [breaking point metric](http://www.ndepend.com/docs/technical-debt#BreakingPoint) for a collection of issues, is the time from now to some time in the future where the estimated cost to fix the issues will reach the estimated cost to not fix the issues. The breaking point is calculated using the annual interest metric, dividing the debt by it. The higher the annual interest is for a specific issue the higher the priority to fix the issue.

### Debt Settings
The debt settings come with sensible defaults and the definitions based on the SQALE method, however all of this is configurable. Estimates about working hours and vacation can all be adjusted to tailor these calculations for your organization. 

Not perfect still just an estimate.

Enables conversations with business. Coming into organizations with a lot of code issues it is hard to make the cost of years of poor coding practices and pressure visible outside of the technical organization. Some agile coaches try to do this by creating "technical debt" backlogs which I [disagree with]. 

### Visibility of Sloppy Code
Now with NDepend 2017 we have (in a matter of minutes) a debt rating (A through E) as well as the cost in money or time how long it will take to get it to the next rating. We can now talk to business about these issues. Most teams who have quality issues won't be surprised by their low rating. However, being able to see the cost of improvement decreasing as they approach the next grade level will be a great morale booster. It gives the team continuous feedback on the improvements they are making. This immediate feedback is great way to ensure that the improvements continue and the team doesn't fall back on bad habits when pressure is applied to them.

### No Time or Budget to Improve
Commonly teams are given the time or the budget. We often talk about the fact that we need "time to sharpen the axe." As professionals we need time to hone our skills and work on our tooling so we can continuously do the highest quality of work. With these NDepend Technical Debt measures a team can show a return on the company's investment in training, tooling, etc. I would just warn that like everything in software development these gains are incremental and take some time. So you would want to show these gains by improvement in these scores over a period of time. 

