---
layout: post
title: Getting Started with Animations in AngularJS
section-type: post
comments: true
category: web development
tags: ['angularjs', 'javascript'] 
---
Animations are becoming increasingly more important to create an engaging user experience on the web. Beginning with AngularJS 1.2 there is a new animation API using ngAnimate. While it might seem daunting at first, the animation API is quite easy to use, easy to integrate third-party animation libraries, and a marked improvement over the previous API.  

There is enough information about the AngularJS animation API to fill several blog posts. I will focus on the basics to get you started and link to
additional information.

## Setup
There are only a few simple steps before you are ready to start using the new animations API.  
1. Include the angular animate JavaScript library in your HTML.
    {% gist asciamanna/0bc460d7fe4d46876e22 %}  
2. Load the ngAnimate module into your Angular application by adding it as a dependent module.       
    {% gist asciamanna/f499cf5da34af273ea3a %}  
3. Ensure that the element that you want to animate has a class associated with it.  

That's it! We're ready to animate! But before we start animating let's take a quick look at the ways AngularJS lets you animate elements.

## Types of Animations
There are three types of animations that AngularJS provides support for. CSS Transition based animations, CSS Keyframe animations, and JavaScript callback animations. It also supports defining animations for custom directives. We will look at the first two types of animations in more detail to get you started. 

### CSS Transition Based Animations
These are the easiest way to get started and will cover a majority of your animation needs. Animations are class based so you need to follow the AngularJS naming convention so that it can find your animation transitions. This is also why you need a class on your element that you want to animate, so AngularJS can find the element you are targeting with the animation.

You need to specify CSS for the starting animation and the destination animation. For example, if you are targeting a green-to-red text color animation to a div with a class 'animate-me' and an ng-if directive you would need the following CSS:  
{% gist asciamanna/1428f084d134b381577a %}

As you can see the convention is .ng-{event} for your starting animation and .ng-{event}-active for your destination animation. The events that are supported are **enter**, **leave**, and **move**. Additionally, hiding and showing elements as well as adding and removing a class from an element can also be animated using a similar convention.
The following table combines information from the [yearofmoo blog post](http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html) about angular animations and the [AngularJS developer guide](https://docs.angularjs.org/guide/animations).  It describes the supported animations, the directives that trigger them, and the CSS classes that are required for CSS Transition based animations:
  
<table class='table table-bordered' markdown='0'>
<tr>
<th>Animation</th><th>Directives that Trigger Animation</th><th>Beginning Class</th><th>Ending Class</th>
</tr>
<tr>
<td>enter</td><td>ngIf, ngInclude, ngRepeat, ngSwitch, ngView</td><td>.ng-enter</td><td>.ng-enter-active</td>
</tr>
<tr>
<td>leave</td><td>ngIf, ngInclude, ngRepeat, ngSwitch, ngView</td><td>.ng-leave</td><td>.ng-leave-active</td>
</tr>
<tr>
<td>move</td><td>ngRepeat</td><td>.ng-move</td><td>.ng-move-active</td>
</tr>
</table>
The other class based animations that are supported are the following:  

#### Animate Showing an Element
To animate the showing of an element the starting CSS class is .ng-hide-remove and the ending class is .ng-hide-remove-active. The hide-remove event is triggered by both the ngShow and ngHide directives.  

#### Animate Hiding an Element
To animate the hiding of an element the starting CSS class is .ng-hide-add and the ending class is .ng-hide-add-active. The hide-add event is triggered by both the ngShow and ngHide directives as well.  

#### Animate Adding a Class to an Element
To animate the adding of a class to an element the starting CSS class is .{CLASSNAME}-add and the ending class is .{CLASSNAME}-add-active. This is triggered by the ngClass directive and also if you set your class by using an expression.  

#### Animate Removing a Class from an Element
Well, if you made it this far you can guess what the class names are for removing a class from an element and you'd be correct. The starting CSS class is .{CLASSNAME}-remove and the ending class is .{CLASSNAME}-remove-active and again it binds to the ngClass directive.  

### CSS Keyframe Animations
If the idea of specifying two classes for every transition is bothersome or you need more extensive animation options you can use CSS Keyframe animations instead.  
The example listed above would look like this as a keyframe animation:
{% gist asciamanna/5451e28122e48cd44591 %}

### JavaScript Callback Animations
If the transition based or keyframe animations don't work for you, you can use JavaScript animations. I'm not going to discuss them here, but you can read about them in detail in the excellent blog post by [yearofmoo](http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html).

### Custom Directive Animations
Animations for custom directives are possible using the $animate service, which replaces the $animator service in pre-1.2 versions of AngularJS. That could be the subject of its own blog post. However, if you'd like to explore custom directive animations further you can take a look at the [AngularJS $animate reference](https://docs.angularjs.org/api/ngAnimate/service/$animate).

## Example
Let's work through an example and see how the implementation differs based on the type of animation we decide to use.  

### CSS Transition Example
Let's say you want to have a loading label fade out when you hide it.  Since we are targeting an ng-hide directive we need to add the ng-hide-add and the ng-hide-add-active classes to our CSS adjoined to the class for the div that we want to animate. In the .ng-hide-add style definition we want to set the starting opacity to 1, we need to override the default ng-hide display style, and transition the opacity. In the .ng-hide-add-active style definition we need to set the ending opacity to 0.

<a href="http://embed.plnkr.co/rZ7ttLNKgde94OcYxzPY/preview" target="_blank">View example in Plunker.</a>

### CSS Keyframe Example
Now using the same example let's implement it using Keyframe animations instead of CSS Transition animations. In this example we only need to define the CSS for the .ng-hide-add class. The .ng-hide-add style definition will reference a new fadeout keyframe animation that we have to define.  

<a href="http://embed.plnkr.co/rZu3gagbi22FI42gICHU/preview" target="_blank">View example in Plunker.</a>

### Third-Party Library Example
Including third-party animation libraries is quite simple. Take a look at the same example, one more time, but using
the **fadeOut** animation provided by the [animate.css](http://daneden.github.io/animate.css/) library. Integrating animate.css is quite easy because it uses keyframe animations. So, simply remove your keyframe animation definition from the previous example, add a link to animate.css in the head of your HTML, and reference the animate **fadeOut** animation in your CSS.  It's that simple.

<a href="http://embed.plnkr.co/jNQrFW8LY2FuOI0ffLYj/preview" target="_blank">View example in Plunker.</a>

## Next Steps
Now that you've learned the basics of AngularJS animations you can read more about them in detail in the [yearofmoo blog post](http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html) I've referenced previously in this post. Additionally you can familiarize yourself with the [AngularJS Developers Guide section on animation](https://docs.angularjs.org/guide/animations). Good luck!

