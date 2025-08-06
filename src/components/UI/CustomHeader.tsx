import { useRouter } from 'expo-router';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import { View } from '../Themed';
import { ReactNode } from 'react';
import { CustomHeaderStyles } from './UIStyles';

export default function CustomHeader({
	rightElement,
}: {
	rightElement?: ReactNode;
}) {
	const router = useRouter();
	const styles = CustomHeaderStyles;
	return (
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
	);
}
