import { useForm } from '@/src/hooks/useForm';
import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import InputArea from '../UI/InputArea';
import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';
import InputHighlightBar from '../UI/InputHighlightBar';
import CustomButton from '../UI/CustomButton';
import { authFormInputData } from './AuthData';
import { FormProps } from './AuthTypes';
import LoginExternalServices from './LoginExternalServices';
import InlineLinkText from './InlineLinkText';
import ForgotPasswordButton from './ForgotPasswordButton';
import { useColors } from '@/src/hooks/useColors';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

export default function AuthForm({ elements, type }: FormProps) {
	const colors = useColors();
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { formData: authFormData, onInputChange } = useForm({
		name: '',
		username: '',
		email: '',
		password: '',
	});
	type AuthFormKeys = keyof typeof authFormData;
	const userInfoStore = useUserInfoStore();
	const passwordEyeIcon = ({ color }: { color: any }) => (
		<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
			<CustomIcon
				collectionKey='ad'
				name={passwordSecure ? 'eyeo' : 'eye'}
				color={color}
			/>
		</Pressable>
	);
	const onRegisterPressed = () => {};
	const onLoginPressed = () => {
		userInfoStore.setUserData();
	};
	return (
		<View style={styles.container}>
			<View style={{ gap: 4 }}>
				<Text style={[{ color: colors.tint }, styles.title]}>
					{type === 'register' ? 'Create an account' : 'Log in to your account'}
				</Text>
				<Text style={[{ color: colors.gray300 }, styles.text]}>
					{type === 'register'
						? 'Welcome! Please enter your details.'
						: 'Welcome back! Please enter your details.'}
				</Text>
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
				{type === 'register' ? (
					<InputHighlightBar level='low' />
				) : (
					<ForgotPasswordButton />
				)}
				<CustomButton
					onPress={type === 'register' ? onRegisterPressed : onLoginPressed}
					type='stretched'
					content={type === 'register' ? 'Sign Up' : 'Login'}
					style={{ marginVertical: 20 }}
				/>
				{type === 'login' && <LoginExternalServices />}
			</View>
			<InlineLinkText type={type} />
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
	title: { fontSize: 26, fontWeight: 'bold' },
	text: { fontSize: 18 },
});
