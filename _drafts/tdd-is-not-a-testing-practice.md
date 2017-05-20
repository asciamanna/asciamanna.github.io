---
layout: post
section-type: post
title: TDD is Not a Testing Practice 
comments: true
category: development practices
tags: ['tdd']
---

In a [previous post](/2015/10/25/use-tdd-to-teach-testable-design.html) about using TDD to teach testable design, I mentioned that when I first started writing unit tests (and even early in my TDD experience) I would say as long as developers were writing unit tests, I didn't care whether they wrote them first or last. I continue to hear this advice from developers, managers, team leads, and technical leaders.

In this post I want to discuss why I believe this is bad advice, and how people come to this conclusion. After years of writing software without TDD and years of practicing TDD I am convinced it yields higher quality, more easily changed code and provides several other benefits that are often overlooked. 

## Misunderstanding TDD's Purpose

The primary reason why people think writing tests first or last doesn't matter is a misunderstanding about the purpose of TDD. If someone believes that the purpose of TDD is to generate a suite of unit tests, then it is just one of a number of techniques to get to that state. Another equally valid way of getting there is to write tests last, after the feature has been built. 

However, this line of thinking illuminates the most common misunderstanding when it comes to TDD. Frequently, people believe that TDD is a testing practice, therefore it's primary goal is it to generate a suite of unit tests. When practicing TDD, a high quality unit test suite is a secondary benefit. It can even be considered a side-effect of the practice.  

TDD is not a testing practice. It's purpose is spelled out explicitly in its name, **Test-Driven Development**. TDD is a software design and development practice first and foremost. Those who believe writing tests last is equally beneficial are missing all of the software design and development benefits of TDD. 

### Interviews

Over the years I've found myself interviewing a wide variety of roles in development organizations: developers, development managers, directors, agile coaches, team leads, etc. I often ask questions about XP development practices as I find them an invaluable tool to not only build high quality code, but to create coaching and mentoring cultures in development organizations.


Often the answers I get when I start asking about TDD (and other XP practices) are very telling. XP is over 20 years old at
 this point and there is still a lot of misconceptions about TDD and the other XP practices (if people have heard of them at all). 

The most common response I get when I ask about whether the interviewee practices, encourages, or values TDD is, _"Yeah, the team writes unit tests."_ People too often conflate the act of unit testing with TDD. Somewhat less frequently I hear statements like _"I think TDD is really good, but my team doesn't do it. It's not my place to tell the team how to write code."_ True, you shouldn't **tell** the team how to write code but you should coach, show, and encourage them to learn these practices. 

## Coaching TDD

Too often we don't encourage teams to practice TDD because there is resistance to doing it. It's a practice that takes time
 and expertise to master, so it is common for developers to decide it is not for them. It changes a developer's workflow significantly so it will generate some discomfort early on. As technical leaders and coaches we often take the easy way out and say, _"as long as you write unit tests it's okay."_ Instead, we should be encouraging teams to learn TDD and help educate organizations on all of the benefits of TDD not just the unit testing aspects of it. Furthermore, we should be creating safe environments in organizations where teams can learn this practice (among many others) without feeling like it will only interfere with their ability to _"ship features faster"_ in the near-term.  

The vast majority of the time I've heard developers say they didn't want to practice TDD they had never actually tried it. Technical leaders and coaches should be able to provide opportunities for developers to learn these techniques and see for themselves the benefits of TDD, because there are a lot of them and they aren't just improved code quality and unit test suites. The developers I know who have practiced and mastered TDD continue to practice it today.

## The Inconspicuous Benefits of TDD

In addition to the design benefits and yielding higher quality code (which I would contend is the primary purpose of TDD)
 there are many others benefits. These other benefits are equally as valuable and they're obvious for those who have practiced
  it for a long time, but are a bit more subtle for those who haven't.

### Continuously Working Software

When practicing TDD the code is constantly in a working state. The micro-steps of creating a very small unit test and making it pass means that the system stays broken for no more than a minute or two. If something doesn't work you simply have to revert a small amount of code and try again. The days of Debugger-Driven Development are over. This is why error localization is such an important part of unit testing (as Michael Feathers describes in his book _Working Effectively with Legacy Code_)

### Resilient to Interruptions

Everyone knows the meme that interrupting a working developer results in a huge setback and a very grumpy developer. This is based on the belief that they have to load a huge amount of complex system state in their head to get back to addressing the
 problem. A lot of developers consider it a badge of honor that they mentally juggle this much complexity everyday. However, this an unnecessary and wasteful way of working. Practicing TDD ensures that you aren't required to have much of the problem state in your head at any one time. In fact, starting with enough of the problem to make a single, very small test pass is sufficient enough to start. This makes interruptions, meetings, appointments, phone calls, emergencies, questions, etc., not nearly as disruptive as they are when not practicing TDD. 

### Incremental Development & Evolutionary Design

TDD requires developers to get really good at incrementally developing working features and evolutionary software design. Gone are the days of struggling for months only to knock out the work in several long nights and weekends (while the resulting code looks like it was written by candlelight by bleary-eyed developers). This helps developers build much better problem solving skills and development practices, yielding higher quality code. 

### Psychological Benefits

Another benefit of incremental development is the psychological benefits it provides. Instead of developers struggling for
 weeks or months on end not knowing how far they are from a solution, everyday they are writing dozens (or more) of failing tests and making them pass. This concrete progress towards their goals helps developers visualize their progress towards a larger solution. 

### Combined with Pair Programming

When combined with pair programming, in a practice called [Ping Pong Pair Programming](/2015/04/18/ping-pong-pair-programming.html), TDD creates a powerful workflow,
 opportunities for team collaboration, and helps create a culture of mentoring on development teams.

## Next Steps

To coach TDD the best way is to do it hands-on. If you or developers in your organization have experience with TDD, pair with those who don't. Set aside time for the team to get together and practice these techniques. Sometimes doing it as a group can yield insights shared with the team and can be great for team building. There are several fantastic books on this subject, but I would start with Kent Beck's [Test-Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?s=books&ie=UTF8&qid=1495277882&sr=1-1&keywords=tdd+by+example).

<img class="img-responsive" src="/img/tdd_by_example.jpg" />