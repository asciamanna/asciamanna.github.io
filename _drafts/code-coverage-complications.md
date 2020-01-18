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

Commonly I see the measurement of unit test coverage contribute to the continuation of poor development practices. Often when teams try to improve their code coverage, they unwittingly create more problematic code that continues to be a drag on the organization. Trying to improve code coverage without larger changes to the organization and how software development teams work, won't lead to improvements in the quality of the software. 
<!--more-->

## Coverage is a Result Not a Goal
The crux of the problem is that high code coverage is the result of high-quality, disciplined development practices. Naturally, organizations with low coverage are missing these practices. Instead of dedicating their time and effort in learning how to improve their development rigor and discipline, they leap right to code coverage, misconstruing the result as the goal. 

Eventually enough code gets written lacking these practices that the inevitable situations occurs. Most of the code changes introduce issues, not just any issues but action-at-a-distance bugs (also known as bug whack-a-mole), where changing a few lines of code in one part of the system has an unintended effect in another part of the system. Developers take longer and longer to develop features, and release preparation timelines increase as a significant amount of time is needed for manual testing.

### The Coverage Proxy Metric
The thought is that code coverage is a proxy metric for the quality of the system or the ability to find issues before they get to production. But code coverage is a poor proxy metric at best. Ostensibly, well-tested codebases are easier to change and will prevent issues from getting into production. But this is simply not the case for organizations that try to achieve high code coverage alone. 

## Test Quality
Code coverage metrics cannot measure to the quality of the tests. Low quality tests can achieve high coverage, but not test anything of value. Overmocking, which is rampant in poorly designed systems, can lead to huge gaps in core functionality. It is common for organizations to try to achieve higher coverage without focusing on improving the design of the system. 

### Achieving a Coverage Percentage
Code coverage cannot assess the importance of the areas that are tested. Development teams trying to acheive a coverage percentage without learning new practices will look to get those percentage gains in the simplest and fastest way possible. Before we rush to blame developers or "hold them accountable," I like to point out the system they are working in, because that is where the problem is. Often organizations with these problems have gotten there because of a mindset that shipping something to production is the only measure of success. In these organizations there is no time to learn or experiement. It's in a system like this where developers need to increase coverage as quickly and safely as possible so they can get back to delivering in the short term. They don't have the luxury of slowing down to learn.

Since developers aren't refactoring production code into testable designs, learning Test-Driven Development, nor learning legacy code techniques, they are finding any tests they can write without modifying production code. They end up with extremely simple tests that are of little to no value to the organization.

## Real World Examples
Once I came across a codebase and I saw a lot of test classes and immediately breathed a sigh of relief. I was happy to know I had inherited a well-tested area of the system I was supporting. My hopes were quicky dashed when I opened the tests. Every test would call a method will null paratmeters and assert that null argument exceptions were thrown. After getting over the thought that having every single class in the system check every parameter for null was adding noise to every method not to mention code that was only reachable by tests, I had an even worse realization. These were the only tests, not a single business rule of behavior of these classes was tested. 

 Another example I have come across was a massive and convoluted test setup that was impossible to follow. Worse still it contained not a single assertion. This test covered a large area of the code and would generously increase code coverage metrics. However, it didn't test anything in the system. If an exception was thrown and the test failed, a developer would undoubtedly need to spend hours trying to figure out why it was failing. These kinds of tests are often worse than having no tests at all. 

## A Decline in Test Quality
The previous examples illuminate one of the biggest issues with trying to achieve high coverage without adopting improved development practices. It will result in more low quality code being introduced into the system. Tests getting produced without improving the design of the code results in tests that are brittle and hard to maintain, often testing the least important areas of the system. 

You cannot write good tests for bad code

## Valuable Tests Achieve Lower Coverage Individually
We have started calling the most valuable kinds of unit tests by a new name, microtests. Because the industry is trying to get away from useless debates over the definition of a "unit" of code, and the fact that people call very different looking tests "unit tests" the industry has adopted this term. Industrial Logic consultant Mike Hill originally coined the term. It serves to differentiate valuable unit tests, that are often developed using Test-Driven Development, from the less valuable tests. 

### SOS
When I teach microtesting and sustainable test suite design I use a pneumonic I've created called SOS. I've found that organizations suffering from a glut of poor unit tests are often sinking, so making use of a maritime distress signal acronym seems appropriate. I've written at length about this topic here <LINK>. SOS stands for **_small_**, **_obvious_**, and **_simple_**. It serves to remind developers of the attributes of high-quality microtests. 

High quality tests are quite small and only test a couple of lines of production code. It is the sheer number of these in a high-quality codebase that contributes to the high test coverage. Organizations trying to achieve a high coverage will often write large tests that aren't obvious nor simple to get as much coverage per test as possible. 

## Tests Without Business Value Increase Risk
When organizations have coverage goals it often results in backlog items to write tests for areas of the code that are separate from the business value they are delivering. I see this as a large and avoidable risk for organizations, and another sign that they aren't improving development practices. My recommendation is always to build the improvement habits by practicing them everyday. The best way to do this is to write tests for all code changes when functional changes / business value changes takes the team there. In other words, microtested code is part of the team Definition of Done for every new user story or bug going forward. 

Too often organizations create seprate projects or backlog items for unit testing that are completely seprate from functional changes. Too be able to write high-quality tests the development teams are going to have to refactor existing code to make it testable. This incurs risk for the organization for no benefit (except the goal to increase the coverage percentage). I often remind organizations in these situations that code that isn't being modified doesn't need tests until it's modifiefd. Also, building backlog items and projects around writing tests will never build the team habits of having tests come with any functional changes. 

## Benefits of Code Coverage
There are a select few cases where I think measuring code coverage is important. I have seen code coverage be used quite well as a team-level measure to track how much progress the team was making getting a legacy, untested system under test. In a similar situation, static code analysis tools, like NDepend for example, use code coverage as part of a set of metrics they provide. Specifically they have metrics that track areas of the code with high cyclomatic complexity and low coverage. I think this is a great measure for teams to understand where the riskiest parts of the code are in a system. 

When I've seen code coverage used successfully it was an team's internal measure &mdash; not imposed on them by their organization. Also, the teams who adopted it were relying on quality-focused development practices already, and wanted to measure the result of those practices to show an increase in their code coveage. 

## My Recommendations
My recommendation is that software organizations should stop focusing on code coverage as a goal. Instead of investing time and money into increasing coverage they should make investments in the technical practices and engineering discipline of their development teams. I would focus on learning Test-Driven Development, refactoring skills, legacy code techniques, and software design skills. Encourage developers to work and learn together. Leaders should be creating a learning environment where teams feel safe to take time to learn these skills. The result will be a significant improvement in quality and thus an improvement in productivity and morale as well. 

Remember code coverage isn't a goal to achieve, but it's a byproduct of disciplined development practices that create not only high-quality changable production code but also high-quality sustainable test suites. 