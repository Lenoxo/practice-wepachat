import './App.css';
import { Chats } from './Chats/Chats';
import { socket } from './socket';

function App() {
    socket.on('connect', () => {
        console.info('Hey, connected bro');
    });

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
