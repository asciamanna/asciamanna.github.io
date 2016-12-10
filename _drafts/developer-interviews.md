---
layout: post
title: Developer Interviews
comments: true
category: Development Practices
---
A development organization's interview process is possibly the most important thing for it to get right. It is the first impression that the company is giving to prospective employees. If all else fails and you have a good hiring practice, you can rely on a great team to address the issues in the organization. The XP team that I worked on had the best interview process I have experienced and one that, when followed, did not fail us. It was a process that we constantly tuned and I'd like to describe it here in it's final state before it was changed by the larger organization. Since then I've continued tuning this process in my current organization and I will briefly describe how it has changed more recently.

## Team Owned

The most important part of the process was that it was team owned. It is very important that every team member has a say in which developers join the team. It wasn't a subset of the team who had a say in who got hired, or a manager, or someone else in the organization who wouldn't be working with this person on a daily basis. Once they joined the organization, the team was committed to the new hire because it was a decision that they made together. So many times in my career I have seen managers or organizational leaders do all of the interviewing and drop developers into highly functioning teams. Every time this happens it is a gamble. It may pay off and the candidate may be a great fit. However, you are just as likely to have a bad fit which will have disastrous affects on the team morale, team productivity, and the product. These decisions are too important to be left to chance. In fact, our process began to fail when we started losing ownership of it.

### Manage the Rate of Team Change

Even when the gamble pays off, every time someone is added or removed from a cross-functional team, the team slows down. This is one of the main problems with project focused teams. All too often managers will move people into and out of teams to optimize for "scheduling needs." This is a false optimization as it slows everyone down while they learn how to work together. Kent Beck talks about the importance of team continuity in his book, Extreme Programming: Explained. __Sadly, so few organizations ever encounter high-functioning teams so they never experience the benefits of keeping cross-functional teams together for long periods of time.__

Understanding these benefits, teams should manage the rate at which they bring new people on to the team. After every new team member the team is going to need time to adjust, acclimate, and build a new working relationship. I often see organizations adding or removing people from teams every couple of months. These folks never get to gel as a team before they have to adapt to the next change.   

## Know Your Values

As I've mentioned in a previous post it is important for teams to hire based on their team values. It is important to make those values known during the interview process. **It is no coincidence that the team I worked on with the best interviewing process also had a very clear set of team principles, values, and practices.**

## Can the Candidate Program?

Figuring out a candidate's software development skills is one of the biggest challenges in developer interviews. Determining a candidates general development skills, their areas of specialization, and how they will interact with the team is a lot to figure out in a very short amount of time. I've found the fizzbuzz-like questions, very targeted technical problems, and logic puzzles all lacking when trying to hire a generalist, full-stack software developer. **The best way to figure out how a candidate will work with your team is to have them work with your team.** This may seem like a silly quip but this approach allowed us to consistently, and without fail, hire great team members.

### Technical Questions

Technical questions in an interview, for a lot of companies, are a part of the interview process that they never question. They think it's absurd to suggest not asking technical questions in an interview. Given the limited amount of time you have with a candidate, every question asked should be intentional and you should know exactly what information you are trying to learn about the candidate by asking it. I've found that technical questions are great for ruling out candidates who can't program or if you are hiring for a very targeted technical role that requires specific skills. Otherwise, they should be kept to a minimum. When you ask for whiteboard solutions to Fizzbuzz or a doubly linked list implementation it will tell you something about the candidate. But it won't give you insight into how the developer will perform on your team. There may be other things you can do that will make these types questions irrelevant.

### Conversations

Conversations in the interview about a specific technical problem the developer has encountered is better than technical questions but it is still not ideal. Starting with a whiteboard problem you can change the problem and probe areas of the candidate's understanding: optimization based on certain constraints, knowledge of the environment they are working in, their software design abilities, etc.

### Pair Programming

However there is still one interview practice that outperforms all others, pair programming with the developer. This assumes your team practices pair programming, and if you don't you may want to try to learn more about that practice. Our XP team paired on the majority of our production code, so it was a logical step for the interview process.

## Our Process  

### What We were Looking For

We were looking for generalist, full-stack developers who were passionate about continuously learning. More specifically we were looking for developers who worked best in collaborative environments, who weren't looking to work by themselves to solve problems. We were looking for candidates who were interested in XP practices (pair programming, TDD, Continuous Integration, etc.). For more senior developers we were looking for people who would be interested in  coaching their fellow team members.

### Phone Screen

The first step in our process was a phone screen with the entire development team (typically six to eight developers). Here we discussed what the candidate was currently working on, and probed at the types of problems they were solving for their organization. We would also get a feel for how they felt about XP practices and what they were looking for in their next position.

### In Person

If they made it past the phone screen we were pretty sure we had a candidate who was at least interested in practicing XP. We now had to figure out whether they were a good fit for us.

#### First Hour - Discussion and Whiteboard

We spent the first hour discussing their current work and had them diagram something they have worked on at the whiteboard. We did so much collaborative design we wanted to see how they could diagram and talk about a technical solution they worked on as well as answer questions about it. Their ability to communicate technical details to the rest of the team was a required skill we were looking for.

#### Lunch

We then broke for about 45 minutes to eat lunch together. At this point we were just getting to know the candidate on a personal level. XP practices require significantly more collaboration than developers are usually accustomed to. We decided that a relaxed lunch was the best way to learn about a candidate's interests and things they are passionate about outside of work. It was also an opportunity to see how well the candidate could communicate with the rest of the team.

#### Pair Programming

After lunch we moved on to the pairing portion of the interview. This is easily the most important part of the interview process. The session was split between two developers so we were able to get two different impressions of the developer. We used a set of fictitious user stories that increased in complexity. They contained a few small technical challenges but mostly they were used to see how the candidate approached software design, as well as how well they adapted to Test-Driven Development and [Ping Pong Pair Programming](/2015-04-18-ping-pong-pair-programming.html).

The specifics of the stories aren't important, but they were designed to create a business concept in the first story and then implement similar concepts in future stories. The intent was to see if the candidate would recognize a single business concept with varying rules and how they would design the software to accommodate this (a single object, inheritance, composition, a template method, etc.). This often leads to great conversations about the pros and cons of each approach and at what point adopting a different design would be appropriate. We also dealt with some testing challenges like unit testing when the code contained a third-party external dependency.

#### Team Discussion

Following the interview we discussed our observations as a team and made a hiring decision.

## More Recent Updates

I've adopted a shorter version of this process with my development team in my current organization. While I prefer the longer developer interview process we often have time constraints for a variety of reasons. In a response to the shortened times we limit the interview to an in person discussion (that can include some whiteboard discussions about previous projects) and then moving right into the pairing session. While not as thorough, it is still significantly better than whiteboard technical questions and puzzles.  
