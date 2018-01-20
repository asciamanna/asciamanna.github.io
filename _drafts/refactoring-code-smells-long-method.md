---
layout: post
section-type: post
title: Refactoring Code Smells - Long Method
comments: true
category: development practices
tags: ['refactoring']
---

Refactoring and evolutionary design are necessary skills on modern software teams. However, I still don't see refactoring happening as much as it should. Since code has a tendency to degrade over time unless teams are refactoring their code constantly they are contributing to its decline. 

## That's not Refactoring

> Refactoring is a controlled technique for improving the design of an existing code base. Its essence is applying a series of small behavior-preserving transformations, each of which "too small to be worth doing". However the cumulative effect of each of these transformations is quite significant.  
> &mdash; _[Martin Fowler](http://www.martinfowler.com), [Refactoring](https://martinfowler.com/books/refactoring.html)_

One reason developers don't refactor as much as they should is because of a misunderstanding of what refactoring is. Too often I hear the term "refactoring" used to describe the deletion and re-write of entire features in applications. This practice is not refactoring and, in fact, eliminates opportunities for developers to practice refactoring techniques.

Developers often miss that refactoring is a series of very small steps that change the shape of the code while preserving its behavior. Each of these micro-steps are chained together to achieve the goal of the larger refactoring. Giving the developer the ability to run tests between every small step and easily undo a step if a problem is introduced. Learning how to identify the code smell, which small refactoring steps to apply, and how to chain them together is where the skill lies in refactoring.

## Code Smells

Each of these code smells and small refactoring techniques have names associated with them. This builds a shared lexicon that we developers can use to work together to evolve our designs and rescue our systems from the perils of legacy code. 

> A code smell is a surface indication that usually corresponds to a deeper problem in the system. The term was first coined by Kent Beck while helping me with my Refactoring book.   
> &mdash; _[Martin Fowler](http://www.martinfowler.com), [Code Smell](https://martinfowler.com/bliki/CodeSmell.html)_

## Long Method

This post is the first in a series about identifying and refactoring code smells. Its focus is the long method code smell. 

A long method is a method that is doing too much and therefore contains too much detail. It requires the reader to understand every single line of code to understand the intent of the method. Instead we favor methods composed of well-named, intention revealing methods, and that happens to be the result that we are working towards when refactoring a long method.

### How Long is Too Long?

Often I get asked, _"at what point is a method too long?"_ Developers frequently want a specific number to know when they should refactor. This is one heuristic to use, but focusing too much on a single number can obscure the purpose of the refactoring. For me a method is too long when I can't glance at it and understand what it is doing. If I find myself having to slow down and read and understand every line of code, then the method is too long.

I do like having rules for maximum lines of code for methods and classes in coding standards. For more information about why this is important take a look at this [Sandi Metz](https://www.sandimetz.com/) talk from Baruco 2013, [Rules](https://www.youtube.com/watch?v=npOGOmkxuio). To me these kinds of rules are important because they drive conversations and often point that a code smell may be present.

Any method can benefit from **_long method_** refactorings if composing it with well-named methods would increase its ability to reveal its intention. 

### Why are long methods bad? 

Primarily long methods are too hard to read and understand. Since code is read many more times than written, it should be optimized to be read. [GeePawHill](http://geepawhill.org/) says code should be optimized to be "scanned", that is read very quickly. I call this the "glance test" that high quality code must pass. Long methods don't pass this glance test. 

In addition to readability issues, which should be enough to refactor long methods, they are also harder to modify, harder to reason about, and harder to test. Further, breaking long methods out into well-named smaller methods often brings to light code duplication. Developers can then rely on other refactoring techniques to remove this duplication that's often hiding in long methods.   

### Heuristics to Identify Refactoring 

Once I find a long method I use several heuristics to identify what to refactor. 

#### Code Blocks

Code blocks in a method with blank lines separating them from the rest of the method are candidates for the refactoring.

#### Region Preprocessor Directives

Working in .NET I've found methods group parts of the method using a region preprocessor directive. I find no value in these directives and treat these just like code blocks to refactor.

#### Deodorant Comments

Often if a code comment is used to describe several lines of code that is a place where I would look to refactor a **_long method_**. In fact this is so common it has gotten its own named code smell, the **_deodorant comment_**.

#### Loops and Conditional Statements

Loops and conditional statements are good candidates to refactor and extract into their own methods.

### Applicable Refactorings

Typically the **_extract method_** refactoring is all that is needed to address the _**long method**_ smell. Additionally, when conditionals are present I will use the **_decompose conditional_** refactoring.

The other types of refactorings I use to shape the code prior to extracting methods. These are typically **_inline temp_** (sometimes called inline variable in refactoring tools), **_replace temp with query_**, **_introduce parameter object_**, and **_preserve whole object_**. 

Joshua Kerievsky, in his book _Refactoring To Patterns_, calls this refactoring the **_compose method_** refactoring, reflecting the pattern of the code after multiple **_extract method_** refactorings. He goes on to describe other refactorings (in addition to extract method) to remedy long methods. These include **_Move Accumulation to Collecting Parameter_**, **_Replace Conditional Dispatcher with Command_**, **_Move Accumulation to Visitor_**, and **_Replace Conditional Logic with Strategy_**.



### Example

In this example a lot of code smells present themselves, as they are often travel companions. After a quick glance, in addition to the **_long method_**, I see code duplication, primitive obsession, inappropriate intimacy, feature envy, deodorant comment, and conditional complexity. We will get to those other code smells in future posts. But for now, let's just address the long method smell. 

As you'll see sometimes addressing one smell will also address others, especially when the refactoring technique to address one happens to be the same technique to address another. 

Taking a closer look I realize this method has more responsibilities than it should and would probably benefit from an **_extract class_** refactoring. Fortunately, extracting methods is a great starting point to identify behavior that should exist in other classes. 

### Refactored Example


### Refactoring Techniques Used

The techniques I used are the following, extract method, inline method, inline temp (inline variable).

Refactoring techniques I use. First is extract method, also sometimes inline method or inline variable to better organize the code that is there. 

#### Extract Method

#### Inline Method

#### Inline Temp

