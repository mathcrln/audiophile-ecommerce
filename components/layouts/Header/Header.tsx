import React from 'react';

import { Logo } from 'components/common/Logo';
import { Navigation } from '../Navigation';
import * as Styled from './styles';

export function Header() {
	return (
		<Styled.Wrapper>
			<Logo color="#FFF" />
			<Navigation />
			<button>Cart</button>
		</Styled.Wrapper>
	);
}
