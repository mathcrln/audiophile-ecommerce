import styled from 'styled-components';
import { Logo } from 'components/common/Logo';
import { Hamburger } from 'components/common/Icons';
import { SIZE, DEVICES, COLORS_HSL, COLORS } from 'constants/';
import { MainMenu, MobileMenu } from '../Menu';

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

export const MenuIcon = styled(Hamburger)<{ handler: Function }>`
	display: block;
	cursor: pointer;

	@media ${DEVICES.laptop} {
		display: none;
	}
`;

export const LogoLink = styled(Logo)`
	@media (min-width: ${SIZE.tablet}) and (max-width: ${SIZE.laptop}) {
		position: absolute;
		margin-left: 50px;
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

	@media ${DEVICES.laptop} {
		display: none;
	}
`;

export const DesktopNav = styled(MainMenu)`
	display: none;

	@media ${DEVICES.laptop} {
		display: block;
	}
`;
