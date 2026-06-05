<template>
    <HomePage v-if="page == 'HomePage'" />
</template>
<script>
import HomePage from './components/HomePage.vue';

export default {
    name: 'App.vue',
    data() {
        return {
            page: 'HomePage',
        };
    },

    components: {
        HomePage,
    },
}
</script>