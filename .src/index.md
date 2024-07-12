# Home

<div style="border-top: 5px double white"></div>
<noscript>
    <p>
        <em>You have JavaScript disabled, dynamic content and multimedia will not work.</em>
    </p>
</noscript>


## What is this place ?
This is my little corner of the internet where I'll be posting stuff that I'm working on, ranging from BMS or other VSRG's, blogs, rants to various programming, musical or real-life projects. 

## Little bit about the website
The website itself is a simple collection of markdown documents that get converted to static HTML pages by a tiny static microblog processor - [**kagami**](https://github.com/microsounds/kagami). No fancy backends, no bloated javascript frameworks, just Web 1.0-esque blogposting like God intended!

## Contact me
By far the quickest way to get in touch with me is through Discord. Thanks to lanyard API, the website can fetch my discord presence in real time !\
<div style="padding-top:20px"><span id="discord-name"></span> is currently : <span id="discord-status"></span>.</div>


<!-- TODO: if this gets any bigger this should be it's own .js file -->
<script type="text/javascript">
/* <![CDATA[ */
	/* fetch discord presence with lanyard API
	 * https://github.com/Phineas/lanyard
	 */
	uid = '127484031615893504';
	api = 'https://api.lanyard.rest/v1/users/' + uid;
	req = new XMLHttpRequest();
	req.open('GET', api, true);
	req.onload = function() {
		if (this.status == 200) {
			/* name and avatar */
			var user = JSON.parse(this.response).data.discord_user;
			document.getElementById('discord-name').innerHTML +=
				'<em><a title="Click to add me directly!" href="https://discord.com/users/' + uid + '">' +
				'<img src="https://cdn.discordapp.com/avatars/' + uid +
				'/' + user.avatar + '.png?size=40" /> ' +
				user.username + ((!!!user.discriminator) ? '#' + user.discriminator : '') + '</a></em>';

            document.getElementById('avatar');

			/* presence */
			var f = document.getElementById('discord-status');
			switch (JSON.parse(this.response).data.discord_status) {
				case 'online': f.innerHTML += '<span class="blink" style="color: #BDFFB9;"><strong>online</strong></span>'; break;
				case 'idle': f.innerHTML += '<span class="blink" style="color: #FFFAB9;"><strong>idle</strong></span>'; break;
				case 'dnd': f.innerHTML += '<span class="blink" style="color: #FFB9CF;"><strong>busy</strong></span>'; break;
				case 'offline': f.innerHTML += '<strong>offline</strong>'; return;
			}

			/* activities
			 * https://discord.com/developers/docs/game-sdk/activities
			 */
			var act = JSON.parse(this.response).data.activities;
			if (act.length > 0)
				f.innerHTML += ', last seen';
			else {
				f.innerHTML += ' and not doing anything';
				return;
			}
			for (var i in act) {
				switch (act[i].type) {
					case 0: f.innerHTML += ' playing '; break;
					case 1: f.innerHTML += ' streaming '; break;
					case 2: f.innerHTML += ' listening to '; break;
					case 3: f.innerHTML += ' watching '; break;
					case 5: f.innerHTML += ' competing in '; break; /* ??? */
					/* custom status */
					case 4: f.innerHTML += ' saying '; act[i].name = '"' + act[i].state + '"'; break;
				}
				f.innerHTML += '<em><strong>' + act[i].name + '</strong></em>';

				/* discord rich presence for game activities */
				switch (act[i].type) {
					case 0:
						if (act[i].details)
							f.innerHTML += ', ' + act[i].details.charAt(0).toLowerCase() + act[i].details.slice(1);
						if (act[i].state)
							f.innerHTML += ', ' + act[i].state.charAt(0).toLowerCase() + act[i].state.slice(1);
						break;
				}
				if (act.length > 1 && i != act.length - 1)
					f.innerHTML += ' and';
			}
		}
		else
			document.getElementById('discord-status').innerHTML += 'Lanyard API is down and this feature is broken..';
	};
	req.send();
/* ]]> */
</script>
