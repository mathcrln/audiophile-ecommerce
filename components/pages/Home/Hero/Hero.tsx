import React from 'react';
import * as Styled from './styles';
import { Container } from 'components/layouts';
import { LinkButton } from 'components/common/Button';

export default function Hero() {
	return (
		<Styled.HeroWrapper>
			<Container>
				<Styled.Informations>
					<Styled.Intro>New Product</Styled.Intro>
					<Styled.Title>XX99 Mark II Headphones</Styled.Title>
					<Styled.Description>
						Experience natural, lifelike audio and exceptional build quality made for
						the passionate music enthusiast.
					</Styled.Description>
					<LinkButton href="/headphones" buttonStyle="Orange">
						See Product
					</LinkButton>
				</Styled.Informations>
			</Container>
		</Styled.HeroWrapper>
	);
}
