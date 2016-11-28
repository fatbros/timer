<template lang="html">
    <md-list-item>
        <md-icon>timer</md-icon>
        <span>pastTime {{renderTime}}</span>

        <md-button class="md-raised md-primary" v-if="isStart" @click="stopTimer">Stop</md-button>
        <md-button class="md-raised md-primary" v-else @click="startTimer">Start</md-button>
    </md-list-item>
</template>

<script>
    import Timer from '../../lib/timer.js';

    export default {
        data () {
            return {
                renderTime: 0,
                isStart: true
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
                this.isStart = false;
                this.timer.stop();
            },
            startTimer () {
                this.isStart = true;
                this.timer.start();
            }
        },

        destroyed () {
            this.timer.destory();
        }
    };
</script>

<style lang="css">
</style>
