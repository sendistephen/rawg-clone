import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Text,
} from '@chakra-ui/react';
import React from 'react';

function GameBreadcrumb({ gameName }: { gameName: string }) {
	return (
		<Flex direction='column' marginTop='30px'>
			<Breadcrumb textTransform='uppercase' fontSize='10px' color='gray.500'>
				<BreadcrumbItem>
					<BreadcrumbLink
						_hover={{
							textDecoration: 'none',
							color: 'white',
							transition: 'color 0.3 ease',
						}}
						href='/'>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink
						_hover={{
							textDecoration: 'none',
							color: 'white',
							transition: 'color 0.3 ease',
						}}
						href='/'>
						Games
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Text>{gameName}</Text>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
	);
}

export default GameBreadcrumb;
