import { useContext, useState } from 'react';
import './App.css';
import { Chats } from './Chats/Chats';
import { CurrentChat } from './Chats/CurrentChat';
import { ProfilesProvider } from './context/ProfilesProvider';
import { profilesContext } from './context';
import { socket } from './socket';

function App() {
    const [messages, setMessages] = useState<Array<string>>([]);
    const context = useContext(profilesContext);

    function updateMessages(msg: string) {
        const newMessages = [...messages, msg];
        setMessages(newMessages);
    }

    socket.on('chat message', updateMessages);

    return (
        <ProfilesProvider>
            <main>
                <Chats />
                {context.currProfile ? (
                    <CurrentChat messages={messages} />
                ) : (
                    <div className="welcome__title">
                        <img src="/App/src/assets/wepa.png" alt="icon" />
                        <p>WepaChat</p>
                    </div>
                )}
            </main>
        </ProfilesProvider>
    );
}

export default App;
