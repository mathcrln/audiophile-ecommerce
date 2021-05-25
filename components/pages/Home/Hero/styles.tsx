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

	h2 {
		font-style: normal;
		font-weight: bold;
		font-size: 56px;
		line-height: 58px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}
`;

export const Informations = styled.div`
	width: 398px;
`;
