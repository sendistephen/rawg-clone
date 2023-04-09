import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Flex, HStack, Image, ImageProps, Text } from '@chakra-ui/react';

interface Props {
	rating: number;
	showTitle?: boolean;
}
function Emoji({ rating, showTitle }: Props) {
	if (rating < 3) return null;
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'Meh', boxSize: '25px' },
		4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
		5: { src: bullsEye, alt: 'Exceptional', boxSize: '35px' },
	};
	const emoji = emojiMap[rating];
	if (!emoji) return null;
	return (
		<HStack>
			{showTitle && (
				<Text fontSize='2xl' letterSpacing="1.2px" fontWeight='bold'>
					{emoji.alt}
				</Text>
			)}
			<Image {...emoji} marginTop={1} />
		</HStack>
	);
}

export default Emoji;
