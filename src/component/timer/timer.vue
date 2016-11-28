<template lang="html">
    <div class="c-timer">
        <p>renderTime: {{renderTime}}</p>
    </div>
</template>

<script>
    import Timer from '../../lib/timer.js';
    var t = new Timer();

    export default {
        data () {
            return {
                renderTime: 0
            };
        },

        mounted () {
            t.init();
            t.on('updatePast', (pastTime) => {
                this.updateRenderTime = pastTime;
            });
        },

        computed: {
            updateRenderTime: {
                set (time) {
                    this.renderTime = time;
                }
            }
        }
    };
</script>

<style lang="css">
</style>
