import UserContext from '@/src/context/UserContext';
import ProfileLayout from '@/src/components/Profile/ProfileLayout';
import { useLocalSearchParams } from 'expo-router';
import { dummyUsers } from '@/src/constants/dummyUsers';
export default function ProfilePublicScreen() {
	const { userId } = useLocalSearchParams<{ userId: string }>();
	const user = dummyUsers.find((user) => {
		return user.personalInfo.id === userId;
	});
	return (
		<UserContext.Provider value={user!}>
			<ProfileLayout />
		</UserContext.Provider>
	);
}
