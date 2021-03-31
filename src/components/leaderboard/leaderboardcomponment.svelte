<script>
    export let data = [];
    export let you = false;
</script>

<div class="box">
    #{data.Position} {data.Username} (ACC)
    <br>
    {data.Score}
</div>
<style>
.box {
    background-color: rgba(0,0,0,0.2);
    margin: 20px;
    padding: 10px;
}
</style>