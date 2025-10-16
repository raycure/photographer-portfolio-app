import LinkedAccountsLayout from '@/src/components/LinkedAccounts/LinkedAccoutsLayout';
import { useColors } from '@/src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LinkedAccountsScreen() {
	const colors = useColors();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colors.background }}
			edges={['top']}
		>
			<LinkedAccountsLayout />;
		</SafeAreaView>
	);
}
