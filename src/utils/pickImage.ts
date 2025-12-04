import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

type PickImageOptions = {
	aspect?: [number, number];
	allowsEditing?: boolean;
	quality?: number;
};

export async function pickImageFromGallery(
	options: PickImageOptions = {}
): Promise<string | null> {
	const { aspect = [1, 1], allowsEditing = true, quality = 0.8 } = options;

	const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

	if (!permission.granted) {
		Alert.alert(
			'Permission required',
			'Allow access to your gallery to continue.'
		);
		return null;
	}

	const result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ['images'],
		allowsEditing,
		aspect,
		quality,
	});

	if (result.canceled) return null;

	return result.assets[0].uri;
}
