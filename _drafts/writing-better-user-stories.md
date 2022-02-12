---
layout: post
section-type: post
title: Writing Better User Stories?
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: Too often coaches and consultants address "problematic user stories" by helping organizations adopt a standard format. This sidesteps the real issue, one that an "improved" story format can't address. 
image: 
category: development practices
tags: ['agile development', 'consulting']
---

There is a pervasive problem that I see in software development organizations that adopt agile frameworks. At some point in their journey they will ask, _"How do we write better user stories?"_ Well-meaning coaches or consultants come to the rescue. The advice usually includes adopting the [Connextra user story format](https://www.agilealliance.org/glossary/user-story-template/) (sometimes called _role-feature-reason_). Sometimes the advice also includes standards for acceptance criteria like adopting a gherkin (_give-when-then_) syntax for story acceptance criteria. When starting with the goal of _writing_ better stories the end result is often a large, overly complicated template to ensure _"the team doesn't miss anything in the jira ticket"_. 

Advice like this ([User Story Template: How to Write User Stories Efficiently](https://hygger.io/blog/user-story-template-how-to-write-it/)) is common but misses the real issue. I contend that the more boxes on your user story template or the more required data in your jira story, the more time and money you are spending addressing a symptom of your problem. As Jeff Patton states before he even gets into the first chapter of his book _User Story Mapping_, "Shared documents aren't shared understanding." The more boxes on the template the harder it is to get to a shared understanding. 

> Shared documents aren't shared understanding
> **_&mdash;Jeff Patton - User Story Mapping - Page xxxii

## What is the real issue?

By probing a little deeper and asking why do organizations feel they need to write better user stories the responses I typically hear are: _"How can we convey all of the requirements to the developers efficiently so they can spend more time coding?"_ or _"How can we ensure we don't miss anything so the developers don't discover more stories as they develop"_. These questions expose the problem that user stories were created to address. The history of software development is rooted in Taylorism where the workers are order takers who are not to be trusted to do a good job. Often software organizations view software developers as order takers, as typing automatons to turn requirements documents into code. The less time we spend describing the requirement the more time the developers can spend coding. The automaton's that ask too many questions can be replaced with ones who don't. Does that sound extreme? Let me give a few examples. 

## Agile Frameworks
Unintentionally (or intentionally) agile frameworks have helped to solidify the idea that user stories are just a new format of user requirement delivered to a development team. Regardless of what the Scrum Guide may state, as it is practiced, Scrum typically consists of a Product Owner as the only person in contact with the business, users, or customers (often times they don't even have contact with users). In fact a popular Agile Scaling Frameworks recommends a Product Manager should be externally facing (customers and users) and Product Owners should be internally facing (jira & developers) it becomes increasingly more difficult to shed this misunderstanding. In these environments user stories are prescriptive requirements waterfalled onto development teams. 

## Software Organizations
 I see software organization that separate their Product development from their engineering department and then rely on a PMO for them to coordinate. I've personally witnessed consultants build that divide in software companies with the reasoning that, _"We can't have developers talking to users that's the Product Organization's job. They should be writing software and they might promise something we can't deliver because they don't know the big picture."_ Taylorism takes hold in another growing software company and the software organization can still pat themselves on the back because they are following all of the scrum events and populating their jira tickets with the appropriate template. 

> The real goal of using stories is shared understanding 
> **_&mdash;Jeff Patton - User Story Mapping - Page xxxiv


## User Stories are Stories not Requirements
The reason user stories are called stories and not "user requirements" is that they were meant to represent something very different than requirements delivered to developers. When Kent Beck introduced the idea of user stories in XP it was precisely to get away from prescriptive requirements documents being delivered to order-taking developers. The "story" represents a conversation between the people with the problem (business, customers, users, etc.) and the people who can solve the problem (the development team). No standard template is going to help your teams improve if your organization is designed to keep developers from interacting with the people for whom they are creating the software.

> ...It was at that moment that I learned the word "requirements" actually means "shut up". For a great many people, that is exactly what requirements do. They stop conversations about people and the problems we're solving. 
> **_&mdash;Jeff Patton - User Story Mapping - Page xliii

## Learn From the Sources
To really improve how your software is built study some of the source of user stories.
- Learn about user stories in Extreme Programming.
- Learn about what Kent Beck (XP creator) has to say about user stories. 
- Read about Agile Manifesto co-author and XP pioneer Ron Jeffries' [3Cs](https://ronjeffries.com/articles/019-01ff/3cs-revisited)
- Learn how to story map.
- Get your developers connected to the sofware's customers and users to have meaningful conversations.
- Disregard the plethora of blog posts about _writing_ better stories provided by scaling frameworks and others. 


> User stories are a promise for a conversation.
>**_&mdash;Alistair Cockburn - Agile Manifesto Co-author
