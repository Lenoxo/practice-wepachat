import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Chats } from './Chats/Chats';
import { CurrentChat } from './Chats/CurrentChat';
import { ProfilesProvider } from './context/ProfilesProvider';
import { profilesContext } from './context';
import { socket } from './socket';

function App() {
    const [messages, setMessages] = useState<Array<string>>([]);
    const context = useContext(profilesContext);

    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        if (context.currProfile) {
            setShowChat(true);
        } else {
            setShowChat(false);
        }
    }, [context.currProfile]);

    function updateMessages(msg: string) {
        const newMessages = [...messages, msg];
        setMessages(newMessages);
    }

    socket.on('chat message', updateMessages);

    return (
        <ProfilesProvider>
            <main>
                <Chats />
                {showChat ? (
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
