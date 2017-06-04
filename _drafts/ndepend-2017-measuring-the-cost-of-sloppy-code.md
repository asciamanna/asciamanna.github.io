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

I find several important use cases for static code analysis in development organizations. The one I want to focus on today is the case where development teams need to create and maintain high quality code amidst constant changes. Whether it be changes in team expectations, requirements, team members, understanding of the domain, etc. This is really where [NDepend](http://www.ndepend) shines. In the latest version two new features have been added that significantly advance its already thorough code quality features, _Smart Technical Debt Estimation_ and _Quality Gates_.

Too often organizations with code quality issues don't know how bad the quality is and if it is improving or getting worse over time. It is not uncommon for organizations with quality problems to ignore training, workshops, and other activities that will help teams build the skills necessary to fix code quality issues. NDepend 2017 can help with all of these concerns. 

## Smart Technical Debt Estimation

If you are familiar with NDepend already the way the Smart Technical Debt Estimation works will not come as a surprise. It is driven by a set of CQLinq rules and they come pre-configured with a new NDepend project. The importance of this cannot be understated. Within a minute or two you will be provided with a technical debt grade for your software. 

This new Debt panel can be found in the middle of the dashboard.
<img class="img-responsive" src="/img/ndepend2017-debt-dashboard.png" />

### Debt Percentage
The debt percentage is the first calculation found in the panel. 

### Debt Rating

### Explore Debt

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

