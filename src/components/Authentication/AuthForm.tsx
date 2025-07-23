import { useForm } from '@/src/hooks/useForm';
import { useState } from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import InputArea from '../UI/InputArea';
import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';
import InputHighlightBar from '../UI/InputHighlightBar';
import CustomButton from '../UI/CustomButton';
import { Link } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { authFormInputData } from './FormInputData';
import { FormProps } from './Types';

export default function AuthForm({ elements, type }: FormProps) {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { formData: authFormData, onInputChange } = useForm({
		name: '',
		username: '',
		email: '',
		password: '',
	});
	type AuthFormKeys = keyof typeof authFormData;
	const passwordEyeIcon = ({ color }: { color: any }) => (
		<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
			<CustomIcon
				collectionKey='ad'
				name={passwordSecure ? 'eyeo' : 'eye'}
				color={color}
			/>
		</Pressable>
	);
	const colorScheme = useColorScheme();
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				{(Object.keys(authFormInputData) as AuthFormKeys[]).map(
					(key, index) => {
						const item = authFormInputData[key];
						if (!elements.includes(key)) return null;
						return (
							<InputArea
								key={index}
								title={item.title}
								value={authFormData[key]}
								placeholder={item.placeholder}
								textContentType={item.textContentType}
								onChangeText={(text) => onInputChange(text, key)}
								leftElement={({ color }) => (
									<CustomIcon
										collectionKey={item.leftIcon.collectionKey}
										name={item.leftIcon.name}
										color={color}
										size={22}
									/>
								)}
								secureTextEntry={key === 'password' ? passwordSecure : false}
								textStyle={
									key === 'password'
										? {
												letterSpacing:
													passwordSecure && authFormData.password.length > 0
														? 4
														: 0,
										  }
										: undefined
								}
								rightElement={key === 'password' ? passwordEyeIcon : undefined}
							/>
						);
					}
				)}
				{type === 'register' && <InputHighlightBar level='high' />}

				<CustomButton
					onPress={() => {}}
					type='stretched'
					content={type === 'register' ? 'Sign Up' : 'Login'}
					style={{ marginVertical: 32 }}
				/>
			</View>
			<View style={{ flexDirection: 'row', gap: 4, margin: 20 }}>
				<Text style={{ color: Colors[colorScheme ?? 'dark'].gray400 }}>
					{type === 'register'
						? 'Already have an account?'
						: "Don't have an account?"}
				</Text>
				<Link
					style={{ color: Colors[colorScheme ?? 'dark'].tint }}
					href={type === 'register' ? '/(secure)/login' : '/(secure)'}
				>
					{type === 'register' ? 'Login' : 'Register'}
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
