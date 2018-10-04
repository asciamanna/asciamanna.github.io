---
layout: post
section-type: post
title: Organizational Standardization, Review Boards, and the Death of Innovation 
comments: true
category: leadership
tags: ['anti-patterns']
---

It's really quite simple to destroy innovation, effectiveness, and productivity on software development teams. Make it clear that initiative and experimentation are punishable and move the decision making away from the people building the software.

In most companies struggling with these issuses managers and leaders say they want an innovative organization, and they very well might. There is often frustration around why they can't grow their organization and be as effective as companies like Netflix, Etsy, and Amazon. They don't recognize how fundamentally different these companies structure their work and treat their employees. Instead they assume those companies must hire better engineers.

> The more time managers spend communicating and elaborating and being transparent about the job to be done, about the challenges the business is facing and the larger competitive context, the less important policies, approvals, and incentives are.    
> _&mdash; Patty McCord, former Chief Talent Officer at Netflix and Author of Powerful; Building a Culture of Freedom and Responsibility_

The source of the problem lies in actions of company leadership and the old playbook they are using to manage a software organization. If you strip away the thin veneer of generic company values that always include terms like 'innovative' and start looking at the language and actions of management, the processes in place, and the system of work it's obvious that company is 'optimized' for anything but innovation.

These companies have managers who have taken the Taylorist playbook and continue to apply it to creative knowledge work. With the rise of poor Scrum implementations (Command-and-Control waterfall projects wrapped in Scrum terminology) and frameworks like SAFe, the problem persists despite claims to be "agile." In recent years DevOps, Modern Agile, Lean Software Development, and other movements are working to correct the course. 

## Agile Teams in Corporate Scrum

One of the key aspects of agile teams is that they are staffed with everyone necessary to take an idea from formation to delivery. Lean software development calls this taking an idea _"from concept to cash."_ But companies often want the benefits of agile without putting in the hard work to truly transform and upend the company fiefdoms in the process. This results in doing work the Same Old Way, Command-and-Control waterfall organizations adopting the terminology of agile without any of the substance. 

Companies often build what they believe are cross-functional teams, but these teams must take so much external direction that it serves to stymie all progress they make. This destroys any chance for the team to innovate, rendering them helpless to deliver anything without first:
* getting permission to make a change to a company framework
* presenting to a review board to change a standard
* acquiring approval from a working group to try out new library or tool, etc.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I regularly hear managers moan about “learned helplessness”—teams that are afraid to try stuff. If you tell the teams what to do, you&#39;re telling them not to try stuff. You can’t have it both ways. An org that imposes a company-wide framework is destroying innovation.</p>&mdash; Allen Holub (@allenholub) <a href="https://twitter.com/allenholub/status/1046791808129282048?ref_src=twsrc%5Etfw">October 1, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Decision Makers vs. Workers - Broken Feedback Loops
The crux of this problem is that decision makers are separated from the workers. This takes on several forms. 

### Review Boards & Standards Bodies
When coaching software development teams, one thing I focus on is helping to identify and minimize waste. One of the biggest sources of waste is the unwavering belief that for companies to grow and operate "at scale" an organizational optimization is to enforce organizational standards. This is often done by creating standards bodies, review boards, working groups, etc. This results in several roles to create and manage standards. These board members can't possibly work on every team they are making decisions on behalf of. This separation of the decision makers from the workers creates broken feedback loops that slows down every team delivering software for the company.  

The company signals that it values identical teams and organizational sameness over creating empowered, autonomous teams. So it should come as no surprise when morale plummets when the realization sets in that the teams responsible for doing the actual work are just typists, mercenaries doing as they are instructed to the codebase. 

