new Vue({
    el: '#app',
    data: {
        timeInput: timeIncrease.toString(),
        socket: io(controllsServer),
    },
    methods: {
        addTime: function() {
            this.socket.emit('addTime', { name: server_name, time: parseInt(this.timeInput)});
        },
        removeTime: function() {
            this.socket.emit('removeTime', { name: server_name, time: parseInt(this.timeInput)});
        },
        pauseTimer: function() {
            this.socket.emit('pause', { name: server_name});
        },
        resetTime: function() {
            if (!confirm('Are you sure you want to reset the timer?')) {
                return;
            }
            console.log('resetTime');
            this.socket.emit('resetTime', { name: server_name});
        }
    },
    // on load
    mounted: function() {
        this.socket.on('connect', () => {
            console.log('connected');
        }
        );
    }
});