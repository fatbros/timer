<template lang="html">
    <div class="c-timer">
        <p>
            test
        </p>
    </div>
</template>

<script>
// timer
import Timer from '../../lib/timer.js';

var t = new Timer();
t.init();
t.on('updatePast', (pastTime) => {
    console.log(pastTime);
});
</script>

<style lang="css">
</style>
