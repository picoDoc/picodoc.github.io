---
layout: post
title: Superbowl XLIX - Real-time betting data visualization
date: 2015-02-09 17:47:32.000000000 +00:00
---

Last weekend saw the annual festival of advertising and sports that is the Superbowl.  In this years sports-travaganza the New England Patriots faced the Seattle Seahawks in one of the most closely matched and exciting games in years; perfect fodder for a bit of data visualization!

![Rumour has it some sports happened in between Katy Perry and commercials](/assets/2015/02/super-bowl-xlix-49-logo.png){:style="display:block; margin-left:auto; margin-right:auto"}


Sports exchanges are a form of prediction market where users bet on the outcome of an event.  This is basically the same as normal gambling, but with the key difference that users are trading with each other rather than betting against the house.  In many ways sports exchanges - such as [betfair](http://betfair.com) - are very similar to financial stock exchanges.  They make their profits by taking a percentage of winnings rather than by taking a position against users, and as a result it's in their interest to make as much data as possible publicly available.  The more data users have the more they might bet, and the more trading volume they get the better!

This is great for me as real-time betting data is a very rich data-set; through live odds we can essentially look at what the "collective mind" of the market is thinking.  So, anyway, back to the Superbowl!  I collected some of the fire-hose of data spewing from the betfair exchange during the match and crunched the numbers down into a more manageable form.  Let's have a look...

<div class="responsive-wrap">
<iframe src="/assets/superbowl/index.html" width="100%" height="640" frameBorder="0"> </iframe>
</div>

Data is always much easier to understand when displayed visually in graphs and charts than as numbers in a spreadsheet.  In the graphic above I've made use of Mike Bostock's [d3.js](http://d3js.org/) which allows me to attach data to DOM elements.  So what are we looking at here? Well the visualization compresses over 300,000 data points collected during the game into something much more easily digestible. It's really 3 separate charts, displaying three different sets of data, so lets go through each in turn:


* The first plot shows the live odds based on matched trades from the exchange. So for example if the average odds for a given outcome are 2.0 (or 1:1; even odds), then the implied win probability is 50%.  If the odds are 3.0 (2:1), then the implied win probability is 33% etc..  Here the odds for the two outcomes are displayed in a stack graph, so we can see that the total probability is always 100% (minus some noise). In other words, there must be a winner!
* The middle plot shows the score and important in game events. Hovering over the bubbles and boxes here will display a tooltip saying what happened or the score at that time. For example the green circle near the middle indicates the half time break.  You can see the trading volume dropped off as everyone was too busy watching Katy Perry and the left shark.
* The third and final plot shows the volume traded against time, with the colour of the shading indicating the market the volume was traded in. In a sports exchange each outcome has it's own market, which can be backed or layed i.e. whether you think this outcome will happen or not. In this case - since there are only two possible winners - backing one is the same as laying the other.

## Visual match report

So looking at this data we can really peer into the collective mind of the market and see the story of the game from a whole different perspective. A number of things really jump out:

* The market seems - at a glance - to be fast and efficient.  For example the odds are flat before the game and during half-time, but during play they are clearly responding to game events.  In betting markets the "objective" is always clear and unambiguous: your team must win.  This is in contrast to financial markets where the link between events and market movements is often not so clear.
* We can clearly see both teams are very evenly matched to begin with.  Through the first half the Patriots score twice, and the Seahawks answer both times.  In the 3rd quarter the Seahawks take control, only to have the Patriots make a heroic comeback in the 4th, just in time for the dramatic finish in the final seconds where the odds go crazy.
* We can clearly see the odds tracking the score, and in most cases the market seems to anticipate scores happening. This is because of the teams field position (as they get closer to the endzone the odds shift as they are more likely to score soon).
* There are a number of points in the game where the odds shift massively very quickly.  Interceptions are accompanied by very sharp shifts, as the market obviously can't see them coming!  In the final minutes of the game we can see some of the most dramatic shifts.  First there's a big shift to Seattle when Russell Wilson makes a [big pass](https://www.youtube.com/watch?v=fKOLqM-LnA0) to put the Seahawks close to the endzone.  Then an even more dramatic shift back when his next pass is [intercepted at the goal line](https://www.youtube.com/watch?v=U7rPIg7ZNQ8) to seal the victory for New England.

In many way this is the visual analogue of a match report, where we're using colours and shapes to tell the story of the game. A picture is worth a thousand words! The features above are just a few quick observations based on this one visual, I'm sure there's plenty more insight waiting to be discovered in such a rich dataset.

Until next time!
