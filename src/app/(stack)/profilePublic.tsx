import UserContext from '@/src/context/UserContext';
import ProfileLayout from '@/src/components/Profile/ProfileLayout';
import { useLocalSearchParams } from 'expo-router';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { useColors } from '@/src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ProfilePublicScreen() {
	const { userId } = useLocalSearchParams<{ userId: string }>();
	const colors = useColors();
	const user = dummyUsers.find((user) => {
		return user.personalInfo.id === userId;
	});
	return (
		<UserContext.Provider value={user!}>
			<SafeAreaView
				style={{ flex: 1, backgroundColor: colors.background }}
				edges={['top']}
			>
				<ProfileLayout />
			</SafeAreaView>
		</UserContext.Provider>
	);
}
