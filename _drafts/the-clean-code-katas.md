It is common for teams who are responsible for a large amount of legacy, poorly written code to not improve it over time. There are a lot of factors at play. They may lack the experience in writing clean code and unit tests and don't have opportunities to practice these techniques. Often there are schedule pressures that create stress which prevents teams from improving the codebase. There are some cases where developers just don't see the value in code quality or believe software design and quality is entirely subjective.

The message you want to be sending to your team is that "working code" is not finished. Code needs to convey its intent in the clearest possible manner. It needs to be easy to update and change and it needs to have unit tests so that developers have confidence in their changes. It needs to be in a state that enables continuous refactoring so that it is always easy to change and has clear intentions.

## Reading

One recommendation I have for teams in this situation is to read books and blog posts about the subject of clean code, software design, unit testing, etc. I'll save those recommendations for another post, however reading alone won't solve these problems. It is hard to practice these new techniques for the first time in production code. Developers feeling pressure are going to revert back to what they know. Teams need specific time set aside to practice and improve. This is where code katas and études can be utilized.

I've encountered two types of developers who are responsible for maintaining poorly written codebases. There are some who don't have the experience writing clean code and believe it will take them too long to learn these techniques. Then there are those who see no value in clean code techniques. These are the developers who say things like _"I like to see the code all in one place"_ as their reason for wanting to write large classes and methods. Or they claim that _"having too many files is confusing."_ Maybe they have tried unit testing but have not had a good experience with it because they didn't receive any mentoring. Poorly written tests can often be worse than having no tests at all.

I am going to describe several code katas (over the course of a few posts) that can help reverse this trend. These serve a few purposes:

* Convince developers who don't see value in clean code that it well help them build higher quality code
* Help developers learn how to identify and refactor problematic areas of the code
* Help developers write new code that is up to clean code standards

This first kata should compare poorly written code with well written code and provide a mechanism for your team to start discussing the problems they see in the code. Hopefully, this starts convincing developers who don't see value in clean code that it does matter.

## The Clean Code Kata

This kata is similar to études [James Shore](http://www.jamesshore.com/) introduced to a team I worked on. These études were designed to help developers read, understand, and explain the purpose of code by diagramming and presenting it to the team in a relatively short period of time. After doing these for a short time I realized how much easier these were when the code was well designed. So I decided to follow a similar practice for these katas to help sell the idea that clean code matters.  

### Practice

1. Have the team split into groups of no more than five developers. Ensure that they all have access to the source code and have a whiteboard nearby. Each developer should go through the codebase and pick a class to investigate. As developers get more comfortable with this kata you can open it up to groups of classes. The only restriction you should put on them is that it should not be code that they have worked on in the past six months. In a problematic codebase most likely any class will suffer from some, if not all of the clean code violations.

2. Give them some time to look at the class (approximately 15 minutes should be sufficient at first but you should decrease this over time).  Specifically they should be looking at the following things for each class:

* Its unit tests (or lack thereof) and the names of the unit test cases that exercise the class' public methods
* Its public methods
* Its dependencies and the public methods it calls on its dependencies (ask them not to look at the dependency classes other than their public interface that the class being investigated is using).
* Its private methods
* Its attributes

3. Given all of this information the developer should be able to describe what the class' responsibilities are, what it is doing, and why it is doing it. They should diagram the class and its dependencies on a white board while describing it to the rest of the group.

4. Rotate through each member of the group until everyone gets a chance to present.

In code with quality problems this will most likely be fairly difficult unless it is something the developer has written recently.

The next step is to repeat the same exercise but give the developers a class to look at that is an example of well written code. You should be looking for all of the things that we value as clean coders:

* Small classes
* Short methods
* Well named methods and variables (comments not required because names are descriptive)
* Dependent objects injected and purposes easily understood based on dependent object variable and method names
* Unit tests exercising each public method with well named test cases

The developers should find that they can much more easily describe this code than the first example. Once complete moderate a discussion about what everyone discovered.

## Conclusion

Typically when faced with examples of poorly written code and what we would consider clean code developers begin to see the benefits of the extra effort. Continue discussing code quality with teams. A later post will describe a refactoring kata.
