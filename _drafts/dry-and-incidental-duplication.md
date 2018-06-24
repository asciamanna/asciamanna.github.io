---
layout: post
section-type: post
title: DRY and Incidental Duplication
comments: true
category: software craft
tags: ['code smells']
---

Duplication introduction to functions first thing we learn

Code Smells - Quote from Martin Fowler at the beginning of the code smells chapter in refactoring

History of DRY - existed before the Pragmatic Programmer but they gave it its name

Show the definition of DRY from Pragmatic Programmer


When applied appropriately, reducing duplication improves the quality of the code, making the code easier to change and maintain. When a behavior needs to be changed it is changed in one place. Making future changes easier to implement, verify, and deploy safely. 

Avoids the Shotgun Surgery code smell where a single change in behavior requires a large change across the system. 


DRY Misapplied

Unfortunately, DRY gets misapplied quite often. It is about the duplication of knowledge not syntax. 

Incidental Duplication 
Those who misapply DRY do not understand the concept of incidental duplication
Corey Haines quote - "stuff that looks alike now but it’s not going to look alike six months from now."  
Incidental duplication is the duplication of syntax but not knowledge. 

Removing incidental duplication creates the opposite of the desired effect. It actually makes the code harder to change in the future. As an example consider removing incidental duplication from two objects A and B. This is accomplished by introducing a third object C that both object A and B are dependent on. This introduces a coupling (i.e., increases efferent coupling for objects A and B) in objects A and B only to share syntax. As this code continues to grow apart this coupling needs be removed (best case) or continuously managed (worst case). 

IMAGE HERE

Static Analysis
I am a proponent for static analysis tools. I think they are an important part of software organizations maintaining their software quality. But like any tool, they can be misused and aren't a replacement for thinking. Some static analysis tools track code duplication. This is one area where static analysis tools don't excel. Static analysis tools can only identify duplicate code (duplication of syntax), they cannot detect duplication of knowledge. 

I've seen developers blindly remove all code duplication that triggered issues in static analysis tools. This often results in leaving the code in a worse state. I don't recommend ignoring this issues either, but using these code duplication issues to identify areas of the code that require additional investigation for DRY violations.  