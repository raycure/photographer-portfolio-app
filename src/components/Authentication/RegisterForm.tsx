import { useForm } from '@/src/hooks/useForm';
import { useState } from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { InputDataTypes } from './Types';
import InputArea from '../UI/InputArea';
import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';
import InputHighlightBar from '../UI/InputHighlightBar';
import CustomButton from '../UI/CustomButton';
import { Link } from 'expo-router';
import Colors from '@/src/constants/Colors';
export default function RegisterForm() {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { formData, onInputChange } = useForm({
		name: '',
		username: '',
		email: '',
		password: '',
	});
	type FormKeys = keyof typeof formData;

	const inputData: InputDataTypes = {
		name: {
			name: 'name',
			leftIcon: {
				collectionKey: 'fa6',
				name: 'user-large',
			},
			placeholder: 'Enter your name',
			title: 'Your name',
			textContentType: 'name',
		},
		username: {
			name: 'username',
			leftIcon: {
				collectionKey: 'fa6',
				name: 'user-group',
			},
			placeholder: 'Enter your username',
			title: 'Username',
			textContentType: 'nickname',
		},
		email: {
			name: 'email',
			leftIcon: {
				collectionKey: 'fa',
				name: 'envelope',
			},
			placeholder: 'Enter your email',
			title: 'Email',
			textContentType: 'emailAddress',
		},
	};
	const colorScheme = useColorScheme();
	return (
		<View style={styles.container}>
			<View>
				{(Object.keys(inputData) as FormKeys[]).map((key, index) => {
					const item = inputData[key];
					return (
						<InputArea
							key={index}
							title={item.title}
							value={formData[key]}
							placeholder={item.placeholder}
							textContentType={item.textContentType}
							onChangeText={(text) => onInputChange(text, item.name)}
							leftElement={({ color }) => (
								<CustomIcon
									collectionKey={item.leftIcon.collectionKey}
									name={item.leftIcon.name}
									color={color}
									size={22}
								/>
							)}
						/>
					);
				})}
				<InputArea
					leftElement={({ color }) => (
						<CustomIcon
							collectionKey='fa6'
							name='lock'
							size={22}
							color={color}
						/>
					)}
					rightElement={({ color }) => (
						<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
							<CustomIcon
								collectionKey='ad'
								name={passwordSecure ? 'eyeo' : 'eye'}
								color={color}
							/>
						</Pressable>
					)}
					secureTextEntry={passwordSecure}
					containerStyle={{ overflow: 'visible' }}
					textStyle={{
						letterSpacing:
							passwordSecure && formData.password.length > 0 ? 4 : 0,
					}}
					title='Password'
					placeholder='Enter your password'
					value={formData.password}
					onChangeText={(text) => onInputChange(text, 'password')}
				/>
				<InputHighlightBar level='high' />
				<CustomButton
					onPress={() => {}}
					type='stretched'
					content='Sign Up'
					style={{ marginVertical: 32 }}
				/>
			</View>
			<View style={{ flexDirection: 'row', gap: 4, margin: 20 }}>
				<Text style={{ color: Colors[colorScheme ?? 'dark'].gray400 }}>
					Already have an account?
				</Text>
				<Link
					style={{ color: Colors[colorScheme ?? 'dark'].tint }}
					href='/(secure)/login'
				>
					Login
				</Link>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 18,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
