<template lang="html">
    <div class="c-timerController">
        <md-button class="md-raised md-primary" @click="addTimer">Add</md-button>
        <md-button class="md-raised md-accent" @click="clearTimer">Clear</md-button>

        <md-list>
            <timer v-for="timer in timerInstances"></timer>
        </md-list>
    </div>
</template>

<script>
    import Timer from './timer.vue';

    export default {
        data () {
            return {
                timerInstances: []
            }
        },

        methods: {
            addTimer () {
                this.timerInstances.push('1');
            },
            clearTimer () {
                this.timerInstances = [];
            }
        },

        components: {
            timer: Timer
        }
    }
</script>

<style lang="css">
</style>
