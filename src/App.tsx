import { useState } from 'react';
import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<GridItem area='nav'>
				<Navbar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside'>
					Aside
				</GridItem>
				<GridItem area='main'>
					Nav
				</GridItem>
			</Show>
		</Grid>
	);
}

export default App;
