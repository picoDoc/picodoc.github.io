---
layout: post
title: 'UK Electoral politics: what makes a seat ''safe''?'
date: 2015-08-18 16:14:52.000000000 +00:00
permalink: "/uk-electoral-politics-what-makes-a-seat-safe/"
---

<div class="responsive-wrap">
<iframe src="https://www.picodoc.org/wp-content/uploads/datavis/election/election1.html" width="100%" height="740" frameBorder="0"> </iframe>
</div>

Most of us have seen the phrase 'safe seat' used many times in political discourse.  According to wikipedia <q><em>A safe seat is a seat in a legislative body which is regarded as fully secured, either by a certain political party, the incumbent representative personally or a combination of both.</em></q>  So that's great, but why are some seats 'safe' and other are not?  What differentiates a safe seat from a marginal?

Way back in May there was a general election in the UK; the people spoke and David Cameron's conservative party was elected with a narrow majority.  This was not the expected result, and plenty was written at the time about it [including by me]({% post_url 2015-05-19-uk-general-election-2015-telling-the-story-of-results-night-with-data %}).  Now that the dust has settled, the [final vote counts](http://researchbriefings.files.parliament.uk/documents/CBP-7186/hocl-ge2015-results-full.csv) from every constituency have been released, and our glorious government also provides a wide range of up to date [constituency level statistics](http://www.parliament.uk/mps-lords-and-offices/offices/commons/commonslibrary/statistics-for-uk-constituencies/) including house prices, unemployment, demographics, benefits and more.  This is some great open data , and I'm going to use it to try to shed some light on why different constituencies vote the way they do.

So I've collected all this data into a digestible form: for each constituency I have the vote share (as a percentage) that each of seven biggest parties polled, alongside as many different constituency level statistics as I could find.  I calculated the [correlation coefficient](https://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient) between each parties electoral performance and each statistic, so we can see which statistics are the best predictors of electoral success or failure in a given constituency.  The correlation coefficient is valued between -1 and 1, where 1 is a perfect positive correlation, 0 is no correlation and -1 is a perfect negative correlation.  So which statistics best predict party performance?  Which statistics can tell us where the safe seats are?  Let's have a look:

![Correlation coefficient matrix of voting patterns and constituency level statistics](/assets/2015/08/correlation1.png)

So this is pretty cool, alot of the insight contained in this matrix might be considered common sense, but it's still very nice to see this backed up by hard data.  So for the main two parties we can dig in a little and have a look at the best and worst predictors at the constituency level.  Let's have a look at Labour first:

<div class="responsive-wrap">
<iframe src="https://www.picodoc.org/wp-content/uploads/datavis/election/election2.html" width="100%" height="740" frameBorder="0"> </iframe>
</div>

So the best positive predictors are as you might expect for a major left-wing party: in more socially deprived constituencies people are more likely to vote for Labour.  The two best negative predictors are perhaps a little more interesting: percentage over 65 and houses sold.  So I guess this backs up the cliche that people tend to move to the political right as they get older, and also if they own (or are interested in selling) their house.  These plots are also interesting as we can see clearly some outliers from the trend.  For example, UKIP's sole victory in Clacton is visible as an outlier in the top left plot, as is Nick Clegg's constituency in Sheffield.  Similarly we can see a group of points in Scotland - mainly inner city Glasgow - which seem like natural Labour seats but were won by the SNP.  These points are a nice illustration of the UK's slightly unusual 'pseudo two party' system, where there are two main parties surrounded by a few smaller ones who get seats based on local politics or particular issues.

As you might expect the best positive and negative predictors of Conservative electoral success are almost exactly the opposite of Labour's:

<div class="responsive-wrap">
<iframe src="https://www.picodoc.org/wp-content/uploads/datavis/election/election3.html" width="100%" height="740" frameBorder="0"> </iframe>
</div>

If we look back to the correlation plot however we can see a few other interesting predictors for each of the main two parties.  One of the best negative predictors for the Conservative party is Latitude!  Very few people in the North of England, and almost no one in Scotland vote Tory.  Area is a reasonably good negative predictor of Labour voting success, as Labour tend to do much better in inner cities.  This is why electoral maps of the UK often seem very blue: Labour's constituents are live much closer together in small constituencies!

Looking at these numbers for some of the minor parties is also interesting.  One of UKIP's best positive predictors for example is population over 65 (for reference their sole constituency of Clacton, is the second oldest in the UK).  Also, rather unsurprisingly, by far the best predictor of SNP success was Latitude (for those who aren't aware, Scotland is in the North).

So maybe this analysis could be useful to party strategists (because as we all know, correlation equals causation).  How can David Cameron generate more safe seats for the Torys?  Well, based on our correlation matrix the next Conservative manifesto might look something like:

* Reduce the number of unemployed and people on benefits
* Make sure as many people as possible live to be over 65
* Move the entire country due South-East (set sail for Belgium!)

So basically it's in the Tory's interest to make the country a nicer place.  On the other hand a reformed Labour manifesto takes on a somewhat darker tone:

* Increase the number of unemployed and people on benefits
* Make sure as few people as possible live to be over 65
* Move as many people as possible into large cities

These are obviously not serious suggestions...but it's a fun and very rich dataset to play with!  The initial tableau figure at the top of this article gives the user full flexibility to look at correlation between all the stats and voting patterns, I'm sure there's plenty more insight buried in this data.
