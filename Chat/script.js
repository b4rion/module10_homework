const wsUri = 'wss://ws.ifelse.io';
        const sendBtn = document.querySelector('#sendBtn');
        const geoBtn = document.querySelector('#geoBtn');
        const output = document.querySelector('#outputContainer');
        let websocket;

        function writeToScreen(message){
            let mes = document.createElement('div');
            mes.className = "chatMessage messageR";
            mes.innerHTML = message;
            output.appendChild(mes);
        }
        function writeToScreenL(message){
            let mes = document.createElement('div');
            mes.className = "chatMessage";
            mes.innerHTML = message;
            output.appendChild(mes);
        }

        sendBtn.addEventListener ('click', () => {
            websocket = new WebSocket(wsUri);
            let inputValue = document.querySelector('input').value;
            const message = inputValue;
            writeToScreen(message);
            async () => {
             websocket.send(message);
             console.log('Get echo');
            }
            websocket.onmessage = function(evt) {
                // console.log(evt)
                writeToScreenL( 
                   message
                );
            };
        })

        const error = () => {
            console.log("Cant get your geoposition");
            let mes = document.createElement('div');
            mes.className = "chatMessage messageR error";
            mes.innerHTML = 'ERROR';
            output.appendChild(mes); 
        }

        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            let mes = document.createElement('a');
            mes.className = "chatMessage messageR GeoLoc";
            mes.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
            console.log(mes);
            mes.innerHTML = 'Гео-локация';
            output.appendChild(mes);
        }

        geoBtn.addEventListener('click', () => {
            if(!navigator.geolocation){
                error();
            } else{
                navigator.geolocation.getCurrentPosition(success, error);
            }
            
        })
      

