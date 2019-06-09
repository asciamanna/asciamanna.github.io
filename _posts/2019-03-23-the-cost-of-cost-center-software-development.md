---
layout: post
section-type: post
title: The Cost of Cost Center Software Development
comments: true
category: leadership
tags: ['agile development', 'anti-patterns']
---

It is common for software companies to have cost accounting tunnel vision, solely focused on decreasing the costs associated with developing software. Consequently, a strict focus on reducing costs can actually lead to higher costs for worse results when examining the entire lifecycle of the software. Worse still, poor delivery and development associated with this style of "lowest bidder" software development create ample opportunity for these companies to be eclipsed by their competitors. A myriad of factors can contribute to this kind of development culture, but it often starts with treating software development as a cost center.

In the early days of software development, it existed primarily as back office support activities to automate and improve company processes. It is reasonable to see why, at that time, it was considered a cost center. Now fast-forward to today where software is a critical part of most companies, being tightly integrated with the business. The modern automobile, for example, contains more lines of code than the Windows operating system.[^1] Even more directly, software is often the primary product that companies produce (Software-as-a-Service companies for example).

For most companies, the accounting hasn't been as quick to adjust. While the role software plays in business has fundamentally changed, software projects are still temporary constructs and managed to minimize costs. This may seem like a glaring issue for seasoned agile and lean practitioners, but changing the accounting metrics by which company leadership is judged can be a slow process. It requires influence at the highest levels of the organization. 

> Cost Accounting is enemy number one of productivity.   
> _&mdash;Eliyahu M. Goldratt, Creator of the Theory of Constraints and author of The Goal_

## Cost Center Culture

This cost center mentality has a serious impact on the culture of technology organizations. The decisions that get made in the interest of managing costs further complicate the organization, making it harder to deliver value to customers quickly.  

### Decision Makers vs. Workers

I regularly discuss the divide between decision makers and workers in software development. This is one of those cultural issues that is often ingrained into the company, with departments designed to keep the development teams out of the decision-making process. This divide stands in the way of the real organizational change necessary to successfully adopt agile software development values. Software companies that continue to treat software development as a cost center often do it because they create a division between the decision makers and the workers. This is typically realized as a separation between IT and the business. They interact as separate functional silos in the company. 

In these organizations, the decision makers are the real brains behind the product the company produces. The IT organization is just a group of order takers implementing the ideas of "the business." Pre-packaged solutions (not customer problems) are delivered to the IT organization. This chasm between the technology organization and the business can either be the bottleneck in the company's value stream or an impediment to discovering and addressing the bottleneck.[^2] Contrast this with the most successful software companies that optimize for flow, minimize and eliminate hand-offs, and move authority to the point of information. These teams who are responsible for software creation, are also involved in the discovery process and work directly with their customers.

### Outsourcing and Offshoring
If this divide exists between the decision makers and the workers, then the company is free to sell the software development to the lowest bidder. Even the most critical parts of development can be outsourced and off-shored because the company believes that the creation of the software, and the people who create it, are a commodity. 

> The fact that software delivery performance matters provides a strong argument against outsourcing the development of software that is strategic to your business, and instead bringing this capability into the core of your organization.  
> _&mdash;Nicole Forsgren PhD, Jez Humble, and Gene Kim from their book **Accelerate**_

### A Common Enterprise Trap
Most enterprise software organizations have yet to realize how different these successful software companies are. They toil away adopting agile scaling methodologies and failing, while they cling to Taylorism, organizational hierarchy, internal fiefdoms, and centralized power and planning structures. They are operating with a management playbook that ostensibly worked a century ago and trying to apply that to creative knowledge work. They manage to cost reductions, project deadlines, and development team output instead of business outcomes.

### Organizational Hierarchy
Cost center cultures often create large organizational hierarchies, further slowing development. If development teams aren't responsible for making decisions, and there is a focus to reduce development costs, it stands to reason that development won't be the focus of investment. Instead, the company invests in adding more leadership (i.e., more decision makers). This is where we see organizational hierarchy grow. Combining this desire for hierarchy growth with functional silos and we have a recipe for a massive management organization. 

Attempting to create cross-functional development teams in this environment is an exercise in futility. Each team could have nearly as many direct managers as members of the team. Each of those managers is part of a hierarchy that has its own stake in what each team works on. The delivery teams often end up getting competing direction. They are asked to work together to deliver features, but also are required to adhere to each individual manager's goals &mdash; which can often be at odds with the team's goals. The unfortunate result is that the delivery teams are left to deal with the pressure and pull from competing functional managers.  

#### Broken Feedback Loops
As these hierarchies grow feedback loops, if they exist at all, become significantly lengthened such that they provide no value to the teams delivering software. The decision makers are so far removed from the decisions they make, they don't see the effect their decisions have on the software teams' abilities to deliver. Nor do they see the effect of those decisions on the software being created.

> In most organizations, the bottleneck is at the top of the bottle. 
> _&mdash;Peter F. Drucker_

### Obsession with Operating at Scale
When software development is viewed as a commodity, the attributes of successful and productive software teams are obscured. Organizations wrongly think they can deliver more value faster by hiring a lot of low-cost developers instead of focusing on small, self-organizing teams and creating conditions where they can thrive. The belief is that each developer is just a pair of hands to take orders and turn them into code. This is something that Industrial Logic Senior Consultant [Tim Ottinger](http://agileotter.blogspot.com/) calls _**the Context-Free Fungible Developer**_, and it is a myth. This myth further impacts organizations as they organize around temporary projects and move developers between projects and teams. 

Unfortunately, adding more developers to a system of work like the one I'm describing results in the opposite of the intended effect. As the number of developers increase, communication becomes more difficult, and the dependencies between teams increase the complexity of the work. As a result, more hierarchy in leadership is introduced making it take increasingly longer to deliver any software. Decisions that could be made by a single development team now take weeks as leadership has meetings to set process and policy. As the number of developers increases and the dependencies between them increase, a massive coordination effort is required to deliver any value to customers. 

### Lack of Autonomy & Discipline
One of the lessons we've learned from the most successful tech companies is that the conditions for great development teams to thrive can be optimized. In these organizations, development teams are effective because leadership has given them a clear vision, autonomy _AND_ the teams are disciplined. Minimizing the costs of software development is often incompatible with disciplined development practices. In these organizations that focus on output, agile technical practices like TDD, pair & mob programming, microtesting, refactoring, and CI/CD are often ignored. Not only because these practices take time to master, but because they are viewed by the non-technical parts of the organization as "slowing output." Internal quality is often invisible in these companies and ignored in favor of delivering more output. That is until it becomes so problematic that delivering any new features becomes a near impossibility.


## A Path Forward
If instead companies focus on creating the conditions for small, independent, self-organizing development teams to thrive, they will realize significantly improved results. These teams should be aligned to a vision and be able to operate from problem discovery to delivery (from concept to cash). It's time to retire the strict focus on cost accounting in favor of value delivery metrics. 

[^1]: Referenced from [Mik Kersten](https://twitter.com/mik_kersten)'s book **_Project to Product_**. - While the Microsoft Windows Operating System may have 60 million lines of code. Automobiles as of 2010 contained around 100 million lines of code.  

[^2]: Author [Mik Kersten](https://twitter.com/mik_kersten) describes this scenario in **_Project to Product_** during his interview of Nokia about its failed agile transformation. Because of the separation between the business and IT its "agile transformation" was implemented as a local optimization, yielding little results and not addressing the actual bottleneck in the value stream.  