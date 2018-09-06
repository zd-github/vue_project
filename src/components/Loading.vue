<template>
    <div class="loading">  
        <img :src="'../../static/images/loading.gif'" alt="">
    </div>
</template>

<script>
export default {
    name:'Loading',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .loading{
        padding: 50% 40%;
    }
    img{
        width: 100px;
        height: 100px;
    }
</style>

