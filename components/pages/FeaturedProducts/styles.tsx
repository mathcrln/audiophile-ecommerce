import styled from 'styled-components';
import { COLORS, COLORS_HSL, DEVICES } from 'constants/';

export const Container = styled.section`
	margin-top: 120px;
	margin-bottom: 96px;
	h3 {
		font-size: 1.75rem;
		text-transform: uppercase;
	}

	@media ${DEVICES.minTablet} {
		margin-top: 96px;
		margin-bottom: 200px;
	}

	@media ${DEVICES.laptop} {
		margin-top: 168px;
	}
`;

export const MainFeature = styled.article`
	background-color: ${COLORS.primary};
	background-image: url('/images/home/desktop/pattern-circles.svg');
	background-repeat: no-repeat;
	background-size: 145%;
	background-position: top -130px center;
	border-radius: 8px;
	color: ${COLORS.white};
	text-align: center;
	padding: 55px 24px;

	@media ${DEVICES.minTablet} {
		background-size: 130%;
		background-position: top -250px center;
	}

	@media ${DEVICES.laptop} {
		display: flex;
		flex-direction: row;
		justify-content: center;

		overflow: hidden;
		text-align: left;
		padding-top: 100px;
		background-size: 90%;
		background-position: -150px 40px;
	}

	.informations {
		margin-top: 32px;
		@media ${DEVICES.laptop} {
			margin-left: 138px;
		}

		h3 {
			font-size: 2.25rem;
			margin: auto;

			@media ${DEVICES.minTablet} {
				font-size: 3.5rem;
				max-width: min-content;
			}
			@media ${DEVICES.laptop} {
				margin-left: 0;
				margin-right: 0;
			}
		}
		p {
			margin: 24px auto;
			font-weight: 500;
			font-style: normal;
			font-size: 0.9375rem;
			line-height: 25px;
			mix-blend-mode: normal;
			opacity: 0.75;

			@media ${DEVICES.minTablet} {
				max-width: 350px;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
`;

export const MainImageContainer = styled.div`
	img {
		width: 172px;

		@media ${DEVICES.minTablet} {
			width: 197px;
		}
		@media ${DEVICES.laptop} {
			width: 400px;
			margin-bottom: -67px;
		}
	}
`;

export const ProductTwo = styled.article`
	background-image: url('/images/home/mobile/image-speaker-zx7.jpg');
	background-size: cover;
	border-radius: 10px;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 100px 50px;
	margin: 50px 0;

	@media ${DEVICES.minTablet} {
		background-image: url('/images/home/tablet/image-speaker-zx7.jpg');
	}

	@media ${DEVICES.laptop} {
		background-image: url('/images/home/desktop/image-speaker-zx7.jpg');
	}
`;

export const ProductThree = styled.article`
	display: grid;
	grid-template-rows: 1fr 1fr;
	gap: 11px;

	.image-container,
	.informations {
		border-radius: 8px;
		display: flex;
	}

	.informations {
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		padding-left: 24px;
		background: ${COLORS.greyLight};
	}

	@media ${DEVICES.minTablet} {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}
	@media ${DEVICES.laptop} {
		.informations {
			padding-left: 95px;
		}
	}
`;
