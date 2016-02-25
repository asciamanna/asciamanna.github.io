---
layout: post
title: Bloom Filters
section-type: post
comments: true
category: algorithms
tags: ['code kata']
---
I was first introduced to the Bloom filter data structure several years ago on Dave Thomas'
[code kata website](http://codekata.com/). While working through his code katas I came across one for
implementing a spell checker using a bloom filter. It can be found
[here](http://codekata.com/kata/kata05-bloom-filters/). Having never encountered
Bloom filters in algorithms or data structures classes I found it a fascinating way to address set membership when the set can be very large.  
<!--more-->  

## Definition
Burton Howard Bloom developed the Bloom filter in 1970. A Bloom filter is a data structure that is used to test whether an element is a
member of a set. It differs from other data structures (bitmaps, hashes, etc.)
in that it is **space-efficient** and appropriate to use when the set is very
large or if you are operating in an environment with memory constraints.  

Another benefit of the Bloom filter is that the time needed to check for set membership or add an element to the set is constant, regardless of how many elements are already in the set.  

However, there is a trade-off for the efficient use of memory. The  trade-off
is that the Bloom filter is a **Probabilistic data structure**. In other words,
false positive matches are possible but false negatives are not.  Any query to
the Bloom filter will return "possibly in set" or "definitely not in set."  

An additional trade-off is that while elements can be added to the filter they can never be removed.  If deletes are necessary a separate data structure, a counting filter, can be used instead.  

## Algorithm
The Bloom filter starts out empty. In its initial state it is a large bit array
of _m_ number of bits all initialized to 0.  

Then you add the items you want to check for set membership. You add these items by taking _k_ independent hash values for each item. Each hash is a number which is then used to index into the bit array setting the corresponding value to 1. Clashes will occur. A bit array location may already be set to 1 from a previous item addition. This is expected.  

Now when you want to query the set for membership you perform the same hashes
on it that were used to load the bit array. Then check to see if each of the
bits at the corresponding array locations are 1.  If all of the locations are 1 then the item "might be in your set." If any of the locations are 0, the item is "definitely not in the set."  

These false positives occur when each independent hash for an item ends up corresponding to bits that were previously set by other items' hashes.  

This may seem like a pretty good reason not to use this data structure.
However, increasing the size of the bit array and using an optimal number of
independent hashing functions will decrease the number of false positives.  So,
while the data structure is quite simple the challenge is understanding how
much data you will need to represent in the bit array and tuning the algorithm
and data structure accordingly. It is possible to get the number of false
positives below 1% by tuning your algorithm.  

Thankfully there are some mathematical formulas that you can use to help tune
the Bloom filter for your specific use.  

## Tuning the algorithm  

### Size of the bit array
The following formula, found on
[wikipedia](http://en.wikipedia.org/wiki/Bloom_filter) approximates the number
of false positives.  So, plug the following in to the formula below.

#### _k_ = Number of hashes  

#### _m_ = Number of bits in the bit array  

#### _n_ = Expected number of elements in your set  

#### **_(1 - e<sup>-kn/m</sup>)<sup>k</sup>_**

### Number of hashes to calculate
This leads us to the next problem: determining how many hashing functions to use. Again, the more hashes calculated the slower the Bloom filter will be and it will fill up the bit array quicker. However, if you use too few hashes it will increase the number of false positives.  

Thanks to [wikipedia](http://en.wikipedia.org/wiki/Bloom_filter) again, there
is another formula to solve for _k_: the number of hashing functions.

#### **_(m / n)ln (2)_**

## Practical applications
Bloom filters are used in several applications. Here are a few examples:

* Google's [BigTable](http://en.wikipedia.org/wiki/BigTable) - To reduce disk lookups
* [Apache Cassandra](http://en.wikipedia.org/wiki/Apache_Cassandra) - To reduce disk lookups
* Google Chrome - To identify malicious URLs
* Bitcoin - To verify payments
* Squid Web Proxy Cache - For cache digests

## Example
Here is an example of a simple Bloom filter I've implemented in C#. It uses the
SHA-1, SHA-512, and MD5 cryptographic hash algorithms. In an actual Bloom
filter implementation non-cryptographic hash algorithms would be favored
because they are faster. These include murmur hash and Jenkins hashing
algorithms.  However, since the cryptographic algorithims are built in to the .NET cryptography libraries I decided to use them for this simple example.
{% gist asciamanna/d35f3d3ded04d8aeffd0 %}

## References
1. [Dave Thomas' Bloom Filter Code Kata](http://codekata.com/kata/kata05-bloom-filters/)
2. [Wikipedia - Bloom Filter](http://en.wikipedia.org/wiki/Bloom_filter)
