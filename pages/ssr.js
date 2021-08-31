import Back from 'components/Back';
import { FetchContainer } from 'components/Container';
import { H2 } from 'components/Heading';
import Todo from 'components/Todo';

const SSR = ({ data }) => {
	return (
		<FetchContainer>
			<H2>Server-side rendering</H2>
			<Back />
			<Todo data={data} />
		</FetchContainer>
	);
};

export default SSR;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { data } // will be passed to the page component as props
	};
}
