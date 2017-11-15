

NOTES:
- Tests that have names like TestCase27
- Four to five levels of inheritance
- Code being tested is unclear
- Huge amounts of setup

When test fails the team stares at if for a while and updates the assertions.

These tests are providing no benefit while providing a heavy maintenance cost
they were slowing the build down by several seconds making an already slow developer feedback cycle even slower.

When trying to delete these there was pushback that they must be testing "something." This type of fear is common in poor codebases (a topic I will
touch on in a future post). However, you don't need to live with bad tests, you can get rid of them. if they are so hard to understand that
no on in your organization can glance at them understand why they fail, get rid of them they aren't helping you. You can get test coverage on that
code (if that is your goal) the next time you go to change it and find it is not tested.

This comes from the belief that good tests can be written for bad code, and it cannot. Teams practicing TDD tend to avoid these pitfalls.


SOS  - Tests should be simple, obvious, and short  

Explain those simple -- easy to understand, no inheritance, the hueristic tests should be self containing
obvious - code coverage obvious AAA syntax. 
short - a few lines long. accomplish this by hiding unnecessary detail in private methods or other objects to setup the test data.

Links to other posts
