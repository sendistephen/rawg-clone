import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import Layout from './components/Layout';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}
function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<GameHeading gameQuery={gameQuery} />
			<Flex marginBottom={5}>
				<Box marginRight={5}>
					<PlatformSelector
						onSelectedPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>
				</Box>
				<SortSelector
					sortOrder={gameQuery.sortOrder}
					onSelectSortOrder={(sortOrder) =>
						setGameQuery({ ...gameQuery, sortOrder })
					}
				/>
			</Flex>
			<GameGrid gameQuery={gameQuery} />
		</>
	);
}

export default App;
