<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium quod, rem in ad neque nostrum consequatur fugiat ea qui,
             obcaecati possimus odio amet, magnam deleniti vel aut alias molestias.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veniam vitae libero doloremque fugiat beatae iure? Mollitia aspernatur corporis,
             molestiae ipsam optio quod omnis. Repudiandae eligendi iure distinctio tempore pariatur.</p>
             <div>{{data}}</div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/GBP')
</script>
<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}

</style>
