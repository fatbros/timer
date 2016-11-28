<template lang="html">
    <div id="container">
        <sidenav></sidenav>
        <timer></timer>
    </div>
</template>

<script>
import Sidenav from './component/sidenav/sidenav.vue';
import Timer from './component/timer/timer.vue';

export default {
    components: {
        'sidenav': Sidenav,
        'timer': Timer
    }
};
</script>

<style lang="css">
</style>
