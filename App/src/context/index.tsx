import { createContext } from 'react';
import { Profile } from '../types';

export const profilesContext = createContext<Profile[]>([]);
