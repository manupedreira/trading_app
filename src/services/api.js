const channels = {};

let ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

ws.onopen = () => {
  console.log("------------------Websocket connected");
  ws.send(
    JSON.stringify({
      event: "subscribe",
      channel: "book",
      symbol: "tBTCUSD"
    })
  );
  ws.send(
    JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: "tBTCUSD"
    })
  );
  ws.send(
    JSON.stringify({
      event: "subscribe",
      channel: "trades",
      symbol: "tBTCUSD"
    })
  );
};

ws.setData = () => {};

ws.onmessage = ({ data }) => {
  const info = JSON.parse(data);

  if (!!info.channel && !!info.chanId) {
    channels[info.chanId] = info.channel;
  } else if (!!channels[info[0]]) {
    //ws.setData({ channel: channels[info[0]], data: info.pop() });
  }
};

ws.onclose = function(e) {
  console.log(
    "Socket is closed. Reconnect will be attempted in 5 second.",
    e.reason
  );
  setTimeout(function() {
    ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  }, 5000);
};

ws.onerror = function(err) {
  console.log("Socket encountered error: ", err.message, "Closing socket");
  ws.readyState < 3 && ws.close();
};

export default ws;
