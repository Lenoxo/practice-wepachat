import { useEffect, useState } from 'react';
import { Profile } from '../types';
import { socket } from '../socket';
import { profilesContext } from '.';

export function ProfilesProvider({ children }: { children: React.ReactNode }) {
    const profiles = [
        {
            id: 'a23',
            name: 'Paco',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        },
        {
            id: 'a24',
            name: 'Willy',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        },
        {
            id: 'a25',
            name: 'Oscar',
            description: 'Is a youtuber',
            image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
        }
    ];

    const [currProfile, setCurrProfile] = useState<Profile | null>(profiles[0]);

    useEffect(() => {
        console.info(currProfile);
    }, [currProfile]);

    socket.on('connect', () => {
        console.info('Hey, connected bro');
    });

    return (
        <profilesContext.Provider value={{ profiles, currProfile, setCurrProfile }}>
            {children}
        </profilesContext.Provider>
    );
}
