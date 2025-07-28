import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';

export default function ProfileHeader() {
	return (
		<View>
			<View>
				<CustomIcon collectionKey='fa6' name='star' />
				<Image
					style={styles.profilePicture}
					source={{
						uri: 'https://reactnative.dev/img/tiny_logo.png',
					}}
				/>
			</View>
			<View>
				<View>
					<Text></Text>
					<Text></Text>
				</View>
				<View>
					<Text></Text>
					<Text></Text>
				</View>
				<View></View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	profilePicture: { width: 50, height: 50 },
});
