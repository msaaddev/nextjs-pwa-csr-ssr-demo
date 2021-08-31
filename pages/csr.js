import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { FetchContainer } from 'components/Container';
import { H2 } from 'components/Heading';
import Loader from 'components/Loader';
import Todo from 'components/Todo';
import Back from 'components/Back';

const api = `https://jsonplaceholder.typicode.com/todos`;

const CSR = () => {
	const { data, error } = useSWR(api, fetcher);
	if (error) return <div>failed to load</div>;
	if (!data) return <Loader />;

	return (
		<FetchContainer>
			<H2>Client-side rendering</H2>
			<Back />
			<Todo data={data} />
		</FetchContainer>
	);
};

export default CSR;
