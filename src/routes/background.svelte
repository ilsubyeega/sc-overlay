<script>
	import { onMount, onDestroy } from "svelte";
	import rcws from "./../reconnecting-websocket";
	let port = 20727;
	let ws;
	let data;
	let lastbg;
	onMount(() => {
		// customise port
		var a = window.location.hash.split("#");
		if (a.length == 2 && typeof parseInt(a[1]) == "number")
			port = parseInt(a[1]);

		// create connection
		ws = new rcws("ws://localhost:" + port + "/tokens", null, {
			debug: true,
			reconnectInterval: 3000,
		});

		let initdata = [
			"md5"
		];

		ws.onopen = (event) => {
			console.log("Connected to Websocket.");
			ws.send(JSON.stringify(initdata));
		};
		ws.onmessage = (event) => {
			data = { ...data, ...JSON.parse(event.data) };
			if (data != null && lastbg != data.md5 && dummybg != null) {
				lastbg = data.md5;
				dummybg.src = `http://localhost:${port}/backgroundImage?width=1920&height=1080&dummyData=${data.md5}`; // &crop=1
				dummybg.onload = function () {
					bgelement.style.backgroundImage = `url("${dummybg.src}")`;
				};
			}
		};
	});
	onDestroy(() => {
		if (typeof ws != "undefined") ws.close();
	})
	let dummybg;
	let bgelement;
</script>

<img
	class="dummyimage"
	bind:this={dummybg}
	style="width: 0; height: 0; display: none;"
	alt="Background"
/>
<div class="background" bind:this={bgelement} />

<style>
	.background {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transition: all 0.3s;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
</style>
