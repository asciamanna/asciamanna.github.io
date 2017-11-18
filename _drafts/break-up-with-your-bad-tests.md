Unit test code, like all other source code, has a maintenance cost associated with it. Too often I see teams cling to bad tests that are completely incomprehensible. They do this out of fear, and if they are going to turn around the issues in the code base, breaking up with kinds of tests is necessary.

Recently I uncovered a slew of tests with names like TestCase27, Test1044, and Bug1033. These tests were impossible to understand and the original authors of these tests no longer worked at the company. The tests consisted of four to five levels of inheritance. Because of this the actual code under test was a mystery. There were huge amount of complicated setup strewn across the levels of inheritance. When these tests failed the team would typically update the assertion to make it pass and move on. They did this because they had no idea what the purpose of the tests were.

These tests had a continued maintenance cost for the organization but were also being run on every build. So they were costing the organization by increasing the developer feedback cycle. 

## Delete Incomprehensible Tests

Delete them outright or keep them as pinning tests until you can cover the code in well designed tests. But teams with these kinds of problems tend to keep these bad tests around for much longer than they should. So I prefer to recommend teams delete them outright. 

My position on tests like these is that they should be deleted. They provide no benefit to the developers so they only add a heavy maintenance cost (if the team's bother to investigate the reasons for failure). At worst they create a heavy maintenance cost and a tax on the build time. At best they offer no benefit and tax on the build time. 


When I began the process of ridding the codebase of these tests there was pushback. Developers were concerned that these tests "something." This type of fear is common on teams maintaining poor codebases (a topic I will touch on in a future post). However, you don't need to live with bad tests, you can get rid of them. 

## The Glance Test

I judge a test if I can glance at it for a minute or two and understand what is being tested and why. If it doesn't pass the glance test I start trying to figure out why. These types of tests fail the glance test miserably. If these tests are so hard to understand that no on in your organization can glance at them and understand why they fail, get rid of them they aren't helping you. You can get test coverage on that code (if that is your goal) the next time you need to change it and find it is not tested.

## You Can't Write Good Tests for Bad Code
I am a firm believer that you can't cover bad code in good tests. When writing pinning or scaffolding tests one of the important parts of those tests is that they are temporary. If they are hard to understand they should live for a very short period of time, until the code can be refactored to support better unit tests.

### TDD to the Rescue
Teams practicing TDD avoid these types of issues because writing the tests first ensures that the code stays in a state that is easily testable. Fu
This comes from the belief that good tests can be written for bad code, and it cannot. Teams practicing TDD tend to avoid these pitfalls.

## SOS
When trying to write high quality tests I remind developers of my pneumonic __*SOS*__.  Tests should
be __*Simple*__, __*Obvious*__, and __*Short*__.
SOS - Tests should be simple, obvious, and short

Explain those simple -- easy to understand, no inheritance, the hueristic tests should be self containing obvious - code coverage obvious AAA syntax. short - a few lines long. accomplish this by hiding unnecessary detail in private methods or other objects to setup the test data.

Links to other posts
