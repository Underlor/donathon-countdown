<h1 align="center">Twitch Subathon Countdown Template</h1>
<p align="center">This is the template I created for my Twitch Subathon Countdowns</p>
<br/>

<h2>Description</h2>
<p>A subathon timer that increases when someone subscribes, donates money, donates bits or purchases streamloots chests.</p>
<br/>

<h2>Preview</h2>
<h3 align="center"><img width="90%" src="./preview.gif"></h3>
<br/>

<h2>Usage</h2>
<p>After cloning this repository you'll have to edit the "config.js" file with any plain text editor, then change the value of the variables according to what you want:</p>

<h3>Streamlabs Token</h3>
<p>To get the token you'll have to go to the general settings tab of your <a href="https://www.donationalerts.com/dashboard/general">Donation Alerts dashboard</a> then click Show token and  paste the code on the "donationAlertsToken" variable in the "config.js" file.</p>
<img src="./auth_donationAlerts.png">

<h3>Initial Time</h3>
<p>You can set the initial time of the timer by setting the hours, minutes and seconds to be added when the timer is created.</p>

<h3>Add To OBS</h3>
<p>To add it to OBS you just have to open application and show it as any regular app.</p>

<h2>Hotkeys</h2>

- "R" - reset time to initial
- Arrow UP - increase time
- Arrow DOWN - decrease time
- Space - pause timer