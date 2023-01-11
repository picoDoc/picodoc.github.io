---
layout: post
title: Coronavirus and data
permalink: "/coronavirus-uk-data/"
---

Epidemiological modelling has had more attention in the last 3 months than ever before. We've all seen various "nightmare scenario" predictions on the news, and thankfully the worst of these have not come to pass. Using modelling to predict the future spread of a virus is a very complex and difficult problem: you need to predict the behaviour of entire societies, and small changes in model inputs can result in massive differences in outcomes. However predicting the future is not the only thing these models are useful for, we can also use them to examine and understand the past.

Many of us have spent the last 3 months looking at charts like this on the news, showing daily new infections in the UK.

![daily new cases](/assets/2020/06/daily-new-cases-1.png)

This paints a certain picture: that the UK had a long peak of new infections through all of April, and even now in mid June the number is still at around 30% of the peak value.  That doesn't seem like a great achievement for 3 months of lockdown.  How should we interpret this? What does it tell us about what has happened with the spread of the epidemic, and what is happening now? First I would argue that on it's own this chart can be very misleading, as it does not consider a critical factor: how many tests were being carried out. I'm going to combine this key piece of data with a simple model (so simple I'll provide the excel file!), and hopefully shed some light on what's really happened over the past 3 months.


FiveThirtyEight's Nate Silver published an [excellent article](https://fivethirtyeight.com/features/coronavirus-case-counts-are-meaningless/) back in April trying to demonstrate the same thesis: that on their own new infection numbers are not very useful. At that time he was trying to show how these charts might look based on how countries ramp up their testing.  Now in hindsight we _know_ how the UK ramped up it's testing, so we can adapt his model to explain and understand better the data we've seen in the UK over the past months.

So how does this model work? I've attached the [excel file](/assets/2020/06/covid_model.xlsx) so if you want you can see for yourself, but in essence it's pretty simple, with a number of key features:

* It uses [standard epidemiological model](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model) to predict the spread using the now famous "R number".  So in each generation (5 days) each infected person will spread the disease to _R_ more people.  I've taken values of R that are roughly inline with the general concensus (although there is alot of debate on this): R is set to [3 before lockdown](https://www.imperial.ac.uk/media/imperial-college/medicine/mrc-gida/2020-03-26-COVID19-Report-12.pdf), 1.8 as some measures were brought in initially in early March, and then [0.85 in late March](https://www.gov.uk/guidance/the-r-number-in-the-uk) when the UK implemented a full lockdown.
* I borrowed Nate's assumptions about what percentage of cases are serious, mild and asymptomatic, and what percentage of the population have similar symptoms but _do not_ have COVID-19.  This is very important when modelling testing, as tests are administered based on symptoms, with the most severe being given priority over mild cases, and asymptomatic cases not being tested at all.
* I added a simple model to predict fatalities from the disease by assuming that they will be spread out evenly over a period [1-5 weeks](https://www.telegraph.co.uk/news/2020/03/12/coronavirus-kills-average-185-days/) after infection, and that the fatality rate is [1.2%](https://www.medrxiv.org/content/10.1101/2020.03.05.20031773v2)

Using a simple model with these assumptions and fitting the reported data for testing and infections, the UK's "patient zero" should have been in late January.  These parameters are based on real world sources where possible, but you can easily tweak any of them and try fitting your own scenario to see how well it matches the observed data.

So let's look at the chart of new infections shown above again, comparing the data to what this model predicts.

![daily new cases model](/assets/2020/06/daily-new-cases-model.png)

So the model seems to match reality pretty well, always a good start.  And here's the same chart for daily deaths compared to the model predictions:

![daily new deaths model](/assets/2020/06/daily-new-deaths-model.png)

So at first glance this looks pretty good, the overall trend predicted matches well in both cases. But is it really right? Well, the honest answer, as with any model, is we'll never really know. Models do their best to replicate reality, but the real world is complicated. There is another key prediction of our model that suggests it might be reflecting reality fairly accurately: the overall number of infections, not just those detected by tests. This model predicts just under 5% of the UK - or 3.2 million people - has been infected by COVID-19, which matches well with the results of antibody testing which estimates [6.7% of people have had the illness](https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/12june2020#antibody-tests-for-covid-19).  Broad swab test surveys estimated that during the two weeks from 25 May to 7 June 2020 an [>average of 33,000 people had coronovirus](https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/conditionsanddiseases/bulletins/coronaviruscovid19infectionsurveypilot/12june2020#number-of-people-in-england-who-had-covid-19), where the model predicts around 25,000 new infections in that time period.  Again this is a reasonably close match.

So if you're satisfied that this model reflects reality reasonably well we can start using it to get a better picture of what really happened over the last 3 or 4 months. You might have noticed that the number for total infections seems very high compared to the chart of new infections detected per day: that's because it is. Here's what the models prediction of total infections looks like compared to those that were actually detected throughout the course of the epidemic:

![daily total cases model](/assets/2020/06/daily-total-cases-model.png)

So this shows a dramatic gap between detected and actual cases of COVID-19, particularly at the peak in early April. According to this model at the peak around 100,000 people were being infected every day, and only about 3% were being detected by tests. This number has now dropped to less than 5,000 per day, a factor of 20 reduction, which is much higher than the decrease by a factor of 3 you see if you simply look at the detected numbers. The model predicts that we are now detecting around 30% of the actual cases, mainly because a large number of people only have mild, or no symptoms at all. These cases will likely be very difficult to detect, which is one of the main reasons for a track and trace system: it might be able to better target tests at those who have mild or asymptomatic infections.

The number of deaths has also not dropped as far as you might expect: according to this model that's because deaths are significantly lagged from infections, so we should expect them to continue falling, even if the number of new cases plateaus (this is as close as I'll come to making a prediction about the future)

If we look at the data for testing, and the positive test percentage we can also see a much clearer picture of the data

![daily tests](/assets/2020/06/daily-tests-1.png)

![positive test percentage](/assets/2020/06/positive-test-percentage.png)

![daily new cases model](/assets/2020/06/daily-new-cases-model.png)

So most of the UK's ramp in testing happened in late April/early May, which bumped up the number of cases detected, skewing our statistics.  Another thing to keep in mind is that if we see another rise in cases, or a 2nd peak, we should be very careful comparing it to the first: because of increased testing the data will likely look very different this time.  In a possible future where we stopped all of our social distancing today (June 21st) and returned the R number to where it was in early March, we would be back to 100,000 cases per day by the end of July, however the new infections chart would look very different.  Assuming our test capacity stays steady it would look like this:

![bad future](/assets/2020/06/bad-future-1.png)

The shaded areas compare the equivalent weeks in March and April to the imaginary second wave.  And if our test capacity continues to increase - as is likely - it will look different again.  So it's definitely worth being very cautious interpreting these charts in isolation!

As a last note, it's good to have some humility when building any models, especially of something as complex as a pandemic: all of this could be totally wrong! I think one of the lessons of the last 3 months is that most models are wrong!  I don't think this means they're not worth making though, even if not correct they still help us think more clearly about what's really happening.
