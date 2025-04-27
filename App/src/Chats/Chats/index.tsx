import { ChatItem } from '../ChatItem';
import './index.css';

export function Chats() {
    return (
        <aside className="chats">
            <h2>Chats</h2>
            <div className="chatList">
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </aside>
    );
}
