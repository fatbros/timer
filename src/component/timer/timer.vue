<template lang="html">
    <div class="c-timer">
        <p>renderTime: {{renderTime}}</p>
    </div>
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

        destroyed () {
            this.timer.destory();
        }
    };
</script>

<style lang="css">
</style>
