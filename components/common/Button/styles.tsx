import styled from 'styled-components';

export const Button = styled.button`
	background-color: hsl(22, 65%, 57%);
	border: none;
	color: white;
	font-size: 0.8125rem;
	padding: 1rem 2rem;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		background-color: hsl(21, 94%, 75%);
	}
`;
