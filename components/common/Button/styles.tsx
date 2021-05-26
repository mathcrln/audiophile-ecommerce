import styled, { css } from 'styled-components';
import { COLORS } from 'constants/';

export const Button = styled.button`
	background: none;
	border: none;
	padding: 0;
	margin: 0;
`;

export const Span = styled.span<{ CTAStyle: 1 | 2 | 3 }>`
	text-transform: uppercase;
	cursor: pointer;
	font-size: 0.8125rem;
	padding: 1rem 2rem;
	font-weight: 700;
	letter-spacing: 1px;

	${(props) =>
		props.CTAStyle === 1 &&
		css`
			background-color: ${COLORS.primary};
			border: none;
			color: white;

			&:hover {
				background-color: ${COLORS.primaryLighter};
			}
		`}

	${(props) =>
		props.CTAStyle === 2 &&
		css`
			border: 1px solid ${COLORS.black};
			color: ${COLORS.black};

			&:hover {
				background-color: ${COLORS.black};
				color: ${COLORS.white};
			}
		`}

	${(props) =>
		props.CTAStyle === 3 &&
		css`
			background: none;
			border: none;

			&:hover {
				color: inherit;
			}
		`}
`;
