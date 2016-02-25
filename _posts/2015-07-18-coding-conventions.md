---
layout: post
section-type: post
title: Coding Conventions
comments: true
category: development practices
tags: ['code quality']
---

Coding conventions are a necessity on development teams, but unfortunately they are often overlooked. These conventions serve multiple purposes for a team. They foster a consistency in the code which has a positive effect on the overall code quality and enable teams to bring new developers up to speed quickly. This code consistency also makes future development and maintenance significantly easier. Furthermore, the conventions provide a mechanism to determine team rules for building the software that go beyond just stylistic decisions and affect the design quality. These types of rules have a large impact on the quality of the code but also provide one of the first opportunities for a team to find its values and identity.
 
<!--more-->

If you are part of a new development team, one of your primary focuses should be developing your team's coding conventions. If you are part of an existing team working without coding conventions, you have catch up work to do and I imagine the codebase you work in reflects this. Creating coding conventions should be an immediate priority. Operating with an agreed upon set of coding standards addresses a lot of issues that commonly arise in development organizations. Too often teams are too busy rushing to meet self-imposed deadlines to slow down and build a set of development standards and practices to improve the way they work. However, it is important to remember that **short-term pressure to go faster has the effect of making the entire organization slower over the long-term.**

## Style Guides

The goal of adopting a single style is that the code reflects a certain professionalism. It looks like it could have been written by a single developer in a single sitting. When the team commits to this single style it provides several benefits, including making them more productive and able to spot and avoid bugs. 

I recommend that the first thing you do when coming up with coding conventions is adopt an existing style guide. This can help avoid a lot of discussions about the truly subjective parts of software development. Remember for style standards, consistency is favored over any single approach. So if you prefer tabs to spaces, two spaces over four for tabstops, or a [K&R style variant](https://en.wikipedia.org/wiki/Indent_style#K.26R_style) for curly braces, be flexible in the spirit of quickly coming to a consensus. Adopting a known style also has the benefit of having preset configuration options in IDEs and enforcement in linters and other static analysis tools.

The one style rule that I would include in my coding conventions document and not leave up to the style guide is variable naming. Primarily this is because older style guides may still use variable name encoding to convey the type and scope of variables. This goes beyond just style and affects the readability of the source code.


## Coding Standards

Once the team has agreed upon coding styles they should then shift their focus to coding standards. Here the team should focus on coming up with very specific rules about how the code is structured. Consider, but don't limit yourself to, things that could easily be verified via a static analysis tool. These could include lines of code per class, lines of code per function/method, number of dependencies per class, etc. I would also come up with rules around the organization and development of unit tests since production code and unit test code shouldn't always adhere to the same rules. 

### But Aren't These Rules Arbitrary?

One argument that often arises when very specific coding rules are discussed is, *"Aren't these rules arbitrary? Why is a class with 100 lines okay but a class of 101 lines not okay?"* The intent of arguments like this is usually to dismiss the validity of these types of rules for a development team. My response is that the rules are supposed to be arbitrary, that is the point of them. There is nothing inherently better about 100 lines of code versus 101 lines of code for a class. It's about drawing a line in the sand and saying we favor small classes over large classes so this is the line that we will not cross as a team. Sandi Metz addresses these types of rules in her talk, [Rules](https://www.youtube.com/watch?v=npOGOmkxuio) that she gave at Baruco 2013. 

### How to Break the Rules

In her talk Sandi Metz makes the following recommendation about breaking these rules once they are agreed upon: Any rule in your coding conventions can be broken if you can convince another developer on your team that it is the right thing to do. Preferably this would be someone you are pairing with on the problem. I usually document this in the coding conventions so it is understood that the intent of the rules is not to follow them blindly and that software development always involves trade-offs. In some situations breaking a team rule is the best decision given all of the alternatives. However, they should only be broken after very careful consideration.

### Keep it Simple

It is important to keep this document very approachable so everyone on the team can have these rules committed to memory. Start out small with just style and coding rules. If an IDE can enforce the style via settings those style rules don't even need to be documented other than maybe a link to an online style guide that has been adopted. As your team works together you will know if the coding conventions are too light and additional content must be added.

### Other Things to Consider

There are several other things to consider documenting in your coding conventions if you feel that they are necessary.

#### Third-Party Libraries and Frameworks

If your team adopts several third-party libraries to address identical or even similar problems, consider adding agreed upon libraries to your coding conventions document. This can be used as the rationale to reject code reviews that add additional third-party libraries in favor of the agreed upon libraries.

#### Rule Rationale

Consider adding rationale for rules if there may be disagreement on the team. This allows the document to serve as an educational tool in your organization and will help new developers who join your team. It helps to add links to articles that explain the rationale in more detail.

#### Reference Implementations

If specific rules can benefit from further clarification consider linking to a reference piece of code. It could either be an open source example or better yet an implementation within your own codebase.

### Make the Conventions Visible

Once you have the initial version of the coding conventions post them in area that is visible to the entire organization like a team website or blog and commit them to your VCS. Ensure that every new hire knows what they are and why they are important to the team. 

## Why is This So Important?
I do hear some developers grumble over coding conventions. They'll say things like *"We shouldn't need a document to dictate how we work together"* or *"We have bigger problems that coding conventions can't solve."* If you don't see the value in coding standards I would again recommend watching Sandi Metz's talk I referenced earlier, [Rules](https://www.youtube.com/watch?v=npOGOmkxuio). She makes a fantastic case for why rules on development teams are so important.  

As I pointed out in one of my previous posts, [Creating a Great Development Culture](/2015/03/13/creating-a-great-development-culture-code-quality-and-practices.html), teams who develop without a consistent coding standard will slow down. Bringing new developers up to speed on the team will take much longer due to the huge learning curve required to understand code that looks like it was written by teams of developers who never talked with each other let alone worked together. Furthermore, having to come up to speed on a large number of third-party tools and libraries slows new and seasoned developers down alike. Teams in these situations tend to add more developers in an attempt to go faster which exacerbates the problem as there are now even more developers working without a common set of conventions.

The coding conventions can serve as tools to help locate problem areas of the code and even avoid potential bugs. Furthermore, coming up with these rules helps to surface what the team's values are. And a team without a set of shared values isn't a team. It is vitally important to share a set development values and make them known throughout the organization. Preferably by documenting these values as well.

## Example

In the following example you'll see one of the coding conventions I recently wrote for a team I worked on.

{% gist c4220fa53ece7ff374b2 %}


## Conclusion

Creating and maintaining coding conventions is an extremely important part of every development team. I strongly encourage you to find 35 minutes in your day to watch Sandi Metz's [talk](https://www.youtube.com/watch?v=npOGOmkxuio) from Baruco 2013 and get started on a coding conventions document for your team if you don't already have one.
