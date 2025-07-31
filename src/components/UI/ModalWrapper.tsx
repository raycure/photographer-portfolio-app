import { BlurView } from 'expo-blur';
import { View } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { ReactNode } from 'react';
import { ModalWrapperStyles } from './UIStyles';

export default function ModalWrapper({ children }: { children: ReactNode }) {
	const colors = useColors();
	const styles = ModalWrapperStyles;
	return (
		<BlurView
			intensity={10}
			tint='dark'
			style={styles.blurContainer}
			experimentalBlurMethod='dimezisBlurView'
		>
			<View
				style={[styles.outerContainer, { backgroundColor: colors.primary500 }]}
			>
				{children}
			</View>
		</BlurView>
	);
}
