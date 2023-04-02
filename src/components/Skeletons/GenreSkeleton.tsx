import {
	Button,
	HStack,
	ListItem,
	SkeletonCircle,
	SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

function GenreSkeleton() {
	return (
		<ListItem paddingY='5px'>
			<HStack>
				<SkeletonCircle boxSize='32px' borderRadius={8} />
				<Button paddingX={12} height={8}>
					<SkeletonText />
				</Button>
			</HStack>
		</ListItem>
	);
}

export default GenreSkeleton;
