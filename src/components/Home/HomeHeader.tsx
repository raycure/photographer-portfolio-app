import { View } from 'react-native';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { useTranslation } from 'react-i18next';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { pickImageFromGallery } from '@/src/utils/pickImage';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useEffect, useState } from 'react';
import { AttendChallenge, ChallengeExplanation } from '../Modal/modals';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

export default function HomeHeader({ theme }: { theme: string }) {
	const { t } = useTranslation();
	const [image, setImage] = useState<string | null>(null);
	const interactionsStore = useInteractionStore();
	const userInfoStore = useUserInfoStore();
	const hasSeenChallengeExplanation =
		interactionsStore.modalsInteracted.challengeExplanation.seen;
	const isLoggedIn = !!userInfoStore.personalInfo.id;
	const colors = useColors();
	const onConfirm = async () => {
		const uri = await pickImageFromGallery({
			aspect: dummyChallengeData.photoRatio,
		});
		if (uri) {
			setImage(uri);
		}
	};
	const onAttendPress = () => {
		AttendChallenge(onConfirm);
	};
	const setChallengeExplanationSeen = () =>
		interactionsStore.setModalSeen('challengeExplanation');
	useEffect(() => {
		if (!hasSeenChallengeExplanation && isLoggedIn) {
			const timer = setTimeout(() => {
				ChallengeExplanation(setChallengeExplanationSeen);
			}, 800);
			return () => clearTimeout(timer);
		}
	}, [hasSeenChallengeExplanation, isLoggedIn]);
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<SubtitleTitlePair
				subtitle={t('Home.title')}
				title={theme}
				size='medium'
			/>
			<CustomButton
				type='icon'
				onPress={onAttendPress}
				icon={({ color }) => (
					<CustomIcon collectionKey='fe' name='plus' color={color} size={24} />
				)}
				tintedBackground={{
					color: colors.tint,
					opacity: 0.1,
					type: 'rectangular',
				}}
			/>
		</View>
	);
}
