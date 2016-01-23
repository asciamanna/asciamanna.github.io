---
layout: post
title: How Do I Unit Test Private Methods?
comments: true
category: development-practices
tags: [unit-testing, code-quality]
---

This article will the first in a series about unit testing. My goal is to write about the common questions that come up when a team starts writing unit tests. These questions are ones I remember pondering and asking when I started and they are questions that I still get asked as I interact with developers who are just getting started with unit testing. 

This article is going to focus on a question that commonly arises when learning how to unit test in object-oriented programming languages, how to test private methods.

<!--more-->
##Unit Tests are Clients
The quick answer is that you shouldn't test private methods directly but only their effect on the public methods that call them. Much like other client objects that call public methods on the object under test, you can think of the unit test as just another client object. It should only be calling the classes public interface.

##Motivation
 