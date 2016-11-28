import emitter from 'tiny-emitter';

class Timer extends emitter {
    constructor() {
        super();
    }

    init() {
        this.time = {
            inited: Date.now()
        };

        this.initializeEvents();
    }

    initializeEvents() {
        setInterval(() => {
            this.emit('updatePast', this.getPast());
        }, 1000/60);
    }

    getPast() {
        var now = Date.now();
        return now - this.time.inited;
    }
}

export default Timer;
