---
layout: post
section-type: post
title: The Clean Code Kata
comments: true
category: development practices
tags: ['code kata']
---

It is common for  teams to not improve the quality of their code over time. There are a lot of factors at work to keep teams churning in a poorly written codebase. They may lack the necessary experience to write clean code and unit tests or don't have opportunities to practice these techniques. Often there are schedule pressures in their organizations which creates stress on the developers preventing them from improving the codebase. There are some cases where developers just don't see the value in code quality or believe software design and quality are entirely subjective. It has been my experience working in these organizations that no one talks about the quality of the code or how to improve it over time. Everyone is working in a reactive manner just trying to get something that "works" into production however they can manage to do it. While this is a bad place for any development organization to be, the situation can be improved.

If you are a member of one of these teams you want to start sending the message that "working code" is not finished. Code needs to convey its intent in the clearest possible manner. It needs to be easy to change and it needs to have unit tests so that developers have confidence in their changes. It needs to be in a state that enables continuous refactoring so that it always remains easy to change and makes its intentions clear.

## Reading

One recommendation I have for teams in this situation is to read books and blog posts about clean code, software design, unit testing, refactoring, etc. I'll save those recommendations for another post. However, reading alone won't solve these problems. It is very difficult for developers to practice these new techniques for the first time in production code, and it is unrealistic to expect them to do so. Developers feeling pressure are going to revert back to what they know. Teams need specific time set aside to practice and improve. This is where code katas and études can be utilized.

<div class="well">
<strong>No Time To Learn</strong>
<br />
Agile coach, George Dinwiddie discusses the issue with teams not having time to learn new things in his post, <a href="http://blog.gdinwiddie.com/2015/03/05/no-time-to-learn/">No Time To Learn</a>
</div>

## Études and Katas

The concept of études and code katas were developed independently by [Kent Beck](https://twitter.com/KentBeck) and [Dave Thomas](https://twitter.com/pragdave), respectively. The idea behind them is to practice a software development concept repeatedly and improving it over time through consistent feedback. Through repetition of these practices developers will improve. As you will see not all of these have to involve actual coding exercises, although most of them do.

## Team Improvement

I've encountered two types of developers who are responsible for maintaining poorly written codebases. There are some who don't have the experience writing clean code and believe that it will take them too long to learn these techniques. Then there are those who see no value in clean code techniques. These are the developers who say things like _"I like to see the code all in one place"_ as their reason for wanting to write large classes and methods. Or they claim that _"having too many files is confusing."_ Maybe they have tried unit testing but have not had a good experience with it because they didn't receive any mentoring. Poorly written tests can often be worse than having no tests at all.

I am going to describe several code katas (over the course of a few posts) that can help reverse this trend of quality problems by addressing both types of developers. These serve a few purposes:

* To convince developers who don't see value in clean code that it well help them build higher quality code
* To help developers learn how to identify and refactor problematic areas of the code
* To help developers write new, high quality code (i.e., easily changeable code)

This first kata (the one I'm describing in this post) serves to help the team compare poorly written code to well written, clean code and create an opportunity for the team to start discussing the problems they see in the code. Hopefully, this begins to convince the team that these practices are important and will help them move faster and introduce less bugs in the future.

## The Clean Code Kata

This kata is similar to études [James Shore](http://www.jamesshore.com/) introduced to a team I once worked on. These études were designed to help developers quickly read, understand, and explain the purpose of code by diagramming and presenting it to the rest of the team in a relatively short period of time. It only takes doing a few of these exercises before it becomes obvious how much easier these are when the code is well designed. So I decided to follow a similar practice for these katas to help illustrate why clean code is so important.

<div class="well">
James Shore describes a couple of other études and how he got the idea for them from <a href="https://twitter.com/KentBeck">Kent Beck</a> in his post, <a href="http://www.jamesshore.com/Blog/Etudes-for-Excellence.html">Études for Excellence</a>.
</div>

### Practice

1. Have the team split into groups of no more than five developers. Ensure that they all have access to the source code and have a whiteboard nearby. Each developer should go through the codebase and pick a class (and it's dependencies) to investigate. As developers get more comfortable with this kata you can open it up to groups of classes. The only restriction you should put on them is that it should not be code that they have worked on in the past six months. In small codebases this may not be possible. In that case,  just recommend they pick something that they are least familiar with. In a problematic codebase a significant number of classes will suffer from some clean code violations.

2. Give them some time to look at the class (approximately ten minutes should be sufficient at first but you should decrease this over time). Specifically they should be looking at the following things for each class:  
  * Its unit tests (or lack thereof) and the names of the unit test cases that exercise the class' public methods
  * Its public methods
  * Its dependencies and the public methods it calls on its dependencies (ask them not to look at the dependency classes other than their public interface that the class being investigated is using).
  * Its private methods
  * Its attributes

3. After the ten minutes each developer should be able to describe what the class' responsibilities are, what it is doing, and possibly why it is doing it. They should diagram the class and its dependencies on a whiteboard while describing it to the rest of the group. In order to accomplish this the team is going to need to have some very minimal understanding of UML diagramming. Now, perfectly accurate UML diagramming is not the goal of these katas, but understanding enough to be able to convey design information to the other developers on the team is required. I've often done a small lunch-and-learn on class and sequence UML diagrams prior to starting these exercises. A small amount of UML knowledge will yield long-term benefits as the team gets more comfortable diagramming and discussing software design throughout their work day. A side-effect of this kata should be that developers are more comfortable interactively designing solutions at the whiteboard.

4. Rotate through each member of the group until everyone gets a chance to present.

This will most likely be a challenge in codebases with quality issues. Teams who are not used to reading code quickly without stepping through it in a debugger will be challenged by this exercise unless it was something they have worked on recently.

The next step is to repeat the same exercise but give the developers a class to examine that is an example of well written code. You should be looking for an example that contains the types of things that we value as clean coders:  

  * A small class
  * Short methods
  * Well named methods and local variables (code comments not required because names are descriptive)
  * Dependent objects injected and easily understood based on dependent object variable and public method names
  * Unit tests exercising each public method with well named test cases

### Discussion

The developers should find that they can more easily describe this code than the first example they found on their own. Once complete it's important to moderate a discussion about what the team has discovered. Specifically talk about the things that made understanding the code a challenge. What about the code would make it hard to safely and quickly change? What qualities did the clean code have that made it easier to understand? Ask the team which of the examples would they feel more comfortable having ownership of. These conversations should be the start of your team openly and honestly discussing quality issues in the code, as well as how they can improve the quality of the existing code they work on.

## Conclusion

Typically when faced with examples of poorly written code and what we would consider clean code, developers begin to see the benefits of learning these techniques. Continue discussing code quality with teams. As previously mentioned, repetition is an important part of these katas, so plan to do this regularly. A later post will describe some other katas to help teams improve the quality of their code.
