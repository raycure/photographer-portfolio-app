import { useRouter } from 'expo-router';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import { View } from '../Themed';

export default function MyComponent() {
	const router = useRouter();
	return (
		<View
			style={{
				width: '100%',
				height: 35,
				justifyContent: 'center',
				alignItems: 'flex-start',
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
				outerContainerStyle={{
					marginLeft: 10,
				}}
			/>
		</View>
	);
}