> Teams of missionaries are engaged, motivated, have a deep understanding of the business context, and tangible empathy for the customer. Teams of mercenaries feel no real sense of empowerment or accountability, no passion for the problem to be solved, and little real connection with the actual users and customers.     
> _&mdash; Marty Cagan - [Missionaries vs. Mercenaries](https://svpg.com/missionaries-vs-mercenaries/)_

Now this doesn't mean that every team works in isolation and teams create inconsistency for users in the name of autonomy. Rather teams can organize around areas requiring consistency and tools can be built for teams to use that provide consistency (e.g., a logging service to format log messages in a similar fashion across teams). I'll be discussing this nuance in more detail in a future post.

### Architecture and Development Separation

One of the core agile practices is evolutionary design (coming to us from Extreme Programming). Related to evolutionary design is the concept of emergent and incremental architecture. You don't need a frozen architecture dictated up front but it too can emerge, much like the software design, as the needs of the customers change and the system changes through consistent refactoring. 

I see waterfall architecture groups separated from "agile" development teams (most commonly this is the case in large companies). The architects dictate the architecture of the system up front but don't get their hands dirty writing any of the code. So the team cannot effectively refactor code and evolve the design if it would impact any of the architecture or high-level design (that would be the architect's responsibility). The team's design space is now constrained and they learn they can change little things but the big things won't change without a review, so the big issues aren't addressed. 

Since these architects are removed from the day-to-day problems the team is solving, often the architecture and high-level design are a snapshot in time, before most of the learning happens. As a result the architecture cannot serve the evolving needs of the code. These architects rarely get timely feedback on their architecture and designs as they are not the ones to implement them. 

## An Organization Without Innovation

What becomes quite obvious for anyone who has worked in a highly productive learning organization is that companies that centralize standards, decision making, and process change crush innovation. It sends a clear message that innovation and initiative is to be punished not celebrated. 

## Team Apathy
If a team needs to convince organizational leadership, a review board, a team of architects, or even just the other development teams of the merit of an improvement or experiment, they will simply stop trying to improve. Given the friction involved in getting any change through, teams stop trying to improve the way they work. Over time, the organization ends up creating apathetic teams because they just don’t have the time or energy to deliver on their team commitments and put in the heroic effort necessary to affect change in the organization.

## Lessons of Lean Software Development
One of the many important lessons we've learned from lean is that process improvement should come from the practitioners. Mantras like **_"Move authority to the information"_** exist to remind leaders that in knowledge work separating decision making from doing the work is a fool's errand. At best it builds a mediocre organization filled with mercenary teams doing exactly as they are told. 

## There is Hope
This may seem depressing but there is hope. The most successful software companies today understand the creative, experimental, and team-based nature of software development; that it's a process of discovery. The great software companies have adopted principles and practices from DevOps, Lean Software Development, Extreme Programming, and [Modern Agile](http://www.modernagile.org). They instead focus on empowering autonomous teams, technical excellence, continuous experimentation, and continuous learning, rather than building order-taking, masters-and-minions organizations, stamping out cookie-cutter teams, and separating the decision makers from the software creators.

## Further Reading
<img src="/img/book-trio-small.png" alt="books about high quality teams" class="img-responsive" />

If what I'm saying sounds impossible, I recommend a trio of books. 

### Books 
Mary and Tom Poppendieck's _**Lean Software Development**_ describes how centralized standards result in the opposite of their intended affect. The book is teeming with incredible insights and at the top of my list of recommended reading for software professionals.

Nicole Forsgren (with Jez Humble and Gene Kim) have written _**Accelerate**_ and are responsible for the annual State of DevOps Report. In it they describe studies they've done that indicate that, among other practices, having a light-weight review process like code reviews, pair programming, and mob programming is much more effective than review boards and centralized standards bodies. 

The last book I will recommend is Marty Cagan's _**Inspired**_, in it he describes how great software companies can maintain an innovative culture as they grow. 

### Articles

* [How Netflix Gets Out of the Way of Innovation](http://perfcap.blogspot.com/2011/12/how-netflix-gets-out-of-way-of.html) - Adrian Cockcroft
* [Missionaries vs. Mercenaries](https://svpg.com/missionaries-vs-mercenaries/) - Marty Cagan
* [Revenge of The PMO](https://svpg.com/revenge-of-the-pmo/) - Marty Cagan

