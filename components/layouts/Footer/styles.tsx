import { COLORS, DEVICES } from 'constants/';
import styled from 'styled-components';
import { MainMenu } from '../Menu';

export const Footer = styled.footer`
	background: ${COLORS.greyDark};
	color: ${COLORS.white};
	position: relative;
	padding-top: 75px;
	padding-bottom: 48px;
	margin-top: 100px;

	p {
		font-family: Manrope;
		font-style: normal;
		font-weight: 500;
		font-size: 0, 9375rem;
		line-height: 25px;
		color: ${COLORS.white};
		mix-blend-mode: normal;
		opacity: 0.5;
	}
`;

export const FooterTop = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${DEVICES.minTablet} {
		align-items: flex-start;
		justify-content: space-between;
	}

	@media ${DEVICES.laptop} {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
`;

export const FooterMenu = styled(MainMenu)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 48px auto;

	a {
		margin-top: 16px;
	}
	@media ${DEVICES.minTablet} {
		display: block;
		margin: 32px 0;
		a {
			&:first-child {
				margin-left: 0;
			}
		}
	}

	@media ${DEVICES.laptop} {
		margin: initial;
	}
`;

export const FooterBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media ${DEVICES.minTablet} {
		flex-direction: row;
	}
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
