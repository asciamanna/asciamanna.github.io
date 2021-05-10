---
layout: post
section-type: post
title: Code Coverage Complications 
subtitle: This is not the metric you're looking for
comments: true
excerpt_separator: <!--more-->
category: development practices 
tags: ['metrics', 'unit testing', 'tdd', 'anti-patterns']
---

Commonly I see the measurement of unit test coverage contribute to the continuation of poor development practices. Often when teams try to improve their code coverage, they unwittingly create more problematic code that continues to be a drag on the organization. Increasing code coverage without improving development practices isn't likely to lead to improvements in the quality of the software. 
<!--more-->

<figure>
    <img src="/img/messy-monitor.jpg" alt="Messy code on monitor screen" class="img-responsive" />
    <figcaption style='text-align:center'>
       <a href="https://techdaily.ca">Markus Spiske for Tech Daily</a>
    </figcaption>
</figure>
<br />

## Coverage is a Result Not a Goal
The crux of the problem is that high code coverage is the result of quality-first development practices. Naturally, organizations with low coverage are missing these practices. Instead of dedicating time and effort into improving practices, they look to increase code coverage, misconstruing the result as the goal. 

### The Coverage Proxy Metric
Code coverage is considered a proxy metric for the quality of the system or the ability to find issues before they get to production. However, code coverage is a poor proxy metric at best. Tested codebases are ostensibly easier to change and will prevent issues from getting into production. This is simply not the case for organizations that try to achieve high code coverage alone. I discuss some of these challenges in my previous article, _[Avoiding Automated Testing Pitfalls]({% post_url 2019-10-20-avoiding-automated-testing-pitfalls %})_. 

## Test Quality
Code coverage metrics cannot measure the quality of the tests. Low-quality tests can achieve high coverage, but not test anything of value. They can increase coverage percentages, but be so hard to understand that they are a maintenance nightmare. Misuse of mocking, which is common in poorly designed systems, can lead to huge gaps in testing core functionality. Trying to achieve high coverage without focusing on improving the design of the system or the development practices is a recipe for more problems. 

### Achieving a Coverage Percentage
Code coverage cannot assess the importance of the areas that are tested. Development teams trying to achieve a coverage percentage without learning new practices will look to get those percentage gains in the simplest and fastest way possible. Before we rush to blame developers or _"hold them accountable,"_ I would like to shine a light on the system of work, which is where the problem lies. 

Organizations create these development and delivery problems because of a mindset that they have clung to for far too long. It is this mindset that shipping to production as fast as possible is the only measure of success that is the problem. In these organizations, there is no time to learn, experiment, or improve the way development teams work. Teams are laser-focused on today, cutting corners that add risk and delays tomorrow. 

It's in these systems of work where developers need to increase coverage numbers as quickly and safely as possible so they can get back to delivering in the short term. They don't have the luxury of slowing down to learn.

> Improving daily work is even more important than doing daily work.  
> _&mdash; Gene Kim - The DevOps Handbook_ 

Since developers aren't refactoring production code into testable designs, learning Test-Driven Development, nor learning legacy code techniques, they are instead looking for any tests they can write without modifying production code. They end up with extremely simple tests that side-step the riskiest areas of the codebase or create large and brittle tests that suffer from false failures. 

### Test Quality is Paramount
The previous example illuminates one of the biggest issues with trying to achieve high coverage without adopting improved development practices; it will result in additional low-quality code being introduced into the codebase. Tests being produced without improving the design of the code results in tests that are brittle and hard to maintain, often testing the least important areas of the system. 

> You can't write good tests for bad code.      
> _**&mdash;Unknown**_

