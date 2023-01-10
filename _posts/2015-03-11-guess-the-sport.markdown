---
layout: post
title: I have no eyes - Visual identification of sports through pattern recognition
  in prediction market data
date: 2015-03-11 17:02:43.000000000 +00:00
permalink: "/guess-the-sport/"
---

So last week I was sitting in the comfort of my living room, watching Ireland snatch 6 nations victory from the overly entitled hands of the English, when I had a thought...  What if instead of live footage of the game, I could watch some nice, raw, unfiltered data.  You know, as many numbers as possible.  That would be great, right?  I mean who wants to watch live coverage when we could see data instead.  Much more informative.  Glad we're all agreed.

In the last post I showed exactly this kind of data based visual match report for Superbowl XLIX using live gambling data from a sports exchange.  Sport exchanges are very similar to financial markets, with the fluctuating odds being directly analogous to stock prices or foreign exchange rates.  In theory they should both rise and fall in response to real world events.  So, let's have a look at some financial data...

<div class="responsive-wrap">
<iframe src="https://www.picodoc.org/wp-content/uploads/datavis/financedata/chart.html" width="200%" height="270" frameBorder="0"> </iframe>
</div>

So, one of these lines is a large technology stock, while the other is an foreign exchange rate.  Can you tell them apart?  I sure as hell can't.  Maybe try looking at news for 4th March 2015 and see if that helps?  Honestly I'd still be very impressed if you could tell the difference.   The blue line is the EUR-USD exchange rate, while in red is the price of AAPL stocks trading on the NASDAQ.  The jumps up and down in price might be related to real-world events - or they might not - either way it's pretty clear you could never look at just this graph and figure out which is which from the price movements alone.

The odds in sports prediction markets are very event driven, arguably more so (in the short term at least) than trading in financial instruments.  The nature of the events in different sports and their impact of the odds varies significantly.  The response of the market to a goal in soccer is going to look different to a 3 pointer in basketball, which should look different to a touchdown.  Unlike in financial data, I think it's possible you could identify a sport based on the live odds data alone.  So, that's exactly what we're going to try!

## Guess the sport!

Let's play a game.  Can you guess which sport the graph below belongs to?  I'll show you 5 different matches; see how many you can guess!  You don't have to guess the specific game, just the sport.  Each shows the real-time odds from the start of the match, until the end.  Some hints and tips to have a think about before you dive in:

* the number of different possible outcomes
* which in-game events will drive the biggest changes in odds?>
* how frequent are they?
* can the market see them coming?
* are there significant gaps in play where the odds would stay constant?
* anything else you can think of!

Have at it...

<div class="responsive-wrap">
<iframe src="https://www.picodoc.org/wp-content/uploads/datavis/sportguess/guess.html" width="100%" height="570" frameBorder="0"> </iframe>
</div>

So, how did you do?  See any interesting patterns or differences between different sports?

For me probably the most interesting sport is soccer.  Looking at these charts it seems the prediction market has decided that the only in-game events of any significance are goals and red cards.  Only these events, and the time remianing, seem to have any significant impact on the odds.  Everything else is basically ignored.  It's also remarkable how efficient the market seems to be; after a goal the market immediately moves to the new prices, there's very little uncertainty, the market just 'knows' the new odds.  In fact [an academic study](http://www.academia.edu/7195697/Information_and_Efficiency_Goal_Arrival_in_Soccer_Betting) has been carried out demonstrating this remarkable efficiency in detail.  This makes for very distinctive charts where the odds slowly and smoothly change according the the time remaining, and occasionally jump to a new value in response to goals and red cards.  I can spot a football chart from a mile away!
