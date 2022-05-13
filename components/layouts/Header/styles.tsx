import styled from 'styled-components';
import { DEVICES, COLORS_HSL, COLORS } from 'constants/';
import { MobileMenu } from '../Menu';

export const Wrapper = styled.header`
	background: #191919;

	& > .container {
		border-bottom: 1px solid hsla(${COLORS_HSL.greyLight}, 0.2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40px 0;
	}
`;

export const MobileNav = styled(MobileMenu)<{ menuOpen: boolean }>`
	${({ menuOpen }) => (menuOpen === true ? 'display: block;' : 'display: none;')}
	${({ menuOpen }) => (menuOpen === true ? 'body{overflow-y: hidden}' : 'overflow-y: auto')}

	position: absolute;
	top: 100px;
	right: 0;
	left: 0;
	bottom: 0;
	/* padding: 30px; */
	/* background: ${COLORS.white}; */

	@media ${DEVICES.minTablet} {
		display: none;
	}
`;
