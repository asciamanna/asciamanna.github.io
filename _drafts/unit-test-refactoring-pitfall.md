---
layout: post
section-type: post
title: A Unit Test Refactoring Pitfall
comments: true
category: software craftsmanship
tags: ['unit testing', 'code quality']
---

This is the fourth post in my series about writing effective unit tests.  
 
* [Should Private Methods Be Tested?](/2016/02/14/should-private-methods-be-tested.html)
* [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html)
* [Follow Consistent Test Patterns](ADD HERE)
* A Unit Test Refactoring Pitfall
 

If you recall in the post [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html) I described the pitfalls of applying the same refactoring techniques to unit tests that one would apply to production code. Specifically, the post addressed avoiding flow control statements or adding other types of complexity while refactoring. However there are other nuances to unit test refactoring that are important to understand. 

## Extract Method Refactorings in Unit Tests

Refactoring unit tests is just as important as refactoring production code. However, one nuanced difference in unit test refactoring is when and why to use extract method refactorings. In production code Martin Fowler's book **_Refactoring - Improving the Design blah_** describes the appropriate usage of the **extract method** refactoring. It is a valuable technique to address a number of code smells including the long method code smell. 

However, in unit tests, extracting private methods is a tool used to obscure unimportant parts of a unit test. By contrast, any details within a unit test case should be important to the test. It is common for developers to use the extract method refactoring because they believe the unit test is getting long. However in doing so they end up obscuring important details of the test, breaking the **keep unit tests self-contained** heuristic.

## A Familiar Example
Here is the C# unit test example from the [previous post](ADD HERE).

{% gist beb880bacdfa18ad8cd862450cca255b %}

### A Refactoring Pitfall
Take a closer look at lines 19 - 21, where three test accounts are created in the arrange block. A good developer who is in favor of small methods that have a single responsibility may think that it would be a good idea to extract a method to create the three test accounts in the example above. In fact that private method signature can return a collection of the three test accounts. That would considerably decrease the size of the test. This is where misapplying production code refactoring techniques leads developers astray in unit testing. If details about the accounts are not important then I would recommend the extract method refactoring. Creating well-named private methods in tests is a valuable technique to obscure unimportant details of unit tests. In fact, in that case I would name the method something along the lines of **CreateAnyAccounts**. However, for this test the details of each of those accounts is ***very important***. In fact, information about each of the test accounts is exactly what we are testing. So, in this case showing the creation of each test account is extremely important.

Additionally, notice that only the account properties that are relevant to the test are specified when creating the test accounts. This allows us to obscure all of the unimportant properties of an account for this test while focusing on the properties that are important to the test case. This is another difference between production code and unit test code. In production code a valid account object cannot only consist of an account type. It requires more information than that to be a valid account. However, in unit tests, this is not our concern. We don't want to litter the account objects in tests with several attributes that are not important to the test. If we did we'd be obscuring the important attributes.

## Conclusion
Extract method refactorings and specifying only the required details in unit tests are two techniques that are important for optimizing unit tests for readability and understanding. These differ from production code where extract method refactorings are used to remove code smells. It is important to remember that unit tests should be refactored to make tests easier to understand. If any refactoring detracts from this it should be avoided. 