import styled from 'styled-components';

export const HeroWrapper = styled.div`
	background: #191919 url('images/home/desktop/image-hero.jpg') no-repeat top -100px right 0px;

	background-repeat: no-repeat;
	height: 632px;
	margin: 0;
	color: white;

	* {
		margin-top: 0;
	}

	& > .container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}
`;

export const Informations = styled.div`
	width: 398px;
`;

export const Title = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 56px;
	line-height: 58px;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin: 24px auto;
`;

export const Intro = styled.span`
	font-family: Manrope;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
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
	font-size: 15px;
	line-height: 25px;
	opacity: 0.75;
	width: 350px;
	margin-bottom: 40px;
`;
