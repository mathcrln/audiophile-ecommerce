import React from 'react';
import * as Styled from './styles';
import { Container } from 'components/layouts';
import { Button } from 'components/common';

export default function Hero() {
	return (
		<Styled.HeroWrapper>
			<Container>
				<Styled.Informations>
					<p>NEW PRODUCT</p>
					<h2>XX99 Mark II Headphones</h2>
					<p>
						Experience natural, lifelike audio and exceptional build quality made for
						the passionate music enthusiast.
					</p>
					<Button title="See Product" behavior="button" url="headphones" CTAStyle={1} />
				</Styled.Informations>
			</Container>
		</Styled.HeroWrapper>
	);
}
