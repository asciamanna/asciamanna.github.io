---
layout: post
section-type: post
title: Tools are not Practices 
comments: true
category: development practices 
tags: ['agile development']
---

A common problem I have noticed since I started working in the software industry is conflating tools with practices. This creates a problem as teams believe they are following practices if they adopt certain tools, but unfortunately it can't be that easy. If you notice this on your teams it's important to help them overcome these beliefs as it prevents a deep understanding of the practices that will help them improve and create higher quality code. 

I am going to talk about the various forms of this problem that I have encountered during my career. I'm sure there are more examples that you may have experienced yourself.

## Agile Development Practices

Agile is starting to become a dirty word in the industry. This really saddens me as the best experiences I've had in my career as a developer have been working on an agile eXtreme Programming (XP) team. Unfortunately, many organizations claim they are agile without having any idea what the values and principles of agile software development are.  They cling on to the idea that they can "customize agile" and believe that gives them a blank check to make up their own spin on agile. These versions of agile bear little resemblance to the agile practices that embody the values and principles of agile. Ron Jeffries writes about this specific problem in his post [We Tried Baseball and it Didn't Work](http://ronjeffries.com/xprog/articles/jatbaseball/). 

The calling card for these types of organizations are ones that claim they "do agile" or are "little 'a' agile." Along with these misguided agile adoptions is usually the adoption of a tool. I am a strong believer that the best agile workflow tool is a physical story card wall. In fact I wrote about that in detail in my post, [The Dangers of Development Tools](http://anthonysciamanna.com/2015/02/21/the-dangers-of-development-tools.html). Often times you can find these organizations claiming they are agile simply because they use JIRA, VersionOne, or some other workflow tracking code. 

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">JIRA is not <a href="https://twitter.com/hashtag/Agile?src=hash">#Agile</a>: <a href="https://t.co/90bOSEQMfA">https://t.co/90bOSEQMfA</a> <a href="https://t.co/SKSOBLnK9P">pic.twitter.com/SKSOBLnK9P</a></p>&mdash; mlevison (@mlevison) <a href="https://twitter.com/mlevison/status/714485738641993728">March 28, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Continuous Integration

Continuous Integration is an invaluable practice. It is one of the original twelve eXtreme Programming practices created by Kent Beck and Ron Jeffries while working on the Chrysler C3 project. Continuous Integration can be accomplished without the use of a tool. Often I refer people to James Shore's post [Continuous Integration on a Dollar a Day](http://www.jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html) that describes it in detail. There are, however, some wonderful build tools that can help a team bootstrap their CI. These include build servers like Jenkins, Cruise Control, TeamCity, etc. Unfortunately these tools have also been called "CI Servers." This often leads developers to believe they are "doing CI" just because they are using a "CI Server."

More than once in my career I have talked to teams who claim to do Continuous Integration only to find out they are doing feature branch development (a practice that is not compatible with CI), only integrating with the larger organization working in the same repository after several months of development, but are convinced they are "doing CI" because they have a build server. To learn more about the practice Martin Fowler writes about it in [this post](http://martinfowler.com/articles/continuousIntegration.html).

## Unit Testing

