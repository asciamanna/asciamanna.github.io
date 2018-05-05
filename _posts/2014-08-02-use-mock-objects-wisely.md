---
layout: post
section-type: post
title: Use Mock Objects Wisely
comments: true
category: software craft
tags: ['unit testing']
---
Mock objects are a great  tool for writing unit tests, but their overuse can lead to poorly designed code and brittle tests. More often I am seeing developers taking a hard stand about the usefulness of mock objects. It seems you either need to be for or against them. Instead of arguing the extremes we should be looking at the tradeoffs you make when using a mock object. Once there is a good understanding of the tradeoffs, we can decide on a case-by-case basis when and where to use mocks.  
<!--more-->  

## Terminology  
Note that in this article I'm using the term "mock object" or "mock" because these phrases have become more prominent with the rise of mock object frameworks. I really should be using the term "test double." I'm not strictly talking about mocks but any test double, including mocks, stubs, fakes, dummies, spies, etc. 

If you write tests and this terminology is new to you please read Martin Fowler's article [Mocks Aren't Stubs](http://martinfowler.com/articles/mocksArentStubs.html).

## Inspiration  
I was motivated to write this post because I increasingly hear developers take a hard stand on one side or the other about a development topic, refusing to increase the level of discourse so we can actually discuss the benefits, the drawbacks, and the appropriate use of a practice. It may just be part of human nature to want to oversimplify things or to continue working with familiar tools, techniques, and practices. But the reality is that every development practice is subject to tradeoffs, and we should be discussing them. 

An example of this is the "TDD is Dead" argument from earlier this year. The initial argument that was laid out in several blog posts was that "TDD is bad, it forces you to make bad design decisions." The resulting Google hangouts with Kent Beck and Martin Fowler did a lot of good to help raise that level of discourse about TDD. But sadly, there are many developers who only read the early blog posts and will adopt the "TDD is evil" mantra without ever having practiced TDD, thus never really understanding its benefits.

I've noticed the same types of arguments when it comes to testing with mock objects. I see developers saying they hate mocks or they love mocks. Instead of a good-vs-evil argument, we should discuss the tradeoffs you make when deciding to use a mock object and based on that information we can decide why and when you might want to use a mock.

It is no surprise that we ended up here. In fact the TDD community has been splintered on this issue since nearly the beginning. For as long as I have been practicing TDD I recall two camps:   

* **Classical TDD** - TDD without mock objects   
* **Mockist TDD** - TDD using mock objects   

## Mock Object Benefits

### Isolation
One benefit of using mock objects is that tests can be more easily isolated from their dependencies, thus limiting your tests to a very small scope. Keeping the scope of unit tests small can help you write short and focused tests. When mocking you are trading some additional test setup for mock object setup. However, if you keep the number of dependencies small your tests should be easier to understand and maintain when limiting scope.

When developing unit tests it is important to test the smallest scope possible, keeping in mind that unit tests are going to be testing all of the minute details and business rules of your application. To keep these tests maintainable, and consistently delivering value, any tests high in detail should also be small in scope. As the scope increases, as it would for integration and end-to-end automated tests you compensate by testing less detail. The **scope vs. detail tradeoff** is an important one in keeping tests maintainable and keeping them from becoming brittle. It is one of the topics that Gerard Meszaros (author of _**XUnit Test Patterns: Refactoring Test Code**_) discussed at CRAFT this year in his talk _Find the Right Abstraction Level for Your Tests_. If you haven't seen it, it is well worth the 45 minute time investment to view it. Check it out [here](http://m.ustream.tv/recorded/46744750).

### Test Duration
Mocking database interactions, file system access, and external services are a great way to speed up your tests. It is absolutely imperative that unit tests run quickly. There is no exact answer as to how quickly they need to run. Let's just say they need to run fast enough so that there is no reason not to run them constantly. I've seen the same issue arise multiple times on different teams when tests take too long to run. If the test suite takes too long developers will stop running them as often as they should. When they run them less they start to derive less benefit from these tests. Soon they come to the conclusion that the tests are more trouble than they are worth, and in turn produce less unit tests. To get the most benefit out of your testing suite you should be able to run them at any time and there should be no barriers to running them constantly. The slower the tests are, the less immediate value they give the developer.

Interacting with external dependencies is important for integration and end-to-end tests. And just how to do that could be the topic of another blog post. However, for unit level testing it is important to optimize the test suite for speed and avoid external dependencies.

### Dependency Overuse Indicator
While using mock objects doesn't directly help you use less dependencies, you do need to inject your dependencies in order to mock them. Now I agree that it is a good practice to inject your dependencies regardless of your testing strategy, but you **have to** inject dependencies if you are using a mocking framework. I find that when I start to setup several test doubles it is a good indicator that my object has taken on multiple responsibilities, and there are usually a couple of objects living inside the one I am currently testing. When this happens it's a good indicator for me to stop and think about how I could refactor the object under test before continuing.

## Mock Object Drawbacks

### White Box Testing
White box testing is the big drawback to using mock objects. Your tests **need** to know how the method under test is implemented. You are coupling your test to a specific implementation and behavior of the object under test. You tend to have more tests fail when they shouldn't when mocking. This makes these tests brittle.

### Refactoring Hurdles
One of the wonderful benefits, and arguably the most important, of testing your code is the ability to **fearlessly refactor** it. If you aren't refactoring your code **EVERY TIME** you add functionality you are contributing to the code rot of your system (a discussion for a different blog post).  
That being said one of the big negatives of mock-heavy unit tests, that are coupled to the implementation, is that the tests need to change as well as the code under test. Needing to modify both makes refactoring slower, and also less trustworthy when you know the tests will fail regardless of the change to the production code.

### Interface Explosion
The fact that the majority of the most popular mocking frameworks rely on interfaces means that for a statically typed language you need to add an interface to every dependency that is being mocked. So, whether or not you want to implement an interface it is required for testing.

## Strategies
I find the best strategy for testing is to embrace mocks for their strengths. While you are writing tests make a conscious decision to use a mock or not to use a mock based on the context of the test you are currently writing.

### Mock Architectural Boundaries
Robert "Uncle Bob" Martin wrote about mocking architectural boundaries in his blog post, [When To Mock](http://blog.8thlight.com/uncle-bob/2014/05/10/WhenToMock.html). In it he does a great job of describing the "sweet spot" for mocks which he dubs, "Goldilocks Mocks."

His approach encourages the developer to mock database interactions, file system access, etc. without overdoing it. His rule of thumb is **_mock across architectural boundaries, test within those boundaries_**. I think this is fantastic for a rule of thumb, but there are still times you may want to choose to make the tradeoff and use a mock when you are not crossing an architectural boundary.

### Mock Complex Operations
If you are testing an object that delegates to a complex calculation object you may want to mock it. Let's assume the calculation object requires a significant amount of setup that would make the test much more complicated, however in contrast the mock setup for the calculation object is quite trivial. Then it's fine to mock that interaction, as long as you understand that you are now sacrificing some test stability for the ease of testing. Maybe having an easily understood test is more important than having a test that is coupled to an implementation. This could be a tradeoff you are willing to make for several reasons.

Some would argue that you should try to redesign the complex object to eliminate the need for the mock, and I can't argue with that. But being pragmatic, these recommendations are heuristics not rules. And can be violated given ample reason. 

### Workers vs. Collaborators
I can't remember where I first saw this strategy, so I apologize for the lack of attribution. But I know that Justin Searls describes an approach similar to this in his article about the [Failures of Intro to TDD](http://blog.testdouble.com/posts/2014-01-25-the-failures-of-intro-to-tdd.html). 
This strategy encourages you not to build objects that both collaborate **AND** do work.   
Build collaborator objects that are strictly responsible for having multiple objects exchange information. Think of a controller object if that helps.  Then build worker objects to actually do the work. 
Worker object tests don't use mocks and instead assert that the work being done is correct using XUnit-style assertions. Collaborator object tests use mocks and test expectations.

### No Mocks
I would be remiss if I didn't mention that there are several successful strategies that avoid the use of mocks entirely.  [Arlo Belshee](http://www.arlobelshee.com) is one developer who comes to mind who has written about these strategies in the past.  
One strategy uses XUnit-style tests for all the code that does not interact with external resources. Integration and end-to-end tests are created for the code that interacts with external dependencies. These tests require the system (or some reasonable facsimile of the system) to be stood up for testing.   
Another strategy again uses XUnit-style tests for the code that does not interact with external resources. The code is designed such that any code that interacts with external resources is trivial so that the interaction is not tested in an automated test suite.  
These are great strategies for avoiding the drawbacks of mock objects. While I think these are valid testing strategies it does not mean that there aren't equally valid strategies utilizing mock objects. 

## Experience
As the old adage goes, experience is the best teacher. If you use mocks all the time try not to use them in every test. If you don't use mocks try using them in places you can see they may be a benefit. I started out not using mocks when I first started unit testing. I then joined a team that mocked all object dependencies. And only once I did that did I understand the issues associated with over-mocking.  

Chances are you will find that the best test suite is like a balancing act that takes advantage of mocks for their strengths while trying to limit the impact of their weaknesses.

