---
layout: post
title: Initiating the Website
---


I started to build the website. It should contain multiple aspects of the prototype:

1. The interface to send out messages
2. A virtual dummy interface for me to test communication patterns
3. A virtual dummy interface to be able to share the patterns with others, letting them test the interaction with the prototype even though they do not have access to the physical one

### Software Architecture

{% include lazyload.html image_src="https://raw.githubusercontent.com/olivierbrcknr/flipdot-communicator/master/docs/SoftwareArchitecture.svg" image_alt="Software Architecture" %}

As mentioned earlier, I needed a software architecture. Here ↑ you can find a more visual representation of what I intend to build.

### Website

I want to build a fairly simple website, focussing on the sending part as well with the simplified hardware element. I decided for the font [Space Mono](https://fonts.google.com/specimen/Space+Mono) as I simply like the technical appearance of it. In regards of color, I wanted to emphasize the unique color of the flip dots, that's why I chose these two colors:

<div class="colorCharts">
    <div class="ColorCard">
        <div class="Color" style="background:#F2F03F;"></div>
        <div class="Label">
            FlipDot-Light: #F2F03F
        </div>
    </div>
    <div class="ColorCard">
        <div class="Color" style="background:#DDDB1F;"></div>
        <div class="Label">
            FlipDot-Dark: #DDDB1F
        </div>
    </div>
</div>

A toggle allows for three options:

- *physical* – Sends your message to all website instances and the hardware prototype
- *virtual* — Sends your message to all website instances
- *test* — Sends your message just to your website instance

I am currently working myself from the bottom up, first enabling the *test* prototype to quickly test different animations and displays. The next one will be the virtual one (on which I am currently working) to send messages to other to test the communication with users. Finally, I want to build into the physical prototype.

From a technical perspective I can build up on each step, making it non-redundant to actually build these steps. With each of them, I can increase the fidelity a little bit while not refactoring the database too much. Meaning, the tests I make with the *test* prototype are almost completely usable for the final physical prototype.

You can find the hosted website [→ here](https://flipdot.vercel.app/).
