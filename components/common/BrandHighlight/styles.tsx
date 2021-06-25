import styled from 'styled-components';
import { COLORS_HSL, DEVICES } from 'constants/';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media ${DEVICES.laptop} {
		flex-direction: row-reverse;
	}
`;

export const Informations = styled.div`
	font-family: Manrope;
	font-style: normal;
	text-align: center;

	@media ${DEVICES.laptop} {
		text-align: left;
		width: 50%;
		margin-right: 125px;
	}
`;

export const Title = styled.h3`
	text-transform: uppercase;
	font-size: 2.5rem;

	strong {
		color: hsl(${COLORS_HSL.primary});
	}
`;

export const Description = styled.p`
	font-weight: 500;
	font-size: 0.9375rem;
	line-height: 1.5rem;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const ImageContainer = styled.picture`
	img {
		border-radius: 10px;
		max-width: 100%;
	}
`;
