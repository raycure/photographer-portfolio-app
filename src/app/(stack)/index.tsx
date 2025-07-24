import { StyleSheet } from 'react-native';
import { View } from '@/src/components/Themed';
import CustomButton from '@/src/components/UI/CustomButton';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { useModalStore } from '@/src/stores/ModalStore';

export default function TabOneScreen() {
	const openModal = useModalStore((state) => state.openModal);
	return (
		<View style={styles.container}>
			<CustomButton
				type='stretched'
				content='Click Me'
				onPress={() => console.log('Text button pressed')}
				textColor='white'
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Icon button pressed')}
				tintedBackground={{
					color: '#ffffff',
					opacity: 0.15,
					type: 'circular',
				}}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Icon button pressed')}
				tintedBackground={{
					color: '#ffffff',
					opacity: 0.15,
					type: 'rectangular',
				}}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Icon button pressed')}
				tintedBackground={{
					type: 'rectangular',
					blur: { intensity: 50 },
				}}
			/>
			<CustomButton
				type='general'
				textColor='white'
				content='Gradient'
				onPress={() =>
					openModal({
						title: 'Hello!',
						icon: <CustomIcon collectionKey='fa6' name='star' size={40} />,
						content: 'This modal was triggered by a button.',
						// list: [
						// 	{ content: 'You can only submit once per challenge.' },
						// 	{ content: 'Submissions are final once uploaded.' },
						// 	{ content: 'Your photo will be rated by other users' },
						// ],
						buttons: {
							configuration: 'row',
							list: [
								{
									type: 'stretched',
									content: 'Got it',
									onPress: () => useModalStore.getState().closeModal(),
								},
								{
									type: 'stretched',
									content: 'Got it',
									onPress: () => useModalStore.getState().closeModal(),
								},
							],
						},
					})
				}
				gradientBackground={{
					orientation: 'horizontal',
					colors: ['#4c669f', '#081b45ff'],
				}}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' name={'eyeo'} color={color} />
				)}
				onPress={() => alert('Star pressed')}
				gradientBackground={{ colors: ['#FF512F', '#DD2476'] }}
				style={{ padding: 10 }}
			/>
			<CustomButton
				type='general'
				content='Disabled'
				onPress={undefined}
				disabled={true}
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
