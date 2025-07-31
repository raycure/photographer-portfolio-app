import { TextInput } from 'react-native';
import { Text, View } from '../Themed';
import { useState } from 'react';
import { InputAreaProps } from './UITypes';
import { useColors } from '@/src/hooks/useColors';
import { InputAreaStyles } from './UIStyles';

export default function InputArea({
	inputType = 'string',
	secure = false,
	placeholder = '',
	leftElement,
	rightElement,
	title = placeholder,
	containerStyle,
	textStyle,
	textContentType,
	onChange,
	...props
}: InputAreaProps) {
	const colors = useColors();
	const [active, setActive] = useState<boolean>(false);
	const styles = InputAreaStyles;
	return (
		<View style={styles.outerContainer}>
			{title && (
				<Text
					style={{
						fontWeight: 'bold',
						color: colors.gray200,
						fontSize: 18,
					}}
				>
					{title}
				</Text>
			)}
			<View
				style={[
					{
						backgroundColor: colors.primary800,
						borderColor: colors.gray500,
					},
					styles.innerContainer,
					active && { borderColor: colors.tint },
					containerStyle,
				]}
			>
				{leftElement && (
					<View style={{ backgroundColor: 'transparent', marginRight: 6 }}>
						{leftElement({
							color: active ? colors.tint : colors.gray400,
						})}
					</View>
				)}
				<TextInput
					placeholder={placeholder}
					keyboardType={inputType === 'number' ? 'numeric' : 'default'}
					secureTextEntry={secure}
					style={[{ color: colors.tint }, styles.inputArea, textStyle]}
					selectionColor={colors.tint}
					{...props}
					onChange={onChange}
					contextMenuHidden={true}
					placeholderTextColor={colors.gray400}
					textContentType={textContentType}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				{rightElement && (
					<View
						style={{
							position: 'absolute',
							right: 12,
							backgroundColor: 'transparent',
						}}
					>
						{rightElement({
							color: active ? colors.tint : colors.gray400,
						})}
					</View>
				)}
			</View>
		</View>
	);
}
