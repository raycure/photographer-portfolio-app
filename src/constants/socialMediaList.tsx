import { ReactNode } from 'react';
import {
	DiscordSVG,
	FacebookSVG,
	InstagramSVG,
	LinkedInSVG,
	PinterestSVG,
	SpotifySVG,
	TikTokSVG,
	TwitterSVG,
	YoutubeSVG,
} from './svgs';
import { StyleSheet } from 'react-native';

export type Social =
	| 'instagram'
	| 'facebook'
	| 'tiktok'
	| 'pinterest'
	| 'linkedin'
	| 'twitter'
	| 'discord'
	| 'youtube'
	| 'spotify';

export type SocialMediaItem = {
	social: Social;
	icon: ReactNode;
};
const styles = StyleSheet.create({
	instagram: { width: 30, height: 30, left: 2 },
	facebook: { width: 34, height: 34 },
	tiktok: { width: 34, height: 34 },
	pinterest: { width: 34, height: 34 },
	linkedin: { width: 38, height: 38 },
	twitter: { width: 38, height: 38 },
	discord: { width: 36, height: 36, left: -2 },
	youtube: { width: 34, height: 34 },
	spotify: {},
});
export const socialMediaList: (SocialMediaItem & { title: string })[] = [
	{
		social: 'instagram',
		title: 'Instagram',
		icon: <InstagramSVG style={styles.instagram} />,
	},
	{
		social: 'facebook',
		title: 'Facebook',
		icon: <FacebookSVG style={styles.facebook} />,
	},
	{
		social: 'tiktok',
		title: 'TikTok',
		icon: <TikTokSVG style={styles.tiktok} />,
	},
	{
		social: 'pinterest',
		title: 'Pinterest',
		icon: <PinterestSVG style={styles.pinterest} />,
	},
	{
		social: 'linkedin',
		title: 'LinkedIn',
		icon: <LinkedInSVG style={styles.linkedin} />,
	},
	{
		social: 'twitter',
		title: 'Twitter',
		icon: <TwitterSVG style={styles.twitter} />,
	},
	{
		social: 'discord',
		title: 'Discord',
		icon: <DiscordSVG style={styles.discord} />,
	},
	{
		social: 'youtube',
		title: 'YouTube',
		icon: <YoutubeSVG style={styles.youtube} />,
	},
	{
		social: 'spotify',
		title: 'Spotify',
		icon: <SpotifySVG width={30} height={30} style={styles.spotify} />,
	},
];
