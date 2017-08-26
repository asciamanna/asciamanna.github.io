---
layout: post
section-type: post
title: Hard Copy Refactoring
comments: true
category: development practices
tags: ['refactoring']
---
 
Challenge with legacy code - refactoring large objects.  Get pinning tests around area that will be extracted. Use automated tools (like resharper) to help perform safe refactorings that preserve behavior.

Sometimes dealing with the large class code smell can be extremely challenging. I find this is the case for two reasons, the enormity of the class or the familiarity with a large class.

Enormous classes are so big you cannot conceptually keep everything it does in your had at once. It tends to have lots of responsibilities smeared throughout the class. 

Large classes that are familiar to you can also be hard to extract. You may be the original author or may have updated often. In these cases it may too large but not enormous (a few hundred lines not thousands). You know it has more than one responsibility but you are having a hard time locating it. Sometimes stepping away from the computer and approaching the problem differently can yield dramatic results and create a breakthrough. As an aside Pair Programming is a great tool overcome issues that arise from familiarity with a particular section of code. However, even within a pair it may make sense to engage the problem in a different way.

## How to Hard Copy Refactor

Not sure of the origin. I believe I first heard of this technique form Michael Feathers.

Supplies:
1) A Printer
2) Paper
3) Post-it notes
4) A Set of multi-colored hi-lighters (pic)

Print the class out in question. If it's enormous printing on a plotter can be valuable if it is available. 
Highlight the use and assignment of a private member variable in the class. Do the same with private methods. Track each one with a separate color. Start finding areas that use them and look for relationships and name them. Put a post-it note on the page with a name for the behavior and a dot that matches the color marker that you are circling areas of the code.
