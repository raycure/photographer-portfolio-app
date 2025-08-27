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
				<Text style={[styles.title, { color: colors.gray200 }]}>{title}</Text>
			)}
			<View
				style={[
					{
						borderColor: colors.primary400,
					},
					styles.innerContainer,
					active && { borderColor: colors.gray200 },
					containerStyle,
				]}
			>
				{leftElement && (
					<View style={styles.leftElementWrapper}>
						{leftElement({
							color: active ? colors.tint : colors.primary300,
						})}
					</View>
				)}
				<TextInput
					placeholder={placeholder}
					keyboardType={inputType === 'number' ? 'numeric' : 'default'}
					secureTextEntry={secure}
					style={[{ color: colors.gray200 }, styles.inputArea, textStyle]}
					selectionColor={colors.tint}
					{...props}
					onChange={onChange}
					contextMenuHidden={true}
					placeholderTextColor={colors.primary300}
					textContentType={textContentType}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				{rightElement && (
					<View style={styles.rightElementWrapper}>
						{rightElement({
							color: active ? colors.tint : colors.gray500,
						})}
					</View>
				)}
			</View>
		</View>
	);
}
