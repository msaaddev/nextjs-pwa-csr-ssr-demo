import styled from 'styled-components';

const H1 = styled.h1`
	font-family: 'Raleway', sans-serif;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	background-image: linear-gradient(
		180deg,
		rgba(38, 20, 72, 0.9),
		rgba(66, 34, 126, 0.9)
	);
	font-size: 30px;
	margin-top: -100px;
`;

const H2 = styled.h2`
	font-family: 'Raleway', sans-serif;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	background-image: linear-gradient(
		180deg,
		rgba(38, 20, 72, 0.9),
		rgba(66, 34, 126, 0.9)
	);
	font-size: 28px;
`;

export { H1, H2 };
