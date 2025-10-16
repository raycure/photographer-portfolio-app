import EditProfileLayout from '@/src/components/EditProfile/EditProfileLayout';
import { useColors } from '@/src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function editProfileScreen() {
	const colors = useColors();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colors.background }}
			edges={['top']}
		>
			<EditProfileLayout />;
		</SafeAreaView>
	);
}
