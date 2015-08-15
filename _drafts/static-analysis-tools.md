---
layout: post
title: The Importance of Static Code Analysis
comments: true
category: development-tools
tags: [code-quality, static-code-analysis]
---

Static code analysis is a critical tool for development teams that value code quality and continuous improvement. These tools serve several important purposes which I will discuss in this post.  
 
My most recent experience with static code analysis tools is with [NDepend](http://www.ndepend.com/ "NDepend Home Page") for .NET. So I will specifically be discussing that tool, however the ideas in this article can apply to a majority of the static analysis tools that are available.  There are tools for all of the more popular programming languages, so regardless of your technology stack you will be able to find a tool for your team.

<!--more-->
 
This is a follow-up to my previous post about  [Coding Conventions](/2015/07/18/coding-conventions.html). If you have read that post you know that I describe how
important coding conventions are to a development team.  Once conventions have been documented the next step is to enforce them via a static analysis tool. This tool should be available to each developer so they can run it in a local development environment but also run on every build (hopefully on every commit) on your build server. 

##Rule Overload

The first thing you will notice is that the majority of these tools come pre-configured with a lot of rules. I recommend that you look all of them closely. You may find that you are missing some critical rules and may want to go back and updating your teams' coding conventions accordingly. While I think this is a great idea, be mindful that the coding conventions should be short. So resist the urge to turn every rule on and have their breaches break the build. Not all of the rules will provide the same amount of benefit to your team.  Some rules will not provide any benefit. You should focus on the rules that will provide the maximum benefit, and like everything else in software development iterate on your static analysis configuration.

## Critical and Non-critical Rules
NDepend, as well as other tools, have the concept of critical and non-critical rules. Critical rules are ones, if violated, will break your build. These should be reserved for your team's coding conventions and serious code quality offenders. Other non-critical rules should still be enabled so your team can continue to monitor them without failing the build.

This difference highlights the two ways that you should be using the tool to get the maximum benefit for your team. The critical errors should fail the build immediately and require a developer change before there will be another successful build. The non-critical rules along with other metrics collected (cyclomatic complexity, coupling, and code coverage for example) shouldn't fail the build but be part of a report that the team examines regularly. Armed with this information the team can focus their refactoring and clean-up efforts in a way that addresses the most problematic parts of the codebase first.

##An Early Warning System
[Bryan Helmkamp](https://twitter.com/brynary "Bryan's twitter account") (founder and CEO of [Code Climate](https://codeclimate.com/)) gave a fantastic talk at Baruco 2013, [Building a Culture of Quality](https://www.youtube.com/watch?v=Jsi1YTkXwxA) which I have referenced in previous posts. In his talk he describes that the natural trajectory for a software project's quality is down. Because of this we developers need to employ several techniques to prevent this from happening. One recommendation is to implement an early warning system. Part of your early warning system should be a static analysis tool.

As schedule pressures arise, bugs need to be fixed quickly, the development team changes over time, or business requirements change it is easy for code quality to decrease. Refactoring is a challenging skill to learn so teams may struggle to make the code better when adding features or fixing bugs.  Even the best teams with agreed upon coding standards can suffer this fate. Put developers who believe code quality is a subjective measure or have the mantra of "just get it done" on teams who have no coding conventions and you have a recipe for disaster. 

This early warning system, your critical static analysis rules that will fail the build are your safety net against this. You will be notified as soon as you breach a coding standard rule, which is the optimal time to fix the issue. You can fix these issues as they arise as part of your daily development process. Otherwise, these issues will accumulate until they become a much bigger problem and cost a lot more time and effort (and money) to fix, not to mention your team has moved on to new feature development at this point.

##Overwhelmed by Legacy Code


###The Boy Scout Rule & Opportunistic Refactoring

##Pressure to Ease the Rules
Continuous Delivery page 74
