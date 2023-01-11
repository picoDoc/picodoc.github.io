---
layout: post
title: 'Wimbledon 2015: is women''s tennis less predictable than men''s?'
date: 2015-09-14 15:33:58.000000000 +00:00
permalink: "/wimbledon-2015-is-womens-tennis-less-predictable-than-mens/"
---

The data journalism blog [fivethirtyeight.com](http://fivethirtyeight.com/datalab/serena-williams-grand-slam-us-open-best-of-five-sets/) recently did a piece on how women's tennis is generally less predictable than men's, as a result of playing only 3 sets rather than 5.  They simply looked at match outcomes in various championships, and how often the pre-match favourite is beaten.  I can go one better and look at what happens <em>during </em>games using the live betting odds.

I collected live data on every game at this years tennis championships at Wimbledon, but for this analysis only used singles games with more than £1 million matched during play.  This leaves 61 women's matches and 58 men's matches.  For games with this volume of in-game betting the odds should represent a "true value" i.e. there shouldn't be much noise in the data.

So now I need a measure of the predictability of the odds during each match.  A simple measure of predictability is [volatility]("https://en.wikipedia.org/wiki/Volatility_(finance)") which is easy to calculate from our data.  A high volatility indicates that the odds changed often during the match i.e. it was unpredictable.  So for each of these matches I calculated the volatility of the odds <em>during play</em>.  If I rank the games according to volatility - where a higher number indicates a less predictable match - the 5 least predictable matches were all women's matches, while 4 of the 5 most predictable were between men (I've colour coded the entries to make it more obvious which are which).

| Most Volatile Matches | Score |
|-------|--------|
| <strong style="color: IndianRed;">Olga Govortsova v Magdalena Rybarikova</strong> | [7-6 6-4](http://www.tennislive.co.uk/wta/match/magdalena-rybarikova-VS-olga-govortsova/wimbledon-london-2015/) |
| <strong style="color: IndianRed;">Kristyna Pliskova v Svetlana Kuznetsova</strong> | [3-6 6-3 6-4](http://www.tennislive.co.uk/wta/match/kristyna-pliskova-VS-svetlana-kuznetsova/wimbledon-london-2015/) |
| <strong style="color: IndianRed;">Daniela Hantuchova v Dominika Cibulkova</strong> | [7-5 6-0](http://www.tennislive.co.uk/wta/match/daniela-hantuchova-VS-dominika-cibulkova/wimbledon-london-2015/) |
| <strong style="color: IndianRed;">Bethanie Mattek-Sands v Ana Ivanovic</strong> | [6-3 6-4](http://www.tennislive.co.uk/wta/match/bethanie-mattek-sands-VS-ana-ivanovic/wimbledon-london-2015/) |
| <strong style="color: IndianRed;">Zarina Diyas v Andrea Petkovic</strong> | [7-5 6-4](http://www.tennislive.net/wta/match/zarina-diyas-VS-andrea-petkovic/wimbledon-london-2015/) |

| Least Volatile Matches | Score |
|-------|--------|
| <strong style="color: DodgerBlue;">Novak Djokovic v Bernard Tomic</strong> | [6-3 6-3 6-3](http://www.tennislive.net/atp/match/novak-djokovic-VS-bernard-tomic/wimbledon-london-2015/) |
| <strong style="color: DodgerBlue;">Samuel Groth v Roger Federer</strong> | [6-4 6-4 6-7 6-2](http://www.tennislive.net/atp/match/roger-federer-VS-samuel-groth/wimbledon-london-2015/) |
| <strong style="color: DodgerBlue;">Vasek Pospisil v Andy Murray</strong> | [6-4 7-5 6-4](http://www.tennislive.co.uk/atp/match/andy-murray-VS-vasek-pospisil/wimbledon-london-2015/) |
| <strong style="color: DodgerBlue;">Mikhail Kukushkin v Andy Murray</strong> | [6-4 7-6 6-4](http://www.tennislive.net/atp/match/andy-murray-VS-mikhail-kukushkin/wimbledon-london-2015/) |
| <strong style="color: IndianRed;">Serena Williams v Timea Babos</strong> | [6-4 6-1](http://www.tennislive.net/wta/match/serena-williams-VS-timea-babos/wimbledon-london-2015/) |

Volatility in women's games is almost 60% larger on average than in men's, so this backs up the idea that women's tennis is in general less predictable.  So that's nice, the data from betfair definitely backs up the hypothesis that 3 set women's tennis is less predictable in-game than the men's game played over 5 sets.  Interestingly not a single men's game makes it into the top 5.  The highest volatility in a men's match-up was in the 2nd round upset where Dustin Brown knocked out Nadal, however 10 women's games were more volatile than this.  It's also worth noting how our own Andy Murray appears not once but twice in the tournaments 5 most predictable - and probably most boring - games.

Another game that some of you might remember as not quite going to plan - for me it was the best game of the tournament - was the match-up between Serena Williams and Heather Watson.  This game ranks as the 26th least predictable game, but because of the nature of the matchup - a local underdog against the dominant favourite - it was a fantastic game to watch.  So for a final demo lets have a look at the live odds during that game.

<div class="responsive-wrap">
<iframe src="/assets/datavis/WilliamsWatson/viz.html" width="100%" height="670" frameBorder="0"> </iframe>
</div>

I think the data tells the story of the match quite well. Even though Watson was serving a match point at one stage, the markets still never thought William's chance of winning was less than 40%; this alone tells the story of just how dominant a player Serena Williams is!

The package used to collect this data is now fully open-source and available on [github](https://github.com/picoDoc/betfair-data-capture). Betting data is really cool!
