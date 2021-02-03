<h1><strong>Info &amp; What is this?</strong></h1>
<p>This is a discord bot, usable as a modmail bot! To make a new thread / ticket you just need to send the bot a private message with a question! The bot will then give a message to confirm the thread / ticket is created, the bot will make a channel in the server, there staff can reply to the messages. Or they can discuss it, because the message isn't directly sended to the ticket / thread owner! To send it to the ticket / thread owner just start your message with a . the dot will automaticly get removed from the message, so no worries about that</p>
<h1><strong>How to use</strong></h1>
<p>0. Download the latest release <a href="link.com" target="_blank" rel="noopener">here</a> :)</p>
<p>1. Make a application in the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener">discord developer portal</a></p>
<p>2. Add a bot to the application, and copy the token. Paste this token in the config file at the field "token" Note: Don't share this token with ANYONE they can fully use your bot!</p>
<p>3. Go to the Oauth2 tab, select "Bot" and then select "Administrator" after that copy the generated link and paste in in your browser, now you can add the bot your server!</p>
<p>4. Make a new category and copy the id of the category in the categoryID field in the config file!</p>
<p>5. Complete the rest of the config file, more info about the config file, scroll down to the title config file :)</p>
<p>Before running the bot you need to make sure you have node.js / javascript installed! Without this you CAN'T run the bot! To download node.js click <a href="https://nodejs.org/en/" target="_blank" rel="noopener">here</a></p>
<p>6. Run your bot! The first time use first-start.bat after you did that you can run start.bat (first-start.bat is only needed during the first start)</p>
<h1><strong>Info with Config File</strong></h1>
<p>In the config.json file fill in the information to have your bot working:</p>
<p><strong>Token -&nbsp;</strong>The token you get in step 2 of the setup.</p>
<p><strong>guildID -&nbsp;</strong>The id of your server where you want the tickets to be in. (Right click the server icon and click copy id. If it doesnt show Copy id you need to enable developer mode)</p>
<p><strong>categoryID -&nbsp;</strong>The id of your Category, the tickets will be automatic moved to that category (Right click the category and click copy id. If it doesnt show Copy id you need to enable developer mode)</p>
<p><strong>useExtraStaffRole -&nbsp;</strong>True or False (True = Yes, False = No) This gives the option to have a staff role so they can react to tickets. When you have this turned off (false) you need to give them Administratror or you need to give them the permissions yourself</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;SupportRoleID - </strong>Leave this empty if you have false at&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;useExtraStaff role, if you have true then&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;paste the id of the role for the staff team.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(Right click the server icon and click copy&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;id. If it doesnt show Copy id you need to&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;enable developer mode)</p>
<p><strong>onlineMessage -&nbsp;</strong>The message you want to have when the bot is succesfully started. (The message is: 'Username of the bot' 'your online message') for example if your bot is name ticketer and if your online message is: "Is Online" Then when its started you will get the message: "Ticketer Is Online"</p>
<p><strong>StatusType -&nbsp;</strong>The type of your status (Choose PLAYING, WATCHING, STREAMING or LISTENING)</p>
<p><strong>StatusText -&nbsp;</strong>The text after your statusType.</p>
<p><strong>StatusOnlineType -&nbsp;</strong>The type of the online status of your bot. (Choose online, dnd, idle or invisible)</p>
<p>If you have all information in you can start the bot! For more info about starting go to step 6 of the setup.</p>
<h1><strong>Closing tickets</strong></h1>
<p>Its super easy to close a ticket! Just type !close in the ticket!</p>
<h1><strong>Having Problems?</strong></h1>
<p>If you are having problems feel free to make a ticket / issue on github and i will help you solving the issues! You can make a ticket / issue <a href="link.com" target="_blank" rel="noopener">here</a></p>
