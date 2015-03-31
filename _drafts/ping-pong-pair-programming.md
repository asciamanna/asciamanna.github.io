---
layout: post
title: Ping Pong Pair Programming 
comments: true
category: Development Practices
---
The most effective form of Pair Programming I've experienced is called Ping Pong Pair Programming. I find it so effective that I prefer not to pair at all if I cannot ping pong program. The vast majority of development teams who occasionally pair program don't practice ping pong pair programming. I suspect these teams would enjoy pair programming more and identify its benefits if they tried ping pong pairing.
<!--more-->
I first heard of Ping Pong Pair Programming around 2005 or 2006. I have no idea where it originated but have read about it as far back as 2002. 

I didn't begin to practice Ping Pong Pair Programming until I joined an eXtreme Programming (XP) team in 2008. I quickly took to the practice, finding it incredibly engaging and enjoyable. As someone who values collaborating with other developers this was collaborating at a level I had not previously experienced. Furthermore, this constant and close collaboration built a camaraderie with a team of developers which I have never been able to replicate. There are about eight to ten developers with whom I've worked that I feel an incredible bond with as a result of constant pair programming over a significant period of time. These are folks I would jump at the chance to work with again.

##Description 
Ping Pong Pair Programming is the intersection of two XP practices:

* Pair Programming
* Test-driven Development

NOTE: ADD IMAGE HERE

The idea of ping pong pair programming is deceptively simple. Given two developers, Developer A and Developer B:

* Developer A writes a failing test
* Developer B makes the test pass writing only enough code to make it pass
* Developer B writes the next test
* Developer A writes only enough code to make that test pass
* Either developer can refactor the code only while all tests are passing

##Development Machine Setup
One of the biggest struggles I see with development teams trying to work this way is they don't properly setup their development machine to accommodate this sort of work. The optimal setup is a single computer with two input devices. That's two monitors, two keyboards, and two mice. Frankly I won't pair unless there are two input devices because I find it impossible to be comfortable working with a single set of input devices.

##Seating
Another very important aspect of pair programming is how the pair of developers are seated in relation to each other. The worst seating is one developer in front of another. This happens in some other forms of pair programming but makes Ping Pong Pair Programming impossible. The most common seating is next to each other. While I don't find it the optimal seating it is usually the easiest in work environments that weren't originally designed with pair programming in mind. Thus, I find myself resorting to it more than I'd like to.

The optimal seating that I've found through experimenting with a previous team is sitting either directly or diagonally across from one another. This enables pairs to easily look at the screen and look directly at each other at all times during the pairing session.

##Benefits 
###Flow
The biggest benefit of Ping Pong Pair Programming is how quickly the pair achieves flow.

###Avoids Mismatched Pair Issues
In a pair there is always one person who knows more than the other either about the domain, the problem being solved, or programming in general.  This mismatch usually leads to poor pair programming sessions with the more experienced programming domaniting the keyboard. This usually leads to the newer developer feeling like they have no input and the more experienced developer feeling like they are doing all of the heavy lifting.  It is no surprise that these developers eventually decide pair programming is not for them. 
Ping Pong pairing avoids these issues as each developer is taking turns making tests passs.  If the developer doesn't know what test to write or how to make a specific test pass that is the beginning of a conversation.  

###Learning & Mentoring
Given that conversations are constantly happening in the pairing session this is a very natural way to incorporate mentoring into your day. In fact, by working this way mentoring is something that is occuring constantly. Additionally, learning new techniques, 3rd party libraries, team practices, team coding conventions, etc. becomes very easy and built in to the pairing process.

####Teaching Test-Driven Development
I am a huge proponent of Test-Driven Development. I have had a lot of success with it and I have yet to find a situation in which I don't want to practice TDD. Test-Driven development, while conceptually simple, takes a long time for developers to get truly comfortable with. It is a struggle for developers new to TDD to do the simplest thing to make a test pass, to not take too big of a step, to ensure that the tests they are writing are actually unit level tests and not integration tests, etc. Being introduced to TDD in a ping pong pair programming situation is the fastest way for a developer to get up to speed and comfortable with the practice. 

Given the dynamics of Ping Pong Programming 
In general pair programming 

###Coupled with Promiscuous Pairing Techniques

other pairing not as effective 
###Driver / Navigator Pair Programming

Not a silver bullet
Devs who don't like pairing

When not to do it
