import { useRouter } from 'expo-router';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import { View } from '../Themed';
import { ReactNode } from 'react';
import { CustomHeaderStyles } from './UIStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '@/src/hooks/useColors';

export default function CustomHeader({
	rightElement,
}: {
	rightElement?: ReactNode;
}) {
	const router = useRouter();
	const colors = useColors();
	const styles = CustomHeaderStyles;
	return (
		<SafeAreaView
			style={{ backgroundColor: colors.background }}
			edges={['top']}
		>
			<View style={styles.outerContainer}>
				<CustomButton
					type='icon'
					icon={({ color }) => (
						<CustomIcon
							collectionKey='ion'
							name='chevron-back-outline'
							color={color}
							size={35}
						/>
					)}
					onPress={() => router.back()}
				/>
				{rightElement && rightElement}
			</View>
		</SafeAreaView>
	);
}
