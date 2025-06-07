import { useContext } from 'react';
import './styles.css';
import { profilesContext } from '../../context';
import { Profile } from '../../types';

type Props = Omit<Profile, 'description'>;

export function ChatItem({ id, image, name }: Props) {
    const { profiles, setCurrProfile } = useContext(profilesContext);

    function handleClick(id: string) {
        const profile = profiles.find((prof) => {
            return prof.id === id;
        });

        if (!profile) {
            throw new Error(
                'There is an id that points to a non existing profile, check profiles array'
            );
        }

        if (setCurrProfile === null) {
            throw new Error('context.setCurrProfile is null');
        }

        setCurrProfile(profile);
        return;
    }

    return (
        <div className="chatItem" onClick={() => handleClick(id)}>
            <img className="chatItem__img" src={image} alt="contact" />
            <p>{name}</p>
        </div>
    );
}
