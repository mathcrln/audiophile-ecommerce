import styled from 'styled-components';
import { DEVICES, COLORS_HSL } from 'constants/';

export const NavWrapper = styled.nav`
	font-family: Manrope;
	font-weight: bold;
	font-size: 13px;
	line-height: 25px;
	letter-spacing: 2px;
	text-transform: uppercase;

	a {
		text-decoration: none;
		color: white;
		margin: 0 1rem;
	}

	a:hover {
		color: hsl(${COLORS_HSL.primary});
	}
`;
