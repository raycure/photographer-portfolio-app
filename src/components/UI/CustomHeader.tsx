import { useRouter } from 'expo-router';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import { useColorScheme } from 'react-native';
import Colors from '@/src/constants/Colors';
import { View } from '../Themed';

export default function MyComponent() {
	const router = useRouter();
	const colorScheme = useColorScheme();
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
						size={30}
					/>
				)}
				onPress={() => router.back()}
				style={{
					marginLeft: 10,
				}}
			/>
		</View>
	);
}
