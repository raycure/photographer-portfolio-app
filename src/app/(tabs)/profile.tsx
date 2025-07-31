import ProfileLayout from '@/src/components/Profile/ProfileLayout';
import { dummyUser } from '@/src/constants/dummyUser';
import UserContext from '@/src/context/UserContext';

export default function ProfileScreen() {
	return (
		<UserContext.Provider value={dummyUser}>
			<ProfileLayout />
		</UserContext.Provider>
	);
}
