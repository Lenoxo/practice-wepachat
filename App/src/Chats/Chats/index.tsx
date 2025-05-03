import { useContext } from 'react';
import { ChatItem } from '../ChatItem';
import './index.css';
import { profilesContext } from '../../context';

export function Chats() {
    const context = useContext(profilesContext);
    return (
        <aside className="chats">
            <h2>Chats</h2>
            <div className="chatList">
                {context?.map((profile) => {
                    return (
                        <ChatItem key={profile.id} imgLink={profile.image} name={profile.name} />
                    );
                })}
            </div>
        </aside>
    );
}
