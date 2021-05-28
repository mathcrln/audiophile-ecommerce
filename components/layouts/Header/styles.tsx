import styled from 'styled-components';
import { DEVICES, COLORS_HSL } from 'constants/';
import { Hamburger } from 'components/common/Icons';

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
Hamburger;
export const MenuIcon = styled(Hamburger)<{ handler: Function }>`
	display: block;
	cursor: pointer;

	@media ${DEVICES.laptop} {
		display: none;
	}
`;
