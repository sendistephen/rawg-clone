import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
	onHandleSearch: (searchText: string) => void;
}
function SearchInput({ onHandleSearch }: Props) {
	const queryRef = useRef<HTMLInputElement | null>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (queryRef.current) onHandleSearch(queryRef.current?.value);
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
