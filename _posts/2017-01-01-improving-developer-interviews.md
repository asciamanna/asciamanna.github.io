---
layout: post
section-type: post
title: Improving Developer Interviews
comments: true
category: Development Practices
tags: ['pair programming', 'agile development']
---

A development organization's interview process is arguably the most important thing for it to get right. The interview is the candidate's first impression of the company. If all else fails and you have good hiring practices, you can rely on a great team to address the issues in the organization. The eXtreme Programming (XP) team that I worked on had the best interview process I have experienced and one that, when followed, did not fail us. It was a process that we constantly tuned and I'd like to describe it here in it's final state before it was changed by the larger organization. Since then, I've continued tuning this process in my current organization and I will briefly describe how it has changed recently.

## Team Owned

It is very important for the interview process to be owned by the team. Furthermore, every team member should have an opportunity to take part in the process. Managers and other employees outside of the cross-functional team should still be involved and offer advice, but the development team should be empowered to make the hire decision. Once the team has made its decision, it should not be overruled by management.

When teams make a decision together to hire a new developer, they are committed to the new employee's success. So many times in my career I have seen managers do all of the interviewing and drop developers into high-performing teams. Every time this happens it is a gamble. It may pay off and the candidate may be a great fit. However, you are just as likely to have a bad fit which will have disastrous affects on the team morale, team productivity, and potentially the product. These decisions are too important to be left to chance. In fact, my team's process began to fail when we started losing ownership of it to our organizational leadership.

### Manage the Rate of Team Change

