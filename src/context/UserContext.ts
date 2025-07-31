import { createContext } from 'react';
import { UserState } from '../stores/StoreTypes';
import { UserStoreInitialState } from '../stores/InitialStates';
const UserContext = createContext<UserState>(UserStoreInitialState);

export default UserContext;
