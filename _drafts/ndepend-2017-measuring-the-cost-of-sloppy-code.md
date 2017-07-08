---
layout: post
section-type: post
title: NDepend 2017 - Measuring the Cost of Sloppy Code
comments: true
category: development tools
tags: ['code quality', 'static code analysis']
---

Measuring the quality of code over time is an incredibly valuable feature of [static code analysis](/2015/08/30/the-importance-of-static-code-analysis.html). It is imperative that software teams can continuously deliver business value in a world of constant change. The rapid change in business priorities, team members, market needs, and the understanding of the domain all can have an adverse affect on the ability to deliver value to customers. Unless there is a constant focus on it, software quality has a tendency to degrade over time. 

In the .NET technology stack [NDepend](http:/www.ndepend.com) sits above the rest in its ability to continuously measure code quality. In the latest version, [NDepend 2017](http://www.ndepend.com/ndepend-v2017) two new features have been added that advance its already significant features, _Smart Technical Debt Estimation_ and _Quality Gates_.

## Organizational Quality Issues

Too often in organizations with code quality issues there isn't visibility into the depth of the problems. The team may make half-hearted attempts at improvement, but they get the feeling that these changes aren't having any substantive effect on the quality of the system. What they do know is that their problems persist: developers are frustrated, it takes increasingly longer to get features into production, bugs are constantly emerging despite increased manual testing efforts, and the dreaded _"bug whac-a-mole"_ problem arises, where fixing one bug causes a couple of others to appear.

These types of organizations have not yet mastered the development and organizational practices to ensure the delivery of high quality code. It is not uncommon for these organizations to ignore activities that will help teams build the skills necessary to fix code quality issues. NDepend 2017 can give teams the data they need to help address these concerns. 

## Smart Technical Debt Estimation

If you are familiar with NDepend already the way the Smart Technical Debt Estimation works will not come as a surprise. It is driven by a set of CQLinq rules introduced as default presets within a new NDepend project. The importance of this cannot be overstated. Within a minute or two you will be provided with a technical debt ratio and debt rating for your software. Armed with this new information you can now start to understand the depth and types of issues in the code base, and come up with a plan to begin addressing them.  

This new Debt panel is impossible to ignore, being found in the middle of the dashboard.
<img class="img-responsive" src="/img/ndepend2017-debt-dashboard.png" alt="NDepend 2017 Debt panel" />

### Debt Ratio

The debt percentage is the first calculation found in the panel. This [debt ratio in NDepend](http://www.ndepend.com/docs/technical-debt#DebtRating) is based on the [SQALE method](http://www.sqale.org/) debt ratio. This ratio is the estimated technical-debt compared to the effort it would would take to completely rewrite the problem areas of the code. To calculate the rewrite effort, the size of the problematic code (in lines of code) along with an estimated number of working days to write 1000 lines of code is used. 

### Debt Rating

The debt rating, a value A through E, also based on the [SQALE method](http://www.sqale.org) is derived from a debt ratio threshold. These thresholds are set to defaults but are configurable in NDepend along with the number of working days to write a 1000 lines of code in the debt settings.

Just below the rating you see technical-debt expressed as the total amount of working days to remedy. As with other calculations in NDepend clicking debt, the debt ratio, or debt rating will show the CQLinq rules that effect the calculation. Similar to other panels in the NDepend dashboard, trending metrics will show next to the value as analyses are run over time.  

### Completing the Picture 

Adding test coverage enables two additional metrics which are related: _Annual Interest and Breaking Point_. Annual Interest describes the man-time consumed if the issue goes unresolved. **This metric describes the ongoing impact to the business if issue is not fixed.** You can find out more about them in the NDepend documentation on the [breaking point metric](http://www.ndepend.com/docs/technical-debt#BreakingPoint). 

### Debt Exploration & Settings

At the bottom of the panel is an "Explore Debt" dropdown which will take you to the various collections of rules affecting the technical-debt calculations. Also included in this dropdown is a link to the project debt settings.

<img class="img-responsive" src="/img/debt-settings.png" alt="NDepend 2017 Project Debt Settings"/>

The default debt settings can be used as-is, however all of these settings are configurable. Estimates about working hours and vacation can all be adjusted to refine these calculations for your organization. However, I would caution that changing items based on the SQALE method, debt rating thresholds for example, can be a slippery slope.

Like any other rule in NDepend, if a specific rule affecting code quality doesn't apply to your team you can disable it for your project. However, use caution when disabling these issues. Disabling too many of these rules can reinforce existing biases and defeat the purpose of the tool altogether. 

### Visibility of Sloppy Code

Once the analysis is complete you will be presented with a debt ratio, debt rating, as well as an estimate in money or time to get to the next rating threshold. Further you will be able to drill into specific issues to identify which ones are the most problematic. This enables you to start having discussions with the business **in their language**. The ability to discuss the ongoing cost of specific code quality issues and their impact on the organization is invaluable.

Most teams who have quality issues won't be surprised by their low rating. However, being able to see the cost of improvement decreasing as they approach the next debt rating level will be a great morale booster. It gives the team continuous feedback on the improvements they are making. This immediate feedback is a great way to ensure that the improvements continue and the team doesn't fall back on bad habits when pressure is applied to them.

### No Time or Budget to Improve

Commonly teams aren't given the time or the budget to improve. Professional developers need time to sharpen their skills and improve their tooling so they can continuously deliver high quality features. These NDepend Technical Debt measures enable teams to show a return on the company's investment in improvement activities as well as the ongoing cost of code maintenance. The ability to provide this evidence will help teams make the case for an investment in continuous team improvement.

For teams to continuously improve it is important to measure progress. This latest version of NDepend gives teams more tools to do just that.
