<template lang="html">
    <div id="container">
        <sidenav></sidenav>
        <timerController></timerController>
    </div>
</template>

<script>
import Sidenav from './component/sidenav/sidenav.vue';
import TimerController from './component/timer/timerController.vue';

export default {
    components: {
        sidenav: Sidenav,
        timerController: TimerController
    }
};
</script>

<style lang="css">
</style>
