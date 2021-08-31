import styled from 'styled-components';

const Wrapper = styled.div`
	width: 600px;
`;

const Para = styled.p`
	font-family: 'Raleway', sans-serif;
`;

const Bold = styled.span`
	font-weight: 600;
`;

const Todo = ({ data }) => {
	console.log(data);
	return (
		<Wrapper>
			{data.map((todo) => {
				return (
					<div key={todo.id}>
						<Para>
							<Bold>ID:</Bold> {todo.id}
						</Para>
						<Para>
							<Bold>Title:</Bold> {todo.title}
						</Para>
						<hr />
					</div>
				);
			})}
		</Wrapper>
	);
};

export default Todo;
