import { useRouter } from 'expo-router';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import { View } from '../Themed';
import { ReactNode } from 'react';

export default function CustomHeader({
	rightElement,
}: {
	rightElement?: ReactNode;
}) {
	const router = useRouter();
	return (
		<View
			style={{
				width: '100%',
				height: 35,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: 10,
			}}
		>
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
