import { useRef } from 'react';
import { socket } from '../../socket';

export function NewMessage() {
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
