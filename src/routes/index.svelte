<script>
    import Listing from "../components/listing.svelte";
</script>
<div class="box">
    <div class="text bigass">ilsubyeega's Overlay</div>
    <div class="text">Each of the light blue boxes below are overlays.</div>
    <div class="text">Customise cheatsheet: <a href="https://gist.github.com/ilsubyeega/505ad1830d2bbf7be409da8b3bf0c7d2">Gist</a></div>
</div>
<div class="box">
    <div class="text bigass">Using custom port</div>
    <div class="text">StreamCompanion uses 20727 ports by default. If you are using a different port, you can write the #(port) on the back of url.</div>
    <div class="text">Example: <a href="https://sc-overlays.ilsubyeega.com/background#1972">https://sc-overlays.ilsubyeega.com/background#1972</a> (1972 port)</div>
</div>

<Listing title="Full Background" description="Use the background to fill the screen." url="/background"/>
<Listing title="PP Odometer" description="Obtain the current pp using odometer.js** animation (Only visible at playing/result currently)" url="/ppodometer"/>
<Listing title="Leaderboard (Beta)" description="Temporary testing for leaderboard." url="/leaderboard"/>


<style>
    * {
        color: black;
        text-decoration: none;
        transition: all 0.5s;
    }
    a { 
        color: #8c8cff;
    }
    a:hover {
        color: #5e5eff;
    }
    .bigass {
        font-size: 20px;
    }
    .box {
        background-color: rgb(240, 240, 240);
        padding: 20px;
        margin: 25px 50px 25px 50px;
    }
</style>