import React from 'react';

import { Logo } from 'components/common/Logo';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import * as Styled from './styles';

export function Header() {
	return (
		<Styled.Wrapper>
			<Container>
				<Logo color="#FFF" />
				<Navigation />
				<button>Cart</button>
			</Container>
		</Styled.Wrapper>
	);
}
