<script>
	import { onMount, onDestroy } from "svelte";
	import Odometer from "./../components/odometer.svelte";
	import rcws from "./../reconnecting-websocket";
	let ws;
	let data;
	let isPlaying = 0;
  let lastbg;
	let dummybg;
	let bgelement;
  const pad = (text) => {
    return text.length < 2 ? "0" + text : text;
  };
	const changeSpeed = (time) => {
		time = parseInt(time);
		console.log(data?.mods)
		if (!data?.mods || !isPlaying) return time;
		if (data?.mods.includes("HT"))
			return time / 0.75;
		if (data?.mods.includes("DT") || data?.mods.includes("NC"))
			return time / 1.5;
		return time;
	}
  const beautifyTime = (time) => {
    time = parseInt(time);
    const hour = Math.floor(time / 3600);
    const min = Math.floor((time - hour * 3600) / 60);
    const sec = time % 60;
    return `${hour == 0 ? "" : hour.toFixed(0)+":"}${pad(min.toFixed(0))}:${pad(sec.toFixed(0))}`;
  }
  const digitFormatFunction = (value) => value.toFixed(2);
	const mergeData = (data) => {
		input.x100 = data?.c100 ?? 0;
		input.x50 = data?.c50 ?? 0;
		input.x0 = data?.miss ?? 0;
		input.currStar = data?.liveStarRating ?? 0;
		input.mStar = data?.mStars ?? 0;
		input.currPP = data?.ppIfMapEndsNow ?? 0;
		input.fcPP = data?.ppIfRestFced ?? 0;
		input.UR = data?.unstableRate ?? 0;
	};
	const input = {
		x100: 0,
		x50: 0,
		x0: 0,
		currStar: 0,
		mStar: 0,
		currPP: 0,
		fcPP: 0,
		UR: 0.12,
		mAR: 0.1,
		mCS: 0.1,
		mOD: 0.1,
		mHP: 0.1,
	};
  let timePercentage = 0;
	let interval;
	onMount(() => {
		ws = new rcws("ws://localhost:20727/tokens", null, {
			debug: true,
			reconnectInterval: 3000,
		});

		let initdata = [
			"ppIfMapEndsNow",
			"status",
			"c100",
			"c50",
			"miss",
			"liveStarRating",
			"mStars",
			"ppIfRestFced",
			"unstableRate",
			"mAR",
			"mCS",
			"mHP",
			"mOD",
			"mBpm",
      "titleRoman",
      "artistRoman",
      "diffName",
      "md5",
      "time",
      "totalAudioTime",
			"mods"
		];

		ws.onopen = (_) => {
			console.log("Connected to Websocket.");
			ws.send(JSON.stringify(initdata));
		};
		ws.onmessage = (event) => {
			data = { ...data, ...JSON.parse(event.data) };
			isPlaying = !(data.status < 2 || data.status == 16);
      if (data?.time != null && data?.totalAudioTime != null) {
        timePercentage = data.time / (data.totalAudioTime/1000) * 100;
      }
      if (data != null && lastbg != data.md5 && dummybg != null) {
				lastbg = data.md5;
        console.log("E")
				dummybg.src = `http://localhost:20727/backgroundImage?width=512&height=512&dummyData=${data.md5}&crop=1`;
				dummybg.onload = function () {
					bgelement.style.backgroundImage = `url("${dummybg.src}")`;
				};
			}
		};
		interval = setInterval(() => mergeData(data), 400);
	});
	onDestroy(() => {
		if (typeof ws != "undefined") ws.close();
		if (interval != null) clearInterval(interval);
	});



</script>
<img
	bind:this={dummybg}
	style="width: 0; height: 0; display: none;"
	alt="Background"
