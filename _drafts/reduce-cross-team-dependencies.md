---
layout: post
section-type: post
title: Reduce Cross-Team Dependencies
comments: true
category: development practices
tags: ['agile development']
---

While it may seem obvious that organizations should reduce cross-team dependencies,
I continue to see organizations align their development teams is such a way that
requires a significant amount of dependencies and handoffs.

Agile teams should be vertical, cross-functional teams. These should be
end-to-end teams, made up of all of the skills & roles required to deliver a feature from
inception to use in production without external dependencies. This means developers,
product experts, customer proxies, Quality Assurance engineers, database experts, devops,
UX experts, contrary to some current Scrum training that says this should be outside
of the team, all working together on the same cross-functional team. Now recognize that
these are roles not necessarily individuals. Members of the team may have multiple roles.

## The Horizontal Team Mistake

Unfortunately I still see a lot of development organizations build horizontal
teams that deliver technical solutions to each other instead of
delivering user-facing features to production. These organizations have
UI teams, back-end service teams, web services teams, API teams, infrastructure
teams, database teams, release managers, and operations teams (the only ones in the organization
allowed to deploy to production). When companies deliver features "dark" to production
yet another handoff occurs if a separate organization is responsible or enabling
the feature in production. A lot of these organizations are trying
to "be agile" and don't understand why they aren't getting the improvements
and benefits they were promised.

They don't become more efficient (and in a lot of cases actually slow down)
because their organizational structure is creating too much friction between
feature inception and delivery. They design into the process an incredible
amount of handoffs to get a single feature into production. If the time it takes a feature
to get from inception to production takes months and not days there is a problem with the
system.

### Increase in Meetings

These handoffs between teams require more coordination and meetings. A symptom
of an organization like this is a dramatic increase in the number of meetings
that are required to coordinate the work.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Organizational silos love meetings</p>&mdash; Anthony Sciamanna (@asciamanna) <a href="https://twitter.com/asciamanna/status/822125743853408260">January 19, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### Increase in Bugs and Missed Requirements

With each handoff, the intent and value of the work gets convoluted.
So often this ends in delivering bugs or the wrong features.
One of the many brilliant aspects of XP was having customer representation, or a
very realistic proxy of the customer, embedded with the team to ensure
that the team is getting continuous feedback about the value of the
features being built. Many Scrum implementations require these types of handoffs
and separate the decision making from any of the teams doing the work.

### Decrease in Team Morale

Another problem with having the role that is responsible for determining what
to work on outside of the cross-functional team is that often the team never
really understands the value of the work. They don't understand why what they
are doing is important for their users. Without a sense of purpose, the morale
on the team often suffers.

## Incorrectly Slicing Agile Teams

Even organizations that understand the concept of a cross-functional,
vertical team run into trouble. As the organization grows they find themselves
falling into a trap and building horizontal teams and dependencies
between agile teams that should really be independent.  

### Not Organized by Product or Business Capability

One mistake that often occurs is that the agile teams are organized in
a way that a majority of the features requires effort from multiple teams. Every
new feature becomes a cross-team effort.

#### Waterfall Projects on Agile Teams

One of the major problems with this approach is that once a feature becomes a
cross-agile team effort it quickly becomes a waterfall,
Big Design Up Front (BDUF) project. In order to coordinate across teams
project plans are made, designs are determined, deadlines are committed too, etc.
Very quickly the benefits of iterating on features is quickly forgotten in favor
of delivering a large, cross-agile team feature "correctly" the first time.

## Searching for Sameness

### Identical Process & Practices

The other big mistake I see organizations make is their need to have teams be the same.
Each team needs to have identical processes and practices. One of the wonderful
things about agile is that once the principles and values are understood,
everything else can change in support of those. Every team is different, they
have different problems, different personalities, different customers, different
technologies, etc.

The belief that requiring teams to be the same is somehow an organizational
optimization is completely false. In these types of organizations any time a
team wants to improve the way they work they need to convince organizational
leadership and every other team of the improvement (creating unnecessary
cross-team dependencies). Given the friction involved in getting any change
through teams stop trying to improve the way they work.

Having regular retrospectives allows teams to tune the way they work and have
ownership over their process and practices. Unfortunately, in these
organizations trying to scale, they often decide that everyone has
to "do agile the same way." Too often scrum masters (or their equivalent)
become management proxies making sure teams are doing as they are told. Instead
of being the servant leaders helping teams improve themselves. **When those
closest to the work cannot improve upon their processes, practices, working
conditions the team will decline.** Additionally, this becomes a significant morale
problem when teams can no longer improve their work.

### Optimizing for Shared Code

Another big mistake I've witnessed is the need to have "shared code" across teams.
On the surface this makes a lot of sense. __"Don't make teams recreate the
wheel."__ It seems like a real organizational optimization to have all teams share
logging code, management of release tooling and scripts, data access libraries and
technologies, etc.

A lot of this focus is about "being able to move developers" between teams.
That is another patently false idea in the industry. Moving people between teams
is a topic for another day. For further reading, read what [Kent Beck]() wrote
about team continuity in his book, Extreme Programming Explained. There he describes
moving people constantly into and out of teams is a false optimization.  

Unfortunately, all of this shared infrastructure creates more cross-team
dependencies that slows teams down because they cannot completely own a feature
from inception to delivery. When scaling an organization it is more important to
have completely independent teams and accept some repetitive work between teams rather
than to optimize in such a way that introduces dependencies.

### Communities of Practice

### Compromises

How Your Organization is Killing Your Software  - Raffi Krikorian
https://www.youtube.com/watch?v=9Zqt7UrAXns

## Organizational Silos

matrix orgs.
dev manager, QA manager, product manager, scrum masater manager, operations manager, etc.