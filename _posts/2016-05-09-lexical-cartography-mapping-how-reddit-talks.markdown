---
layout: post
title: 'Lexical Cartography: Mapping how Reddit Talks'
date: 2016-05-09 11:18:05.000000000 +00:00
permalink: "/lexical-cartography-mapping-how-reddit-talks/"
usemathjax: true
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

_“One does not inhabit a country; one inhabits a language.” Emil Cioran_

How we talk to one another depends largely on the current circumstances. From “yes Boss let’s shift these paradigms” to “running late cu in 5”; each situation with a different person or group requires a different lexical toolbox to get the point across, to enable rapid conversation, or even more fundamentally to show you are part of the group you’re talking to.

The internet, with thousands of different forums, IM services, and social media sites, is a truly fascinating communication channel. We can group people easily into communities based on who they talk to, what topics they talk about, and where they talk about them. But can we group people into communities simply based on the words they use and how often they use them? Does language define a community, or a nation, as Pan Cioran suggests?

Let’s see what the data tells us.

### Where the word-things are

Starting last year, [Jason Baumgartner](https://pushshift.io) made available the entire collected comment history of reddit from 2006 onwards. This is an incredibly rich dataset containing around 2 billion comments with a timestamp, subreddit and full comment body, as well as comment score, author and parent ID for linking threads together. The dataset clocks in at around 1.3 TB in total, putting it on the small end of the fabled realms of Big Data. While this is a nice label to put on the work, what we’ve really done here is convert a big data problem into a medium data problem.

While this data has a wealth of applications, what we really want are the words people use and the frequency with which they use them to build a lexical fingerprint of whichever group we want to look at. With this in mind, Matt developed a tool for parsing the full comment set into a database table keeping only the subreddit, time (in weekly intervals), word, and word count. This reduces the data from over 1 TB to around 100 GB, and keeps it in a readily accessible format.

This method allows us to circumvent the single greatest obstacle for big data problems – the need for enormous processing power and storage. Instead of requiring a cluster to process every query, this method allows us to keep the information relevant to the problem at hand, and access it quickly. This has some obvious disadvantages, namely the total inability to handle phrase searching and no information about distinct comments or commenters. Nevertheless, we can run the whole database on a home PC server and access it with a mid-range laptop, and pull out all the data we want; by defining the problem well, we can devise a computationally “cheap” solution.

The stack used here is Python – PostgreSQL – R. Python is used for parsing the comment data into individual words and importing them into a time-resolved PostgreSQL database. This tool looks at each comment, throws out all symbols that aren’t letters (which results in some tricky stubs like “aren”, but we deal with them later) and keeps the words remaining, and adds them to the count we have in that time interval. Once the database is established, we then query it with RPostrgreSQL, to get subreddit sizes in a time interval, and word frequency tables for each subreddit. Once we have this data, processing is done in R. Web display is driven then by d3 and sigma.js. Full details of the methods used can be found in the [github readme](https://github.com/toosuto-r/redditComments).

Once we have these word frequency tables, we can start to identify the nations of reddit – communities connected by the words they use, and how routinely they use them. The base grouping of people on reddit is naturally the subreddit, where all comments will be focused around a particular general or specific topic. The word frequency table for each subreddit on its own can be extremely interesting, but it needs some tidying up from the methods above. We have a list of “stop” words which are taken out, which begins with some of the most common words in English (I, you, the, a, and so on). We then take out some words which aren’t really a lexical contributor to the subreddit (http(s), com, “deleted” and “removed” from expunged comments, and URL code fragments which have snuck their way in). We restrict ourselves to the most-active 300 subreddits (by word count), and what we’re left with are the more interesting words people use in each of these groups.

### Happy Talk

This set certainly shows some interesting variation; while a lot of subreddits share the word “like” as the most-used word (often followed by “get” and “people”), the top set of words can vary significantly. Below is a selection of what the <strong>top ten words</strong> in a few choice subreddits looks like for the week beginning 22nd February 2016 – we’ll look at AskReddit (by far the biggest source of comments in the database), some political subreddits, a national subreddit, and an image-based subreddit.

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/topSubsTable_colourUp.html" width="120%" height="300" frameBorder="0"> </iframe>
</div>

In these top ten, variation and connection is immediately evident. In particular, Politics, SandersForPresident and The_Donald share the names of the party hopefuls in the upcoming US election. Not many other subreddits will have “Bernie” or “Trump” at the top of the table, though SandersForPresident is alone in talking about itself so much. unitedkingdom on the other hand is more concerned with the EU and the UK’s place in it, while BlackPeopleTwitter is filled with amusing notions on how white and black people talk in the US. Everyone likes talking about people, about getting something, or about liking something (or, possibly, likening two somethings). Each subreddit is its own pseudo-island with its own manner and topic of speech. We can see if by comparing them we can start to group subreddits together into clusters, or nations, based on how similar this speech is.

Before we move to looking at comparisons, let’s address some of the drawbacks of frequency table analysis: Firstly, spam attacks – in the first week of 2016 the circlejerk subreddit was massively dominated by the words “comcast” and “xfinity” – this isn’t too surprising, but a raid on the subreddit Funny of these same two words ended up giving it a substantially different frequency table to what it might have otherwise. Secondly, while we discard stop words, we don’t stem the words listed here – that is, “like”, “liked”, and “liking” are treated as separate words. However, this still allows comparison between tables, and avoiding it saves quite a bit of computation on the input parse. Thirdly, we discard any sentiment analysis. Two subreddits could use the same words on the same topic but with wildly varying tone, and we wouldn’t be able to distinguish between them.

### Not meanings, but words

To identify which subreddits are “close” lexically, we must compare the word frequency tables in a sensible way. For any pair of subreddits, we take the top 3000 words used in the investigated week from each and do a full join between them. We can then compare the percentage use of each word between subreddits through the metric:

$$ wordSeparation = abs(A-B) * (A+B) $$

where <em>A</em> and <em>B</em> are the percentage uses of the same single word in the first and second subreddits. The first <em>A</em>-<em>B</em> term is simple – a large difference in percentage use for a word means the subreddits differ in use of that word. The second term multiplies this difference by the sum of the percentage uses of the word. This has two purposes:

* Makes changes in highly-used words more “valuable”
* Ensure low-use words existing in one subreddit and not another give a low difference value

This first point is based in the idea that the most commonly-used words are more of an indicator of how a subreddit talks than rarely-used words, and so should be more highly weighted. The second is to mitigate the fact that we use a cut-off in words polled, so the difference between the 3000th word (which has some actual percentage, and may appear in both subreddits) and the 3001st (which in this case may no longer appear in both subreddits, leading to an artificially large change) is minimised.

To get the lexical separation between subreddits then, we can sum this difference for all of the words which occur in both subreddit A and B to get a lexical separation (<strong>LS</strong>). This is a simple metric which can be applied to any subreddit pair we choose (including a single subreddit at different times) to reveal how closely they are connected. In this way we can start building a “map” of subreddits. But first, let’s look at some examples.

One of the more prominent new subreddits is /r/SandersForPresident (<strong>SFP</strong>) – in the last week of February 2016, this subreddit was ranked 5th in all of reddit by words used. Using the above metric, how well-connected SFP to other subreddits? We’d expect that it would have a great connection to political subreddits at least, and probably most of the news subreddits as well. The<strong> ten most connected subreddits</strong> for SFP in this week are listed below, along with the lexical separations, to get a sense of closeness:

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/SFPtop10_up.html" width="120%" height="300" frameBorder="0"> </iframe>
</div>

Politics, the subreddit for his main rival, news subreddits, and other national subreddits which are concerned about politics are right up there. There’s always plenty of political discourse on explainlikeimfive and dataisbeautiful during election season as well. As we’ll see, a closest match at 11.5 is good but not great, which we might expect – “Bernie” is not a common top word.

Then, let’s look at the other end of the scale – what is SFP least connected to? As it turns out, it’s almost entirely foreign language subreddits (Sweden, france, de etc). This is great for validation of the metric, but not so informative. So let’s look at <strong>SFP’s bottom ten English subreddits</strong>:

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/SFPbottom10_up.html" width="120%" height="300" frameBorder="0"> </iframe>
</div>

Number one (by <em>least</em> connectedness) is spam. Number two is a satirical subreddit about computer hardware, and three is a twitter recording subreddit about UFOs (perhaps a little surprising considering conspiracy matches so well!). The remainder is computer hardware and game trading, as well as anime and music – hobby subreddits. Obviously, SFP is Serious Business. Let’s look at the<strong> table of selected subreddits</strong> from earlier, but focus on their <strong>best LS matches</strong> to other subreddits rather than the top words they use:

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/topDVsTable_up.html" width="130%" height="300" frameBorder="0"> </iframe>
</div>

Each of these seem like sensible matches – AskReddit matches well to popular general-topic subreddits, politics matches well to subreddits dealing with the issues of the day (as do SFP and The_Donald), unitedkingdom matches best to other national subreddits, and BlackPeopleTwitter matches well to other images-of-social-media subreddits (and image based subreddits in general).

So what about the rest of the subreddits? We can do exactly the same process for all 300 top subreddits, and form a matrix of their relational values. A compressed table of the <strong>top 100 subreddits and their LS to each other subreddit</strong> are shown below – red is very well matched (LS &lt; 10), and white poorly matched (LS &gt; 30), with gradient colour in between. Mouseover to see the LS as well as the subreddits, and see if you can spot any interesting matches! Note self-matches are zero, and are set as grey. Additionally, this plot runs slowly in IE – if possible, use Chrome or Firefox.

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/expandingTable_up.html" width="120%" height="460" frameBorder="0"> </iframe>
</div>

The top-left section of the table is almost entirely default-subscription or massively popular subreddits. They’re usually quite well matched, due most likely to having such a large subscription base, with no specific topic in many cases, leading to casual conversation tending towards common words.

Outside this top 15 or so, we can look at some more interesting close matches. NFL, hockey, and NBA all have LS &lt; 10 with each other. Games and Gaming are unsurprisingly very well matched at LS 7.3. Canada and Australia have the single lowest LS in the top 100, at 4.1! This must surely be all that talk of the Queen, as they also match very well to unitedkingdom. In general, country-based subreddits match country-based subreddits quite well. Game-themed subreddits match other game-themed subreddits. Similar themed hobbies (Bicycling and Motorcycles, Food and Cooking) match well, as do news-oriented subreddits.

### Map-building

To display these relations in a more intuitive way, we’ll use a network diagram, where the length of connecting lines between subreddit nodes indicates generally how close they are. This is usually not exact, as the network has to be “solved”, fitting all the nodes and connections together with the correct spacing.

We can try using 300 nodes with 299 connections each, but this doesn’t produce anything revealing; it’s difficult to solve this layout meaningfully, especially when the result has to be a 2D image. Instead, we can look at which subreddits are extremely well connected. For the week analysed, we take the top fifth percentile of all connections which have been calculated. This results in 200 nodes with around 2000 connections total – still a lot of close ties. Once we have the layout solved (Fruchterman-Reingold in igraph for R), we can then use a community analysis (fastgreedy in igraph) which determines communities as groups having many edges linking the group as a whole, but few edges between each node in the group.

We can then take this one step further in asking what “defines” a community. The most effective way to separate them out from the rest of reddit is to see what words the subreddit group as a whole uses more or less than reddit. We can do this simply enough by averaging the total word use (as a percentage, to give each community an equal weight) of each word in the <em>community </em>and comparing it to the full <em>reddit </em>corpus for that time, using a similar metric to before for each word:

$$ representationValue = abs(community-reddit) * (community+reddit) $$

to get the over- or under-representation of a single word (which are equivalent here, as all we care about is deviation from the reddit norm) weighted by word popularity. We’ll call this the <strong>RV</strong>. For a sense of scale here, a word could be considered very different from the main reddit comment set with an RV of 1, which would imply a popular word in one subreddit (~1% use) with nearly no use in the main comment body. Scores above 1 are likely due to massive over-representation of an already popular word.

In doing this, we can create a <strong>map of the lexical nations of reddit</strong>, which we see below. Zoom with the mouse wheel (or double click), and click on a subreddit to isolate it and its neighbours and you can use the drop-down on the right to highlight a subreddit of your choice.

The different colours represent division into different communities, and clicking the subreddit shows that community’s top ten words by RV. Subreddit node size is logarithmically related to the words used in the subreddit this week.

<div class="responsive-wrap">
<iframe src="/assets/redditComments/first/singleSigmaCommunityF.html" width="140%" height="820" frameBorder="0"> </iframe>
</div>

There are a few very interesting features here! Firstly, let’s address the islands floating off on the side; these are connected to each other, but not the main web of comments. If the lexical nation analogy holds, these are island nations with their own niche interests. The main continent has a central region made up of the defaults and discussion subreddits (orange, containing AskReddit, relationships, WTF and a host of other ask- subreddits), news and politics subreddits (light blue, containing news, various national subreddits and subreddits for various movements), and game-related subreddits (leagueoflegends, starcraft, destinythegame).

Each of these major nations has connected smaller peninsulas. The most interesting of these is the blue sports region on the far right, containing baseball, soccer and various team subreddits. These are connected to the video game region through very few connections – mostly to subreddits for videogames with an eSports league (e.g. globaloffensive). It’s easy to envision how these link together – looking at the top words by RV, they both use “game” and “play” a lot. These particular links will also share competitive terminology, which binds this sports section to the main gaming section. The gaming region also extends a peninsula of more abstracted gaming subreddits in pink – for specific consoles or media. This group doesn’t differ too much from the main gaming set, but the more general game tone is visible from the RV table – while most words will have an RV of 1 or under as above, “game” here has an RV of 4.

This graph shows 15 total “nations” – they all sensibly depend from a related region, and share a common set of words with a common frequency. While each of these nations probably shares a sizeable chunk of its population while they talk in their current subreddit, in their current nation, they inhabit a common language. The data shows Cioran was, in this abstract sense, spot on.

Next time we’ll look at a similar analysis across the full data set, as well as a few more interesting things we can do with the lexical maps.
