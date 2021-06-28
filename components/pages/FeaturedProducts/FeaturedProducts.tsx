import React from 'react';
import { LinkButton } from 'components/common';
import { SIZE } from 'constants/';
import * as Styled from './styles';

export function FeaturedProducts() {
	return (
		<Styled.Container>
			<Styled.MainFeature>
				<Styled.MainImageContainer>
					<picture>
						<source
							srcSet="/images/home/desktop/image-speaker-zx9.png"
							media={`(min-width: ${SIZE.laptop})`}
						/>
						<source
							srcSet="/images/home/tablet/image-speaker-zx9.png"
							media={`(min-width: ${SIZE.tablet})`}
						/>
						<img src="/images/home/desktop/image-speaker-zx9.png" alt="" />
					</picture>
				</Styled.MainImageContainer>

				<div className="informations">
					<h3>ZX9 SPEAKER</h3>

					<p>
						Upgrade to premium speakers that are phenomenally built to deliver truly
						remarkable sound.
					</p>
					<LinkButton buttonStyle="Black" href="/speaker/zx9-speaker">
						See product
					</LinkButton>
				</div>
			</Styled.MainFeature>

			<Styled.ProductTwo>
				<h3>ZX7 Speaker</h3>
				<LinkButton buttonStyle="Transparent" href="/speaker/zx9-speaker">
					See product
				</LinkButton>
			</Styled.ProductTwo>

			<Styled.ProductThree>
				<picture className="image-container">
					<source
						srcSet="/images/home/desktop/image-earphones-yx1.jpg"
						media={`(min-width: ${SIZE.laptop})`}
					/>
					<source
						srcSet="/images/home/tablet/image-earphones-yx1.jpg"
						media={`(min-width: ${SIZE.tablet})`}
					/>
					<img src="/images/home/mobile/image-earphones-yx1.jpg" alt="" />
				</picture>

				<div className="informations">
					<h3>YX1 Earphones</h3>
					<LinkButton buttonStyle="Transparent" href="/speaker/yx1-speaker">
						See product
					</LinkButton>
				</div>
			</Styled.ProductThree>
		</Styled.Container>
	);
}
