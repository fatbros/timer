<template lang="html">
    <md-list-item>
        <md-icon>timer</md-icon>
        <span>pastTime {{renderTime}}</span>

        <md-button class="md-raised md-primary" @click="stopTimer">Stop</md-button>
    </md-list-item>
</template>

<script>
    import Timer from '../../lib/timer.js';

    export default {
        data () {
            return {
                renderTime: 0
            };
        },

        mounted () {
            this.timer = new Timer();
            this.timer.init();
            this.timer.on('updatePast', (pastTime) => {
                this.updateRenderTime = pastTime;
            });
        },

        computed: {
            updateRenderTime: {
                set (time) {
                    this.renderTime = time;
                }
            }
        },

        methods: {
            stopTimer () {
                this.timer.stop();
            }
        },

        destroyed () {
            this.timer.destory();
        }
    };
</script>

<style lang="css">
</style>
