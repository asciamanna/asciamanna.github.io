---
layout: post
title: Coding Conventions
comments: true
category: development-practices
tags: [code-quality]
---

Coding conventions are an important part of development teams. If you are part of a newly formed development team one of the first things you should do is develop your coding conventions. If you are part of an existing team without coding conventions, creating them should an immediate priority. Operating with an agreed to set of coding conventions solves a lot of issues that commonly arise in development organizations.  Too often teams are too busy hacking and racing to meet self-imposed deadlines to slow down and build a set of development standards and practices to improve the way they work. 

##Style Guides
I recommend that the first thing you do when coming up with coding conventions is adopt an existing style guide. This can help avoid a lot of discussions about the truly subjective parts of development. Remember, for style consistency is favored over any single approach. So if you prefer tabs to spaces, two spaces over four for tabstops, or K&R style curly braces, be flexible in the spirit of quickly coming to a consensus. Adopting known styles also have the benefit of having configuration options in existing IDEs to configure those sytles. JavaScript linters also have the ability to enforce some of these styles for you.

The one style rule that I would include in my coding conventions is variable naming. Specifically because older style guides may still use variable name encodings to convey the type and scope of the variable. This goes beyond just style and affects the readability of the source code so I discuss this in coding coventions specifically.

##Coding Conventions

Once the style is out of the way it is time to focus on coding conventions.  Here come up with very specific rules about how the code is structured. Consider, but don't limit yourself to, things that could easily be checked via a static analysis tool. These could include lines of code per class, lines of code per function/method, number of dependencies per class, etc. I would also come up with rules around the organization of unit tests since production code and unit test code shouldn't always abide by the same rules. 

###But Aren't These Arbitrary Rules?

One argument that comes up when specific rules are discussed is, __"Aren't these rules arbitrary? Why is a class with 100 lines okay but a class of 101 lines not okay?"__. My response is that they are supposed to arbitrary, that is the point. There is nothing inherently better about 100 lines of code versus 101 lines of code for class. It's about drawing a line in the sand and saying we favor small classes over large classes so this is the line that we will not cross as a team. Sandi Metz addresses this specifically in her talk called, Rules that she gave at Baruco 2013. 
https://www.youtube.com/watch?v=npOGOmkxuio

###How to Break the Rules

The recommendations that Sandi Metz makes in that same talk about breaking the rules I believe is the best advice. Any rule in your coding conventions can be broken if you can convince another person on your team that it is a good idea. Preferably this would be someone you are pairing with on the problem.  

###Keep it Simple

The idea is to keep this document very approachable so everyone on the team has these rules committed to memory. So, start out small with just style and coding conventions. If an IDE can enforce the style via settings those style rules don't even need to be documented other than maybe a link to the style guide that has been adopted. As your team works together you will know if the coding conventions are too light.

###Other Things to Consider

If you team adopts many third-party libraries that all do the same thing consider adding those to your coding conventions document. Also, consider adding rationale for rules if there may be disagreement in the team. This allows the document to serve as an educational tool in your organization.

###Make the Conventions Visible

Once you have the initial cut of the coding conventions post them in area that is visible to the entire organization like a team website or blog and commit them to your VCS. Ensure that every new hire knows what they are and why they are important to the team. 

##Why is This So Important?
I do hear some developers grumble over coding conventions. Things like __"We shouldn't need a document to work together"__ or __"We have bigger problems that coding conventions can't solve."__ If you don't see the value in coding conventions I would recommend watching Sandi Metz's talk I referenced earlier. She makes a fantastic case for why rules on development teams are important.  

As I pointed out in my previous post, LINK HERE ... Creating a Great Development Culture, teams without coding standards will struggle to bring new developers up to speed when the code doesn't conform to a single standard and when there are a lot of third-party tools and libraries developers need to learn. Additionally, the standards can serve as tools to help locate problem areas of the code.  Furthermore, coming up with these rules help surface what the teams values are.  And a team without a set of shared values isn't a team.  It is vitally important to share a set development values and make them known throughout the organization.

##Example
In the following example you'll see one of the coding conventions I recently wrote for a team I work on.  You can see that it only focuses on coding covnentions and includes rationale since not everyone on the team necesarily agreed with the rules at the start. 

LINK CONVENTIONS HERE

##Conclusion
Having coding coventions is an extremely important part of every development team. I strongly encourage you to watch Sand Metz's talk from Baruco 2013 and get started on a coding conventions document for your team if you don't already have one.
