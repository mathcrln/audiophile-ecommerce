import styled from 'styled-components';
import { DEVICES, COLORS_HSL } from 'constants/';

export const NavWrapper = styled.nav<{ menuOpen: Boolean }>`
	font-family: Manrope;
	font-weight: bold;
	font-size: 13px;
	line-height: 25px;
	letter-spacing: 2px;
	text-transform: uppercase;

	@media ${DEVICES.maxTablet} {
		${({ menuOpen }) => {
			if (menuOpen === true) {
				return `
				display: block;
				display: flex; 
				flex-direction: column;
				position: absolute;
				top: 100px;
				left: 0px;
				width: 100%;
				height: 400px;
				text-align: center;
				background: red;
				`;
			} else {
				return 'display: none;';
			}
		}}
	}

	a {
		text-decoration: none;
		color: white;
		margin: 0 1rem;
	}

	a:hover {
		color: hsl(${COLORS_HSL.primary});
	}
`;
