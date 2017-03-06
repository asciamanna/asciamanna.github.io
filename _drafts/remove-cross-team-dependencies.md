---
layout: post
section-type: post
title: Remove Cross-Team Dependencies
comments: true
category: development practices
tags: ['agile development']
---

While it may seem obvious that organizations should work to reduce and remove
cross-team dependencies, I continue to see organizations align their
development teams in such a way that creates a significant number of dependencies.
Consequently, these dependencies create the need for a significant amount of handoffs.

Agile teams should be vertical and cross-functional. These should be end-to-end
teams  made up of all of the skills & roles required to deliver a feature from
inception to use in production without external dependencies. This means
software developers, front-end experts, product experts, customer proxies,
Quality Assurance engineers, database experts, DevOps, and UX experts all
working together on the same cross-functional team. When roles get moved out of
cross-functional teams, overhead and handoffs are introduced. This often results
in teams operating in violation of agile principles and values. Understand
that these are roles and not necessarily individuals. Members of the team may
play multiple roles.

## The Single-Discipline Team Mistake

Unfortunately, I still see a lot of development organizations build horizontal
teams based on discipline instead of vertical, cross-functional teams. These
teams deliver technical solutions to each other instead of delivering
user-facing features to production. These organizations have UI teams, UX teams,
"middle-tier" teams, web services teams, API teams, infrastructure teams,
database teams, QA teams, release managers, and operations teams (the only ones
in the organization allowed to deploy to production). If a team can operate
independently of other teams, does not have other teams dependent on them, and
can deliver features to production, then that is a good indicator that the
organizational structure isn't at odds with delivering.

When companies deliver features to production disabled, yet another handoff
occurs when a separate organization is responsible for enabling the feature in production.
A lot of these organizations are trying to "be agile" and don't understand why
they aren't getting the improvements and benefits they were promised.

They don't become more efficient (and in a lot of cases actually slow down)
because their organizational structure is creating too much friction between
feature inception and delivery. They design into their processes an incredible
amount of handoffs to get a single feature into production. If the time it takes
a feature to get from inception to production takes months and not days, there is
a problem with the system. **If software is your business this should be
concerning. Your competition will find a way to deliver features in days and be
able to deliver several times per day.**

### Increase in Meetings

These handoffs between teams require more coordination and meetings. A symptom
of an organization like this is a dramatic increase in the number of meetings
that are required to coordinate the work.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Organizational silos love meetings</p>&mdash; Anthony Sciamanna (@asciamanna) <a href="https://twitter.com/asciamanna/status/822125743853408260">January 19, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Increase in Bugs and Misunderstanding Business Value

With each handoff, the intent and value of the work gets convoluted and perhaps
even lost. This often ends in delivering bugs or the wrong features.
One of the many brilliant aspects of XP was having customer representation, or a
very realistic proxy of the customer, embedded with the team. This ensures
that the team is getting continuous feedback about the value of the
features being built. Many poor agile implementations create these types of handoffs
and separate the decision making about the work from any of the teams doing the work.

### Decision Making About the Work Can Decrease Morale

