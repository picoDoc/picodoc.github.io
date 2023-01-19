---
layout: post
title:  "Full colour 3D models of Strava routes"
date:   2023-01-19 00:00:00 +0000
---

Usually when I'm messing around on side projects I end up with a chart or spreadsheet as the end result. This time I have something real!

There's a niche market in turning GPS data from Strava runs and rides into tangible products like [posters or 3D prints](https://www.strava.com/apps/prints). A few small companies like PrintMyRoute (no longer operating), [Loopie](http://www.loopieroute.com/) and [Keepshape](https://www.keepshape.co/) make some pretty nice stuff.

![Loopie](/assets/2023/01/Loopie.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

![Keepshape](/assets/2023/01/keepshape.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

I've always thought this kind of thing was pretty cool.  However, to my knowledge all of these are either for making really nice framed 2D prints, or simple single colour tracks and 3D prints.  3D printing is pretty far from my specialism, but it seems to be rapidly progressing in terms of both capability and cost.  Full colour printing is now available at reasonable cost with [full colour sandstone](https://www.shapeways.com/materials/sandstone): this should allow us to make full colour 3D models any ride we choose by combining:
* The ride GPX file
* Satellite imagery from Google maps
* Elevation data from the [Shuttle Radar Topography Mission](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).  This is an amazing public resource with a resolution of around 30m

I know some 3D printing hardware is now reasonably priced to buy, but that's a much bigger project, so for this I outsourced the actual printing to [shapeways](https://www.shapeways.com/).  Basically my objective here is to go from a Strava GPX file -> full colour model to send to shapeways. I won't include full detail here (maybe for a future post), but just include broad steps.  Let's take the famous [Col Du Tourmalet](https://www.strava.com/segments/5170240) Tour de France climb as a good example:
  * After downloading the GPX file from Strava I opened in QGIS.  Here I import satellite and layer under the track (coloured in as a thick white line).  Export this as a [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) image
  * Using the absolutely phenomenal [BlenderGIS extension](https://github.com/domlysz/BlenderGIS), I import this GeoTIFF into [Blender](https://www.blender.org/). Add elevation from the SRTM dataset, tweak z axis and flatten the back of the model for mounting, trim down to model size (100mm), and export as a DAE file
  * Zip up the model file and upload to shapeways for 3D printing
  * Wait for a few weeks...
  * When the prints arrive finish model with a protective varnish, and mount on wooden plinth!

After all that I think I ended up with a pretty nice end product (even if my photography skills don't quite do it justice).  For reference these are around 10cm across.

#### Col Du Tourmalet

![Tourmalet1](/assets/2023/01/tourmalet1.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

![Tourmalet2](/assets/2023/01/tourmalet2.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

Here's a few other well known climbs I tried: Alpe D'Huez and the Snowbird in Utah:

#### Alpe D'Huez

![dhuez](/assets/2023/01/dhuez1.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

#### Snowbird

![snowbird](/assets/2023/01/snowbird1.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}

But the nice thing about this is I can make whatever I want, so long as I have a GPX track, so here's one of my favourite local rides around Belfast:

#### My local ride!

![belfast](/assets/2023/01/belfast1.jpg){:style="display:block; margin-left:auto; margin-right:auto; border: 3px solid black"}
