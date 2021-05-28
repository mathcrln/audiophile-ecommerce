import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

const assets = {
	heroBackground: {
		mobile: 'images/home/mobile/image-hero.jpg',
		tablet: 'images/home/tablet/image-hero.jpg',
		laptop: 'images/home/desktop/image-hero.jpg',
	},
};

export const HeroWrapper = styled.div`
	color: white;
	height: 514px;
	margin: 0;

	background-color: #191919;
	background-image: url(${assets.heroBackground.mobile});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	text-align: center;

	& > .container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	@media ${DEVICES.minTablet} {
		background-image: url(${assets.heroBackground.tablet});
		background-position: center;
		background-repeat: no-repeat;
		height: 641px;
	}

	@media ${DEVICES.laptop} {
		background-image: url(${assets.heroBackground.laptop});
		background-position: top -100px right 0px;
		background-size: auto;
		background-repeat: no-repeat;
		text-align: left;
		height: 632px;

		& > .container {
			align-items: flex-start;
		}
	}
`;

export const Informations = styled.div`
	max-width: 398px;
`;

export const Title = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 2.25rem;
	line-height: 58px;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin: 24px auto;

	@media ${DEVICES.minTablet} {
		font-size: 3.5rem;
	}
`;

export const Intro = styled.span`
	font-family: Manrope;
	font-style: normal;
	font-weight: normal;
	font-size: 0.875rem;
	line-height: 19px;
	letter-spacing: 10px;
	text-transform: uppercase;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const Description = styled.p`
	font-family: Manrope;
	font-style: normal;
	font-weight: 500;
	font-size: 0.9375rem;
	line-height: 25px;
	opacity: 0.75;
	width: 350px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 40px;

	@media ${DEVICES.laptop} {
		margin-left: unset;
		margin-right: unset;
	}
`;
