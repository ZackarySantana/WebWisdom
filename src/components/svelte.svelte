<script>
    let count = 0;
    const setCount = () => {
        count += 1;
    };

    setInterval(setCount, 1000);
</script>

<div>Hello world from Svelte {count}</div>

<style>
    div {
        color: red;
    }
</style>