/>
<background />
<div style="position: absolute; top: 0px;">
	<div
		style="position: absolute; top: 92px; left: 42px; width: 1469px; height: 824px; overflow: hidden;"
	>
		<stat-box style="position: absolute;top: 150px;left: {isPlaying ? 30 : -200}px; transition: all 0.5s;">
			<star>
				<Odometer
					customStyle="margin-bottom: 2px"
					number={input.currStar}
					size="18px"
					format="( ddd).dd"
				/>★ → <Odometer
					customStyle="margin-bottom: 2px"
					number={input.mStar}
					size="18px"
					format="( ddd).dd"
				/>★
			</star>
			<list>
				<x100>
					<badge> x100 </badge>
					<count> <Odometer number={input.x100} size="18px" /> </count>
				</x100>
				<x50>
					<badge> x50 </badge>
					<count> <Odometer number={input.x50} size="18px" /> </count>
				</x50>
				<x0>
					<badge> x0 </badge>
					<count> <Odometer number={input.x0} size="18px" /> </count>
				</x0>
			</list>
		</stat-box>

		<ur style="position: absolute;top: {isPlaying ? 750 : 850}px; transition: all 0.5s;left: 690px;">
			<Odometer
				number={input.UR}
				size="18px"
				format="( ddd).dd"
        formatFunction={digitFormatFunction}
				style="font-family:'Pretendard'; font-weight: 900; display: flex;align-content: center;align-items: center;"
			/>
		</ur>

		<pp-box style="position: absolute;top: 150px;left: {isPlaying ? 1270 : 1550}px; transition: all 0.5s;">
			<cur>
				<badge> CUR </badge>
				<pp> <Odometer number={input.currPP} size="24px" />PP </pp>
			</cur>
			<fc>
				<badge> FC </badge>
				<pp> <Odometer number={input.fcPP} size="24px" />PP </pp>
			</fc>
		</pp-box>
	</div>

	<attr-box style="position: absolute;top: 925px;left: 1252px;">
		<info>
			<badge> AR </badge>
			<number>
				<Odometer
					customStyle="margin-bottom: 2px"
					number={data?.mAR ?? 0}
					size="18px"
					format="( ddd).dd"
          formatFunction={digitFormatFunction}
				/>
			</number>
		</info>
		<info>
			<badge> CS </badge>
			<number>
				<Odometer
					customStyle="margin-bottom: 2px"
					number={data?.mCS ?? 0}
					size="18px"
					format="( ddd).dd"
          formatFunction={digitFormatFunction}
				/>
			</number>
		</info>
		<info>
			<badge> OD </badge>
			<number>
				<Odometer
					customStyle="margin-bottom: 2px"
					number={data?.mOD ?? 0}
					size="18px"
					format="( ddd).dd"
          formatFunction={digitFormatFunction}
				/>
			</number>
		</info>
		<info>
			<badge> HP </badge>
			<number>
				<Odometer
					customStyle="margin-bottom: 2px"
					number={data?.mHP ?? 0}
					size="18px"
					format="( ddd).dd"
          formatFunction={digitFormatFunction}
				/>
			</number>
		</info>
	</attr-box>
	<music-box style="position: absolute;top: 942px;right: -1228px;">
		<wrapper>
			<info>
				<music-title>{data?.titleRoman ?? "Unknown"}</music-title>
				<badges>
					<badge>{data?.mBpm ?? 0}♫</badge>
					<badge>{data?.diffName ?? "Unknown"}</badge>
					<badge>{data?.artistRoman ?? "Unknown"}</badge>
				</badges>
				<duration>
					<current> {beautifyTime(changeSpeed(data?.time ?? 0))} </current>
					<percentate> {timePercentage > 100 ? "100.00" : timePercentage.toFixed(2)}% </percentate>
					<max> {beautifyTime(changeSpeed(data?.totalAudioTime/1000 ?? 0))} </max>
				</duration>
			</info>
			<bg bind:this={bgelement}/>
		</wrapper>
		<bar>
			<behind />
			<current style="width: {620*timePercentage/100 > 620 ? 620 : 620*timePercentage/100}px"/>
		</bar>
	</music-box>
</div>

