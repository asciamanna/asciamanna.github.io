---
layout: post
section-type: post
title: The Code Smell Scavenger Hunt Kata 
comments: true
category: development practices
tags: ['code kata', 'refactoring']
---

One of my favorite katas to work on with teams who are new to refactoring and code smells is The Code Smell Scavenger Hunt Kata. It gives development teams the opportunity to practice identifying and refactoring code smells in their own codebase. 

It's worthwhile working this code kata into the team's practices if:
* The team needs help identifying code smells
* The team needs help learning and practicing refactoring techniques
* The team struggles with the attributes of high quality, changeable code
* The team wants to be able to practice using their codebase

<img src="/img/refactoring-both-editions.jpg" class="img-responsive" />

## Select a Code Smell
I typically tailor each session around a specific code smell. I use Chapter 3 "Bad Smells in Code" from [Martin Fowler](https://www.martinfowler.com)'s Refactoring book as my guide. That is the chapter [Kent Beck](https://www.twitter.com/kentbeck) and [Martin Fowler](https://www.martinfowler.com) co-authored that lists out code smells and refactoring techniques to remedy them. I choose one of the code smells from that chapter as the focus of the kata. I try to start with the smells that are easier to identify or ones that we have already discovered and discussed in the team's code. 

## Getting Started 
More recently I've been creating a handful of slides to describe the code smell and kata, but you could forgo this and cover these topics in a conversation. In the slide deck I describe the code smell, why it's a problem, and signs in the code that help to identify the smell. I'll then describe the specific refactorings used to address the code smell. Finally, I describe any _"exceptions to the rule."_ Since code smells are just heuristics, I like to describe cases when we may choose not to refactor, if that's applicable to the code smell. 

### Scratch Refactoring
Before starting I make it clear that these refactorings are for practice only. We will be scratch refactoring, practicing a refactoring and throwing away the changes at the end of the kata. The team may leave with an idea to clean up that code the next time the work takes them there, but it's important not to commit these refactorings. We're trying to maximize our learning and practice time in the kata, not making code production ready. 

### What About the Tests? 
It is important to remind the team that refactoring workflows rely on running tests between each step to ensure that behavior hasn't changed. However, the focus of this kata is identifying the code smell and the mechanics of the refactoring. Since we often do these kinds of katas in codebases that have spotty (if any) microtest coverage, we don't spend time trying to get the code under test or writing characterization tests for the code. If this is a concern, you can find refactoring katas that come with tests ([the Gilded Rose Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) for example). I practice both katas with teams, emphasizing different aspects of refactoring. 

## The Kata
Once the team has an understanding of the code smell and the refactoring steps we begin the kata.

1. Take ten to fifteen minutes for the team to work as individuals or pairs and scan their codebase for examples of the code smell.
2. At the end of fifteen minutes the team regroups to discuss each of the areas of the code. The developer(s) who found the smell will present it to the group and describe it on a post-it note placed on a team board. 
3. The team votes with dots for their favorite examples. This prioritized list becomes the examples the team uses to refactor. 
4. As a group, in a [mob programming]({{ site.baseurl }}{% post_url 2018-06-29-practices-for-effective-mob-programming %}) session, the team refactors the example with the most dots.
5. If there is time remaining, the team can pick the next post-it in priority order and start over.

When closing out the kata have the team discuss what they have learned and what they liked and disliked about the refactorings, and what things they might do differently the next time they encounter similar code.  
