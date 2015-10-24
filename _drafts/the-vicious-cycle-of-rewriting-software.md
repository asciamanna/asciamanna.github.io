---
layout: post
title: The Vicious Cycle of Rewriting Software
comments: true
category: software-craftsmanship
tags: [code-quality, development-practices]
---

When adding a feature to a system if the only recourse a team feels they have is to rewrite the code to support the feature this should be considered a failure. This should be something that is addressed in team retrospectives until it is remedied. This may sound extreme, but this rewrite cycle is something that I see often. It prevents the developers involved from ever mastering the skills necessary for maintaining high-quality code, like designing testable code and refactoring.

<!--more-->
It surprises me how many organizations believe this is an appropriate and even necessary course of action when adding features. I see this as a failure of the development organization to build the code in a way that supports extension. These rewrites are **NOT** good for the organization. They require a huge amount of development and testing effort and are fantastic opportunities for **reappearing bugs**. Those bugs that have been fixed over time but reintroduced through poor programming practices.



The cycle -

Devs build poorly designed untestable code


Lacking refactoring skills every change makes the code more complex

A feature is required but code is too complex to reason about and too coupled to change

No unit tests exist to give devs confidence in their changes

Team doesn't know how to refactor the code to support the feature

Team deletes code and starts rewrite to support feature

Team doesn't have experience writing quality, testable software

Team feels pressure and lack practices to lean on that result in quality software


