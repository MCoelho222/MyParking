<template>
    <div class="container">
        <my-header></my-header>
        <my-navbar></my-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
import AppHeader from '../../components/header/AppHeader.vue'
import NavBar from '../../components/navbar/NavBar.vue'
export default {
    components: {
       'my-header': AppHeader,
       'my-navbar': NavBar
    }
}
</script>
