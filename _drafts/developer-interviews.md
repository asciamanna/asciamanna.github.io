---
layout: post
title: Developer Interviews 
comments: true
category: Development Practices
---
A development organization's interview process is possibly the most important thing to get right. It is the first impression that the company is giving  to prospective employees. If all else fails and you have a good hiring practice, you can rely on a great team to address the issues in the organization. The XP team I worked on had the best hiring practice I have experienced and one that, when followed, did not fail us. When we were able to hire without interference every developer we brought into the organization turned out to be fantastic. It was a process that we constantly tuned and I'd like to describe it here in it's final state before it was changed by the larger organization. 

## Team Owned
The most important part of the process was that it was team owned. We were organized by product (not project), which meant that the teams owned their codebase and also owned their hiring process. It is very important that every  team member has a say in which developers join the team. It wasn't a subset of the team who had a say in who got hired or a manager or someone else in the organization who wouldn't be working with this person on a daily basis. Once brought onboard, the team was committed to the new hire because it was a decision that they made together. So many times in my career I have seen managers or organizational leaders do all of the interviewing and drop developers into highly functioning teams. Every time this happens it is a gamble. It may pay off and the candidate may be a great fit. However, you are just as likely to have a bad fit which will have disastrous affects on the team morale and the product.  These decisions are too important to be left to chance. In fact our process failed when we started losing ownership of the process (which I will discuss in more detail later).

### Manage the Rate of Team Change
Even when the gamble pays off every time someone is added or removed from a cross-functional team, the team slows down. This is one of the main problems with project focused teams. All too often managers will move people into and out of teams to optimize for "scheduling needs." This is a false optimization as it really slows everyone down while they learn how to work together. Kent Beck talks about this in his book, Extreme Programming: Explained. Sadly, so few organizations ever really see high-functioning teams so they never experience the benefits of keeping cross-functional teams together.

Understanding this teams should manage the rate at which they bring new people on to the team. After every new team member the team is going to need time to adjust and acclimate and build this new working relationship.  

https://twitter.com/richardadalton/status/569275411508682752

## Know Your Values
As I've mentioned in a previous post it is important for teams to hire based on their team values. And it is just as important to make those values known during the interview process. **It is no coincidence that the team I worked on with the best interviewing process also had a very clear set of team principles, values, and practices.**

## Can the Candidate Program?
Figuring out the candidates software development skills is one of the biggest challenges in developer interviews. Determining a candidates general development skills, their areas of specialization, and how they will interact with the team is a lot to figure out in a very short amount of time.  I've found fizzbuzz like questions, very targeted technical problems, and logic puzzles all lacking when trying to hire a generalist, full-stack software developer. **The best way to figure out how a candidate will work with your team is to have them work with your team.** This may seem like a silly quip but this approach allowed us to consistently, and without fail, hire great team members after three to four hours (including a break for lunch). 

### Technical Questions

Technical questions in an interview, for a lot of companies, are a part of the interview process that they never question. They think it's crazy that someone would suggest to not ask those questions. Given the limited amount of time you have with a candidate, every question asked should be intentional and you should know exactly what information you are trying to learn about the candidate by asking it. I've found that technical questions are great for ruling out candidates who can't program or if you are hiring for a very targeted technical role that requires specific skills. Otherwise, they should be kept to a minimum. Fizzbuzz solutions or the difference between an interface and an abstract class will not give you any insight into how the developer will perform on your team. There may be other things you can do that will make these questions irrelevant.

### Conversations

Conversations in the interview about a specific technical problem is better than technical questions but it is still not ideal. Starting with a white board problem you can change the problem and probe areas of the candidate's understanding: optimization based on certain constraints, knowledge of the environment they are working in, their software design abilities, etc. 

### Pair Programming
However there is still one interview practice that outperforms all others, pair programming with the developer. This assumes your team practices pair programming, and if you don't you may want to try to learn more about that practice. Our XP team paired on nearly all production code, so it was a logical step for the interview process. 

## Our Process
### What We were Looking For
We were looking for generalist, full-stack developers who were passionate about continuously learning. Sounds pretty generic right? That's what everyone is looking for in a candidate. Really what we were looking for were developers who worked best in collaborative environments, who weren't looking to work by themselves to solve problems. We were looking for candidates who were interested in XP practices (pair programming, TDD, Continuous Integration, etc.). Also developers who would help coach the rest of the developers up around him or her. If they were right out of school we were looking for people we thought would reach that point eventually through being coached on our team.

### Phone Screen
The first step in our process was a phone screen with the entire development team (typically six to eight developers). Here we discussed what the candidate was currently working on, probed at the types of problems they were solving for their organization. We would also get a feel for how they felt about XP practices and what they were looking for in their next position. 

### In Person

If they made it past the phone screen we were pretty sure we had a candidate who was at least interested in practicing XP. We now had to figure out whether they were a good fit for us. 

#### First Hour - Discussion and White Board
We spent the first hour discussing their current work and had them diagram something they have worked on at the white board. We did so much collaborative design we wanted to see how they could diagram and talk about a technical solution they worked on as well as answer questions about it. Their ability to communicate technical details to the rest of the team was a required skill we were looking for.

#### Lunch 
We then broke for about 45 minutes to eat lunch together. At this point we were just getting to know the candidate on a personal level. XP practices require way more collaboration than developers are usually accustomed to. It was important to see if we could gel on a personal level. We decided that a relaxed lunch was the best way to learn about a candidate's interests and things they are passionate about outside of work. 

#### Pair Programming
After lunch we moved on to the pairing portion of the interview. This is easily the most important part of the interview process. The session was split in two  sessions so that two developers could get a chance to work with the prospective candidate. We used a set of fictional user stories that increased in complexity. They contained a few small technical challenges but mostly they were used to see how the candidate approaches software design, as well as how well they adapted to Test-Driven Development and Ping Pong Pair Programming. 

#### Team Discussion
Following the interview we had a discussion, at this point armed with more than enough information as to how well they thought the developer would perform on our team. 

## Where it Broke Down
As I've said before, when this process was followed it worked out incredibly well for us. Every one of the developers that was hired through that process I would go out of my way to work with again. That's not to say we didn't have personnel challenges. But those developers were hired when management in the organization overruled the development team's advice (which was the start of us losing ownership of our hiring process).

### Cross Functional Bad Hires
The biggest drawback to this process was that it was specific to the development team while we worked cross-functionally. In retrospect if we had cross-functional interviews we could have prevented the collapse of the agile development organization. What eventually led to the organization's abandonment of XP and severe decline in the quality of work was influence from non-developers who were hired. These folks didn't share the team's values and quickly got themselves moved into influential roles in the organization so they could start unraveling the XP culture. Eventually this led to a huge step backwards, where management ran the interviews as distrust spread throughout the organization.