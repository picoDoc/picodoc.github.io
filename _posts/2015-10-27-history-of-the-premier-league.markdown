---
layout: post
title:  "The history of the Premier League told using Elo ratings"
date:   2015-10-27 00:00:00 +0000
---

The English Premier League was formed in 1992, and in the years since has become the richest and most watched football league in the world. It has storied (although fairly short) history, and a great way to tell this history is with Elo ratings!

So what is Elo? The [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system) is a method for calculating the relative skill levels of players or teams in one-versus-one games. It was originally intended (and is still used) for chess, but has found it’s way into a wide range of other games and sports. The Elo system I’ve used here is fairly simple, and it’s main features are as follows:

* The ratings depend only on the final outcome of each match: win, lose or draw. I’ve included only regular-season games (no European or cup draws).
* Teams gain Elo points after winning games and lose ground after losing them. After a draw the favourite will lose points and the underdog will gain. Teams gain more points for upset wins than they do if they are the favourite.
* The system is zero-sum, the winning team gains the same points that the losers lose. This means the average rating in the league is always the same: 1200. When teams are relegated, the promoted teams are assigned the average rating of the relegated teams to maintain this average and avoid point inflation or deflation.
* Ratings are established game-to-game, so we can see changes in form over the course of the year. This makes Elo a great way to visualize the rises and falls in a teams fortunes over time.

Another important point worth noting is on Elo’s weighting factor: this factor determines how quickly the rating reacts to match results. It should be set so as to efficiently account for new data but not overreact to it. If this factor is set too high, the ratings will jump around too much; if it’s set too low, Elo will take too long to recognize important changes in team quality. In this model we have used 20 as a good medium between these extremes. To initialize our Elo ratings I used the data from the first season of the premier league (as such this season is not shown below).

So, now that the technical stuff is out of the way, let’s have a look at some data! The chart below shows the Elo rating over time for the biggest teams, along with some key events (along the bottom) and the final outcome of each season (along the top).

<div class="responsive-wrap">
<iframe src="/assets/premiershipElo/history.html" width="100%" height="440" frameBorder="0"> </iframe>
</div>

So there it is! You can see a teams history more clearly by hovering over that line. Some cool stuff jumps out of this chart, in particular just how dominant Manchester United have been. Jose Mourinho’s tenure at Chelsea is also very visible, particularly around 2005-2006. I guess that’s why they call him “the special one”?

Speaking of Mourinho, one very cool thing we can do with this data is compare teams between different eras and figure out which was the “greatest of all time”. According to this model the best team in Premier League history was Chelsea (under Jose Mourihno) in January of 2006 with a rating of 1490.183. On the other end of the spectrum the worst team ever were Derby in May of 2008 with a rating of 981.310; in this season Derby secured relegation in March, the earliest ever in the leagues history.

Another cool pattern we can easily observe in this data is dynasties. Obviously in the chart above we can see periods where one team appears particularly dominant, but which team held the number one spot (in Elo ratings) for the longest period? Again here the answer illustrates the ridiculous dominance of Manchester United under Sir Alex Ferguson:

![bestruns](/assets/bestruns.png){:style="display:block; margin-left:auto; margin-right:auto"}

In fact, under Sir Alex Ferguson, the lowest United’s rating ever dropped was 1332.271. In the two years since his retirement United have dipped significantly below this, hitting a new record low of 1299.913 after David Moyes tenure as manager on the 20th September 2014. Their drop over the course of the 2013-2014 season is particularly striking.

Before I tie things up I’m going to illustrate one final aspect of Premier League history, this time a little more serious. As well as plotting the fortunes of the leagues big teams, with our Elo ratings we can also look at inequality in the Premier league. The simplest way to do this is to plot the standard deviation of all the teams ratings over time:

<div class="responsive-wrap">
<iframe src="/assets/premiershipElo/stdev.html" width="100%" height="440" frameBorder="0"> </iframe>
</div>

So this is shows a fairly striking trend. Between 1993 and mid 2009, the standard deviation (which is a measure of the inequality between teams ratings) doubled. Since 2009 this has fallen slightly, but the overall trend is pretty clear.

So this begs the question, why? Why are the best teams getting better, and the worst teams getting worse? So, like most things in this world, the answer is probably “it’s complicated”. However in this case I think the obvious answer is probably the right one (or at least the biggest factor): money.

TV revenues for the Premier league have risen from [£191 million in 1992, to £5.136 billion at the start of 2016](http://www.bbc.co.uk/sport/0/football/31357409). This money is mostly divided evenly between the clubs, however the bigger clubs [benefit from large additional incomes from European TV rights, and sponsorship and commercial income](https://books.google.co.uk/books?id=Zlx7AwAAQBAJ&lpg=PP1&dq=The%20Game%20of%20Our%20Lives%3A%20The%20Meaning%20and%20Making%20of%20English%20Football&pg=PP1#v=onepage&q=The%20Game%20of%20Our%20Lives:%20The%20Meaning%20and%20Making%20of%20English%20Football&f=false). For example in 2012 Bolton Wanderers raised less than £10 million from sponsorship, while just down the road the two Manchester clubs raised over £100 million each. In the year before Manchester United made £50 million from the Champions League TV rights, an income the smaller Premiership clubs do not receive. These large income inequalities allow the biggest clubs to buy the best players and management, at the cost of the leagues smaller clubs.

Another possible contributing factor in this inequality is the [Bosman ruling](https://en.wikipedia.org/wiki/Bosman_ruling). This ruling allowed players at the end of a contract to move to another club without a transfer fee being paid. This makes it harder for clubs to profit from selling players who they’d had helped to develop, and UEFA have declared that they are seeking to repair aspects of the ruling, because it was believed to be the cause of the increasing rich-poor gap between elite and smaller clubs.

So anyway, some cool data to look at I think. Until next time!
