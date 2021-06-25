import React from 'react';
import { SIZE } from 'constants/';

import * as Styled from './styles';

export function BrandHighlight() {
	return (
		<Styled.Container>
			<Styled.ImageContainer>
				<source
					srcSet="/images/shared/desktop/image-best-gear.jpg"
					media={`(min-width: ${SIZE.laptop})`}
				/>
				<source
					srcSet="/images/shared/tablet/image-best-gear.jpg"
					media={`(min-width: ${SIZE.tablet})`}
				/>
				<img src="/images/shared/mobile/image-best-gear.jpg" alt="" />
			</Styled.ImageContainer>
			<Styled.Informations>
				<Styled.Title>
					Bringing you the <strong>best</strong> audio gear
				</Styled.Title>
				<Styled.Description>
					Located at the heart of New York City, Audiophile is the premier store for high
					end headphones, earphones, speakers, and audio accessories. We have a large
					showroom and luxury demonstration rooms available for you to browse and
					experience a wide range of our products. Stop by our store to meet some of the
					fantastic people who make Audiophile the best place to buy your portable audio
					equipment.
				</Styled.Description>
			</Styled.Informations>
		</Styled.Container>
	);
}
