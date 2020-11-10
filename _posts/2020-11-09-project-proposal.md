---
layout: post
title: Project Research
additionalClasses: smallImagesWidth
---

![Not Alone Bandana](https://cdn.shopify.com/s/files/1/0182/0827/products/BANDANA_001_900x.jpg)
**Not Alone Bandana by [ZrksZrks](https://zirkus-zirkus.com/products/not-alone-bandana)**


# Distant Socializing

#### What I want to explore

The current pandemic situation restricts our social life massively. In my personal situation, I have not yet met any of my fellow students in person, as I am not able to even go into the same country. We are not able to meet with people physically — social distancing is the overarching theme of the current social life. The only other means of communication are over text, phone, or video calls, leading with the provider Zoom. 

We are able to directly communicate with each other, exchanging stories, but the subtle nuances that are so important for communication are missing. We are missing out on the feeling of the presence of others in a room, we are missing out on the feeling of touch, we are missing out on the brief moments of anticipation before and after we meet someone.

In this project, I want to explore a way of communicating with one another but on a more subtle level. I hereby have set myself some guidelines that I would like to keep in mind:

- It should be a way of communicating that is not directly happening (e.g. no Zoom, text message, etc)
- It should inherit a more emotional message but it should not be dedicated to a romantic relationship
- Preferably it should happen asynchronously
- Preferably the outcome should be a tool that people are able to reproduce and therefore are able to use in their communities
- It might work in a semi-public or even public environment, thinking about the hallway of a shared apartment or office space
- It should not be a tool of communication that only works during the ongoing pandemic but that eventually could live even beyond that

#### Research

Here is a list of projects that I think are interesting, that are touching the same realm:

![Knock Knock](https://www.takram.com/wp-content/uploads/2016/03/knock-knock-article02.jpg)
**[Knock Knock / 8h Ahead](https://www.takram.com/projects/8h-ahead/) by *Takram*: Knocking on the screen echoes a knocking sound on the counterpart object as well, imitating the subtle nudging a colleague asking or advice.**

![Little Printer](https://nordprojects.co/projects/littleprinters/img/lp-hero-desktop-v1.jpg)
**[Little Printer](https://www.dezeen.com/2014/09/09/little-printer-design-company-berg-to-close/) by *Berg Cloud*: A little helper, printing out your personal feed on thermal paper, this could include newspaper articles, tweets, sudokus, etc. Unfortunately, BERG shut down in 2014, and thus the servers for the Little Printer as well. Last year [Nord Projects](https://nordprojects.co/projects/littleprinters/) built their own communication service on top of the old hardware.**

![Complementary Media](https://discomfortzone.ideo.com/static/35a275f9853b17e49764e030f0976fb6/5b12f/CM_1.jpg)
**[Complementary Media / Discomfort Zone](https://discomfortzone.ideo.com/ComplementaryMedia/) by *IDEO*: IDEO did a couple of experiments that could be done with machine learning. One of my favorites of this series is the Complementary Media which includes photos of one’s face to display emotions more deliberately and personally than emojis do.**

![LittleBigPrinter](https://raw.githubusercontent.com/olivierbrcknr/littleBigPrinter/master/00_img/title.jpg)
**[LittleBigPrinter](https://little-big-printer-messenger.now.sh/) by *Olivier Brückner*: A small printer that is focussing on the semi-public space where it is set up. It directly prints out messages sent to it, bringing back communication similar to letters yet still being instant.**

![Squeeze](http://www.thomasthwaites.com/folio5/wp-content/uploads/2010/08/contact80_05.jpg)
**[Squeeze](https://www.thomasthwaites.com/squeeze/) by *Thomas Thwaites*: A small bracelet that lets one 'squeeze' the counterparts arm, giving the subtle feeling of comfort.**

![Digital Touch — Heartbeat](https://media.idownloadblog.com/wp-content/uploads/2016/10/watchos3-digital-touch-heartbeat.jpg)
**[Digital Touch](https://support.apple.com/en-gb/guide/watch/apdebd0bb96c/watchos) by *Apple*: The app lets people interchange small sketches and emotions. Most interestingly it is also capable of sharing the heartbeat of a person, bringing a new level of intimacy.**

#### Questions & Approach

I wonder, which ways of communication inherit the feelings I want to cover. Is it about facial expressions? Is it about the anticipation of someone who is ringing the doorbell and you wait until this person arrived in your apartment? Is it about the ‘slight discomfort’ that sometimes is created in a room when a specific topic is talked about?

In my project, I want to focus on one of them, creating a device that allows for one more interaction, one more way of communicating between two or more people. It might not necessarily be a useful tool, it might be something that solely raises the question of needing to focus on different ways of communicating than we are used to today. 


#### Ideal Concept

![FREKVENS](https://www.ikea.com/de/de/images/products/frekvens-multibeleuchtung-led-schwarz__0811699_PE771764_S5.JPG)
**[FREKVENS](https://www.ikea.com/de/de/p/frekvens-multibeleuchtung-led-schwarz-30420354/) by *IKEA* is an inspirational form prototype, displaying the abstract box and LED matrix while only being a tool to communicate the emotion.**

I am currently thinking about a small box that is portable and can be set up on a table or hung up on a wall (inspired by [Teenage Engineering’s Raven](https://teenage.engineering/designs/R)). It only has a LED matrix display, a tactile sensor or button, and a small speaker. It is connected to a few other boxes or people, selected by the user, representing only a small friend circle (inspired by [Christoph Labacher](https://www.christophlabacher.com/notes/student-project-archive)). 
Similar to a 
It would involve a couple of interactions:
- Tapping → sending a brief “hello” to a friend
- Anticipating a call → resembling a doorbell, blocking while displaying the time until a meeting starts
- Sending (abstract) messages → recorded through sound then displayed abstractly via the LED matrix and transformed sound, echoing the sub-tone of the message, not the direct message itself  
- Small LED → display that a message has been received
- Long Press → echo received messages so far

#### MVP

A small prototype, built upon a raspberry pi. Maybe with two devices, but probably with only one that is communicating with a website a.k.a. the virtual counterpart device. The display itself could first be represented by a screen on a website. I would want to explore the elements step-by-step, slowly building upon each other, and see how far I would get in the terms of complexity and features, starting with tactile sending ‘hello’.
