---
layout: post
section-type: post
title: Tools are not Practices 
comments: true
category: development practices 
tags: ['agile development']
---

A common problem I have noticed since I started working in the software industry is that people tend to conflate tools with practices. Unfortunately, despite what some of these tools may promise, a tool can never be a replacement for truly understanding a practice. If you notice this occurring on your teams it's important to help them overcome these beliefs. It prevents a deep understanding of the practices that will help teams improve, create higher quality code, and in turn create a higher quality product. 

I am going to talk about the various forms of this problem that I have encountered during my career. I'm sure there are more examples that you may have experienced yourself. 

## Agile Development Practices

Agile is fast becoming a dirty word in our industry. This really saddens me as the best experiences I've had in my career as a developer have been working on an agile, eXtreme Programming (XP) team. On that team I learned more than I ever had previously, had the best relationships with fellow team members, and built the highest quality code more efficiently than I had before or since.

Unfortunately, many organizations claim they are agile without having any idea what the values and principles of agile software development really are. They cling to the idea that they can "customize agile" and believe that gives them a blank check to make up their own version of an agile development process. These versions of agile bear little resemblance to the agile practices that embody the values and principles of agile. Ron Jeffries writes about this specific problem in his post [We Tried Baseball and it Didn't Work](http://ronjeffries.com/xprog/articles/jatbaseball/). It is extremely important to master a form of agile software development before trying to customize its practices.

The calling card for these types of organizations are ones that claim they "do agile" or are "little 'a' agile." Along with these misguided agile adoptions is usually the adoption of an agile workflow tool. I am a strong believer that the best agile workflow tool is to not use one at all. In fact I wrote about that in detail in my post, [The Dangers of Development Tools](http://anthonysciamanna.com/2015/02/21/the-dangers-of-development-tools.html). Often times you can find these organizations claiming they are agile simply because they use JIRA, VersionOne, or some other agile workflow tracking software. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">JIRA is not <a href="https://twitter.com/hashtag/Agile?src=hash">#Agile</a>: <a href="https://t.co/90bOSEQMfA">https://t.co/90bOSEQMfA</a> <a href="https://t.co/SKSOBLnK9P">pic.twitter.com/SKSOBLnK9P</a></p>&mdash; mlevison (@mlevison) <a href="https://twitter.com/mlevison/status/714485738641993728">March 28, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Continuous Integration

Continuous Integration is an invaluable practice. It is one of the original twelve eXtreme Programming practices created by Kent Beck and Ron Jeffries while working on the Chrysler C3 project. Continuous Integration, like most practices, can be accomplished without the use of a tool at all. Often I refer people to James Shore's post [Continuous Integration on a Dollar a Day](http://www.jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html) that describes it in detail. There are, however, some wonderful build tools that can help a team bootstrap their CI practices. These include build servers like Jenkins, Cruise Control, TeamCity, etc. Unfortunately these tools have also been called "CI Servers." This often leads teams to believe they are "doing CI" just because they are using a "CI Server."

More than once in my career I have talked to teams who claim to do Continuous Integration only to find out they are actually doing just the opposite. They are developing on feature branches (a practice that is not compatible with CI), only integrating with the larger organization working in the same repository after several weeks or months of development, but are convinced they are "doing CI" because they use a build server. To learn more about the practice Martin Fowler writes about it in [this post](http://martinfowler.com/articles/continuousIntegration.html).

## Unit Testing

Another common misconception is unit testing. A lot of people are confused about what unit testing is and its intended purpose. I've written at length about what a unit test is in my article [xUnit is not Unit Testing](http://anthonysciamanna.com/2014/12/06/xunit-is-not-unit-testing.html). Some teams believe they are writing unit tests simply because they are using an xUnit framework. Again, an xUnit framework is a tool not a practice. In fact xUnit frameworks allow for the development of a wide variety of tests. I've written unit tests, integration tests, acceptance tests, end-to-end tests, and even UI-driven tests using Selenium, all utilizing an xUnit framework and test runner.

## Conclusion

Tools can certainly help you with your practices. You should be choosing tools that are enabling you to move faster. However, it is important to truly understand a practice deeply before relying on a tool to accomplish it for you. And most importantly, be skeptical of your tools and be careful which ones you adopt. Tools have a way of solidifying practices that they support and prevent you from deviating from them. Tools can silently become drag on your team instead of a help and once they are embedded in your organization they can be hard to get rid of.