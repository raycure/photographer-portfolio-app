import ProfileLayout from '@/src/components/Profile/ProfileLayout';
import UserContext from '@/src/context/UserContext';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

export default function ProfileScreen() {
	const userInfoStore = useUserInfoStore();
	return (
		<UserContext.Provider value={userInfoStore}>
			<ProfileLayout />
		</UserContext.Provider>
	);
}
