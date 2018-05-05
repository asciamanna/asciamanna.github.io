---
layout: post
section-type: post
title: Extracting Methods in Unit Tests 
comments: true
category: software craft
tags: ['unit testing', 'code quality']
---

This is the fourth post in my series about writing effective unit tests.  
 
* [Should Private Methods Be Tested?](/2016/02/14/should-private-methods-be-tested.html)
* [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html)
* [Follow Consistent Test Patterns](/2016/04/24/follow-consistent-test-patterns.html)
* Extracting Methods in Unit Tests
 

If you recall my previous post [Unit Test Refactoring and Avoiding Complexity](/2016/03/22/unit-test-refactoring-avoiding-complexity.html), I described the pitfalls of applying the same refactoring techniques to unit tests that one would also apply to production code. While a majority of refactoring techniques apply across all code, there are subtleties in unit test refactorings that make them different. Specifically, that post addressed avoiding flow control statements or introducing other types of complexity while refactoring unit tests. However, there are other nuances to unit test refactoring that are also important to understand. 

## Extract Method Refactorings 

Refactoring unit tests is just as important as refactoring production code (some experts even say it's more important). A vast majority of what you learn about refactoring production code also applies to refactoring unit tests. However, one nuance in unit test refactoring is knowing when and why to use extract method refactorings. Martin Fowler's book _[Refactoring - Improving the Design of Existing Code](http://martinfowler.com/books/refactoring.html)_ describes the appropriate usage of the **extract method** refactoring. It is a valuable technique to address a number of code smells including the **long method code smell**. 

In unit tests, extracting private methods is a tool used to obscure unimportant parts of the test. By contrast, any details found in a unit test case should be important to the test itself. It is common for developers to use the extract method refactoring because they believe the unit test is getting too long. Frequently, tests that are too long also have extraneous detail which complicates the test case. Therefore, it appears to be the correct tool to use. The trouble arises when deciding what code to extract. Extract method refactorings can easily result in obscuring important details of the test, breaking the **keep unit tests self-contained** heuristic.

Let's examine this in detail with the following example.

## A Familiar Example
Here is the C# unit test example from the [previous post](/2016/04/24/follow-consistent-test-patterns.html) utilizing [nunit](http://nunit.org/) and the [Moq Framework](https://github.com/moq/moq4).

{% gist beb880bacdfa18ad8cd862450cca255b %}

### A Refactoring Pitfall

Given what we know about the code under test I would contend that this is about as close to an ideal unit test as we will get for this method. Let's take a look at how misguided extract method refactorings can make this test worse. Take a closer look at lines 19 - 23. This is the arrange block where three test accounts are created and returned by invoking the get method on the test stub.

#### First Refactoring Attempt

A developer who is in favor of small methods that have a single responsibility may think that it would be a good idea to extract a method for the entire arrange block. This would considerably decrease the size of the test. One may mistakenly think this increases the readability of this test. This is where misapplying production code refactoring techniques leads developers astray in unit testing. 

{% gist 8b85f4484f4ca95cadbf3b2f22f82a2b %}

At this point the unit test is shorter, however it costs us losing the intent of the test. A reader must now examine the contents of the SetupTestAccounts method to understand exactly what these test accounts are and how the dependent object is interacting with the object under test. This refactoring breaks the **keep tests self-contained** heuristic, thus making the test harder to understand. This refactoring is obscuring the important details of the test.

<div class="well">
<h6>Unit Test Size</h6>
As we are talking about the length of the unit test, it is important to describe some heuristics that we use to know when tests are getting too long. <a href="https://twitter.com/unclebobmartin">Bob Martin</a> describes the ideal unit test length to be on the order of five to twenty lines of code in his post <a href="http://www.scrumalliance.org/community/articles/2010/december/the-land-that-scrum-forgot">The Land that Scrum Forgot</a>. I try to keep unit tests under a dozen lines (excluding asserts)  so I fall into the range Robert Martin prefers. If tests are getting much larger than this they are growing beyond the size of a unit test, getting too complicated to understand, and are probably indicating design issues with your code under test. 
</div>

#### Second Refactoring Attempt

Now let's take a look at a second attempt. Let's say that the developer decides not to refactor out the entire arrange block. Instead,  they extract the four lines of code it takes to create the three test accounts and add them to a list. 

{% gist 14698034f7f8d7e56e5fcf18453b04a7 %}

If details about the accounts are not important to the test then I would absolutely recommend this refactoring. Creating well-named private methods in tests is a valuable technique to obscure unimportant details of unit tests. In fact, in that case I would name the method something along the lines of **CreateAnyAccounts** to make that point obvious to the reader. However, for this test the details of each of those accounts is ***very important***. In fact, information about each of the test accounts is exactly what we are testing. So, in this case showing the creation of each test account in the test method is extremely important.

### Specify Only What is Important

Notice when creating the test accounts in our example that only the account properties that are relevant to the test are specified. This allows us to obscure all of the unimportant properties of an account for this test while focusing on the properties that are important to the test case. This is another difference between production code and unit test code. In production code a valid account object cannot only consist of an account type and balance. Maybe it requires a unique identifier, name of the account holder, etc. However, in this unit test, building a valid account is not our concern. We don't want to litter the account objects in tests with several attributes that are not important to the test. Otherwise, we'd be obscuring the very important properties for this test (the account type and account balance).


### Required Fields

Now let's consider the possibility that our account objects have some fields that are required, but unimportant to our test. Let's say that this is a legacy object that cannot be created in a test harness without some required fields (an id and account holder name for this example). In this case, I *would* extract methods to create each individual account. When extracting these methods it's important to keep the unimportant details in the private method while passing the important details as parameters. Let's look at what that does to our example.

{% gist 183f4dfa94bb0706aac4b2552d66bb6b %} 

## Conclusion

Extract method refactorings and specifying only the important object attributes in unit tests are two techniques that are important for optimizing unit tests for readability and understanding. It is important to remember that unit tests should be refactored to make tests easier to understand. If any refactoring detracts from this it should be avoided. 
