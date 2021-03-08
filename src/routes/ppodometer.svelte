<script>
	import { onMount, onDestroy } from "svelte";
	import Odometer from "./../components/odometer.svelte";
	import rcws from "./../reconnecting-websocket";
	let ws;
	let port = 20727;
	let num = 0;
	let data;
    let isplaying;
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

		let initdata = ["ppIfMapEndsNow", "status"];

		ws.onopen = (event) => {
			console.log("Connected to Websocket.");
			ws.send(JSON.stringify(initdata));
		};
		ws.onmessage = (event) => {
			data = { ...data, ...JSON.parse(event.data) };
			num = data.ppIfMapEndsNow;
            isplaying = !(data.status < 2 || data.status == 16)
			if (!isplaying) num = 0;
		};
	});
    onDestroy(() => {
		if (typeof ws != "undefined") ws.close();
	})
</script>

<div class="inline {isplaying ? "" : "not"}">
	<Odometer number={num} size="80px" style="font-family:'Quicksand', Courier, monospace" />
	<div class="text">pp</div>
</div>

<style>
	.inline {
		font-size: 80px;
        opacity: 1;
        transition: all 0.5s;
	}
    .not {
        opacity: 0;
    }
	* {
		margin: 0;
		padding: 0;
		font-family: "Quicksand", Courier, monospace;
	}
	.text {
		display: inline-block;
	}
</style>
