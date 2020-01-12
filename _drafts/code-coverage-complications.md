---
layout: post
section-type: post
title: Code Coverage Complications 
subtitle: This is not the metric you're looking for
comments: true
excerpt_separator: <!--more-->
category: software craft 
tags: ['agile development', 'unit testing', 'anti-patterns']
---

I continue to see the measurement of unit test coverage contribute to the continuation of bad development practices. Often teams trying to improve their code coverage unwittingly create more problematic code that continues to drag the organization down. Trying to improve code coverage without larger changes to the organization and how the software development teams work, won't lead to improvements in the quality of the software. 

<!--more-->
* Result Not Goal
* Encourages lower quality test practices - larger tests - cover more of the code. 
* Microtests - SOS - are the most valuable but only cover a fraction of the code per test
* Encouraging high coverage will never shift the organization towards higher quality practices
* Example - we need to hit coverage percentages for the organization - encourages unit testing separate from delivering value
    * To improve the quality of tests and code that wasn't written to be testable will require changes to the production code.
    * Org has two options - let the team make changes to code without business value - this is speculative changes just to get higher coverage with no benefit to the business - If the code doesn't have to be changed to support a feature - there is no risk to having it not tested. HOwever, if the teams are adding tests and changing the code to make it testable they are taking on risk with no benefit to the business.
    * They could also choose to only add tests without changing the code to avoid that risk. Those tests won't be the high quality tests that will provide the most benefit to the organization. These tests will simply wrap code that wasn't designed to be testable in the first place. 
    You can't write good tests for bad code --- Quote
* Descirbe conversation with agile architect - that bad tests are better than no tests. 

* Places I've seen code coverage be beneficial - 2 places in 20 years - 
    * NDepend
    * Team level metric (not at the organization level) to assess how much progress they are making get a legacy code base under test.


https://www.jamesshore.com/Blog/Dont-Measure-Unit-Test-Code-Coverage.html