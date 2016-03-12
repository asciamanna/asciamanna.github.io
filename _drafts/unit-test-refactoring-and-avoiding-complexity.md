---
layout: post
section-type: post
title: Unit Test Refactoring and Avoiding Complexity
comments: true
category: software craftsmanship
tags: ['unit testing', 'code quality']
---

This is the second post in my series about common questions and problems that arise when teams begin unit testing. In my first post I addressed the question [should private methods be tested?](/2016/02/14/should-private-methods-be-tested.html) In this post I'm going to focus on two related issues: refactoring unit tests and avoiding test complexity.

It is common as developers begin writing unit tests to not apply the same vigor in keeping unit tests clean as they would production code. There are several reasons for this. As developers first start learning how to unit test, there is a lot to learn to create effective unit tests. They almost certainly don't know the common patterns and practices for unit tests, which consequently will be the topic of my next post in this series. They are learning as they write unit tests and it tends to show in the quality of these early tests. This is not a bad thing. I continually learn and improve my tests. I've been unit testing for ten years now and my tests today look different (and better) than my tests just two months ago, thanks to brilliant colleagues and people like [Justin Searls](https://twitter.com/searls) and [Robert Martin](https://twitter.com/unclebobmartin) who write and talk about these topics frequently. 

Furthermore, developers new to unit testing almost certainly work in environments where unit tests aren't treated like first-class citizens (otherwise the organization would have already adopted unit testing). It is easy to abandon unit testing when pressure is on or at least allow the tests to accrue complexity and cruft. I truly believe this is a natural part of learning how to unit test without strong mentoring on the subject. I have have experienced this personally when learning how to write unit tests myself.

## Clean Tests First
It is vitally important to keep tests clean and apply the same dedication to refactoring unit tests as you would apply to refactoring production code. To get the most value from your unit tests they need to be kept clean and very simple. They should be optimized for readability above all else. This sentiment is echoed by many experts. Robert Martin talks about this in detail in his post, [Test First](https://blog.8thlight.com/uncle-bob/2013/09/23/Test-first.html). 

>...we should consider our tests as being first. We already know we should write them first; but we should also clean them first, maintain them first, think of them first, and keep them first. We should give our tests the highest priority.
>
>&mdash; _Robert Martin - Test First_
 
### Tests are Executable Specs
Remember that one of the great benefits to unit testing that I discussed in the [previous post](/2016/02/14-should-private-methods-be-tested.html) is that unit tests are executable specifications. To utilize this benefit tests need to be kept clean and simple.

## Refactoring to Simplicity
Once developers are convinced that tests need to be maintained with the same amount of dedication as production code the next challenge they face is how to refactor tests. While a significant amount of what they've learned about refactoring production code applies, there are nuanced differences that tend to trip developers up. 

**The primary goal of unit test refactoring is to make tests simpler and easier to understand.** If any refactorings lead you away from this you should stop and reconsider the refactoring. 

## Tests are Untested Code!
The reason for this nuanced difference is that tests are untested code. Because of this tests need to be as simple as possible. Bugs in tests lead to bugs in production code, and bugs in tests are harder to find since they themselves have no tests. Justin Searls talks about this at length in his RubyConf 2015 talk [How to Stop Hating Your Test Suite](https://www.youtube.com/watch?v=VD51AkG8EZw). He describes that, above all else, tests should be obvious and boring.

### Avoid Logic in Tests
One practice to achieve this simplicity is to follow common patterns and conventions in tests, which I'll discuss in detail in the next post. Another practice is to avoid logic in tests altogether. Specifically tests should not contain any flow control statements (i.e., conditional statements or loops). These types of statements make tests more complicated and are ideal places for bugs to hide. This is another great point Justin Searls made in his recent RubyConf 2015 talk. 

> Logic in tests confuses the story of what’s being tested.
Test-scoped logic is hard to read and errors are easy to miss.
>
>&mdash; _Justin Searls, RubyConf 2015_

When testing production code every branch of a condition needs to be tested. Loops typically require tests that cover not entering the loop at all and executing logic in the loop at least twice (executing the loop logic once would be a good test for a conditional statement but not necessarily a loop). These flow control statements go untested in tests!

### Keep Tests Self Contained
Another practice to keep tests simple is to keep them self-contained. Test logic shouldn't be spread throughout inheritance hierarchies. In fact **classical inheritance should be avoided altogether in unit tests**. Unit tests using inheritance are usually prime examples of the misuse of inheritance (violating the Liskov Substitution Principle) and make tests much harder to understand. There are some common patterns and heuristics for unit testing that help keep tests self contained.

Well designed tests should make what is important to the test obvious and use well named, private methods (or methods on other objects) to obscure the unimportant parts of a test that are there strictly for test setup. This topic is another great segue into test patterns and heuristics as following them will help keep tests self contained. The author of _Refactoring to XUnit Patterns_ Gerard Meszaros talks about these benefits at length in his talk at Craft Conf 2014 [Find the Right Abstraction Level for your Tests](http://m.ustream.tv/recorded/46744750).
 
As I discussed in [the previous post](/2016/02/14/should-private-methods-be-tested.html), unit tests expose design flaws in the code they test. If I find myself having to add logic to my tests or create an inheritance hierarchy I try to go back to my production code and see if it can be simplified. In most cases a production code refactoring can avoid these issues entirely. In these cases everybody wins. Tests get simpler and cleaner, production code gets simpler and cleaner, and the tests' intent becomes clearer for future developers.

## Coming Next
The next post in this series will cover following well-known and consistent unit test patterns and heuristics. 