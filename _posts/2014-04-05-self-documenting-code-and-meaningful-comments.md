---
layout: post
section-type: post
title: Self Documenting Code and Meaningful Comments
comments: true
category: software craft
tags: ['code comments', 'clean code', 'code quality']
---
Software is read many more times than it is written and it lives on longer than
most people expect. Because of this we professional software developers have a
responsibility to write readable and maintainable code. Certainly well-designed
software will help both the readability and maintainability. But in addition to
the software design, the types of
comments that exist in a codebase also have a huge impact on its readability.

I have spent a significant amount of time working in both codebases where the
team took a "well commented" approach as well as a "self documenting" approach
with very few comments.
After years of working in both types of baselines I find code with less
comments and self documenting to be much easier to read and maintain.

## Defining Self Documenting Code

Self documenting code is defined as code that explains itself without the need
of extraneous documentation. It consists of a set of guidelines including
giving methods and variables meaningful names, avoiding naming systems like
hungarian notation, emphasizing important information, reducing unimportant
information, and delaying optimization (among several others). You can read
more about it [here](http://c2.com/cgi/wiki?SelfDocumentingCode).

## Self Documenting _and_ Comments
It's important to point out that the self documenting code style and applying
comments to code are not mutually exclusive. At some point developers started
thinking that self documenting code meant that no comments should exist in the
codebase. The original intent of self documenting code was to have
meaningful comments.
<br/><br/>
The reality is that the vast majority of comments found in code
are completely unnecessary and actually detract from the readability of the
software. In fact, most comments are an indicator that there is something wrong
with the code. 
<br/><br/>
When shifting focus to meaningful comments developers begin to find better
ways to describe the code and stop using comments as a crutch. As these
meaningless comments get refactored out of the codebase eventually what's left
is a codebase with very few comments. 

## Doubts?
I certainly had my doubts about self documenting code. I went through college
being taught that well-commented code was part of being a software
professional. When I first encountered a baseline with nearly no comments my
initial reaction was to disagree that any code could be written well enough to
not need more comments. After all,this was in opposition to what I was taught
from the time I first started programming. After several years of working in
that baseline and subscribing to the idea that I would try to change the code
so I didn't need the comment, I can honestly state that I was completely wrong.

Bob Martin sums up my feelings about comments best in his book _Clean Code_.  

> The proper use of comments is to compensate for our failure to express
> ourself in code.  
>&mdash; _Robert Martin, Clean Code, page 54_  

While he admits that some comments are necessary and beneficial he goes on to
say&hellip;

> The only truly good comment is the comment you found a way not to write.    
>&mdash; _Robert Martin, Clean Code, page 55_

Comments can be beneficial but only after first trying to
eliminate the need for the comment in the first place. 
Comments all too often are inaccurate, misleading, and developers struggle
to keep them in sync with the software.

## Unit Tests Instead of Comments
To an extent I agree with Dave Thomas, Andy Hunt, and Robert Martin.
Comments that describe the intent of the developer are generally useful. 

> In general, comments should discuss why something is done, its purpose
> and its goal. The code already shows how it is done, so commenting on this
> is redundant.   
> &mdash; Dave Thomas and Andy Hunt, The Pragmatic Programmer: From Journeyman to Master, page 249

Bob Martin lists the following in a section of _Clean Code_ entitled "Good Comments:"  

> Sometimes a comment goes beyond just useful information about the
> implementation and provides the intent behind a decision.

However, I would take this advice a step further. In a majority of cases
documenting why something is done can be documented in a concise unit
test case that clearly describes the intent of the software. 
<br/>
Let's look at some other types of comments.

## Meaningful Comments
In reality these meaningful comments are the exception not the rule. There
shouldn't be a need for a lot of meaningful comments in a codebase.

### Optimized Code
Describing code that required some obfuscation to meet performance
requirements.
This is important because a developer might try to simplify this code
in the future losing the performance gains in the refactoring. Bob
Martin would include these in a category he calls "warning of consequences."
His example of a warning comment is a comment that indicates that a
test is disabled because of how long it takes to run.

### Amplifying importance
This is a category Bob Martin describes in _Clean Code_ where you use a
comment to amplify the importance of something that may seem
inconsequential. I tend to categorize these with the types of comments
that describe the developer's intent. I'd prefer a unit test case for
the important piece of code rather than commenting it. But if for some
reason the unit test cannot convey the importance or you don't have
unit tests I feel that these are reasonable and helpful comments.

### TODO comments
If I am working on a task and see something unrelated that I want to
address, but I don't want to get sidetracked, I'll drop in a TODO
comment and come back to it later. Several IDEs build task lists based
on
these TODO type comments so you don't lose track of them. The important
thing about TODO comments is to address them in a timely manner,
otherwise you are just incurring technical debt and littering your
codebase with comments.

### Javadoc / XML Doc comments in APIs and public libraries
When developing a public API or a library for public use javadoc (or
XML Doc for .NET) style comments are incredibly useful for the
developers who are using the library.

## Not So Meaningful Comments
Let's get into the types of comments that I think should be replaced
when encountered in code. Most comments are going to fall into this category.

### Commenting how the code works
If a comment describes how the code works it's either redundant or
documenting a piece of complicated code which is an indicator that the
code needs to be cleaned up. Refactoring blocks of code into well named
methods and giving variables good semantic names will alleviate the
need for the comment altogether. These types of comments end up being
more trouble than they are worth and usually become bug breeding
grounds. These comments violate the DRY principle so when the code is
updated the comment must be updated as well.

### Organizing sections of a function
If comments are used to describe multiple parts of a method or
function, this is an indicator that the method is too large. These
types of comments can be removed by extracting methods for the
different sections and naming them well. If you need large methods in a
class this can be an indicator that the class is too large. Take a look
at the class and see if it has only one responsibility.

### Organizing a class
Similar to the previous example if comments or (in .NET) regions exist
to organize the class, this is a good indicator that the class is too
large. Ensuring that the class has a single responsibility and having
it delegate to other objects for other responsibilities will help
eliminate the need for these types of comments.

### Bug history
These types of comments include a bug Id from a bug tracking system and
sometimes an explanation of what was changed in the code. If a
developer looks at this comment in the future it will be meaningless
without the context of what the code used to do. Really it is just
destracting the reader from what the code is doing _now_. Let the VCS
keep the history of the software modifications (that is its
responsibility) and let developers look there. Put bug Ids in commit
comments if that is helpful, not in source code.

### File Edit History
These types of comments are the ones that document which developer
changed which part of the code on what date. I've seen enormous class
headers to track the file edit history. Again these types of comments I
group into the same category as bug tracking comments. Let the VCS keep
the history of which developer modified the code.

### Javadoc / XML doc method headers in non-public code
I find these types of comments in internal code to be overkill and make
reading the software an enormous chore. These comments violate the
"Reduce Unimportant Information" guideline as huge blocks of comments
are interspersed within the code. These comments in particular are
supposed to help developers understand the code better but they instead
insert huge gaps between executable code that breaks the readers'
focus. As I stated previously for APIs this type of documentation is
invaluable and worth having but only on the public facing API. Internal
code should avoid method headers entirely (whether it be for public or
private methods).

### Noise
There are some comments that just restate the name of the method, variable or
property.  If they aren't identical then they are just rephrasing the names. 
I tend to categorize these with the method header comments as they tend to make
reading the code much harder by having lots of these comments interspersed with
executable code. These comments are the easiest to get rid of. Simply delete
them and move on and watch the size of your classes shrink.

### Commented out code
Commenting out code is fine when testing but it shouldn't be committed.
Again, let the VCS control the history of the source code
modifications.

### Exceptions
Obviously there are no absolutes in software developement. In general,
if you try to eliminate the need for a comment and
find that you can't, you most likely have a reasonable comment. 
However, you should take a closer look at the code if you feel you need a lot
of comments. 

### Credits
I've referenced Robert Martin's _Clean Code_ book several times in this
post. That book has the most comprehensive coverage of "meaningful
comments" than any other I've found. He has much more content about
comments than I could cover here. He also describes the Single
Responsibility Principle (SRP) in detail in the book. If you are
interested in writing well-designed, readable software I highly
recommend reading it.
<br/>
Robert Martin can be found online:

* [Clean Coder](http://www.cleancoder.com)
* [Clean Coders - His Clean Code Videos](http://www.cleancoders.com)
* [8th Light](http://www.8thlight.com)
