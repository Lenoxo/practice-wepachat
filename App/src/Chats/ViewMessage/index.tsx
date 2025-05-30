import { socket } from '../../socket';

export function ViewMessage() {
    const messagesSection = document.getElementById('messages__list');

    socket.on('chat message', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        if (messagesSection === null) {
            throw new Error(
                'messagesSection is null, check if you are selecting the right element'
            );
        }
        messagesSection.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });
    return (
        <section className="messages">
            <ul id="messages__list"></ul>
        </section>
    );
}
