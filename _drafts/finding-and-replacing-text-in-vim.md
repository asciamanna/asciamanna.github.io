---
layout: post
title: Finding and Replacing Text in Vim
comments: true
category: development-tools
tags: [vim]
---

I've used vi/vim sporadically for the last 20 years. Early in my career vim was my editor of choice for writing C++ and Java programs (back in the old days before there were decent Java IDEs). These days I find myself using vim much less often while I prefer using IDEs.  Taking advantage of things like automated refactoring tools and other such benefits of modern IDEs makes me much more productive. However, at times I still like to use vim. As far as text editors go it is amazingly powerful and gets a bad rap as being unapproachable and overly complex. In this post I want to talk a bit about how to find and replace text using vim.
<!--more-->

##The Slash and Dot Commands

Early in my vim usage if I was looking for a pattern of text that occurred multiple times in the file I would have used the slash command (for help type :h / in vim) to locate the pattern. I then would use the dot command (for help type :h . in vim) to replace each occurrence, using the n command to locate the next occurrence of the pattern in the file. For simple search and replace operations I still think this is the best approach since it requires the least amount of thought and interruption to your current work. However, if I was searching for a pattern that occurred more than a few times this becomes a relatively time consuming series of commands. 

[Drew Neil](https://twitter.com/nelstrom) author of _Practical Vim_ and creator of [VimCasts.org](http://vimcasts.org/) suggests that if you find yourself doing any repetitive command in vim there is a better way to do it. And in this case, there is. Enter the **Substitute Command**.

##The Substitute Command

The substitute command allows you to execute any find and replace action across a file (or section of a file) in a single command. For those of you who are familiar with sed the syntax will appear very familiar. Like most things in vim it may seem complicated and cryptic at first, but armed with a little knowledge you will understand and appreciate the substitute command.

###The Anatomy of a Substitute Command
~~~  

:[range]s[ubstitute]/{search-pattern}/{replacement-string}/[flags] [count]

~~~  

####Range
The range specifies how much of the file should be searched for the pattern to be replaced. Omitting the range results in the current line only being searched. If you want to search the entire file you would use the % character. See the following examples on other ways to use search ranges. 

#####Range Examples

~~~
:s/his/her/g
~~~
Replace every occurrence of the string 'his' with 'her' on the current line only.

~~~
:%s/his/her/g
~~~
Replace every occurrence of the string 'his' with 'her' in the entire file.

~~~
:%5,25s/his/her/g
~~~
Replace every occurrence of the string 'his' with 'her' from lines 5 to 25 (inclusive) in the file.

~~~
:.,$s/his/her/g
~~~
Replace every occurrence of the string 'his' with 'her' from the current line to the last line of the file.

~~~
:.,+15s/his/her/g
~~~
Replace every occurrence of the string 'his' with 'her' from the current line through the next 15 lines.

####Flags
* **g** - Every occurrence of the search pattern should be replaced on the line.
* **c** - The user should be prompted for confirmation before each text replacement.
* **i** - The search should not be case-sensitive.
* **I** - The search should be case-sensitive.



 