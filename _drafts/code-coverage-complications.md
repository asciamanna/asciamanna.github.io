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

Commonly I see the measurement of unit test coverage contribute to the continuation of poor development practices. Often when teams try to improve their code coverage, they unwittingly create more problematic code that continues to be a drag on the organization. Increasing code coverage without improving development practices, isn't likely to lead to improvements in the quality of the software. 
<!--more-->

<figure>
    <img src="/img/messy-monitor.jpg" alt="Messy code on monitor screen" class="img-responsive" />
    <figcaption style='text-align:center'>
        <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@markusspiske?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Markus Spiske"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Markus Spiske</span></a>
    </figcaption>
</figure>
<br />

## Coverage is a Result Not a Goal
The crux of the problem is that high code coverage is the result of quality-first development practices. Naturally, organizations with low coverage are missing these practices. Instead of dedicating time and effort into improving practices, they look to increase code coverage, misconstruing the result as the goal. 

### The Coverage Proxy Metric
Code coverage is considered a proxy metric for the quality of the system or the ability to find issues before they get to production. But code coverage is a poor proxy metric at best. Tested codebases are ostensibly easier to change and will prevent issues from getting into production. But this is simply not the case for organizations that try to achieve high code coverage alone. I discuss some of these challenges in my previous article, _[Avoiding Automated Testing Pitfalls]({% post_url 2019-10-20-avoiding-automated-testing-pitfalls %})_. 

## Test Quality
Code coverage metrics cannot measure the quality of the tests. Low-quality tests can achieve high coverage, but not test anything of value. They can increase coverage percentages, but be so hard to understand that they are a maintenance nightmare. Misuse of mocking, which is common in poorly designed systems, can lead to huge gaps in core functionality. Trying to achieve high coverage without focusing on improving the design of the system or the development practices a recipe for more problems. 

### Achieving a Coverage Percentage
Code coverage cannot assess the importance of the areas that are tested. Development teams trying to achieve a coverage percentage without learning new practices will look to get those percentage gains in the simplest and fastest way possible. Before we rush to blame developers or _"hold them accountable,"_ I like to shine a light on the system they are working in because that is where the problem lies. 

Organizations create these development and delivery problems because of a mindset that they clung to for too long. Ironically, it is that mindset, that shipping something as quickly as possible to production is the only measure of success, that is the problem. In these organizations, there is no time to learn, experiment, or improve the way development teams work. Teams are laser-focused on today, cutting corners that add risk and delays tomorrow. It's in a system like this where developers need to increase coverage numbers as quickly and safely as possible so they can get back to delivering in the short term. They don't have the luxury of slowing down to learn.

> Improving daily work is even more important than doing daily work.  
> _&mdash; Gene Kim - The DevOps Handbook_ 

Since developers aren't refactoring production code into testable designs, learning Test-Driven Development, nor learning legacy code techniques, they are finding any tests they can write without modifying production code. They end up with extremely simple tests that side-step the riskiest areas of the codebase, or create large and brittle tests that suffer from false failures. 

## Real-World Examples

## Writing the Simplest Test Possible
Several years ago I was working on a team that took ownership of an existing area of code in a larger system. When I opened the project in the IDE I saw a lot of test classes, and immediately breathed a sigh of relief. I was happy to know I had inherited a well-tested area of the system I was supporting. My hopes were quickly dashed when I opened the test classes. Every test would call a method will null parameters and assert that null argument exceptions were thrown. After getting over the thought that having every single class in the system check every parameter for null was adding noise to every method, not to mention code that was only reachable by tests, I had a more frustrating realization. These were the only tests, not a single business rule or behavior of these classes was tested. 

## The Massive Non-Test
 Another example I have discovered was a massive and convoluted test that was impossible to follow. It was named after the bug number in a long deprecated bug tracking system that no one in the company had access to anymore, named something like **VI_2954** Worse still the test did not contain a single assertion. This test covered a large area of the code and would generously inflate code coverage metrics. However, it didn't test anything in the system. If an exception was thrown during execution and the test failed, a developer would undoubtedly need to spend hours trying to figure out why it was failing. These kinds of tests are often worse than having no tests at all. They are a drag that add no value to the organization.

## Test Quality is Paramount
The previous examples illuminate one of the biggest issues with trying to achieve high coverage without adopting improved development practices; it will result in additional low-quality code being introduced into the system. Tests getting produced without improving the design of the code results in tests that are brittle and hard to maintain, often testing the least important areas of the system. 

