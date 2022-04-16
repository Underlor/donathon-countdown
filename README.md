<h1 align="center">Donathon Countdown Template</h1>
<h3 align="center"><a href="https://github.com/Kozjar/twitch-subathon-countdown/releases">Download</a></h3>

<br/>

<h2>Description</h2>
<p>A subathon-like timer that increases when someone donates money.</p>
<br/>

<h2>Preview</h2>
<h3 align="center"><img width="90%" src="resources/preview.gif"></h3>
<br/>

<h2>Usage</h2>
<p>After downloading latest version, extract it to any place on your computer.</p>

Then you'll have to edit `resources/app/config.js` file (open it with notepad or any other text editor). You can place there your tokens and edit some app settings to fit your needs.

<h2 style="color: #ff3f3f">Warning: do not show your tokens on stream</h2>

<h3>Donation alerts</h3>
<p>To get the token you'll have to go to the general settings tab of your <a href="https://www.donationalerts.com/dashboard/general">Donation Alerts dashboard</a> then click Show token and  paste the code on the "donationAlertsToken" variable in the "config.js" file.</p>
<img src="resources/auth_donationAlerts.png">

<h3>Initial Time</h3>
<p>You can set the initial time of the timer by setting the hours, minutes and seconds to be added when the timer is created.</p>

<h3>Add To OBS</h3>
<p>To add it to OBS you just have to open application and add it as window capture source</p>

### How to make transparent background in OBS
1) Make sure you set `isGreenBackground` to `true` in `config.js`
2) Select `filters` tab for timer window source

<img src="resources/transparentBackgroundGuide1.png">

3) Add `Chroma key` filter

<h2>Hotkeys</h2>

- "R" - reset time to initial
- Arrow UP - increase time
- Arrow DOWN - decrease time
- Space - pause timer