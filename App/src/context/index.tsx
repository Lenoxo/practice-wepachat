import { Children, createContext } from 'react';
import { Profile } from '../types';

const profilesContext = createContext<Profile[]>([
    {
        id: 'a23',
        name: 'Willy',
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
        name: 'Willy',
        description: 'Is a youtuber',
        image: 'https://cdn.pfps.gg/pfps/9479-yuji-itadori.png'
    }
]);

export function profliesProvider() {
    return <profilesContext.Provider>{Children}</profilesContext.Provider>;
}
