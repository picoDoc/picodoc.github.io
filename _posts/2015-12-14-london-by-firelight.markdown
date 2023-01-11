---
layout: post
title: London by Firelight
date: 2015-12-14 12:05:09.000000000 +00:00
---

Fire is pretty great.

For nearly half a million years, humans have been using it to provide light, warmth, tastier, healthier food and eventually assist in tool-making and communication. But when fire becomes uncontrolled, the first thought to mind is “who will help, and when will they be here?” If you’re a pyrophobe, this question probably comes to mind a lot more often. The first answer is pretty self-evident; that’s why we have various fire services. The “when” is a little trickier. London, the largest city in Europe, has an average response time of the London Fire Brigade (LFB) of around 5 minutes and 30 seconds. But let’s delve a little deeper, to put the pyrophobe’s mind at rest.

Last year, the LFB made available the [LFB incident records(http://data.london.gov.uk/dataset/london-fire-brigade-incident-records) from January 2009 to the current month, which contains all emergency responses by the LFB within the greater London area. The data is quite rich, containing around 700,000 incidents (both special service emergency calls and actual fires), along with various spatial, location-type and response data. These three alone are extremely interesting. Pretend, for a moment, you are the aforementioned pyrophobe. The following map shows where you probably don’t want to live:

![London's burning](/assets/2015/12/Londons-Burning.png)

This map shows a scatter of all locations of emergency calls to the LFB throughout the whole dataset. Some obvious inferences from the data:

* Many fewer calls to parklands, Thames and the river Lea area
* Most calls concentrated within the centre of London
* High density of calls along main roads

This last point is debatable – there may be an over-representation in the data from approximating the location of the emergency response. One note on the data itself – the locations of incidents at private dwellings are rounded to the nearest 100m to provide anonymity.

When we modulate each point with the response time to the call, we can see a fuller picture:

![LFB Response Map (colour in seconds)](/assets/2015/12/FireRespMap_s.png)

A close look at this plot shows islands which are lower in response time than others. In particular there are several knots of dark blue – we can reasonably assume these are the locations of the fire stations. If we overlay this with the actual locations of the stations, we do indeed see a good match:

![LFB Response Map with Stations](/assets/2015/12/FireRespMap-Stations_s.png)

Using this dataset then, we could probably derive the locations of the fire stations if we ever lost them and need them in a hurry. Isn’t that useful? No, it is not. That is what calling 999 is for.

The response time category is by itself very interesting – it is considered the attendance time for the first engine to arrive after it has been mobilised from the station. This means the only significant factors modulating the response time will be the road and what is encountered on it. That’s why we see the shapes above – the biggest modulating factor is simply distance and road navigability. Notice how the dark blue areas spread a little further out from the centre, and along some straight lines. This is due to lowered congestion and accessibility along main roads. If, as the pyrophobe, you still are concerned about where to live, at least pick a blue area. I had planned on mapping the fire numbers by area, but the density map above, along with this map from LFB (https://maps.london-fire.gov.uk/) shows subsets of the data broken down by borough, including a lower-resolution average arrival time, as above. What is doesn’t provide is how the response time varies with the time of day, week and year, as well as a few other interesting tidbits.

### Timeliness

Firstly, let’s look at how the response time varies by time of day. What particular 5-minute segment of the day should give you, o pyrophobe, the most worry?

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/101" width="120%" height="650" frameBorder="0"> </iframe>
</div>

As it turns out, the middle of the night. Don’t sleep.

This graph is simply the average response time in each 5 minute window throughout the day averaged across the whole data set, and really has several interesting features. First, and most obvious, is the standard deviation of the response time, which is a little under two minutes each way. This is fairly constant all day with a small increase in the afternoon, which in consistent with the idea the biggest factor in response time is simply road travel time modified by traffic. When we look at the trace of the average response time, we can see a couple of counterintuitive results – first, the longest response time is between 02:00 and 07:00. We can suppose this is due to a couple of factors – the simplest explanation is our trusty firemen are tired. While they do a heroic job, they are still human, and humans are generally not nocturnal, and the current schedule of mixed day and night shifts for the LFB (two day shifts, two night shifts and four days off) likely is tricky to adapt to. As well, this period is towards the end of the night shift, which ended at 09:00 pre 2011, and 09:30 since.

The second explanation might be just as simple – it’s dark. Even a skilled driver navigating a tonne of steel, fuel and water through the streets has to take it a little slower when he can’t see as well. This might further be supported by the monthly shape, which we’ll see soon.

The second feature is the lowest times are the morning rush hour. Possibly this is due to shift overlap from night to day, or the fire service having some unknown methods for dealing with the traffic they can only predict at this time of day. It’s probably not flying fire engines, but if it is, we can at least infer they only last a few hours and require about 20 to recharge.

While the night is dark and full of terrors, these are reduced somewhat by the following plot, which shows us the number of responses by the LFB in the same 5 minute intervals of the day each year:

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/27" width="125%" height="650" frameBorder="0"> </iframe>
</div>

There’s a lot going on here, so let’s look at the calls for actual fires first. This is nicely sinusoidal, indicating people’s habits of setting fires are fairly diurnal. Not many people are awake in the middle of the night, so the numbers of fires are pretty low, coming to a minimum a little after 06:00. The maximum is in the evening, around dinner time/home time. Check your ovens, check your chip pans, inspect your electronics as you turn them on returning home, because they bring death.

The really interesting blip here is the period from around 9:25 to 9:40. The number of fires responded to jumps up dramatically, and then leads to a reduction for the next 30-40 minutes. In fact, this 15 minute interval sees a 31% decrease in the number of fires. Why is this? Some insight might come from the fact the most responded category in this interval is “Dwelling”. Make sure you turn everything off before you leave the house! But probably if you remember at 9.45 you left the hair straighteners on, call home, because the place will have burned down by then if it’s going to burn down, which possibly explains the “dip” after the rise.

The orange segment above shows us non-fire responses – traffic accidents, floods etc. The minimum here is a little earlier at around 05:20, which is likely due to an increase in traffic after this time. the period from 07:00 to 22:00 in London is some kind of traffic hell, so collisions which require the Fire service are likely to be much higher at these times, with a particular bulge in activity from 17:00 to 20:00, when people are racing home full of the rage of the day.

This is how the fear of fire should evolve throughout the day. But what about the week?

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/177" width="125%" height="650" frameBorder="0"> </iframe>
</div>

This is the plot of total LFB calls on each day in the dataset (note baseline at 100k). This clearly shows a massive spike in incidents on Sundays – 7.3% over Thursday, the least flammable day of the week. This is a fairly expected result – the weekends see more people at home, cooking more (maybe the only time all week), plugging things in that wouldn’t be on other days and generally disturbing the place – enough to create some extra work for the LFB.

What about the monthly changes? We’ll focus on response time again. Below we see something that supports further the increased response time when it’s dark, and also when the weather is bad: The winter months have (mostly) the longest response time. This is fairly understandable, but why does July have such a large increase over the others? Note that, while it is likely there is some random variation here, each month has around 50000 events – even small variations are significant.

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/191" width="125%" height="650" frameBorder="0"> </iframe>
</div>

We can try to observe some correlation with external factors though. The most likely road-related events are weather, traffic and daylight. The UK Met Office offers [climate summaries](http://www.metoffice.gov.uk/climate/uk/summaries) of SE England which gives us rainfall in mm per month and days of frost each month. The London Datastore offers [roadwork listings for London](http://data.london.gov.uk/dataset/key-performance-indicators-tfl-road-network) (capped at 3753 in a 28 day period!) and the average daylight hours per month for London are well-established.

We can look at each of these individually:

#### Rainfall

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/204" width="125%" height="650" frameBorder="0"> </iframe>
</div>

#### Days of forst

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/198" width="125%" height="650" frameBorder="0"> </iframe>
</div>

#### Monthly roadworks

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/210" width="125%" height="650" frameBorder="0"> </iframe>
</div>

#### Daylight hours

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/192" width="125%" height="650" frameBorder="0"> </iframe>
</div>

As it turns out, there is no simple correlation between average response time and rainfall, frost, roadworks or daylight. We’ll see shortly how single inferences can be made, but the average picture does not give us a well-defined correlation. We can determine the Person correlation coefficient (PCC – a value of ±1 indicates perfect positive/negative correlation, a value of 0 no correlation at all) for each of these variables correlated with average monthly response time to better quantify the correlation (or lack thereof):

| Variable          | PCC     |
| ----------------- | ------- |
| Rainfall          | 0.049   |
| Days of forst     | 0.17    |
| Monthly roadworks | -0.1201 |
| Daylight hours    | -0.2163 |

At best, this clarifies the system is complex. Certainly, rainfall has almost no bearing on response time, which we might expect – rain is a fairly constant state of being in the UK. Frost may have a stronger effect than we see here – there are really not enough days of frost in the year to gauge how it affects response times, and the dataset is heavily weighted to zero days.

The lower two relations look like they may indicate something, but the correlation values are low, and the roadworks result is certainly counterintuitive – how would an increase in roadworks per month decrease the response time of road vehicles that month? Hours of daylight is most likely to be a true, but very weak correlation – as we saw before not only is the average response time longer in winter, it’s also longer at night. It’s just harder to navigate safely at speed in the dark.

Finally in the time series of response, we can look at the evolution over each month in the dataset:

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/145" width="125%" height="650" frameBorder="0"> </iframe>
</div>

First, let’s address the end of 2010 – this was a period of [significant snow and frost in the UK](https://en.wikipedia.org/wiki/Winter_of_2010%E2%80%9311_in_Great_Britain_and_Ireland), and London was no exception. Despite days of frost not being well correlated with the data, this is almost certainly due to snow lying on the ground for two months.

Secondly, each individual year maintains a rough “bowed” shape – longer response in the winter months. Again, this supports the weak correlation with daylight (or cold, or snow, or frost, or mulled wine consumed).

Thirdly, we can look at the year-on-year change. May 2011 saw a [change in LFB night shifts](https://www.london-fire.gov.uk/news/959D0744117C4DDC9D4FCD43F25A9849_PR1531.asp#.VmQ4sHbhCUk) designed to improve fire response in London. So did it? This is a little clearer in the year average response:

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/137" width="125%" height="650" frameBorder="0"> </iframe>
</div>

The answer is probably yes! 2011 saw a 2.3% drop from 2010, while 2012 had a full 3% drop from 2010 (increased since the shift change came in May 2011). But this only continues for a few years, so what happens in 2014? The [closure of ten stations](https://www.bbc.co.uk/news/uk-england-london-25640673) at the start of January 2014 is the most likely culprit. These changes are very small – no more than 18 seconds between the lowest yearly average and the largest. It’s still interesting to see changes in the data – and reassuring that even with the closure of ~8% of stations, the changes were so small.


### Perfidy

London is also home to scads of cads, bounders, and ne’er-do-wells, some of whom like to engage in a bit of false alarm to the LFB. The LFB data discerns between automated false alarms, false alarms with good intent, and malicious false alarms. These first two aren’t much fun, but it’s the last one we’ll focus on, which is rightfully criminal.

The distribution throughout the day follows quite closely to normal fires. The data binned to 5 minute intervals each day is quite noisy, but the trend is clear to see:

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/52" width="125%" height="650" frameBorder="0"> </iframe>
</div>

This on its own suggest false-calling the fire brigade is just a part of daily life for some people. There is a slight dip around 7am, presumably when the false alarm callers are breakfasting well, to prepare themselves for a day of malice.

The weekly distribution shows some similarities to that for fires, but has an interesting increase on Mondays. Perhaps the cause is “sorry boss, I can’t come to work the house is on fire”? Nevertheless, these numbers are pretty incredible – an average of around 240 malicious false alarms per day – that’s more than two per station – must cost a lot of time, money and safety.

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/242" width="125%" height="650" frameBorder="0"> </iframe>
</div>

The final thing we can look at that’s rather interesting is the over- or under-representation of false alarm property types as compared to those for all other responses. LFB classes properties as aircraft, boats, dwellings, non-residential, other residential, outdoor, and outdoor structure. We can obtain this by assuming if false alarms make up a certain portion of fire responses, each category of property should have the same portion of false alarms. Of all calls to the LFB in this period, 1.7% were malicious false alarms. The plot below then shows the multiple of this percentage of false alarms received for each category:

<div class="responsive-wrap">
<iframe src="https://plot.ly/~Toosuto/121" width="125%" height="650" frameBorder="0"> </iframe>
</div>

This is revealing in some ways – the false alarms for residences and outdoor locations are around what we expect. Rail vehicles are substantially lower – who calls a false fire on a train? But boats and aircraft are, apparently, fair game. Perhaps these people were running late and wanted to delay the flight or boat a little? We can only assume. To clarify though, there were only 18 total false alarms reported for aircraft across the whole data set, so this is certainly on the low end of statistical significance.

The LFB does a great job, and this data in a large way reinforces that. Weather and roadworks barely slow them down, as does closure of stations. The average response in a city where traffic has moved at the same speed for 200 years is around 5.5 minutes and can be much shorter, which should reassure all the pyrophobes around us. The real take-away here is this: if the fire alarm goes off on your plane at 30,000 feet while over London, don’t worry — it’s probably a false alarm.

All work above done with Matlab and Plot.ly.