Even when the gamble pays off, every time someone is added or removed from a cross-functional team, the team slows down. This is one of the main problems with project focused teams. All too often managers will move people in and out of teams to optimize for "scheduling needs." This is a false optimization as it slows everyone down while they learn how to work together. [Kent Beck](https://twitter.com/KentBeck) talks about the importance of team continuity in his book, Extreme Programming: Explained. __Sadly, so few organizations ever encounter high-performing teams so they never experience the benefits of keeping cross-functional teams together for long periods of time.__

Understanding these benefits, teams should manage the rate at which they bring new people on to the team. After the addition of every new team member the team is going to need time to adjust, acclimate, and build a new working relationship. I often see organizations adding or removing people from teams every couple of months. These folks never get to gel as a team before they have to adapt to the next change.   

## Know Your Values

As I've mentioned in a previous post, it is important for teams to hire based on their team values. Make those values known during the interview process. **It is no coincidence that the team I worked on with the best interviewing process also had a very clear set of team principles, values, and practices.**

## Can the Candidate Program?

Figuring out a candidate's software development skills is the biggest challenge in developer interviews. Determining a candidates general development skills, their areas of specialization, and how they will interact with the team is a lot to figure out in a very short amount of time. I've found the [fizzbuzz](http://wiki.c2.com/?FizzBuzzTest)-like questions, very targeted technical problems, and logic puzzles all lacking when trying to hire a generalist, full-stack software developer. **The best way to figure out how a candidate will work with your team is to have them work with your team.** This may seem like a silly quip, but this approach allowed us to consistently hire great team members.

### Technical Questions

Technical questions in an interview, for a lot of companies, are a part of the interview process that they never question. They think it's absurd to suggest not asking technical questions in an interview. Given the limited amount of time you have with a candidate, every question asked should be deliberate and you should know exactly what information you are trying to learn about the candidate by asking it. I've found that specific technical questions and algorithms may be useful for roles that require a very targeted, specific technical skill. Beyond that, they should be avoided. When you ask for whiteboard solutions to bubblesort or a doubly linked list implementation it will tell you something about the candidate. However, it won't give you insight into how the developer will perform on your team. Extremely talented, valuable developers often struggle at the whiteboard recounting specific algorithms when the pressure is on in an interview setting. A developer can't memorize every algorithm, nor should they, since they can easily look up a reference implementation when they need it. There are other techniques that can be used to make these types of questions irrelevant.

### Conversations

Conversations in the interview about a specific technical problem the developer has encountered are better than whiteboard technical questions, but still aren't ideal. The interviewer can start with a whiteboard problem that the candidate can easily talk about and solve. Then the problem can be modified to  probe areas of the candidate's understanding: optimization based on certain constraints, knowledge of the environment they are working in, their software design abilities, etc.

### Pair Programming

However, there is still one interview practice that outperforms all others, pair programming with the candidate. This assumes your team practices pair programming, and if you don't you may want to learn more about that practice. As a side note, I wouldn't include pair programming in the interview process if the team wasn't already practicing it. Our XP team paired on the majority of our production code, so it was very valuable to see how the candidate would perform solving problems in such a collaborative way.

## Our Process  

### Who We Were Looking For

We were looking for generalist, full-stack developers who were passionate about continuously learning. We hired several developers who had no experience with our tech. stack. It was more important for us to find people who cared about learning and improving their craft. More specifically, we were looking for developers who worked best in collaborative environments, and weren't interested in solving problems alone in a cubicle. We were looking for candidates who were interested in XP practices (pair programming, TDD, Continuous Integration, etc.). For more senior developers, we were trying to find people who would be interested in coaching their fellow team members.

### Phone Screen

The first step in our process was a phone screen with the entire development team (typically six to eight developers). Here we discussed what the candidate was currently working on, and probed at the types of problems they were solving for their organization. We would also get a feel for how they felt about XP practices and what they were looking for in their next position.

### In Person

If the candidate made it past the phone screen we were pretty sure we had someone who was at least interested in practicing XP. We now had to figure out whether they were a good fit for us.

#### First Hour - Discussion and Whiteboard

We spent the first hour discussing their current work and had them diagram something they have worked on at the whiteboard. We did so much collaborative design that we wanted to see how they could diagram and talk about a technical solution they worked on, as well as answer questions about it. Their ability to communicate technical details to the rest of the team was a required skill we were interviewing for.

#### Lunch

We then broke for about 45 minutes to eat lunch together. At this point we were just getting to know the candidate on a personal level. XP practices require significantly more collaboration than developers are usually accustomed to. We decided that a relaxed lunch was the best way to learn about a candidate's interests and things they are passionate about outside of work. It was also an opportunity to see how well the candidate could communicate with the rest of the team.

#### Pair Programming

After lunch we moved on to the pairing portion of the interview. This is easily the most important part of the interview process. The session was split between two developers so that we were able to get two different impressions of the candidate. We used a set of contrived, fictitious user stories that increased in complexity. They contained a few small technical challenges, but mostly they were used to see how the candidate approached software design, as well as how they adapted to Test-Driven Development and [Ping Pong Pair Programming](/2015-04-18-ping-pong-pair-programming.html).

The specifics of the stories aren't important, but they were designed to create a business concept in the first story and then implement similar concepts in future stories. The intent was to see if the candidate would recognize a single business concept with varying rules and how they would design the software to accommodate this (a single object, inheritance, composition, a template method pattern, a strategy pattern, etc.). This often led to conversations about the pros and cons of each approach and at what point adopting a different design would be appropriate. We also dealt with some testing challenges like unit testing when the code contained a third-party external dependency.

#### Team Discussion

Following the interview we discussed our observations as a team and made a hiring decision.

## More Recent Updates

I've adopted a shorter version of this process with my development team in my current organization. While I prefer the longer developer interview process, we often have time constraints for a variety of reasons. In a response to the shortened timeframes we limit the interview to an in person discussion and then move right into the pairing session. While not as thorough, it is still significantly better than whiteboard technical questions and puzzles.  

## Further Reading

If you want to read more about this topic here are a few additional resources:

*  [Developer Shortage, or Time to Rethink the Technical Interview](http://techbeacon.com/developer-shortage-or-time-rethink-technical-interview)    
* [You Suck at Technical Interviews](http://seldo.com/weblog/2014/08/26/you_suck_at_technical_interviews)  
