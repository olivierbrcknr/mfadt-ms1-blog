---
layout: post
title: Creating the Hardware Code
---

As mentioned I refactored the website from the *firestore* to the *realtime database*. It was way faster than I anticipated.

Also, I was able to combine the libraries and got the ESP32 running with the realtime database from *Firebase*. 
When running the program, I realized that the flip dots get extremely hot when triggered too often, especially as I had the matrix displayed every run of the `loop()`, which is multiple times per second, the example only did an update every `400ms`. Hence I needed to refactor the code that the screen would only update when necessary (especially, as it otherwise is not even useful, switching from black to black). This brought also the benefit of getting rid of a small ticking sound, like a clock, as the magnets were fired constantly.

I then started to refactor the database. It now is able to send arrays as well, allowing to process the content entirely on the website. The new [*MatrixDraw* component](https://github.com/olivierbrcknr/flipdot-communicator/tree/master/website/components/MatrixDraw) enables visitors to send draw and send own images in this very limited resolution.

{% include lazyload.html image_src="ArduinoIDEScreenshot.jpg" image_alt="Programming with the Arduino IDE" %}

#### Next Issues

The next big issue seems to be the `buffer`. I can only read so many data entries per call, which will eventually be an issue when getting to sending more complex matrixes.

Especially, when sending animations this will be a problem. I don't know if I am able to figure this out in the time given by the deadline.
