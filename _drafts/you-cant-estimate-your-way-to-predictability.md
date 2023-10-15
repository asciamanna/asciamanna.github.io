---
layout: post
section-type: post
title: You Can't Estimate Your Way to Predictability 
subtitle: 
comments: true
excerpt_separator: <!--more-->
category: development practices
tags: ['agile development']
---

Organizations continue to use story points and velocity to estimate their work, plan future initiatives, see how much work is left for a feature, and come up with deadlines. 

The fools errand is that estimating more or better will lead to better estimates? So spending more time estimating and less time delivering value to customers is some how preferable? 


## Problem with story points
Orgs keep using story points without understanding what they were intended for
- relative estimating
- a tool for the team to decide what would fit in a single iteration

It was not a productivity measure, it was not a deadline creator.

Let's look at ways it has been abused:
- Selling work by number of story points 
- SAFe's normalizing of story points
- Jira allowing for fractional story points - not supposed to be precision

## Getting more predictable?

- If your estimates are "wrong" then estimating is not your problem. So spending more time estimating will not help you.
- Code Quality
- Lack of quality first practices (TDD, ensemble programming, continous refactoring, evolutionay design)
- Specialists working solo - Product manager comes up with the feature, desinger creates a figma mock up, architect creates the design document, all to be delivered to a team of order-taking developers. Every user-facing feature is split between front-end, back-end, and sometimes need to pull in operations people for build or database updates. Work needs to get approved via a pull-request and finally approved by the Product Manager. 
At every point when developers work solo (instead of collaboratively doing mob / team / ensemble programming) there is a handoff, a queue where work sits idle, an opportunity for a miscommunication, and a chance that work needs to go back to a previous person for updates or fixes. The same applies for designers, testers, and product managers. 


Want to be more predictable? Focus on decreasing cycle time and increasing throughput. Ruthlessly improve quality, adopt practices like TDD and mob programming. Limit WIP and optimize for throughput not developer busy-ness (Mob programming)

## When will it be ready?
probablistic forecasting here