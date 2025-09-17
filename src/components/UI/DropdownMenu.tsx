import { Text, TouchableOpacity, View } from 'react-native';
import { DropdownMenuStyles } from './UIStyles';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import CustomIcon from './CustomIcon';

interface DropdownMenuProps<T, V = T> {
	backgroundColor?: string;
	borderColor?: string;
	setSelectedOption: (option: V) => void;
	selectedOption?: string;
	list: T[];
	getOptionValue: (item: T) => V;
	getOptionLabel: (item: T) => string;
	width?: number;
	title: string;
}

export default function DropdownMenu<T, V = T>({
	backgroundColor,
	borderColor,
	setSelectedOption,
	selectedOption,
	list,
	getOptionValue,
	getOptionLabel,
	width,
	title,
}: DropdownMenuProps<T, V>) {
	const colors = useColors();
	const [listOpen, setListOpen] = useState(false);
	const styles = DropdownMenuStyles;

	return (
		<View style={[styles.outerContainer, width ? { width: width } : undefined]}>
			<TouchableOpacity
				style={[
					styles.input,
					{ backgroundColor: backgroundColor || colors.primary400 },
				]}
				onPress={() => setListOpen(!listOpen)}
			>
				<Text style={[styles.inputText, { color: colors.tint }]}>
					{selectedOption || title}
				</Text>
				<CustomIcon
					size={24}
					collectionKey='oct'
					name={listOpen ? 'triangle-up' : 'triangle-down'}
				/>
			</TouchableOpacity>
			{listOpen && (
				<View style={styles.dropdown}>
					{list.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={[
								styles.option,
								{
									backgroundColor: backgroundColor || colors.primary400,
									borderColor: borderColor || colors.primary500,
								},
							]}
							onPress={() => {
								setSelectedOption(getOptionValue(item));
								setListOpen(false);
							}}
						>
							<Text style={[styles.inputText, { color: colors.tint }]}>
								{getOptionLabel(item)}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
}
