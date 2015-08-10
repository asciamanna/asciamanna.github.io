---
layout: post
title: The Importance of Static Analysis Tools
comments: true
category: development-tools
tags: [code-quality, static-code-analysis]
---

Static analysis tools are a critical part of any development team that values code quality and continuous improvement. These tools serve several important purposes which I will discuss in this post.  
 
My most recent experience with static analysis tools is with JetBrains' NDepend for .NET. So I will specifically be discussing that tool, however the ideas in this article can apply to a majority of the static analysis tools that are available.  There are tools for all of the more popular programming languages, so regardless of your technology stack you will be able to find a tool for your team.

<!--more-->
 
This is a follow-up to my previous post about  [Coding Conventions](/2014/09/06/remove-refactoring-barriers.html). If you have read that post you know that I describe how
important coding conventions are to a development team.  Once conventions have been documented the next step is to enforce them via a static analysis tool. This tool should be available to each developer so they can run it in a local development environment but also run on every build (hopefully on every commit) on your build server. 

##Rule Overload

The first thing you will notice is that the majority of these tools come pre-configured with a lot of rules. I recommend that you look all of them closely. You may find that you are missing some critical rules and may want to go back and updating your teams' coding conventions accordingly. While I think this is a great idea, be mindful that the coding conventions should be short. So resist the urge to turn every rule on and have their breaches break the build. Not all of the rules will provide the same amount of benefit to your team.  Some rules will not provide any benefit. You should focus on the rules that will provide the maximum benefit, and like everything else in software development iterate on your static analysis configuration.

## Critical and Non-critical Rules
NDepend, as well as other tools, have the concept of critical and non-critical rules. Critical rules are ones, if violated, will break your build. These should be reserved for your teams' coding conventions and serious code quality offenders. Other non-critical rules should still be enabled so your team can continue to monitor them without failing the build.

This difference highlights the two ways that you should be using the tool to get the maximum benefit for your team. The critical errors should fail the build immediately and require a developer change before there will be another successful build. The non-critical rules along with other metrics collected (cyclomatic complexity, coupling, and code coverage for example) shouldn't fail the build but be part of a report that the team examines regularly. Armed with this information the team can focus their refactoring and clean-up efforts in a way that addresses the worst parts of the codebase first.

##An Early Warning System

##Qualitative and Quantitative Measures

##Overwhelmed by Legacy Code


###When the Boy Scout Rule Isn't Enough

Continuous Delivery page 74
