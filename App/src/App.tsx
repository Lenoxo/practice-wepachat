import './App.css';
import { Chats } from './Chats/Chats';
import { NewMessage } from './Chats/NewMessage/indext';
import { ViewMessage } from './Chats/ViewMessage';
import { profilesContext } from './context';
import { socket } from './socket';

function App() {
    socket.on('connect', () => {
        console.info('Hey, connected bro');
    });

    const profiles = [
        {
            id: 'a23',
            name: 'Paco',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        },
        {
            id: 'a24',
            name: 'Willy',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        },
        {
            id: 'a25',
            name: 'Oscar',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        }
    ];

    return (
        <profilesContext.Provider value={profiles}>
            <main>
                <Chats />
                <NewMessage />
                <ViewMessage />
                <h2 className="welcome__title">
                    <img src="/App/src/assets/wepa.png" alt="icon" />
                    <p>WepaChat</p>
                </h2>
            </main>
        </profilesContext.Provider>
    );
}

export default App;