## Valuable Tests Achieve Lower Coverage Individually
The industry has adopted the term [microtests](https://www.industriallogic.com/blog/history-microtests/) to describe the attributes of the most valuable types of tests. Originally coined by Industrial Logic consultant [Mike Hill](https://www.geepawhill.org), it serves to differentiate valuable tests, that are often developed using Test-Driven Development, from the less valuable tests. 

<figure>
    <img src="/img/sos.jpg" alt="S.O.S." class="img-responsive" />
    <figcaption style='text-align:center'>
        Image from <a href="https://www.flickr.com/photos/itupictures/16654290295">ITU Pictures on Flickr</a>
    </figcaption>
</figure>

## SOS
When I teach microtesting and sustainable test suite design I use a mnemonic I've created called SOS. I've found that organizations suffering from a glut of poor unit tests are often sinking, so making use of a maritime distress signal acronym seems appropriate. I've written at length about this topic in this post, [SOS - To Save Sinking Test Suites]({% post_url 2018-01-30-sos-to-save-sinking-test-suites %}). SOS stands for **_Small_**, **_Obvious_**, and **_Simple_**. It serves to remind developers of the attributes of high-quality microtests. 

High-quality microtests are **very** small and only test a couple of lines of production code. It is the sheer number of these tests that contributes to the high test coverage. Organizations trying to achieve high coverage will often write large tests that aren't obvious nor simple to get as much coverage per test as possible. 

## Tests Without Business Value Increase Risk
When organizations have coverage goals it often results in backlog items to write tests for areas of the code that are separate from the business value they are delivering. This is a significant and avoidable risk for organizations and a sign that they aren't improving development practices. My recommendation is to build improvement habits by practicing them every day. 

The best way to build these habits is to write tests for all code changes. And code changes are driven by functional changes to support the increasing business value of the software (e.g., user stories, new features, bug fixes, etc.). In other words, microtested code is part of the team _Definition of Done_ for every user story or bug.

 To be able to write high-quality tests the development teams need to refactor existing code to make it testable. When the creation of tests is separated from functional system changes, it incurs risk for the organization for no benefit. Code that isn't being modified doesn't need tests until it's modified. Building backlog items and projects around writing tests will never build the team skills required for tests to be developed in lockstep with all functional changes. 

## Benefits of Code Coverage
There are a select few cases where I think measuring code coverage is valuable. One such example is a team-level measure to track the progress of getting a legacy system under test. 

Trying to improve a legacy system feels like an insurmountable goal at times. Teams rely on legacy code techniques to safely and incrementally improve the quality of the code as they are making functional changes. It's common for a team to feel like it would be best to rewrite the system from scratch, which can introduce a whole new set of problems. Tracking coverage can be a great morale booster for development teams to see the progress that they are making every day.

### CRAP Metric
Another example is teams that rely on static code analysis tools, like [NDepend](https://www.ndepend.com/). These tools use code coverage as part of a set of metrics they provide. One such metric is [the CRAP metric](https://blog.ndepend.com/crap-metric-thing-tells-risk-code/); yes it's funny, but stands for _**Change Risk Anti-Patterns**_. The CRAP metric measures the increased risk of introducing a bug when making a change by identifying areas of code that have high cyclomatic complexity **and** low code coverage. I think this is a great measure for teams to identify potentially risky areas of the system.  

When I've seen code coverage used successfully it was a team's internal measure &mdash; not imposed on them by their organization. The teams who adopted it were relying on quality-first development practices already and wanted to measure the result of those practices to show an increase in their code coverage. 

## My Recommendation
My recommendation is that software organizations should stop focusing on code coverage as a goal. Instead of investing time and money into increasing coverage, they should make investments in the technical practices and quality-first engineering discipline of their development teams. I would focus on learning Test-Driven Development, refactoring skills, legacy code techniques, and software design skills. Encourage developers to work and learn together. Leaders should be creating a learning environment where teams feel safe to take time to learn these skills. The result will be a significant improvement in quality and thus an improvement in productivity, morale, **and** code coverage. 

Remember code coverage isn't a goal to achieve, but it's a byproduct of quality-first development practices that create not only high-quality changeable production code but also high-quality sustainable test suites. 
