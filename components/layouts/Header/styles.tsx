import styled from 'styled-components';
import { COLORS, COLORS_HSL } from 'constants/';

export const Wrapper = styled.header`
	background: #191919;

	& > div {
		border-bottom: 1px solid hsla(${COLORS_HSL.greyLight}, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40px 0;
	}
`;
