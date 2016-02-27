---
layout: post
section-type: post
title: Finding and Replacing Text in Vim
comments: true
category: development tools
tags: ['vim']
---

I've used vi/vim sporadically for the last 20 years. Early in my career vim was my editor of choice for writing C++ and Java programs (back in the early days of Java before there were decent Java IDEs). These days I find myself using vim much less often; preferring the advantages I get from IDEs. Taking advantage of things like automated refactoring tools and other benefits of modern IDEs makes me much more productive. However, at times I still like to use vim, whether it is for text editing or working in a language that lacks a really fantastic IDE. As far as text editors go vim is amazingly powerful and gets a bad rap as being unapproachable and overly complex. In this post I want to talk a bit about how to find and replace text using vim.
<!--more-->

## The Slash and Dot Commands

Early in my vim adoption if I was looking for a pattern of text that occurred multiple times in the file I would have used the slash command (for more information type :h / in vim) to locate the pattern. I then would use the dot command (for more information type :h . in vim) to replace each occurrence, using the n command to locate the next occurrence of the pattern in the file. For simple search and replace operations I still think this is the best approach since it requires the least amount of thought and interruption to your current work. However, if I was searching for a pattern that occurred more than a few times this becomes a relatively time consuming series of commands. 

[Drew Neil](https://twitter.com/nelstrom) author of _Practical Vim_ and creator of [VimCasts.org](http://vimcasts.org/) suggests that if you find yourself doing any repetitive command in vim there is a better way to do it. And in this case, there is. Enter the **Substitute Command**.

## The Substitute Command

The substitute command allows you to execute any find and replace action across a file (or section of a file) in a single command. For those of you who are familiar with sed the syntax will appear very familiar. Like a lot of things in vim it may seem complicated and cryptic at first, but armed with a little knowledge you will understand and appreciate the substitute command.

### The Anatomy of a Substitute Command
<pre><code class="vim">  
:[range]s[ubstitute]/[search-pattern]/[replacement-string]/[flags] [count]  
</code></pre>

#### Range
The range specifies how much of the file should be searched for the pattern to be replaced. Omitting the range results in the current line only being searched. If you want to search the entire file you would use the % character. See the following examples for other ways to use search ranges. 

#### Range Examples

<pre><code class="vim">
:s/his/her/g
</code></pre>
Replace every occurrence of the string 'his' with 'her' on the current line only.

<pre><code class="vim">
:%s/his/her/g
</code></pre>
Replace every occurrence of the string 'his' with 'her' in the entire file.

<pre><code class="vim">
:8,25s/his/her/g
</code></pre>

Replace every occurrence of the string 'his' with 'her' from lines 8 to 25 (inclusive) in the file.

<pre><code class="vim">
:.,$s/his/her/g
</code></pre>
Replace every occurrence of the string 'his' with 'her' from the current line (.) to the last line ($) of the file.

<pre><code class="vim">
:.,+15s/his/her/g  
</code></pre>

Replace every occurrence of the string 'his' with 'her' from the current line (.) through the next 15 (+15) lines.

#### Flags
Omitting the flag from the command results in only the first occurrence of the match in a line being replaced (the default behavior). Here are some of the flag options:

* **g** - Every occurrence of the search pattern should be replaced on the line.
* **c** - The user should be prompted for confirmation before each text replacement.
* **i** - The search should be **case-insensitive**.
* **I** - The search should be **case-sensitive**.
* **n** - Don't perform the substitution

#### Flags examples

We've already seen usages of the **g** flag. The g flag results in every occurrence of the match in a line to be replaced.
Let's see some of the others.

<pre><code class="vim">
:%s/his/her/gc  
</code></pre>
Replace every occurrence of the string 'his' with 'her' in the entire file. Prompt the user for confirmation on each match.

<pre><code class="vim">
:%s/his/her/gi  
</code></pre>
Replace every occurrence of the string 'his' (case-insensitive) with 'her' in the entire file. 

The **n** flag may not seem very useful when you first encounter it, however it allows for count commands. See the following example:

<pre><code class="vim">
:%s/his//gin  
</code></pre>
Count the number of occurrences of 'his' (case-insensitive) in the file.

#### Count

Adding a count value to the substitute command allows for searching N number of lines beyond the current line. See the following example:

<pre><code class="vim">
:s/his/her/g 6  
</code></pre>
This command replaces every occurrence of 'his' with 'her' from the current line through the next six lines. 

## Matching Words

Let's say you have the following text:  

<pre><code class="nohighlight">
This is his repository  
</code></pre>

You want to match his and replace it with her but not match the 'his' contained within the word 'This.'
In order to match exact words you will need to use the \< and \> characters. The following command would match every occurrence of the word his with her on the current line.

<pre><code class="vim">    
:s/\<his\>/her/g   
</code></pre>


## Specifying Other Delimiters
If you are trying to find and replace text with slashes (URLs for example) the command becomes difficult to read since each forward slash needs to be escaped by being prepended with a backslash.

For example the following command replaces the / with the ! character as the delimiter:  

<pre><code class="vim">
:%s!http://www.asciamanna.com!http://www.anthonysciamanna.com!g  
</code></pre>

## Remove Duplicated Text from Find and Replacement Patterns

The previous example shows repeated text in the search and replace strings. I had to include the 'http://www.' in both the search and replacement string if I wanted to specifically match the string 'http://www.asciamanna.com'

You can use the \zs and \ze characters to match the part of the search string that contains the replacement string. Instead of repeating the text in this example:  

<pre><code class="vim">
:s/This document was last updated in 2013/This document was last updated in 2015/  
</code></pre>

You can use:  

<pre><code class="vim">
:s/This document was last updated in \zs2013\ze/2015/  
</code></pre>

## Next Steps
The substitute command is very powerful. I've laid out enough of the basics to get you started. You can take a look at the following sites and the vim documentation to dig deeper into the command.

* [Vim Wikia: Search and Replace](http://vim.wikia.com/wiki/Search_and_replace)
* [12 Powerful Find and Replace Examples](http://www.thegeekstuff.com/2009/04/vi-vim-editor-search-and-replace-examples/)
