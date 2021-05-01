---
layout: post
section-type: post
title: How Can the Bolden Rule Improve Software Development Teams?
subtitle: 
comments: true
excerpt_separator: <!--more-->
description: Collective code ownership is an essential practice but often misapplied in enterprises and multi-team software organizations, leading to churn, expensive integration bugs, and morale issues. Conway's Law can help to organize teams to get the benefits of collective code ownership.
category: coaching
tags: ['coaching', 'anti-patterns']
---

There are a handful of books that have had a huge impact on me. One book in particular inspired me to become a software consultant, Gerald Weinberg's _**The Secrets of Consulting**_. If you don't know who Weinberg is I suggest reading is wikipedia entry as a first step. He was a well-known software consultant and author, having written over 50 books in his lifetime. His books are timeless and I find myself returning to them from time to time and getting more out of them each time I read them. As I read through **_The Secrets of Consulting_** again I am realizing that we can apply his _Bolden Rule_ to help software organizations and their leaders improve. 

<BOLDEN RULE QUOTE HERE>

If you work in software development or are adjacent to it you most certainly know _the Bolden Rule_ though not necessarily by name. _The Bolden Rule_ states simply, **"If you can't fix it, feature it!"** Weinberg goes on to give several examples of _the Bolden Rule_ he has collected. Before we get to how it can be applied to help software organizations improve, I'd like to share my favorite Bolden Rule example.

## Intellivision's Bolden Rule Moment

Growing up in the early 80s with older siblings meant that I got to experience what is known as the second generation of home video game consoles. Our family had an Intellivision. The Intellivision console was Mattel Electronics attempt at an Atari 2600 competitor. We amassed a lot of games for that console over the years, and I played long after my friends had switched to the Nintendo Entertainment System. 

One of my favorite games was a game called Space Hawk, and it just so happens to be the Intellivision's Bolden Rule moment. Space Hawk can be seen as Mattel's attempt at their version of the popular game, Asteroids. In Space Hawk you are floating through space with a rocket-powered space suit and need to shoot various things (the titular Space Hawks, bubbles, comets, etc.) before they come in contact with you. 

Now if you are in danger you can press the hyperspace button which gets you out of danger by relocating you to a different part of space, but the use of hyperspace doesn't come for free. Each time hyperspace is used the player's score is decreased. In testing it was discovered that there was a bug in the code that was triggering hyperspace. It was found that pressing the directional disc in a certain direction and pressing the side action buttons (which fire the player's weapon) would sometimes trigger a hyperspace button press. This directional disc and side-action button combination is critical to the gameplay so it was a very common bug. However, the team couldn't solve the problem and deadlines were looming. 

Faced with a situation where they couldn't fix the bug and had run out of time but could still modify the instruction booklet the Space Hawk team decided to feature it. [The Space Hawk Instructions](https://www.gamesdatabase.org/Media/SYSTEM/Mattel_Intellivision//Manual/formated/Space_Hawk_-_1981_-_Mattel_Electronics.pdf) (see page 3) describe that the player may encounter black holes in space from time to time. When they encounter black holes hyperspace will be triggered automatically saving the player from certain death, but still causing them the reduction in their score. And just like that, the bug became a feature of the game that added some variability to the gameplay. 

## Bolden's Rule Applied to Software Organizations

On the surface it may seem like a terrible idea to apply the Bolden Rule to software development, right? Teams who produce bugs that they struggle to fix certainly shouldn't be looking to turn these bugs into features. But what if those of us in positions of influence can apply the Bolden Rule to help change the thinking of the organizations? I contend that anyone, software engineers, managers, consultants, anyone with some influence can apply the rule. 

Let's look at a very common but misguided example. Nearly every software organization wants their teams to create more code faster. And the organizations try the same things over and over again. They add more developers because surely more hands on keyboards will create more code faster. The add more process and more management because that should help make the team more "efficient" and ensure everyone is constantly busy and no one is loafing on the job. These practices have the opposite of the intended effect and often result in further team slow downs, so even more is added. Before we know it we're stuck in vicious cycle. 

What if we look at the team's speed of development not as the bug that needs fixing, but the feature? What could we do differently? Maybe instead of adding more developers, more process, and more management, we would instead:

* Begin to focus on customer outcomes instead of the output of code
* Focus on practices that deliver work faster and safer rather than making developers work harder like decreasing WIP, and collaborative development techniques like pair and mob programming
* Focus on things that prevent rework
* Find ways to automate repetitive tasks
* Improve the speed and frequency of feedback loops (automated tests for example) 
* Work in smaller batches

So much of what makes software teams great works against a century of Taylorism and people's instincts. If you can change the frame to get an organization to stop trying the same old techniques that we find slows software delivery down rather than speed it up it's worthy tool to wield, and Jerry Weinberg taught me that _the Bolden Rule_ is one such tool.

https://en.wikipedia.org/wiki/Space_Hawk


https://www.gamesdatabase.org/Media/SYSTEM/Mattel_Intellivision//Manual/formated/Space_Hawk_-_1981_-_Mattel_Electronics.pdf
