It is common for teams who are responsible for a large amount of legacy, poorly written code to not improve it over time. There are a lot of factors at work to keep teams churning in a poorly written codebase. They may lack experience writing clean code and unit tests and don't have opportunities to practice these techniques. Often there are schedule pressures that create stress which prevents teams from improving the codebase. There are some cases where developers just don't see the value in code quality or believe software design and quality is entirely subjective. It has been my experience working in these organizations that no one is talking about the quality of the code or how to improve it over time. Everyone is working in a reactive manner just trying to get something that "works" into production however they can manage to do it. Teams can turn this around.

The message you want to be sending to your team is that "working code" is not finished. Code needs to convey its intent in the clearest possible manner. It needs to be easy to update and change and it needs to have unit tests so that developers have confidence in their changes. It needs to be in a state that enables continuous refactoring so that it is always easy to change and has clear intentions.

## Reading

One recommendation I have for teams in this situation is to read books and blog posts about the subject of clean code, software design, unit testing, refactoring, etc. I'll save those recommendations for another post, however reading alone won't solve these problems. It is hard to practice these new techniques for the first time in production code. Developers feeling pressure are going to revert back to what they know. Teams need specific time set aside to practice and improve. This is where code katas and études can be utilized.

## Etudes and Katas
The concept of études and code katas were developed independently by [Kent Beck](https://twitter.com/KentBeck) and [Dave Thomas](https://twitter.com/pragdave), respectively. The idea behind them is to practice some relatively simple softeware development concept. Through repetition of these practices developers will improve. As you will see not all of these have to involve actual coding exercises, although much of them involve coding.

## Team Improvment

I've encountered two types of developers who are responsible for maintaining poorly written codebases. There are some who don't have the experience writing clean code and believe it will take them too long to learn these techniques. Then there are those who see no value in clean code techniques. These are the developers who say things like _"I like to see the code all in one place"_ as their reason for wanting to write large classes and methods. Or they claim that _"having too many files is confusing."_ Maybe they have tried unit testing but have not had a good experience with it because they didn't receive any mentoring. Poorly written tests can often be worse than having no tests at all.

I am going to describe several code katas (over the course of a few posts) that can help reverse this trend. These serve a few purposes:

* Convince developers who don't see value in clean code that it well help them build higher quality code
* Help developers learn how to identify and refactor problematic areas of the code
* Help developers write new code that is up to clean code standards

This first kata serves to help the team compare poorly written code to well written, clean code and provide a mechanism for the team to start discussing the problems they see in the code. Hopefully, this begins to convince the team that these practices matter and will help them move faster and introduce less bugs in the future.

## The Clean Code Kata

This kata is similar to études [James Shore](http://www.jamesshore.com/) introduced to a team I worked on. These études were designed to help developers quickly read, understand, and explain the purpose of code by diagramming and presenting it to the team in a relatively short period of time. It only takes doing a few of these exercises before it becomes obvious how much easier these are when the code is well designed. So I decided to follow a similar practice for these katas to help sell the idea that clean code matters.  

<div class="well">
James Shore describes a couple of other études and how he got the idea for them from [Kent Beck](https://twitter.com/KentBeck) in his post, [Études for Excellence](http://www.jamesshore.com/Blog/Etudes-for-Excellence.html).
</div>

### Practice

1. Have the team split into groups of no more than five developers. Ensure that they all have access to the source code and have a whiteboard accessible. Each developer should go through the codebase and pick a class to investigate. As developers get more comfortable with this kata you can open it up to groups of classes. The only restriction you should put on them is that it should not be code that they have worked on in the past six months. In small codebases this may not be possible. In that case just recommend they pick something that they are least familiar with. In a problematic codebase a significant number of classes will suffer from some clean code violations.

2. Give them some time to look at the class (approximately ten minutes should be sufficient at first but you should decrease this over time). Specifically they should be looking at the following things for each class:

* Its unit tests (or lack thereof) and the names of the unit test cases that exercise the class' public methods
* Its public methods
* Its dependencies and the public methods it calls on its dependencies (ask them not to look at the dependency classes other than their public interface that the class being investigated is using).
* Its private methods
* Its attributes

3. Given all of this information the developer should be able to describe what the class' responsibilities are, what it is doing, and possibly why it is doing it. They should diagram the class and its dependencies on a white board while describing it to the rest of the group.

4. Rotate through each member of the group until everyone gets a chance to present.

This will most likely be a challenge in codebases with quality issues. Teams who are not used to reading code quickly without stepping through it in a debugger will be challenged by this exercise unless it was something they have worked on recently.

The next step is to repeat the same exercise but give the developers a class to look at that is an example of well written code. You should be looking for an example that contains the types of things that we value as clean coders:

* A small class
* Short methods
* Well named methods and variables (code comments not required because names are descriptive)
* Dependent objects injected and easily understood based on dependent object variable and method names
* Unit tests exercising each public method with well named test cases

### Discussion

The developers should find that they can much more easily describe this code than the first example they found on their own. Once complete it's important moderate a discussion about what the team has discovered. Specifically talk about the things that made understanding the code a challenge. What about the code would make it hard to safely and quickly change? These discussions should be the beginning of your team discussing quality issues openly and honestly, as well as how they can start to increase the quality of the code.

## Conclusion

Typically when faced with examples of poorly written code and what we would consider clean code developers begin to see the benefits of learning these techniques. Continue discussing code quality with teams. A later post will describe a refactoring kata.