import './App.css';
import { Chats } from './Chats/Chats';

function App() {
    const myFirstWebSocket = new WebSocket('ws://localhost:8080');

    myFirstWebSocket.addEventListener('open', () => {
        console.log("Socket open!")
        // myFirstWebSocket.send("Hello small world!")
    })
    

    myFirstWebSocket.addEventListener('message', (event) => {
       console.log("New message from socket: ", event.data) 
    })

    return (
        <main>
            <Chats />
            <h2 className="welcome__title">
                <img src="/App/src/assets/wepa.png" alt="icon" />
                <p>WepaChat</p>
            </h2>
        </main>
    );
}

export default App;
