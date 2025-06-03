export function ViewMessage({ messages }: { messages: Array<string> }) {
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
