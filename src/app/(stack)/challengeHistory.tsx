import ChallengeHistoryLayout from '@/src/components/ChallengeHistory/ChallengeHistoryLayout';
import { useColors } from '@/src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChallengeHistoryScreen() {
	const colors = useColors();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colors.background }}
			edges={['top']}
		>
			<ChallengeHistoryLayout />;
		</SafeAreaView>
	);
}
