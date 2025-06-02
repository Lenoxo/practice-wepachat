import { useEffect, useState } from 'react';
import { socket } from '../../socket';

export function ViewMessage() {
    const [messages, setMessages] = useState<Array<string>>([]);

    useEffect(() => {
        function updateMessages(msg: string) {
            const newMessages = [...messages, msg];
            setMessages(newMessages);
        }
        socket.on('chat message', updateMessages);

        // socket.off('chat message');
    }, []);
    // socket.on('chat message', (msg) => {
    //     console.warn(msg);
    // const messagesSection = document.getElementById('messages__list');

    // console.count(msg);
    // const item = document.createElement('li');
    // item.textContent = msg;

    // if (messagesSection === null) {
    //     throw new Error('messagesSection is null, check if you are selecting the right element');
    // }
    // messagesSection.appendChild(item);
    // window.scrollTo(0, document.body.scrollHeight);
    // });

    return (
        <section className="messages">
            <ul id="messages__list">
                {messages.map((msg, index) => {
                    return <li key={index}>{msg}</li>;
                })}
            </ul>
        </section>
    );
}
