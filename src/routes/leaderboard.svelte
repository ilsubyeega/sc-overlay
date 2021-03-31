<script>
	import { onMount, onDestroy } from "svelte";
	import Odometer from "./../components/odometer.svelte";
	import LBComponment from "./../components/leaderboard/leaderboardcomponment.svelte";
	import rcws from "./../reconnecting-websocket";
	let ws;
	let port = 20727;
	let num = 0;
	let data;
    let jsoneddata1 = [];
    let jsoneddatown = [];
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

		let initdata = ["leaderBoardPlayers", "leaderBoardMainPlayer"];

		ws.onopen = (event) => {
			console.log("Connected to Websocket.");
			ws.send(JSON.stringify(initdata));
		};
		ws.onmessage = (event) => {
			data = { ...data, ...JSON.parse(event.data) };
			jsoneddata1 = JSON.parse(data.leaderBoardPlayers);
			jsoneddatown = JSON.parse(data.leaderBoardMainPlayer);
		};
	});
    onDestroy(() => {
		if (typeof ws != "undefined") ws.close();
	})
</script>
<!--
{data?.leaderBoardPlayers}
{data?.leaderBoardMainPlayer}
-->

{#each jsoneddata1 as item, i}
    <LBComponment data={item}/>
{/each}

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: "Quicksand", Courier, monospace;
	}
</style>
