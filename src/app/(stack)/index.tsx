import { StyleSheet } from 'react-native';
import { View } from '@/src/components/Themed';
import CustomButton from '@/src/components/UI/CustomButton';
import CustomIcon from '@/src/components/UI/CustomIcon';

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<CustomButton
				type='text'
				content='Click Me'
				onPress={() => console.log('Text button pressed')}
				backgroundColor='#eee'
				textStyle={{ color: 'blue', fontWeight: 'bold' }}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Icon button pressed')}
				backgroundColor='transparent'
			/>
			<CustomButton
				type='text'
				content='Gradient'
				onPress={() => console.log('Gradient button pressed')}
				gradientBackground={{ colors: ['#4c669f', '#3b5998'] }}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Star pressed')}
				gradientBackground={{ colors: ['#FF512F', '#DD2476'] }}
				style={{ padding: 10 }}
				tintedBackground={{
					color: '#fff',
					opacity: 0.15,
					type: 'circular',
					blurredShadow: true,
				}}
			/>
			<CustomButton
				type='text'
				content='Disabled'
				onPress={undefined}
				backgroundColor='#ccc'
				textStyle={{ color: '#666' }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
