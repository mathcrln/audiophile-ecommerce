import styled from 'styled-components';
import { COLORS, COLORS_HSL, DEVICES } from 'constants/';

export const Nav = styled.nav`
	background: ${COLORS.white};
	padding: 20px;

	@media ${DEVICES.minTablet} {
		padding: 60px 20px;
	}
`;
export const Container = styled.div`
	background: hsla(${COLORS_HSL.black}, 0.4);
`;
