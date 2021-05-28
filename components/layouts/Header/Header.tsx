import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import { Cart } from 'components/common/Icons';
import * as Styled from './styles';

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleToggleMenu = () => {
		if (menuOpen) {
			setMenuOpen(false);
			console.log('Menu closed', menuOpen);
		} else {
			setMenuOpen(true);
			console.log('Menu opened', menuOpen);
		}
	};

	return (
		<Styled.Wrapper>
			<Container>
				<Styled.MenuIcon handler={handleToggleMenu} />
				<Styled.LogoLink />
				<Navigation menuOpen={menuOpen} />
				<Cart />
			</Container>
		</Styled.Wrapper>
	);
}
