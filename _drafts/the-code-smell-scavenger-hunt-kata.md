---
layout: post
section-type: post
title: The Code Smell Scavenger Hunt Kata 
comments: true
category: development practices
tags: ['code kata', 'refactoring']
---

The Code Smell Scavenger Hunt Kata gives teams the opportunity to practice identifying code smells and refactoring in their actual codebase. 

This code kata is a good one to practice with teams for a number of reasons:
* The team needs help identifying code smells
* The team needs help learning and practicing refactoring techniques
* The team struggles with the attributes of high quality, changeable code
* The team wants to be able to practice using their codebase


## Select a Code Smell
I typically tailor each session around a specific code smell. I use Chapter 3 "Bad Smells in Code" from Martin Fowler and Kent Beck's Refactoring book as my guide. I choose one of the code smells from that chapter as the focus of the kata. I try to start with the smells that are easier to identify or ones that we have already discovered and discussed in the team's code. 

## Getting Started 

More recently I've been creating a handful of slides to describe the code smell and kata, but you could forgo this and cover these topics in a conversation. I will describe the code smell, why it's a problem, and signs in the code that help me identify the smell. I'll then describe the specific refactorings used to address the code smell. Finally, I describe any _"exceptions to the rule."_ Since code smells are just heuristics, I like to describe cases when we may choose not to refactor, if that's applicable to the code smell. 

### Scratch Refactoring
Before starting I make it clear that these refactorings are for practice. We will be scratch refactoring, practicing a refactoring and throwing away the changes at the end of the kata. The team may leave with an idea to clean up that code the next time the work takes them there, but it's important not to commit these refactorings. We're trying to maximize our learning time in the kata so the number one take away is knowledge and practice. Since we are focusing on identifying code smells and the mechanics of the refactoring we are not spending time ensuring that the code is covered by microtests. We do these kind of exercises in legacy codebases that often have spotty microtest coverage (if any at all). We don't want to spend time covering these areas in characterization tests. So make sure these changes aren't persisted. 

## The Kata
Once the team has an understanding of the code smell and the refactoring steps we begin the kata.

1. Take ten to fifteen minutes for the team to work as individuals or pairs and scan their codebase for examples of the code smell.
2. At the end of fifteen minutes the team regroups to discuss each of the areas of the code. The developer(s) who found the smell will present it to the group and describe it on a post-it note placed on a team board. 
3. The team votes with dots for their favorite examples. This prioritized list becomes the examples the team uses to refactor. 
4. As a group, in a mob programming session, the team refactors the example with the most dots.
5. If there is time remaining, the team can pick the next post-it in priority order and start over.

Try to leave some time at the end for the team discuss what they have learned and what they liked and disliked about the refactorings, what things they might do differently, etc. 
