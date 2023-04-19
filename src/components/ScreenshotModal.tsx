import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
	screenshots: Screenshot[];
	isOpen: boolean;
	onClose: () => void;
}
function ScreenshotModal({ screenshots, isOpen, onClose }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSlideChange = (oldIndex: number, newIndex: number) => {
		setCurrentIndex(newIndex);
	};

	const divStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundSize: 'cover',
		width: '100%',
		height: '400px',
	};

	return (
		<Modal
			size={{ base: 'xs', sm: 'md', md: 'lg', lg: 'xl' }}
			closeOnOverlayClick={false}
			isOpen={isOpen}
			onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton zIndex={50} />
				<ModalBody>
					<Fade onChange={handleSlideChange}>
						{screenshots.map((slideImage: Screenshot, index: number) => (
							<Box key={index}>
								<Box
									style={{
										...divStyle,
										backgroundImage: `url(${slideImage.image})`,
									}}
								/>
							</Box>
						))}
					</Fade>
				</ModalBody>

				<ModalFooter>
					<Text fontSize='sm' mr={2}>
						{currentIndex + 1} / {screenshots.length}
					</Text>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default ScreenshotModal;
