---
layout: post
section-type: post
title: Writing Better User Stories?
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: Too often coaches and consultants address "problematic user stories" by helping organizations write better user stories by adopting a standard format. This sidesteps the real issue, one that an "improved" story format can't address. 
image: 
category: development practices
tags: ['agile development', 'consulting']
---

Issues with user stories are a common problem for software development organizations that adopt agile frameworks. At some point in their journey development organizations will ask, _"How do we write better user stories?"_ Well-meaning coaches or consultants come to the rescue. Their advice usually includes adopting the [Connextra user story format](https://www.agilealliance.org/glossary/user-story-template/) (also called _role-feature-reason_). Sometimes the advice includes standards for acceptance criteria like adopting the [gherkin syntax](https://cucumber.io/docs/gherkin/reference/). When starting with the goal of _writing_ better stories the end result is often a large, overly complicated template to use in jira so that _"the team doesn't miss anything in the jira ticket"_. 

Advice like this: ([User Story Template: How to Write User Stories Efficiently](https://hygger.io/blog/user-story-template-how-to-write-it/)) is all too common but sidesteps the real issue. I contend that the more boxes on your user story template or the more required data on your jira input screens, the more time and money you are spending addressing a symptom of your problem. As Jeff Patton states in the introduction of his book **_User Story Mapping_**, "Shared documents aren't shared understanding." The more boxes on the template the harder it is to get to a shared understanding. 

> Shared documents aren't shared understanding
> **_&mdash;Jeff Patton - User Story Mapping - Page xxxii_**

## What is the real issue?

By probing a little deeper and asking why do organizations feel they need to write better user stories the responses I typically hear are: _"How can we convey all of the requirements to the developers efficiently so they can spend more time coding?"_ or _"How can we ensure we don't miss anything so the developers don't discover more stories as they develop"_. These questions expose the reality that these organizations are suffering from the problem that user stories were created to address. 

Historically, software development processes have mimicked factory processes to their detriment. These include [Taylorism](https://en.wikipedia.org/wiki/Scientific_management) (a turn of the 20th century manufacturing processes attempting to optimize production lines with high amounts of managerial control over employees) and [Theory X management](https://en.wikipedia.org/wiki/Theory_X_and_Theory_Y), a management style that assumes workers have no ambition, avoid responsibility, and can't be trusted to do a good job. These practices are vestiges of applying factory processes to software development. Too often software organizations view software developers as order takers, as typing automatons to turn requirements documents into working software. The less time that is required to describe the requirement the more time the developers can spend coding it. 

## Agile Frameworks
Unintentionally (or intentionally) agile frameworks have helped to crystallize the idea that user stories are just a new format of user requirements delivered to a development team. Regardless of what the Scrum Guide may state, as it is practiced, Scrum teams typically consist of a Product Owner who is the only person in contact with the business, product users, or customers (more often _they_ don't even have the connection to customers but are the ones responsible for documenting requirements in jira). A popular agile scaling framework recommends that Product Managers should be externally focused (customers & organization) while Product Owners are internally facing (jira & developers). When this is what being on an agile team looks like, it becomes increasingly more difficult to shed this misunderstanding. In these environments user stories can only be prescriptive requirements waterfalled onto development teams. 

## Software Organizations
Product development organizations are often siloed off from engineering organizations and they rely on a PMO for coordination. I've witnessed consultants build that divide in software companies with the reasoning that, _"We can't have developers talking to users that's the Product Organization's job. They should be writing software, they might promise something we can't deliver because they don't know the big picture."_ This was an example of Taylorism and Theory X taking hold in a growing software company, while the engineering organization could still claim success because they went through an "Agile Transformation," were following all of the scrum events, and were populating their jira issues with the appropriate template. 

> User stories are a promise for a conversation.
> **_&mdash;Alistair Cockburn - Agile Manifesto Co-author_**

## User Stories are Stories not Requirements
The reason user stories are called stories and not "user requirements" is that they were meant to represent something very different than a requirements document. When Kent Beck introduced the idea of user stories in Extreme Programming (XP) it was precisely to get away from prescriptive requirements documents being delivered to order taking developers. The "story" represents a conversation between the people with the problem (the business, customers, users, etc.) and the people who can solve the problem (the development team). No standard template is going to help your teams improve if your organization is designed to keep developers from interacting with the people for whom they are creating the software.

> ...It was at that moment that I learned the word "requirements" actually means "shut up". For a great many people, that is exactly what requirements do. They stop conversations about people and the problems we're solving. 
> **_&mdash;Jeff Patton - User Story Mapping - Page xliii_**

## Bargain Hunting
At [Industrial Logic](https://www.industriallogic.com/) we teach the practice of [Bargain Hunting](https://www.industriallogic.com/blog/bargain-hunting/). Bargains in software development are high-value features available at a fraction of the full price. You can only find bargains if the developers are having meaningful conversations and collaborating with the business. If the focus for improvement is on writing better requirements for developers to understand, you will be missing out on bargains. 

> Having only one Product Owner authoritatively specify and prioritize features leads to high-priced development.
> **_&mdashJoshua Kerievsky - [Bargain Hunting](https://www.industriallogic.com/blog/bargain-hunting/)_** 

## Learn From the Sources
To really improve how your software is built learn about the origins of user stories:
- Learn about [user stories in Extreme Programming](https://martinfowler.com/bliki/UserStory.html)
- Learn about what Kent Beck (XP creator) has to say about user stories - the XP white book and XP green book are good starting points
- Read about Agile Manifesto co-author and XP pioneer Ron Jeffries' [3Cs](https://ronjeffries.com/articles/019-01ff/3cs-revisited)
- Learn how to story map, read Jeff Patton's _User Story Mapping_ and put it into practice
- Get your developers connected to the software's customers and users to have meaningful conversations
- Disregard the plethora of advice about _writing_ better stories provided by scaling frameworks and blog authors

## Resources

