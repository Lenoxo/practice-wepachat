import { useContext, useState } from 'react';
import { ChatItem } from '../ChatItem';
import './index.css';
import { profilesContext } from '../../context';
import { createPortal } from 'react-dom';
import { ProfileInfo } from '../../Profile/ProfileInfo';

export function Chats() {
    const profiles = useContext(profilesContext);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // I use toLowerCase because it makes filtering matching easier, rather that being case sensitive
        const value = event.target.value.toLowerCase();

        console.info(value);

        const updatedProfiles = profiles.filter((profile) => {
            if (profile.name.toLowerCase().includes(value)) {
                return profile;
            }
        });

        setFilteredProfiles(updatedProfiles);
    }

    return (
        <aside className="chats">
            <input
                type="search"
                placeholder="Search by contact name"
                onChange={handleSearchInputChange}
            />
            <button onClick={() => setOpenModal(true)}>⚙️</button>
            {openModal && createPortal(<ProfileInfo setOpenModal={setOpenModal} />, document.body)}
            <h2>Chats</h2>
            <div className="chatList">
                {filteredProfiles?.map((profile) => {
                    return (
                        <ChatItem key={profile.id} imgLink={profile.image} name={profile.name} />
                    );
                })}
            </div>
        </aside>
    );
}
