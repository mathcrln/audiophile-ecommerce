import styled from 'styled-components';
import { Logo } from 'components/common/Logo';
import { Hamburger } from 'components/common/Icons';
import { SIZE, DEVICES, COLORS_HSL } from 'constants/';

export const Wrapper = styled.header`
	background: #191919;
	position: relative;

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
