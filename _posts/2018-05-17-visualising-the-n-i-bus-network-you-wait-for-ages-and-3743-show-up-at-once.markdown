---
layout: post
title: 'Visualising the N.I. bus network: you wait for ages, and 3,743 show up at
  once'
date: 2018-05-17 10:16:11.000000000 +00:00
permalink: "/visualising-the-n-i-bus-network-you-wait-for-ages-and-3743-show-up-at-once/"
---

__This post was a collaboration with Ryan McCarron__

Translink recently made available their set of Ulsterbus, Goldline and Metro timetables and routes on [Open Data NI](https://www.opendatani.gov.uk/organization/translink). We combined these data sets to find the expected position of each bus in the dataset at one minute intervals throughout the 3,743 valid timetabled routes listed.

<div class="responsive-wrap">
<iframe src="/assets/buses/index.html" width="100%" height="550" frameBorder="0"> </iframe>
</div>

Here, blue dots are Ulsterbus/Goldline services, and the remaining dots are the various Metro routes in Belfast.

Firstly, notes on what's here. These bus services:

* Are not school-holiday-only
* Are not bank-holiday-only
* Operate on Mondays
* Are in the dataset
* Are valid in April 2018

These restrictions were to avoid overlap of similar services operating differently on different days of the week. There were some timetabled routes which were running at unusual times (e.g. 36 o'clock), and since we're not capable of handling nth dimensional time, we discarded these routes. Secondly, there were some data missing from the set entirely: most notably the "Derry City" subset didn't contain any local metro service information, so the visualisation above will not necessarily contain data for all routes.

This data gives a fascinating insight into how Translink has to support the needs of the NI populace. The first example of this is the very first bus in the visualisation: the 00:50 X4 service, which runs to make sure people in Derry/Londonderry can catch early flights out of Dublin.

The best example though is the collapse in the spread of activity around 8:45 AM - at this point the buses are almost entirely located within cities and towns, getting everyone to work on time. A very similar effect happens around 3:30 PM, presumably to collect schoolchildren from the same population centres.

We've also plotted heat-maps of the bus locations across NI - this just represents how much time any bus spent in that location. The hotter the spot, the more time there. Predictably, the cities are popular areas, but there are interesting interconnected areas jumping out as well. For example the North Coast is almost its own island of public transport.

![N.I. bus heatmap](/assets/2018/05/buses-NI.png)

And the same heat-map for Belfast city.

![Belfast bus heatmap](/assets/2018/05/buses-Belfast.png)

There's quite a bit of detail in the above visualisations - rather than have us list features, instead feel free to dive in and see what you can find.

To produce the visualizations above we used [torque.js](https://carto.com/torque/), [leaflet.js](https://leafletjs.com/) and [OSM](https://www.openstreetmap.org)
