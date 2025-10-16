import ConnectionsLayout from '@/src/components/Connections/ConnectionsLayout';
import { useColors } from '@/src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConnectionsScreen() {
	const colors = useColors();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colors.background }}
			edges={['top']}
		>
			<ConnectionsLayout />;
		</SafeAreaView>
	);
}