A concerning issue with having the role that is responsible for all of the
decision making about the work outside of the cross-functional team, is that often
the team never really understands the value of their work. They are completely
disconnected, not only from the decision making, but also the customers they are
trying to serve. They don't understand whether what they are doing is important
or if it is creating value for their customers. Without a sense of purpose, the
morale on the team suffers. I often recommend people watch Chad Dickerson's
talk at RailsConf 2011, [Etsy - Optimize for Developer Happiness](https://youtu.be/22EECFEk9Xs),
that covers, among other things, why it is so important for the people doing
the work to be connected to their customers.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">On the effects of integrating decision-making with work. <a href="https://t.co/Mng13HanrZ">pic.twitter.com/Mng13HanrZ</a> <a href="https://twitter.com/hashtag/classic?src=hash">#classic</a> <a href="https://twitter.com/hashtag/leadership?src=hash">#leadership</a></p>&mdash; Hermanni Hyytiälä (@hemppah) <a href="https://twitter.com/hemppah/status/825969630493736960">January 30, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Incorrectly Slicing Agile Teams

Even organizations that understand the concept of a cross-functional,
vertical team can still run into trouble. As organizations grow and try to scale,
they find themselves falling into a trap of building dependencies between
cross-functional teams that should be independent.  

### Not Organized by Product or Business Capability

One mistake that often occurs, is that the agile teams are organized in
a way that a majority of the features requires effort from multiple teams. Every
new feature becomes a cross-team effort.

#### Waterfall Projects on Agile Teams

One of the major problems with this approach is that once a feature gets assigned
to multiple agile teams, it quickly becomes a waterfall, Big Design Up Front
(BDUF) project. In order to coordinate across teams, project plans are made,
designs are determined, deadlines are committed to, etc. The benefits of
iterating on features is quickly forgotten in favor of delivering a large,
cross-agile team feature "correctly" the first time.

#### No Experts

Another concern is that these cross-team projects have no experts as the expertise
is spread across multiple teams. There should be one team, who are experts in
their area of work. When expertise is split across multiple teams:

* All system changes need to include input from every team
* Incorrect features get implemented
* Low value or no value work gets focus
* Internal and external quality issues arise
* Delivery and team productivity is affected

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The only reasonable way to manage dependencies is to eliminate them. ~<a href="https://twitter.com/chethendrickson">@chethendrickson</a></p>&mdash; Woody Zuill (@WoodyZuill) <a href="https://twitter.com/WoodyZuill/status/829931240690118657">February 10, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Searching for Sameness

### Identical Processes & Practices

The other mistake I see organizations make, is their need to have teams be the same.
These organizations require teams to have identical processes and practices. They
can't be solely faulted for this idea since agile trainers will often make this recommendation.
Unfortunately, this oversimplification has lasting negative effects on organizations.

One of the wonderful things about agile is that once the principles and values
are understood, everything else can change in support of them. Every team is
different, they have different problems, different personalities, different
customers, different technologies, etc., even in the same company.

This line of thinking comes from antiquated, non-Agile ideas that developers
are fungible resources that can be moved between projects and teams. They are
resources, a "head count," to be utilized by the organization. Agile attempts
to dispel these myths and shed light on the fact that software teams are
complex systems where team interaction is valued over perceived scheduling
benefits. Having a team gel and trust each other will build much better
solutions than just filling a project with various developers because you
"need the head count on an important project."

#### Team Apathy

The belief that requiring teams to be the same is somehow an organizational
optimization, is completely false. In these types of organizations, any time a
team wants to improve the way they work they need to convince organizational
leadership and every other team of the improvement (creating unnecessary
cross-team dependencies). Given the friction involved in getting any change
through, teams stop trying to improve the way they work. Over time, the organization
ends up creating apathetic teams because they just don't have the
time or energy to deliver on their commitments and put in the effort
necessary to affect change in the organization.

Having regular retrospectives allows teams to tune the way they work and have
ownership over their processes and practices. Unfortunately, in these
organizations trying to scale, they often decide that everyone has
to "do agile the same way." Too often, scrum masters (or their equivalent)
become management proxies making sure teams are doing as they are told instead
of being the servant leaders helping teams improve themselves. **When those
closest to the work cannot improve upon how they work conditions on the team
will decline.** Additionally, this becomes a significant morale problem when
teams can no longer improve their work.

### Optimizing for Shared Code

Another mistake I've witnessed is the need to have "shared code" across teams.
On the surface this makes a lot of sense. _"Don't make teams recreate the
wheel."_ It seems like a real organizational optimization to have all teams share
logging code, management of release tooling and scripts, data access libraries and
technologies, etc. We are taught as developers that duplication is the root of
all evil, so cross-team duplication must also be a problem.

A lot of this focus is about "being able to move developers between teams."
Moving developers between teams for scheduling reasons is short-sighted and ends
up causing more problems for the organization in the long run. Moving people
between teams is a topic for another day. For further reading, read
what [Kent Beck](https://twitter.com/KentBeck) wrote about team continuity
in his book, _Extreme Programming Explained_. There he describes that
moving people into and out of teams for project scheduling is a false
optimization, for a lot of the reasons I've noted above.

Unfortunately, all of this shared infrastructure creates more cross-team
dependencies that slows the teams down because they cannot completely own a feature
from inception to delivery. **When scaling an organization, it is more important to
have completely independent teams and accept some repetitive work between teams rather
than to optimize in such a way that introduces dependencies.** Having a shared tooling
team can still be a valuable thing for your organization, but leave it up to the individual
cross-functional teams when to deviate from these shared tools.  

### How Your Organization is Killing Your Software

I highly recommend watching [Raffi Krikorian](https://twitter.com/raffi)'s
(former VP of Platform Engineering at Twitter) talk at Philly ETE 2016,
[How Your Organization is Killing Your Software]( https://www.youtube.com/watch?v=9Zqt7UrAXns).
He touches on the issues that arise when work is spread across the entire
development organization and how to build teams and code to scale
development organizations. He recommends building small, single-responsibility
teams with very clear ownership that can operate independently of other teams.
Once the teams are in place, he recommends ensuring that they aren't overstaffed.
Keeping teams slightly understaffed encourages more creativity and ensures
the team is not inventing work.

## Silos in Reporting Structure

In a future post, I will touch on silos in reporting structure as this is
another source of friction that slows teams down.
