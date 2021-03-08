<script>
    import { onMount, onDestroy } from "svelte";

    export let size = "20px";
    export let number = 0;
    export let format = "( ddd)";
    let Odometer;
    let od;
    let odometerelement;
    let task;

    onMount(async () => {
        Odometer = (await import("./../odometer.js")).default;
        od = new Odometer({
            el: odometerelement,
            value: 0,
            format: format,
        });
        od.render();
        task = setInterval(() => {
            odometerelement.innerHTML = number;
        }, 1000)
    })
    onDestroy(() => {
        clearInterval(task);
    })
</script>


<div class="odometer" bind:this={odometerelement} style="font-size: {size};">1</div>

<style>
    * {
        padding: 0;
        margin: 0;
    }
</style>