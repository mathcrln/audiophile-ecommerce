import styled, { css } from 'styled-components';
import { COLORS, COLORS_HSL } from 'constants/';
import { ArrowRight } from 'components/common/Icons/ArrowRight';

export const Arrow = styled(ArrowRight)`
	margin-left: 13.3px;
	vertical-align: middle;
`;
export const Span = styled.span<{ buttonStyle: 'Orange' | 'Transparent' | 'Arrow' | 'Black' }>`
	text-transform: uppercase;
	cursor: pointer;
	font-size: 0.8125rem;
	font-weight: 700;
	letter-spacing: 1px;
	transition: 0.7s;
	display: inline-block;
	${Arrow} {
		display: none;
	}

	${(props) =>
		props.buttonStyle === 'Orange' &&
		css`
			background-color: ${COLORS.primary};
			border: none;
			color: white;
			padding: 1rem 2rem;

			&:hover {
				background-color: ${COLORS.primaryLighter};
			}
		`}

	${(props) =>
		props.buttonStyle === 'Transparent' &&
		css`
			border: 1px solid ${COLORS.black};
			color: ${COLORS.black};
			padding: 1rem 2rem;

			&:hover {
				background-color: ${COLORS.black};
				color: ${COLORS.white};
			}
		`}

	${(props) =>
		props.buttonStyle === 'Arrow' &&
		css`
			background: none;
			border: none;

			${Arrow} {
				display: inline;
			}

			&:hover {
				color: hsla(${COLORS_HSL.primary}, 1);
			}
		`}

	${(props) =>
		props.buttonStyle === 'Black' &&
		css`
			background: ${COLORS.black};
			color: ${COLORS.white};
			padding: 1rem 2rem;

			&:hover {
				background-color: ${COLORS.grey};
				color: ${COLORS.white};
			}
		`}
`;
