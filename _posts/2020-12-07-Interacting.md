---
layout: post
title: Interacting With The Communicator
---

Now, as the base structure and hardware are set up, I can go deeper into designing the interactions. Here is a list of guiding questions I have:

*   How are messages sent? Is it a website? Can people do it from the device? What are the limitations/possibilities?
*   How would the sender send an animation that is not predetermined? Does this need a particular interface?
*   How can the sender select to whom to send? Especially if multiple? Is this predefined as a sort of *tiny social network*?[^1] [^2]
*   Should the recipient see who sent the message?

### Decisions
#### Hardware Interface

I decided on the Hardware interface to be as little as possible. No LED to indicate, no dial to select, just a button. It should remain the small analog piece of embracing the moment. Thus it does not fulfill the requirements necessary for complex interactions to send messages to different people and is only a receiving device.

For sending, it, therefore, needs another additional interface. As for the prototype, a website seems to be the easiest way to enable complex interactions and selections to send messages. It is usable on any device (with a web browser), making it simple to develop and accessible for a broad audience.

My current website seems to be sufficient for the prototype, but it would need to incorporate selections to whom to send and some authentification if being a product.

#### Sending Interface

I currently have three different sending types that are supported:

*   "Hello" — sends a tiny animation.
*   "Array" — sends a specific matrix (image) to the hardware, which is then displayed.
*   "Animation" — sends a small sequence of arrays to display, thus creating a tiny animation (currently, only "stars" is supported).

Especially when considering the *animation* one, a specific interface is needed. Also, I want to add a small *timer* feature to create the *anticipation moment* for a call or meet-up, as mentioned in [the initial story]({% post_url 2020-11-11-Ideas-In-Narrative-Form %}).

The animation would need to have either predefined animations to send, similar to the emoji keyboard, or would need to enable to create own sequences. The sender could make animations frame by frame using the matrix draw tool.

#### Interaction Diagram

You can see how the interaction pattern works on the chart below, keeping in mind the schematics mentioned above.

{% include lazyload.html image_src="HowToInteract.svg" image_alt="Flow" %}

[^1]: [How to run a small social network site for your friends](https://runyourown.social/) by Darius Kazemi (Patreon), July 8, 2019 (updated August 31, 2019)
[^2]: [In Defense of The Small Social Network](https://onezero.medium.com/in-defense-of-the-small-social-network-5a90bc4d5d62) by P.E. Moskowitz, August 15, 2019
