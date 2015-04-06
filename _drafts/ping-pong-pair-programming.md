---
layout: post
title: Ping Pong Pair Programming 
comments: true
category: Development Practices
---
The most effective form of Pair Programming I've experienced is called Ping Pong Pair Programming. I find it so effective that I prefer not to pair at all if I cannot ping pong program. The majority of development teams who occasionally pair program don't practice ping pong pair programming. I suspect these teams would enjoy pair programming more and identify its benefits if they tried ping pong pairing.
<!--more-->
I first encountered Ping Pong Pair Programming around 2005 or 2006. I have no idea where it originated but I have read about it as far back as 2002. I didn't begin to practice Ping Pong Pair Programming until I joined an eXtreme Programming (XP) team in 2008. I quickly took to the practice, finding it incredibly engaging and enjoyable. As someone who values collaborating with other developers this was collaboration at a level I had not previously experienced. Furthermore, this constant and close collaboration built a camaraderie with a team of developers which I have never been able to replicate. There are about eight to ten developers with whom I've worked that I feel an incredible bond with as a result of constant pair programming over a significant period of time. These are folks I would jump at the chance to work with again.

##Description 
Ping Pong Pair Programming is the intersection of two XP practices:

* Pair Programming
* Test-Driven Development (TDD)

NOTE: ADD IMAGE HERE

Ping pong pair programming is deceptively simple. Given two developers, Developer A and Developer B:

* Developer A writes a failing test
* Developer B makes the test pass writing only enough code to make it pass
* Developer B writes the next test
* Developer A writes only enough code to make that test pass
* Continue until Developer A and Developer B agree there are no more tests for the unit they are currently working on
* Either developer can refactor the code only while all tests are passing

##Development Machine Setup
One of the biggest struggles I see with development teams trying to work this way is they don't properly setup their development machines to accommodate this kind of work. The optimal setup is a single computer with two input devices. That's two monitors, two keyboards, and two mice. Frankly I won't pair unless there are two input devices because I find it impossible to be comfortable working with a single set of input devices, having to pass them back and forth between developers.

##Physical Environment
Another very important aspect of pair programming is how the pair of developers are seated in relation to each other. The worst seating is one developer in front of another. Both developers need to be comfortably seated and able to take control of the computer at any point in the pairing process. The most common seating is two developers seated next to each other. While I don't find this the optimal seating it is usually the easiest in work environments that weren't originally designed with pair programming in mind. Thus, I find myself resorting to it more than I'd like to.

The optimal seating that I've found through experimenting with a previous team is sitting either directly or diagonally across from one another. This enables pairs to easily look at the screen and look directly at each other at all times during the pairing session.

##Benefits 
###Flow
I consider the biggest benefit of Ping Pong Pair Programming is how quickly the pair achieves flow. Flow is an important concept in programming. It is the point at which the problem spaces is completely loaded into the head of the developer and they begin making the most efficient progress on the solution. This is the point that any interruption sets the developer back (a phone call, a text message, a question from a fellow employee, etc.).

As a side note this is another reason why TDD is so important. A **MUCH** smaller problem space needs to be managed to begin making progress on a solution when practicing TDD. This enables developers to get into flow much more quickly than other programming styles where the entire application's problem space needs to be known. Working in this way a distraction is much less damaging to the progress of the developer.

###Avoids Mismatched Pair Issues
In a pair there is always one person who knows more than the other either about the domain, the problem currently being addressed, the technology stack, or even programming in general. This mismatch can lead to poor pair programming sessions with the more experienced programmer domaniting the keyboard. Newer developers tend to feel like they are providing very little input and get bored. While more experienced developers can feel like they are doing all of the heavy lifting. It is no surprise that these developers eventually decide pair programming is not for them. 

Ping Pong Pair Programming avoids these issues as each developer is taking turns making tests pass. If the developer doesn't know what test to write next or how to make a specific test pass that is the beginning of a conversation. 

I believe it was Kent Beck who stated in his Extreme Programming Explained book that if you don't hear constant conversations within the development team while pairing there is a problem.

###Learning & Mentoring
Given that conversations are constantly happening in the pairing session this is a very natural way to incorporate mentoring into your team. The organizations who push for mentoring sessions between developers and managers in private one-on-one meetings always seem odd and forced to me. But by pair programming this mentoring is something that is occuring constantly between developers of different skill levels. Additionally, learning new techniques, 3rd party libraries, tools, team practices, team coding conventions, etc. becomes very easy and built in to the pairing process.

Some teams will even stop performing code reviews and allow the review to happen during the pairing session. This is something I don't feel strongly about one way or another. I definitely see benefits to having someone external to the pair review the code. As Bryan Helmkamp stated both developers in a pair are the authors, therefore they still require an editor. In my experience I prefer having as many eyes on the code as possible, however as long as both developers aren't "green" in a majority of cases I think having a two sets of eyes on the code is sufficient.

####Teaching Test-Driven Development
I am a huge proponent of TDD. I have had a lot of success with it and I have yet to find a situation in which I don't want to practice TDD. Test-Driven development, while conceptually simple, takes a fair amount of time for developers to get truly comfortable with. It is a struggle for developers new to TDD to do the simplest thing to make a test pass, to not take too big of a step, to ensure that the tests they are writing are actually unit level tests and not integration tests, etc. Even the act of just writing the test first is something that is a challenge for developers who haven't worked that way previously. All too often "unit tests" that inexperienced developers write are impossible to maintain, impossible to reason about, and end up being an opposing force instead of an enabling force in the organization. These are situations where teams give up on unit testing and decide "it didn't work for us." See my previous post for more on this topic, xUnit is Not Unit Testing <LINK HERE>

Being introduced to TDD in a ping pong pair programming situation is the fastest way for a developer to get up to speed and comfortable with the practice. Pairing with a seasoned TDD practicioner developers new to the practice will learn how to avoid external dependencies (database access, file system access, external services) that slow down unit tests.  The preferred scope and size of a unit test. They will also learn how to make unit tests as clear as possible so they can be an excellent documenting technique. Most importantly they will learn how to write testable code and begin to recognize the bad programming habits that they have accumulated over time that make unit testing their code impossible.

##Coupled with Promiscuous Pairing Techniques
When I first started Ping Pong Pair Programming we switched pairs on the team twice per day (two four hour sessions). In the early days of XP teams tended to keep the same pairs throughout an iteration. Promiscuous Pairing recommends switching pairs even more rapidly (e.g., I've read about teams switching pairs every 90 minutes). Some would argue that switching twice per day isn't really "promiscuous" but we found that schedule worked out well for us and we were able to achieve the desired results. If you've never heard of Promiscuous Pairing read Alro Belshee's article on the topic here.<LINK>http://user.it.uu.se/~carle/softcraft/notes/PromiscuousPairing.pdf

While ping pong pair programming and switching pairs often ideas spread throughout the team quickly. Every developer paired with one another, there were no "favored pairs." Very rarely would a user story be completed in a single pairing session, this resulted in a true team-owned solution and team accountability. It also helps achieve _**"Beginner's Mind"**_ which you can read more about in Arlo Belshee's article linked above.  

##Driver / Navigator Pair Programming
The other popular form of pair programming is called driver navigator. I've found 

##Conclusion
Like everything in software development, Ping Pong Pairing is no silver bullet. There are times when pair programming may not make sense based on the task, the team personalities, etc. But I would strongly encourage you to try Ping Pong Pairing before deciding that pair programming is not for you.
