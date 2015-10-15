It is common for teams who are responsible for a large amount of legacy / poorly written code to not improve it over time. There are a lot of factors at play. They may lack the experience in writing clean code and unit tests and don't have opportunities to practice these techniques. Often there are schedule pressures (either real or self-imposed) that create stress which prevents teams from improving the codebase. There are some cases where developers just don't see the value in code quality or believe software design and quality is entirely subjective.

The message you want to be sending to your team is that "working code" is not finished. Code needs to convey its intent in the clearest possible manner. It needs to be easy to update and change and it needs to have unit tests so that developers have confidence in their changes. It needs to be constantly refactored so that it is always easy to change and has clear intentions.

*Quote here*

I am going to describe several code katas that can help reverse this trend. These serve a few purposes.

* Help developers learn how to spot and refactor problematic areas of the code.
* Help developers write new code that is up to clean code standards
* Convince developers who don't see value in clean code that they are mistaken.

##The Intro Clean Code Kata
The first kata should compare poorly written code with well written code and provide a mechanism for your team to start discussing the problems they see in the code.  Hopefully this is the one that starts convincing developers who don't see value in clean code that it actually matters. 
1. Split the team up in pairs of developers.  Let them sift through the codebase and pick a single class.  In a tangly codebase most likey this class will suffer from some, if not all, clean code violations.
2. Give them some time (approximately 15 minutes should be sufficient at first but you should decrease this over time) to look at the class.  Specifically they should be looking at the following:
* It's unit tests (or lack thereof) and the names of the unit test cases that exercise the classes public methods
* The class' public methods
* Its dependencies and the public methods it calls on its dependencies (ask them not to look at the dependency classes other than their public interface that the class being investigated is using). 
* It's private methods
* It's attributes
3. Given all of this information the pair of developers should be able describe what the classes responsibilities are, what it is doing, and why it is doing it.  

In code with quality problems this will most likely be fairly difficult unless it is something the developer has written recently. 

The next step is to repeat the same exercise but give each pair a class that is a great example of well written code.  You should be looking for all of the things that we value as clean coders:
* 
