import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Loader = () => (
	<Wrapper>
		<ContentLoader speed={2} width={600} height={200} viewBox="0 0 600 200">
			<rect x="1" y="20" rx="2" ry="2" width="140" height="10" />
			<rect x="1" y="36" rx="2" ry="2" width="140" height="10" />
			<rect x="0" y="60" rx="2" ry="2" width="600" height="200" />
		</ContentLoader>
	</Wrapper>
);

export default Loader;
