import { StyleSheet } from 'react-native';
import UserContext from '@/src/context/UserContext';
import ProfileLayout from '@/src/components/Profile/ProfileLayout';
import { useLocalSearchParams } from 'expo-router';
import { dummyUser } from '@/src/constants/dummyUser';
export default function ProfilePublicScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const user = id;
	return (
		<UserContext.Provider value={dummyUser}>
			<ProfileLayout />
		</UserContext.Provider>
	);
}

const styles = StyleSheet.create({});
