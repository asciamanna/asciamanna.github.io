---
layout: post
section-type: post
title: Writing Better User Stories?
subtitle: 
comments: true
excerpt_separator: <!--more-->
summary: Coaches and consultants often address "problematic user stories" by helping organizations improve their story writing by adopting a standard format. A focus on writing better stories sidesteps the real problem, one that an "improved" story format cannot address. 
image: /img/drive-by-orders.jpg
category: development practices
tags: ['agile development', 'consulting']
---


<img src='/img/drive-by-orders.jpg' alt='Drive by orders sign' class='img-responsive' />

Issues with user stories are a common problem for software development organizations that adopt agile frameworks. At some point in their journey development organizations will ask, _"How do we write better user stories?"_ Well-meaning coaches or consultants come to the rescue. Their advice usually includes adopting the [Connextra user story format](https://www.agilealliance.org/glossary/user-story-template/) (also called _role-feature-reason_). Sometimes the advice includes standards for acceptance criteria like using the [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/). When the goal is **_writing_** better stories the result is often a large, overly complicated template to use in Jira.

<!--more-->

Advice like this: ([User Story Template: How to Write User Stories Efficiently](https://hygger.io/blog/user-story-template-how-to-write-it/)) is all too common but sidesteps the real issue. I contend that the more boxes on a user story template or the more required data on a Jira input screen, the more time and money will be wasted on a symptom of the problem. As Jeff Patton states in the introduction of his book _User Story Mapping_, "Shared documents aren't shared understanding." A requirements document does a poor job of establishing a shared understanding. Even the ones that follow a standard template.

> Shared documents aren't shared understanding  
> **_&mdash;Jeff Patton - User Story Mapping - Page xxxii_**

## What is the real issue?

By probing a little deeper and asking why organizations feel they need to write better user stories, the typical responses are: 
- _"How can we convey all of the requirements to the developers efficiently so they can spend more time coding?"_ 
- _"How can we ensure we don't miss anything so that the developers don't discover more stories as they develop"_. 
- _"How can we write these stories so that the developers build it right the first time?"_

These responses expose the reality that these organizations suffer from the problem that user stories intended to address, attempting to replace collaborative conversations with a document.

Historically, software development processes have mimicked factory processes to their detriment. These include: 
- [Taylorism](https://en.wikipedia.org/wiki/Scientific_management) &mdash; a turn of the 20th-century manufacturing processes attempting to optimize production lines with high amounts of managerial control over employees
- [Theory X management](https://en.wikipedia.org/wiki/Theory_X_and_Theory_Y) &mdash; a management style that assumes workers have no ambition, avoid responsibility, and can't be trusted to do a good job. 

These practices are vestiges of applying factory processes to software development. They are still prevalent in the software industry, even in many software organizations claiming agility by implementing Scrum or scaling frameworks like SAFe. Commonly, developers are considered order takers, seen as typing automatons. They get tasked with turning requirements documents into working software. This focus on efficiency and _"getting it right the first time"_ eliminates any opportunity for iterative and incremental development (a foundational practice of agile software development).

## Agile Frameworks
Unintentionally (or possibly intentionally) Agile frameworks have helped to crystallize the idea that user stories are just a new format for user requirements delivered to a development team. Regardless of what the Scrum Guide may state, as practiced, Scrum teams typically have a Product Owner who is the only person in contact with the business, users, or customers. Often Product Owners don't even have a connection to customers. Instead, they document requirements coming from their organization. 

A popular agile scaling framework recommends that Product Managers be externally focused (customers & organization) while Product Owners are internally facing (Jira & developers). When your agile team looks like this, it becomes increasingly difficult to shed this misunderstanding about user stories. User stories tend to be prescriptive requirements dumped onto development teams in these environments.

## Software Organizations
Product development organizations are often siloed off from engineering organizations, relying on a Project Management Office (PMO) for coordination. I've witnessed consultants build that divide in a software company with the reasoning that, _"We can't have developers talking to users that's the Product Organization's job. They should be writing software, they might promise something we can't deliver because they don't know the big picture."_ While Taylorism and Theory X took hold in a growing software company, the engineering organization could still claim success because they went through an "Agile Transformation."

> User stories are a promise for a conversation.  
> **_&mdash;Alistair Cockburn - Agile Manifesto Co-author_**

## User Stories are Stories, not Requirements
User stories were named stories (not requirements) because they were not meant to be a new form of requirements documentation. When Kent Beck introduced the idea of user stories in Extreme Programming (XP), it was precisely to get away from prescriptive requirements documents delivered to order-taking developers. The "story" represents a conversation between the people with the problem (the business, customers, users, etc.) and the people who can solve the problem (the development team). No standard template can help a team improve if its software organization is designed to keep developers from interacting with the people for whom they are creating the software.

> ...It was at that moment that I learned the word "requirements" actually means "shut up". For a great many people, that is exactly what requirements do. They stop conversations about people and the problems we're solving.   
> **_&mdash;Jeff Patton - User Story Mapping - Page xliii_**

## Bargain Hunting
At [Industrial Logic](https://www.industriallogic.com/) we teach [Bargain Hunting](https://www.industriallogic.com/blog/bargain-hunting/). Bargains in software development are high-value features available at a fraction of the full price. Discovering bargains requires developers to have meaningful conversations and collaborate with the business. If the focus for improvement is on writing better requirements for developers to understand, you will be missing out on bargains. 

> Having only one Product Owner authoritatively specify and prioritize features leads to high-priced development.  
> **_&mdashJoshua Kerievsky - [Bargain Hunting](https://www.industriallogic.com/blog/bargain-hunting/)_** 

## User Story Origins
To improve collaboration and decide what to build next, apply learning gained from the sources of user stories:
- Learn about [user stories in Extreme Programming](https://martinfowler.com/bliki/UserStory.html)
- Learn about what Kent Beck (XP creator) has to say about user stories - the XP white book and XP dark green book are good starting points
- Read about Agile Manifesto co-author and XP pioneer Ron Jeffries' [3Cs](https://ronjeffries.com/articles/019-01ff/3cs-revisited)
- Read Jeff Patton's _User Story Mapping_ and put it into practice
- Get your developers connected to the software's customers and users to have meaningful conversations
- Disregard the plethora of advice about _writing_ better stories provided by scaling frameworks and blog authors

## Resources
- [User Story Mapping](https://www.jpattonassociates.com/story-mapping/) - Jeff Patton
- [Extreme Programming Explained](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658) (aka the XP white book) - Kent Beck, Cynthia Andres 
- [Planning Extreme Programming](https://www.amazon.com/Planning-Extreme-Programming-Kent-Beck/dp/0201710919) (aka the XP dark green book) - Kent Beck, Martin Fowler

<hr class='bottom-separator' />

<small></small>Photo credit: <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Visual Stories || Micheile</a> on <a href="https://unsplash.com/s/photos/order-takers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></small>
  