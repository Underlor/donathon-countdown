

// websocket socket.io


// document.addEventListener("keydown", (e) => {
//     // console.log(e);
//     switch (e.code) {
//         case "ArrowUp":
//             // send websocket message
//             socket.emit('addTime', { name: twitch_channel_name, time: 200});
//             return;
//         case "ArrowDown":
//             socket.emit('removeTime', { name: twitch_channel_name});
//             return;
//         case "KeyR":
//             socket.emit('resetTime', { name: twitch_channel_name});
//             return;
//         case "Space":
//             socket.emit('pause', { name: twitch_channel_name});
//             return;
//     }
// })


new Vue({
    el: '#app',
    data: {
        timeInput: timeIncrease.toString(),
        socket: io(controllsServer),
    },
    methods: {
        addTime: function() {
            this.socket.emit('addTime', { name: twitch_channel_name, time: parseInt(this.timeInput)});
        },
        removeTime: function() {
            this.socket.emit('removeTime', { name: twitch_channel_name, time: parseInt(this.timeInput)});
        },
        pauseTimer: function() {
            this.socket.emit('pause', { name: twitch_channel_name});
        },
        resetTime: function() {
            if (!confirm('Are you sure you want to reset the timer?')) {
                return;
            }
            this.socket.emit('resetTime', { name: twitch_channel_name});
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