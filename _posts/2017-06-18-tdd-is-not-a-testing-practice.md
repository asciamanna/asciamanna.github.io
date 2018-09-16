---
layout: post
section-type: post
title: TDD Is Not a Testing Practice 
comments: true
category: development practices
tags: ['tdd']
---

I often hear people state that they don't care whether unit tests are written first or last, just as long as they get written. This is indicative of the belief that the existence of tests is more important than the method used to create them. Unfortunately, this advice disregards all of the benefits of test-driven development (TDD). 

## Misunderstanding the Purpose of TDD 

There is widespread misunderstanding in the industry about the purpose of TDD. Often people believe that the primary justification for practicing TDD is the creation of unit tests. This illustrates the most common misunderstanding of TDD: that TDD is a testing practice.

When practicing TDD, a high quality unit test suite is a secondary benefit. It can even be considered a side-effect of the practice. TDD is a software design and development practice first and foremost. Those who believe writing tests last is equally beneficial are missing the significant software design and development benefits of TDD.

### Interviews

I have interviewed candidates for a wide variety of roles in development organizations. Typically discussions about XP development practices arise during interviews, since I expect some level of familiarity with them. If these interviews are representative of the broader industry, there is still a lot of misconceptions about TDD. The most common response I hear when I ask about whether the candidate practices, encourages, or values TDD is, _"Yeah, the team writes unit tests."_ Too often people conflate the act of unit testing with TDD. This doesn't come as a surprise to me because I still see a lack of coaching around TDD and other XP practices.

I commonly hear statements like _"I think TDD is a great practice, but my team doesn't do it. It's not my place to tell the team how to write code."_ True, you shouldn't **tell** the team how to write code, but you should coach, show, and motivate them to learn these practices. Getting developers out of their comfort zone to learn something new is part of the job of a senior developer or technical leader.

## Coaching TDD

Too often teams aren't encouraged to practice TDD because there is resistance to trying it. It's a practice that takes time and expertise to master, so it is common for developers to decide it is not for them. It changes a developer's workflow significantly so it will generate discomfort early on. Technical leaders often take the easy way out and say, _"as long as you write unit tests it's okay."_ 

In my experience, the majority of developers who don't want to practice TDD have never tried it.  
Teams should be encouraged to learn TDD and development organizations should be educated on all of the benefits of TDD. It is essential that safe learning environments are created so that developers can learn and practice without feeling like it will only interfere with their ability to _"ship features faster"_. Too often this short-sighted reason is provided by developers to avoid learning a practice that actually enables them to ship features faster. 


## The Inconspicuous Benefits of TDD

The benefits of TDD and the near instantaneous feedback cycles it produces are addictive and extremely valuable. Many benefits exist beyond software design, the creation of unit tests, and the executable documentation that unit tests serve as. These benefits are obvious to seasoned TDD practitioners, but are a bit more subtle and overlooked by those who are not.

### Continuously Working Software

When practicing TDD the code exists in a continuously working state. The micro-steps of creating a very small unit test and making it pass has a powerful effect on the system. It results in a system that stays broken for no more than a minute or two. If something doesn't work you simply have to revert a few lines of code and try again. The days of _"Debugger-Driven Development"_ are over.

There is simply no faster feedback loop for developers. The fast feedback loop combined with continuously working software has a similarly powerful effect on developers. You can take chances, do experiments, and spend your mental cycles addressing design concerns and improving the readability of code instead of getting the system back into a working state. 

### Resilience to Interruptions

There is a cartoon about interrupting a working programmer and the enormous setback it causes. This is based on the belief that developers have to load a huge amount of complex system state in their head in order to program effectively. Too many software developers consider it a badge of honor that they mentally juggle this much complexity everyday. However, this an unnecessary and wasteful way of working. 
 
Practicing TDD ensures that you aren't required to have much of the problem state in your head at any given time. Each passing unit test documents a fact about the system. Simply starting with enough of the problem to make a single, very small test fail and subsequently pass is all that is necessary to begin. This makes all forms of interruptions (meetings, phone calls, emergencies, etc.) easily recoverable without a huge amount time and effort. 

### Incremental Development & Evolutionary Design

TDD requires developers to learn evolutionary software design techniques and how to incrementally develop features. Gone are the days of struggling for months only to blast out the work in several long nights and weekends, while the resulting code looks like it was thrown together by bleary-eyed, over-caffeinated developers. Developers instead learn to break large problems down into small, achievable goals that guide them towards their larger solution. 

#### Psychological Benefits 

Another benefit of incremental development is the psychological benefits it produces. Instead of developers struggling for months on end not knowing how far they are from a solution, everyday they are writing many small failing tests and making them pass. This concrete progress towards their goals helps developers visualize their progress towards the larger solution. Visualizing incremental progress is powerful much in the same way that crossing tasks off to-do lists is. Here is how I described this benefit in a previous post:

> Progress is swift but feels like it moves at a comfortable pace. There are concrete indicators of forward progress as the number of passing unit tests increases. This helps developers work without stress as there isn't a specter of murky progress toward an unclear goal hanging over them. <br />


### Combined with Pair Programming 

TDD often facilitates developer collaboration. When combined with pair programming, in a practice called [Ping Pong Pair Programming](/2015/04/18/ping-pong-pair-programming.html), TDD creates a powerful workflow, opportunities for team collaboration, and helps create a culture of mentoring on development teams. It does this by creating extremely short feedback cycles within the pairing session, ideal for mentoring developers.

## Next Steps 

Hands-on practice is the best way to coach TDD. Pair developers who have experience with TDD with those who don't. Set aside time for the team to get together and practice these techniques. Sometimes doing it as a group can yield insights immediately shared throughout the team. There are several fantastic books on this subject, but I would start with Kent Beck's [Test-Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?s=books&ie=UTF8&qid=1495277882&sr=1-1&keywords=tdd+by+example).

 <img class="img-responsive" src="/img/tdd_by_example.jpg" />