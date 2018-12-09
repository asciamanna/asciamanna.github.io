---
layout: post
section-type: post
title: An Agile Adoption Conversation - A Cautionary Tale
comments: true
category: leadership
tags: ['agile development', 'anti-patterns']
---

__*The company I work for was interested in agile software development so, we adopted Scrum a while ago.*__

Really? Working on an XP team was easily the most rewarding experience of my career so far. It changed the focus of the rest of my career. How do you like it?

__*Uhm...Scrum is just a tool for micromanagement. Now I get hassled by a Product Owner, a Scrum Master, AND my manager.*__

That sounds awful. Tell me more about it. Are you releasing after every sprint?

__*No, we work on big projects. Some may take up to a year to complete. We deploy code more regularly, but it doesn't get enabled in production until everything is complete. That's a business decision. We are only responsible for implementing the features not making those kinds of decisions.*__

That's a long time. Are you getting feedback from customers and iterating based on that feedback?

__*Well no, we get all of the requirements from business and fix the scope of our projects up front. Iterating would put us at risk for missing the deadlines the organization has set. That would be a problem, we'd look like we aren't working hard enough.*__

Does your Product Owner work with your team to help craft user stories? 

__*She's responsible for taking the requirements document and translating it into the user story format and entering it into our Jira backlog if that's what you mean.*__ 

It wasn't exactly what I meant, but you answered my question. Do you get any customer feedback?

__*No, our Scrum team doesn't. I've never interacted with a customer. We are pretty far removed from the feedback loop. The organization might create a new project for us based on customer feedback sometime in the future.*__

Are you getting stakeholder feedback in your sprint review that influences your backlog and upcoming sprint?

__*No. Our management and organizational leadership attend the meeting to see our progress, but we don't get much feedback. They're most interested in when we'll be done. So that's the question that gets asked at every review.*__

How does your team estimate the work?

__*Our estimates are used to see if we will meet the deadline set by the organization. Management has said it's important that all of our teams estimate the same way since they are so interested in our velocity. They want it to be as similar as possible across teams. It helps them break projects up into smaller pieces and scatter the work across the teams. We do a lot of high-level estimates for our large projects in addition to sprint estimates.*__

How do you do those?

__*We have a brief thirty-minute conversation with management about a project idea and then we estimate how long it will take to complete. If they think it's too long they will recommend we find a way to provide smaller estimates. If we can't decrease the estimates they spread the work across more teams.*__

Ah yes, the age-old idea that you can complete a project faster just by adding more people. I have some books I can recommend on that topic, it might help to leave a few around your office. The estimating process sounds like it is fraught with problems. You don't have access to any details to make these guesses more meaningful?

__*No, the people asking for the estimates wouldn't know any of the details anyway. The team ends up figuring out those details after we start the project.*__

Does your development team practice any of the XP-based technical practices to help teams continuously deliver with high-quality? Like pair programming, mob programming, TDD, Continuous Integration, refactoring, and evolutionary design, for example?

__*No, the agile consultants that ran our agile transition said it wasn't their place to tell us how to write the code. So we code the same way we always have.*__

Is your Scrum Master helping empower your team to improve yourselves and take ownership of some of these problems?

__*Not exactly, he tells us how management wants us to work and makes sure we are adhering to those processes. It's important to management that all of our teams work the same way. Mostly he looks for opportunities for us to pull more work into the sprint and increase our velocity. Otherwise, he's organizing our team meetings.*__

So, if you wanted to experiment with abandoning story points or wanted to replace Jira with a physical card wall, could your Scrum Master help you with that?

__*No, there's no way I would ask. Management would think I was a troublemaker. Those are things we're not allowed to change.*__

What if the change was more technical in nature? Let's say you wanted to change how you tested your API. What if it involved adopting a different third-party library and changing some infrastructure code shared by your tests? Could you do that?

__*No, unfortunately, those types of decisions happen outside of the team. We are responsible for delivering features for customer projects. We have an architecture organization as well as working groups and standards boards to make sure every team codes the same way and uses the same tools.*__

Got it. You definitely have no opportunity to practice evolutionary design in your organization then. So you must not be doing retrospectives?

__*No, we're doing retrospectives. The agile consultants did recommend them after all.*__

How does your team adopt retrospective goals if you can't change the way you work?

__*We use the time to vent about problems in the organization and come up with requests for management since we need their approval to make any changes.*__

So, what you are saying is that you work on large, fixed scope and fixed time projects. You work on these projects in two-week timeboxes without iterating or adjustments from customer or user feedback, and you can't change the way you work based on retrospective outcomes?

__*Yeah, exactly!*__

Then, may I ask, why did your company adopt Scrum in the first place?

__*Our leadership thought we'd give them better estimates and deliver our projects faster.*__


## A Cautionary Tale

It is too easy for companies to adopt Scrum (or scaling frameworks like SAFe) devoid of any of the agile values and principles, then proclaim that they are now "agile." This allows leadership to push all of the change down to the teams without having to make any changes to how they work. As a result, none of the changes to organizational leadership or the rest of the company occurs, which are essential to becoming an agile software organization. The conversation above is common in companies that adopt Scrum ceremonies while still practicing waterfall development in a command-and-control management structure.

If a company is adopting agile for the wrong reasons, like to improve estimates or deliver large, multi-month, multi-team projects faster, it's going to result in the opposite of the intended effect. Without a company-wide culture change, delivery teams will adopt practices to optimize for delivering very small batches of work, getting feedback, and iterating on that feedback. This assumes a level of autonomy and ownership at the team level. If instead the company still works in big batches and has a command-and-control management style, it creates an impedance mismatch for the teams.

By robbing teams of autonomy, mastery, and purpose (which is a natural result of command-and-control management structures) the best developers will leave to find work elsewhere. Add stress at the team level where mixed messages are sent, _**"we are adopting Scrum but only so you give us what we told you to give us faster"**_, and you'll find your best developers leaving your organization at an even faster rate.