<style>
  * {
    transition: all 0.2s;
  }
  music-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
	music-box wrapper {
		display: flex;
		gap: 10px;
		justify-content: space-between;
	}
	music-box bg {
		width: 110px;
		height: 110px;
		background-image: url(https://i.imgur.com/404.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 20px;
	}
  music-box info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
	music-box info music-title {
		font-family: Pretendard;
		font-style: normal;
		font-weight: 300;
		font-size: 36px;
		line-height: 43px;
		text-align: right;
		letter-spacing: -0.06em;
		width: 500px;
		height: 50px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;

		color: #ffffff;

		text-shadow: 0px 0px 9px #000000;
	}
	music-box info badges {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	music-box info badges badge {
		color: #322f41;
		background-color: #f3ddb6;

		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		padding: 5px 10px 5px 10px;
		margin-right: 5px;
		border-radius: 20rem;
	}
	music-box info duration {
		margin-top: 10px;
		display: flex;
		width: 500px;
		color: #f3ddb6;
		font-size: 14px;
		font-weight: 300;
		justify-content: space-between;
	}
	music-box info duration * {
		padding: 10px;
	}
	music-box bar {
		height: 5px;
    width: 620px;
	}
	music-box bar * {
		height: 5px;
		border-radius: 34px;
		position: relative;
	}
	music-box bar current {
		top: -5px;
		width: 0px;
		background: #f3ddb6;
	}
	music-box bar behind {
		top: 0px;
		background: rgba(100, 94, 131, 0.5);
	}
	attr-box {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
	attr-box info {
		display: flex;
		align-items: center;
		width: 140px;
	}
	attr-box info badge {
		width: 50px;
		height: 30px;
		font-size: 18px;
		font-family: "Pretendard";
		font-weight: 900;
		color: #000;
		background: #f3ddb6;
		border-radius: 27px;
		padding: 2px;
		margin-right: 5px;
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	attr-box number {
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 27px;
		text-align: right;

		color: #f3ddb6;
		margin-top: 3px;
		text-shadow: 0px 0px 8px rgba(243, 221, 182, 0.75);
	}
	pp-box {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	pp-box cur,
	pp-box fc {
		display: flex;
		gap: 10px;
	}
	pp-box * badge {
		background: #1b2523;
		border: 3px solid #2f4141;
		box-sizing: border-box;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
			0px 0px 16px rgba(0, 0, 0, 0.25);
		border-radius: 43px;
		width: 50px;
		height: 50px;
		color: #f3ddb6;

		text-shadow: 0px 0px 10px rgba(243, 221, 182, 0.75);
		font-family: Comfortaa;
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 20px;
		text-align: right;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	pp-box fc badge {
		background: #25251b;
		border: 3px solid #413f2f;
	}
	pp-box * pp {
		width: 130px;
		height: 45px;
		background: #1d1b25;
		border: 3px solid #322f41;
		box-sizing: border-box;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
			0px 0px 16px rgba(0, 0, 0, 0.25);
		border-radius: 43px;
		font-family: Comfortaa;
		font-style: normal;
		font-weight: 300;
		font-size: 24px;
		line-height: 27px;

		color: #f3ddb6;

		text-shadow: 0px 0px 10px rgba(243, 221, 182, 0.75);

		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 5px;
	}
	* {
		font-family: "Pretendard", cursive;
		display: block;
	}
	ur {
		width: 120px;
		height: 40px;
		background: #f3ddb6;
		font-weight: 900;

		text-align: center;
		color: #322f41;
		border-radius: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	stat-box {
		width: 200px;
		height: 100px;
		border-radius: 10px;
		background: #1d1b25;
		box-sizing: border-box;
		border: 2px solid #f3ddb6;
		color: #f3ddb6;
	}
	stat-box star {
		font-weight: 900;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		margin-top: 10px;
	}
	stat-box list {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		gap: 10px;
	}
	stat-box * badge {
		width: 50px;
		height: 20px;
		border-radius: 10px;
		background: #f3ddb6;
		color: #1d1b25;
		font-style: normal;
		font-weight: bold;
		text-align: center;
	}
	stat-box * count {
		font-size: 18px;
		line-height: 22px;
		font-weight: 900;
		text-align: center;
	}

	background {
		width: 1920px;
		height: 1080px;
		display: block;
	}
	x100 badge {
		background: #bbf3b6;
	}
	x100 count {
		color: #bbf3b6;
	}
	x50 badge {
		background: #f3d3b6;
	}
	x50 count {
		color: #f3d3b6;
	}
	x0 badge {
		background: #f3b6b6;
	}
	x0 count {
		color: #f3b6b6;
	}
</style>
