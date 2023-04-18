import { Icon, HStack } from '@chakra-ui/react';
import {
	FaApple,
	FaWindows,
	FaXbox,
	FaLinux,
	FaPlaystation,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[] | undefined;
	color?: string;
}
function PlatformIconList({ platforms, color = '' }: Props) {
	const iconMap: { [key: string]: IconType } = {
		mac: FaApple,
		android: FaAndroid,
		pc: FaWindows,
		xbox: FaXbox,
		linux: FaLinux,
		playstation: FaPlaystation,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms?.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color={color} />
			))}
		</HStack>
	);
}

export default PlatformIconList;
