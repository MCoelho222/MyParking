<template>
<div>
<my-header></my-header>
<h1>Home</h1>
<router-link to="/reservations">Reservations</router-link>
</div>
</template>
<script>
import AppHeader from '../components/header/AppHeader.vue'

export default {
    components: {
        'my-header': AppHeader
    }
}
</script>