> You can't write good tests for bad code.      
> _**&mdash;Unknown**_

## Valuable Tests Achieve Lower Coverage Individually
We have started referring to the most valuable kinds of unit tests by a new name, [microtests](https://www.industriallogic.com/blog/history-microtests/). Because the industry is trying to get away from fruitless debates over the definition of a "unit" of code, and the fact that people call very different looking tests "unit tests", the use of this term is becoming more common. Industrial Logic consultant [Mike Hill](https://www.geepawhill.org) originally coined the term. It serves to differentiate valuable unit tests, that are often developed using Test-Driven Development, from the less valuable tests. 

## SOS
When I teach microtesting and sustainable test suite design I use a mnemonic I've created called SOS. I've found that organizations suffering from a glut of poor unit tests are often sinking, so making use of a maritime distress signal acronym seems appropriate. I've written at length about this topic in this post, [SOS - To Save Sinking Test Suites]({% post_url 2018-01-30-sos-to-save-sinking-test-suites %}). SOS stands for **_Small_**, **_Obvious_**, and **_Simple_**. It serves to remind developers of the attributes of high-quality microtests. 

High-quality tests are quite small and only test a couple of lines of production code. It is the sheer number of these tests that contributes to the high test coverage. Organizations trying to achieve high coverage will often write large tests that aren't obvious nor simple to get as much coverage per test as possible. 

## Tests Without Business Value Increase Risk
When organizations have coverage goals it often results in backlog items to write tests for areas of the code that are separate from the business value they are delivering. This is a significant and avoidable risk for organizations, and another sign that they aren't improving development practices. My recommendation is to build improvement habits by practicing them every day. The best way to do this is to write tests for all code changes. And code changes are driven by functional changes (e.g., user stories, new features, etc.). In other words, microtested code is part of the team _Definition of Done_ for every user story or bug going forward. 

Too often organizations create separate projects or backlog items for unit testing that are completely separate from functional changes. To be able to write high-quality tests the development teams need to refactor existing code to make it testable. This incurs risk for the organization for no benefit. I often remind organizations in these situations that code that isn't being modified doesn't need tests until it's modified. Also, building backlog items and projects around writing tests will never build the team habits of having tests come with all functional changes. 

## Benefits of Code Coverage
There are a select few cases where I think measuring code coverage is important, but these tend to be the exceptions to the rule. Too often I've seen it used poorly. One such example where I've seen coverage be used quite well was as a team-level measure to track how much progress the team was making getting a legacy, untested system under test. 

Trying to improve a legacy system feels like an insurmountable goal at times. Teams rely on legacy code techniques to safely and incrementally improve the quality of the code as they are making functional changes. It's common for a team to feel like it would be best to rewrite the system from scratch, which can introduce a whole new set of problems. Tracking coverage can be a great morale booster for development teams to see the progress that they are making every day.

### CRAP Metric
Another example is from a team that relied on static code analysis tools, like [NDepend](https://www.ndepend.com/) for example. These tools use code coverage as part of a set of metrics they provide. One such metric is [the CRAP metric](https://blog.ndepend.com/crap-metric-thing-tells-risk-code/); yes it's funny, but stands for **Change Risk Anti-Patterns**. The CRAP metric measures the increased risk of introducing a bug when making a change by identifying areas of code that have high cyclomatic complexity **AND** low code coverage. I think this is a great measure for teams to identify potentially risky areas of the system.  

When I've seen code coverage used successfully it was a team's internal measure &mdash; not imposed on them by their organization. The teams who adopted it were relying on quality-focused development practices already and wanted to measure the result of those practices to show an increase in their code coverage. 

## My Recommendations
My recommendation is that software organizations should stop focusing on code coverage as a goal. Instead of investing time and money into increasing coverage they should make investments in the technical practices and quality-first engineering discipline of their development teams. I would focus on learning Test-Driven Development, refactoring skills, legacy code techniques, and software design skills. Encourage developers to work and learn together. Leaders should be creating a learning environment where teams feel safe to take time to learn these skills. The result will be a significant improvement in quality and thus an improvement in productivity and morale as well. 

Remember code coverage isn't a goal to achieve, but it's a byproduct of quality-first development practices that create not only high-quality changeable production code but also high-quality sustainable test suites. 