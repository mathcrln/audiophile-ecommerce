import styled from 'styled-components';
import { COLORS_HSL, DEVICES } from 'constants/';

export const Wrapper = styled.div`
	align-items: center;
	background-color: hsla(${COLORS_HSL.greyLight}, 1);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	padding-bottom: 30px;
	transition: 0.7s;
	width: inherit;

	&:hover {
		transform: scale(1.05, 1.05);
		.callToAction {
			color: hsla(${COLORS_HSL.primary}, 1);
		}
	}
`;

export const a = styled.a`
	flex-grow: 1;
	flex-shrink: 0;
	width: 100%;
	margin: 40px auto;

	@media ${DEVICES.minTablet} {
		width: auto;
		margin: auto 10px;
	}
`;
export const ImageWrapper = styled.div`
	margin-top: -50px;
`;

export const Title = styled.h3`
	font-size: 0.9375rem;
	line-height: 20px;
	letter-spacing: 1.07143px;
	text-transform: uppercase;
	font-weight: bold;
	margin-top: -10px;
	margin-bottom: 17px;
`;
