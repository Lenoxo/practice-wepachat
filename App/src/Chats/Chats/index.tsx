import { useContext, useState } from 'react';
import { ChatItem } from '../ChatItem';
import './index.css';
import { profilesContext } from '../../context';
import { createPortal } from 'react-dom';
import { ProfileInfo } from '../../Profile/ProfileInfo';

export function Chats() {
    const context = useContext(profilesContext);
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <aside className="chats">
            <button onClick={() => setOpenModal(true)}>⚙️</button>
            {openModal && createPortal(<ProfileInfo setOpenModal={setOpenModal} />, document.body)}
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
