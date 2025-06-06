import { createContext, SetStateAction } from 'react';
import { Profile } from '../types';

export const profilesContext = createContext<{
    profiles: Profile[];
    currProfile: null | Profile;
    setCurrProfile: null | React.Dispatch<SetStateAction<Profile | null>>;
}>({
    profiles: [],
    currProfile: null,
    setCurrProfile: null
});

// export const profilesContext = createContext<{
//     profiles: Profile[];
//     currProfile: null | Profile;
// }>();
