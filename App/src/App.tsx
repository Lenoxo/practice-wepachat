import { useContext, useState } from 'react';
import './App.css';
import { Chats } from './Chats/Chats';
import { CurrentChat } from './Chats/CurrentChat';
import { socket } from './socket';
import { profilesContext } from './context';

function App() {
    const [messages, setMessages] = useState<Array<string>>([]);

    const { currProfile } = useContext(profilesContext);

    function updateMessages(msg: string) {
        const newMessages = [...messages, msg];
        setMessages(newMessages);
    }

    socket.on('chat message', updateMessages);

    return (
        <main>
            <Chats />
            {currProfile ? (
                <CurrentChat messages={messages} />
            ) : (
                <div className="welcome__title">
                    <img src="/App/src/assets/wepa.png" alt="icon" />
                    <p>WepaChat</p>
                </div>
            )}
        </main>
    );
}
export default App;
