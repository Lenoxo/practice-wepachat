import { useContext, useRef } from 'react';
import { socket } from '../../socket';
import { profilesContext } from '../../context';
import './styles.css';

export function CurrentChat({ messages }: { messages: Array<string> }) {
    const { currProfile } = useContext(profilesContext);
    return (
        <>
            <section className="currentChat">
                <header className="currentChat__header">{currProfile?.name}</header>
                <ul id="messages">
                    {messages.map((msg, index) => {
                        return (
                            <li className="messages__item" key={index}>
                                {msg}
                            </li>
                        );
                    })}
                </ul>
                <NewMessage />
            </section>
        </>
    );
}

function NewMessage() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (inputRef.current === null) {
            throw new Error('inputRef.current is null');
        }

        socket.emit('chat message', inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                className="messageInput"
                type="text"
                placeholder="Write a message here"
            />
            <button type="submit">Send</button>
        </form>
    );
}
