---
layout: post
section-type: post
title: Speculative Refactoring
comments: true
category: development practices
tags: ['refactoring', 'code quality']
---

As teams get more comfortable with refactoring, I often see them begin practicing what I call speculative refactoring. They uncover code that doesn't meet their standards or is otherwise ugly, indecipherable, or too complicated so they decide to refactor it, despite the fact that is has nothing to do with what they are currently working on. As much as I dislike to discourage this motivation to improve, this is a trap that leads to taking on risk without any of the rewards to the business. 
 
I recommend techniques like [Opportunistic Refactoring](https://martinfowler.com/bliki/OpportunisticRefactoring.html) and [Preparatory Refactoring](https://martinfowler.com/articles/preparatory-refactoring-example.html) where the focus of refactoring is in support of adding the feature or business value currently being created by the team. The concept of Opportunistic Refactoring, from [Martin Fowler](https://martinfowler.com/), is that the code that gets refactored is the code that is actively being modified for a particular feature currently being developed. Areas of the application that require the most change get the most time for refactoring. Since the goal of refactoring is to continuously improve the design of the code so that it always easily changed, fighting the typical code rot over time, we create a virtuous cycle. The code that needs to be changed most often will also be improved most often. 

Opportunistic Refactoring, Preparatory Refactoring, [Bob Martin](https://twitter.com/unclebobmartin)'s Boy Scout Rule, and [Kent Beck](https://twitter.com/kentbeck)'s formulation: for each desired change, make the change easy (warning: this may be hard), then make the easy change, all share this same idea; that refactoring should be improving code that is currently being worked on.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">for each desired change, make the change easy (warning: this may be hard), then make the easy change</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/250733358307500032?ref_src=twsrc%5Etfw">September 25, 2012</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Avoid the Refactoring Project
Implicit in these types of refactoring workflows is the idea that we don't treat refactoring as a separate project. The project refactoring idea introduces several problems, including the idea that we can clean up the code some time in the future. This is akin to only cleaning your dishes once your sink is full of dirty dishes and overflowing. Instead, opportunistic refactoring techniques encourage building the habits and skills for daily improvements to the code. It helps teams practice and learn the value of continuous improvement, a key component of lean. If technical improvements (i.e., technical debt paydown) or design improvements aren't in support of delivering better experiences (e.g., operational stability, performance, etc.) or more value to customers, I would question their merit. 

> We refactor the code that impedes us, not all that offends us. 
> _&mdash; [Tim Ottinger](http://agileotter.blogspot.com/)_

## High-Wire Act Without a Net
Teams who focus on refactoring code that has nothing to do with the business value they are currently delivering are creating undue risk for their organization. Speculative refactoring often takes place in legacy systems that are largely untested (or don't have microtest-level coverage). This creates the perfect conditions for bugs to breed. Code being changed, without a microtest suite, and without being bundled with visible business value creates an environment where changes can often go into production entirely untested, bypassing the typical team workflow.

## Safe Refactorings
Some will argue that they don't need to rely on Opportunistic Refactoring techniques, nor do they need an automated test suite, if they are using safe refactorings (e.g., leaning on a refactoring tool, like [Resharper](https://www.jetbrains.com/resharper/)). While I do think refactoring tools are an important and indispensable tool for every development team, they can create a false sense of security. 

Often I've seen "safe", automated refactorings fail because the systems being modified rely too heavily on reflection. Additionally, these tools can fail when a developer makes a mistake in the refactoring tool or adds some manual changes along with the automated changes. It is quite easy to introduce a change in behavior even when relying on an automated refactoring tool. In short, there is still a human in the loop when using refactoring tools, and we humans introduce the opportunity to make a mistake. 

## Michael Feathers' Legacy Code Dilemma
[Michael Feathers](https://twitter.com/mfeathers) describes the Legacy Code Dilemma in his book, **_Working Effectively with Legacy Code_**. Often code needs to be changed without tests in order to get tests around the code, and this is indeed a place where we try to rely on safe, automated refactoring tools. The difference in what Michael Feathers is describing is that this refactoring is in support of a feature that is being added, not speculative refactoring. The changes without tests are just the first of several steps to get characterization tests around the code. These characterization tests (sometimes called pinning or pindown tests) are the scaffolding to ensure no behavior changes occur while the team refactors the underlying code to get it under microtest and improve its design. This code will, in relatively short order, be under the scrutiny of a suite of automated tests and hopefully exploratory tests as well. 

<img src="/img/legacy-code-dilemma.png" class="img-responsive" alt="Michael Feathers Legacy Code Dilemma." />

## Scratch Refactorings 
Scratch Refactoring is another technique from [Michael Feathers](https://twitter.com/mfeathers)' book **_Working Effectively with Legacy Code_**. It is a wonderful way to learn about a piece of code by performing read-by-refactoring and other types of code changes. But the purpose of the scratch refactoring is that you learn something, either by answering a specific question or just having a better idea of how the code works. You throw away the refactoring once you are armed with the new information and begin making the changes to the code in a safe manner. Scratch refactorings are just that, scratch. They are meant to be thrown away. 

## Last Mile 
There is one situation, in particular, where I recommend code changes and refactorings that aren't tied to adding business value or features. It is what, [Industrial Logic](https://www.industriallogic.com) senior consultant, [Mike Rieser](https://twitter.com/MichaelRieser) calls **_The Last Mile_**. Let's take a look at an example. 

### Example - Replacing an ORM 
A team has been using the same ORM (Object-relational Mapping) since they started building their application. As third-party ORMs have improved they have discovered that adopting a new ORM will reduce the amount of custom infrastructure code that needs to be written. Adopting a new ORM will make not only developing but maintaining features faster and safer. The team has rightfully decided to avoid big-bang, all-or-nothing infrastructure replacements, noting that they often fail and leave large amounts of code in branches, not being integrated, for weeks or months at a time. 

Instead, they decide to use opportunistic refactoring techniques. When a new feature is added or an area of the code is modified, the team includes the work to refactor the infrastructure code necessary to transition the code over to the new ORM. This workflow is part opportunistic refactoring, and part infrastructure improvement, but should not change any user-visible behavior of the system. After six months 80% of the application has been converted to the new ORM. However, the team has a dilemma, they now need to support two third-party ORMs. The areas of the code that don't use the new ORM are the areas that are rarely changed. So, they may indefinitely need to support both ORMs if they only rely on opportunistic refactoring and avoid technical improvement features that don't deliver business value. 

The work that is required to replace the few instances of the old ORM is known as _the Last Mile_ and is often a required final step in larger infrastructure and architecture changes. It is preferred over Big Design Up Front (BDUF), all-or-nothing, waterfall projects that are still common in organizations that have not adopted evolutionary design and emergent architecture practices. 

## Conclusion

> There is nothing so useless as doing efficiently that which should not be done at all.
> _&mdash; Peter Drucker_

Refactor code in support of the work your team is currently doing. Good software design is measured by how safe and simple the code is to change, maintain, and understand. We rarely know exactly how we will need to change the code in the future. Software design is a process of tradeoffs. Some designs make one kind of change easier at the expense of another. Refactoring is a vital step to always keep the code's design optimal for the kinds of changes that are required, without needing a crystal ball. 

Taking this approach, it becomes obvious that refactoring code without a business purpose is problematic. In the absence of a business goal, refactoring is just incurring risk and certainly not the best use of the team's time.  