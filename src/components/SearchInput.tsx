import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

function SearchInput() {
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const navigate = useNavigate();
	const queryRef = useRef<HTMLInputElement | null>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (queryRef.current) setSearchText(queryRef.current?.value);
				navigate('/');
			}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={queryRef}
					borderRadius={20}
					placeholder='Search games...'
					variant='filled'
				/>
			</InputGroup>
		</form>
	);
}

export default SearchInput;
