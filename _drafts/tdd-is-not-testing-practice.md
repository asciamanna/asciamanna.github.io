---
layout: post
section-type: post
title: TDD is Not a Testing Practice 
comments: true
category: development practices
tags: ['tdd']
---

In a [previous post](/2015/10/25/use-tdd-to-teach-testable-design.html) about using TDD to teach testable design, I mentioned that when I first started writing unit tests and even early in my TDD experience I would say as long as developers were writing unit tests, I didn't care whether they wrote them first or last. I continue to hear this advice from developers, managers, team leads, and technical leaders.

In this post I want to discuss why I believe this is bad advice, and how people come to this conclusion. After years of writing software without TDD and years of practicing TDD I am convinced it yields higher quality, more easily changed code. 

## Confusion about Purpose

The primary reason why people think writing tests first or last doesn't matter is a misunderstanding about the purpose of TDD. If one believes that the purpose of TDD is to generate a suite of unit tests, then it is just one technique to get to that state. Another equally valid way of getting there is to write tests last, after the feature has been built. 

However, this line of thinking illuminates the most common misunderstanding when it comes to TDD. Frequently, people believe that TDD is a testing practice and that it's primary goal is generating a suite of unit tests. When practicing TDD, a high quality unit test suite is a secondary benefit, a side-effect even, of TDD. 

TDD Is not a testing practice, it's purpose is not to generate a suite of tests. It's purpose is spelled out explicitly in its name, Test-Driven Development. TDD is a software design and development practice first and foremost. Those who believe writing tests lasts is equally valid are missing all of the software design and development benefits of TDD. 

### Interview Example

Over the years I've found myself interviewing a wide variety of roles in development orgainzations: developers, development managers, directors, team leads, etc. I often ask questions about XP development practices as I find them an invaluable tool to build high quality code and to create coaching & mentoring cultures in development organizations.

Often the answers I get when I get to TDD is very telling. XP is over 20 years old at this point and we still have a lot of confusion about TDD. The most common response I get when I ask about whether they practice, encourage, or value TDD is, _"Yeah, the team writes unit tests."_ Somewhat less frequently I hear the things like _"It's not my place to tell the team how to write code."_ True, you shouldn't **tell** the team how to code but you should coach, show, and encourage them. 

## Coaching TDD

Too often we don't encourage teams to practice TDD because there is resistance to doing it. It's a practice that takes work and expertise to master, so too often developers decide it is not for them. It changes a developer's workflow significantly so it will generate some discomfort early on. As technical leaders and coaches we often take the easy way out and say, _"as long as you write unit tests it's ok."_ Instead, we should be encouraging teams to learn TDD and help educate organizations on all of the benefits of TDD not just the unit testing aspects of it. Furthermore, we should be creating safe enviroments in organizations where teams can learn this practice without feeling like "they aren't moving fast enough."

The vast majority of the time I've heard developers say they didn't want to practice TDD they had actually never tried it. Technical leaders and coaches should be able to provide opportunities for developers to learn these techniques and see for themselves the benefits to TDD, because there are a lot of them and they aren't just improved code quality and unit tests. There are team workflow and psychological benefits as well. 
