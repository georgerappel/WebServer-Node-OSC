# WebServer-Node-OSC
Used to show data from SHAST project: https://github.com/hiperorganicos/SHAST

Small Node.JS server with Node-OSC to receive data from an Arduino board and show them on a HTML page.
<br>
<H2>How to use</h2>
First, you need to install Node.js, express, socket.io and Node-osc.<br>
Then, do this:
<ol>
<li>Download, extract the files somewhere and 'cd' to that folder on the Terminal.</li>
<li>Type "node server.js" and a message will apear telling you that its hoster on port 3000.</li>
<li>On your browser, type "localhost:3000" and you'll se a list of projects. Select the one you desire.</li>
<li>Open another terminal, 'cd' to the same folder and type "node tsend.js" to send OSC messages to your server.</li>
<li>The random values will apear on the screen. Read the code and modify as you want to get your desired results.</li>
</ol>
<br>
<h3>About server.js and tsend.js</h3>
<b>server.js</b> is the file that will host your server. If you terminate it your server will go down.<br>
<b>tsend.js</b> simply sends random OSC messages as you wish, you can also edit them and see how it works.
After runnng it you need to CTRL+C and do "node tsend.js" again to send new messages.
