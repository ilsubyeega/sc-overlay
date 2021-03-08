<script>
    export let title = "Unknown";
    export let url = "/";
    export let description = "";
</script>
<div class="box">
    <div class="small">
        <a href="{url}" class="text clickable-big">{title}</a>
        <a href="{url}" class="text clickable">{url}</a>
    </div>
    <div class="text">{description}</div>
</div>
<style>
    * {
        transition: all 0.3s;
    }
    .box {
        background-color: aliceblue;
        padding: 20px;
        margin: 25px 50px 25px 50px;
    }
    .text {
        color: #9a9aff;
        display: inline-block;
        text-decoration: none;
    }
    .clickable {
        color: #c1c1ff;
    }
    .clickable:hover {
        color: #a3a3ff;
    }
    .clickable-big {
        color: rgb(101, 101, 255);
        font-size: 20px;
    }
    .clickable-big:hover {
        color: rgb(0, 0, 255);
    }
</style>