import styled from 'styled-components';

const ButtonWrapper = styled.div`
	display: flex;
`;

const Button = styled.button`
	margin: 0 10px;
	outline: none;
	border: none;
	font-weight: 500;
	font-size: 22px;
	font-family: 'Raleway', sans-serif;
	width: 500px;
	padding: 20px 0;
	cursor: pointer;
	color: #ffffff;
	border-radius: 5px;
	background: radial-gradient(
		ellipse at left bottom,
		rgba(22, 24, 47, 1) 0%,
		rgba(38, 20, 72, 0.9) 59%,
		rgba(17, 27, 75, 0.9) 100%
	);
	box-shadow: 0 5px 10px rgba(17, 27, 75, 0.9);
	transition: 0.5s all;

	&:hover {
		box-shadow: 0 0px 10px rgba(17, 27, 75, 0.9);
	}
`;

export { ButtonWrapper, Button };
