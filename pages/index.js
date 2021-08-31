import styled from 'styled-components';
import { ButtonWrapper, Button } from 'components/Button';
import { HeadingWrapper } from 'components/Heading';

export default function Home() {
	return (
		<Container>
			<HeadingWrapper>
				<h1>Next.js CSR, SSR Example</h1>
			</HeadingWrapper>
			<ButtonWrapper>
				<Button>Client-side rendering</Button>
				<Button>Server-side rendering</Button>
			</ButtonWrapper>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
