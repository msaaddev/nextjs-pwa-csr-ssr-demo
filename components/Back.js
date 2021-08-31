import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
	cursor: pointer;
	margin-left: -20px;
	font-family: 'Raleway', sans-serif;
`;

const Back = () => {
	return (
		<Wrapper>
			<Link passHref={true} href="/">
				<h4>← Go Back</h4>
			</Link>
		</Wrapper>
	);
};

export default Back;
