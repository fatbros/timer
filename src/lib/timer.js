import emitter from 'tiny-emitter';

class Timer extends emitter {
    constructor() {
        super();
    }

    init() {
        this.time = {
            inited: Date.now(),
            past: 0
        };

        this.initializeEvents();
    }

    initializeEvents() {
        this.start();
    }

    start() {
        this.intervalTimer = setInterval(() => {
            this.time.past = this.getPast();
            this.emit('updatePast', this.time.past);
        }, 1000/60);
    }

    stop() {
        this.destory();
    }

    destory() {
        clearInterval(this.intervalTimer);
    }

    getPast() {
        var now = Date.now();
        return now - this.time.inited;
    }
}

export default Timer;
