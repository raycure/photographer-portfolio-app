import { StyleSheet, useColorScheme } from 'react-native';
import LineSeperator from '../UI/LineSeperator';
import { Text, View } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { IconCollectionKey } from '@/src/constants/iconRegistry';
import Colors from '@/src/constants/Colors';

export default function LoginExternalServices() {
	const externalLoginServices: {
		name: string;
		icon: {
			collectionKey: IconCollectionKey;
			name: string;
		};
	}[] = [
		{
			name: 'google',
			icon: { collectionKey: 'fa', name: 'google' },
		},
		{
			name: 'apple',
			icon: { collectionKey: 'fa', name: 'apple' },
		},
	];
	const colorScheme = useColorScheme();
	const handleServicePick = (serviceName: string) => {};
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<LineSeperator />
				<Text
					darkColor={Colors[colorScheme ?? 'dark'].gray300}
					lightColor={Colors[colorScheme ?? 'dark'].gray300}
				>
					Or log in with
				</Text>
				<LineSeperator />
			</View>
			<View style={styles.innerContainer}>
				{externalLoginServices.map((service, index) => (
					<CustomButton
						key={index}
						type='icon'
						onPress={() => handleServicePick(service.name)}
						icon={({ color }) => (
							<CustomIcon
								collectionKey={service.icon.collectionKey}
								name={service.icon.name}
								color={color}
								size={34}
							/>
						)}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		justifyContent: 'center',
	},
	outerContainer: {
		gap: 12,
	},
});
