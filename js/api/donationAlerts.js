const DA_CENTRIFUGE_URL = 'wss://centrifugo.donationalerts.com/connection/websocket';
const DA_SUBSCRIBE_URL = 'https://www.donationalerts.com/api/v1/centrifuge/subscribe';
const RECONNECTION_DELAY_MIN = 1000;
const RECONNECTION_DELAY_MAX = 5000;

if (donationAlertsToken !== "") {
    // this.centrifugeClient = new Centrifuge(DA_CENTRIFUGE_URL, {
    //     subscribeEndpoint: DA_SUBSCRIBE_URL,
    //     subscribeHeaders: {
    //         Authorization: `Bearer ${accessToken}`
    //     },
    //     minRetry: RECONNECTION_DELAY_MIN,
    //     maxRetry: RECONNECTION_DELAY_MAX,
    // });
    const config = {
        socket: 'wss://socket.donationalerts.ru',
        socketPort: '443',
        type: 'alert_widget'
    }

    const donationalerts = io(`${config.socket}:${config.socketPort}`);
    donationalerts.emit('add-user', { token: donationAlertsToken, type: config.type });
    donationalerts.on("donation", (donate) => {
        donate = JSON.parse(donate);
        console.log(donate);

        if(donate.billing_system === "TWITCH"){
                return;
        }
        const { amount_main } = donate;

        addTime(endingTime, amount_main * secondsAddedPerCurrency)
    });
}