---
layout: post
title: Coding Conventions
comments: true
category: development-practices
tags: [code-quality]
---

Coding conventions are a necessity on development teams. If you are part of a newly formed development team one of the first things you should do is develop your coding conventions. If you are part of an existing team without coding conventions, creating them should be an immediate priority. Operating with an agreed upon set of coding conventions solves a lot of issues that commonly arise in development organizations. Too often teams are too busy hacking and racing to meet self-imposed deadlines to slow down and build a set of development standards and practices to improve the way they work. 

<!--more-->

##Style Guides

I recommend that the first thing you do when coming up with coding conventions is adopt an existing style guide. This can help avoid a lot of discussions about the truly subjective parts of development. Remember for style standards, consistency is favored over any single approach. So if you prefer tabs to spaces, two spaces over four for tabstops, or K&R style curly braces, be flexible in the spirit of quickly coming to a consensus. Adopting a known style also has the benefit of having configuration options in existing IDEs to configure those styles. JavaScript linters also have the ability to enforce some of these styles for you.

The one style rule that I would include in my coding conventions discussions and document is variable naming. Specifically because older style guides may still use variable name encodings to convey the type and scope of variables. This goes beyond just style and affects the readability of the source code so I discuss this in coding coventions specifically.

##Coding Conventions

Once the style is out of the way it is time to focus on coding conventions.  The team should focus on coming up with very specific rules about how the code is structured. Consider, but don't limit yourself to, things that could easily be verified via a static analysis tool. These could include lines of code per class, lines of code per function/method, number of dependencies per class, etc. I would also come up with rules around the organization and development of unit tests since production code and unit test code shouldn't always abide by the same rules. 

###But Aren't These Arbitrary Rules?

One argument that often arises when specific rules are discussed is, __"Aren't these rules arbitrary? Why is a class with 100 lines okay but a class of 101 lines not okay?"__. The intent of these arguments are usually to dismiss the validity of these types of rules for a development team. My response is that they are supposed to arbitrary, that is the point. There is nothing inherently better about 100 lines of code versus 101 lines of code for a class. It's about drawing a line in the sand and saying we favor small classes over large classes so this is the line that we will not cross as a team. Sandi Metz addresses these types of rules specifically in her talk called, [Rules](https://www.youtube.com/watch?v=npOGOmkxuio) that she gave at Baruco 2013. 

###How to Break the Rules

The recommendations that Sandi Metz makes in her talk about breaking the rules is really the best advice for a team. Any rule in your coding conventions can be broken if you can convince another developer on your team that it is the right thing to do. Preferably this would be someone you are pairing with on the problem. I usually document this in the coding conventions document I write so that it is understood that the intent of the rules is not to follow them blindly and that often software development involves trade-offs. In some situations breaking a team rule about the software is by far the best decision given the alternatives. 

###Keep it Simple

The idea is to keep this document very approachable so everyone on the team can have these rules committed to memory. So, start out small with just style and coding conventions. If an IDE can enforce the style via settings those style rules don't even need to be documented other than maybe a link to an online style guide that has been adopted. As your team works together you will know if the coding conventions are too light and additional content must be added.

###Other Things to Consider

There are several other things to consider documenting in your coding conventions document if you feel that they are necessary.

####Third-Party Libraries and Frameworks

If you team adopts many third-party libraries to address identical or even similar problems consider adding agreed upon libraries to your coding conventions document. This can be the rationale to reject code reviews that add additional third-party libraries in favor of the agreed upon libraries.

####Rule Rationale

Consider adding rationale for rules if there may be disagreement in the team. This allows the document to serve as an educational tool in your organization and will help new developers who join your team. It helps to add links to articles that explain the rationale in more detail.

####Reference Implementations

If specific rules can benefit from further clarification consider linking to a refernce piece of code. It could either be online or within your own codebase.

###Make the Conventions Visible

Once you have the initial cut of the coding conventions post them in area that is visible to the entire organization like a team website or blog and commit them to your VCS. Ensure that every new hire knows what they are and why they are important to the team. 

##Why is This So Important?
I do hear some developers grumble over coding conventions. Things like __"We shouldn't need a document to tell us how to work together"__ or __"We have bigger problems that coding conventions can't solve."__ If you don't see the value in coding conventions I would again recommend watching Sandi Metz's talk I referenced earlier, [Rules](https://www.youtube.com/watch?v=npOGOmkxuio). She makes a fantastic case for why rules on development teams are so important.  

As I pointed out in one of my previous posts, [Creating a Great Development Culture](/2015/03/13/creating-a-great-development-culture-code-quality-and-practices.html), teams without coding standards will slow down. Adding new developers will slow the team down because of the huge learning curve required to understand code that looks like it was written by teams of developers who never worked together.  Furthermore having to come up to speed on a large number of third-party tools and libraries slows new developers down. This slows seasoned developers down to as they move to parts of the codebase they haven't worked in previously. Teams in these situations tend to add more developers to get faster which exacerbates the problem as there are now more developers working without a set of conventions.

The conding conventions can serve as tools to help locate problem areas of the code. Furthermore, coming up with these rules helps to surface what the teams values are.  And a team without a set of shared values isn't a team.  It is vitally important to share a set development values and make them known throughout the organization. Preferably by document these values as well.

##Example

In the following example you'll see one of the coding conventions I recently wrote for a team I work on.  You can see that it only focuses on coding covnentions and includes rationale since not everyone on the team necesarily agreed with the rules at the start. Also note that there is no reference to style guide as the style was enforced by the IDE.

{% gist c4220fa53ece7ff374b2 %}


##Conclusion

Having coding coventions is an extremely important part of every development team. I strongly encourage you to watch Sandi Metz's talk from Baruco 2013 and get started on a coding conventions document for your team if you don't already have one.
