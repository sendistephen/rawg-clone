import { useState } from 'react';
import { Button, Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<GridItem area='nav' bg='coral'>
				Nav
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' bg='black'>
					Aside
				</GridItem>
				<GridItem area='main' bg='darkgoldenrod'>
					Nav
				</GridItem>
			</Show>
		</Grid>
	);
}

export default App;
