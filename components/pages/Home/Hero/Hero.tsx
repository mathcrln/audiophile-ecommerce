import React from 'react';
import * as Styled from './styles';
import { Header, Container } from 'components/layouts';
import { Button } from 'components/common';

export default function Hero() {
	return (
		<Styled.HeroWrapper>
			<Container>
				<Header />
				<Button title="See Product" />
			</Container>
		</Styled.HeroWrapper>
	);
}
