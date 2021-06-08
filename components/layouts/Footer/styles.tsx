import { COLORS, DEVICES } from 'constants/';
import styled from 'styled-components';
import { MainMenu } from '../Menu';

export const Footer = styled.footer`
	margin-top: 100px;
	background: ${COLORS.greyDark};
	color: ${COLORS.white};
	position: relative;
	padding-top: 75px;
	padding-bottom: 48px;

	p {
		margin-bottom: 0;
		font-family: Manrope;
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		color: #ffffff;
		mix-blend-mode: normal;
		opacity: 0.5;
	}
`;
export const FooterTop = styled.div`
	flex-direction: column;
	align-items: center;
	display: flex;
	justify-content: center;

	@media ${DEVICES.minTablet} {
		align-items: flex-start;
		justify-content: space-between;
	}
	@media ${DEVICES.laptop} {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
	}
`;

export const FooterMenu = styled(MainMenu)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		margin-left: 0;
	}
	@media ${DEVICES.minTablet} {
		flex-direction: row;
	}
`;

export const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const ColoredSeparator = styled.div`
	background: ${COLORS.primary};
	position: absolute;
	top: 0px;
	width: 101px;
	height: 4px;
	margin: auto;
	left: 0px;
	right: 0px;

	@media ${DEVICES.minTablet} {
		left: initial;
		right: initial;
	}
`;
