import React, { useEffect, useState } from 'react';
import { MainMenu, MobileMenu } from '../Menu';
import { Container } from '../Container';
import { Cart, Hamburger } from 'components/common/Icons';
import * as Styled from './styles';
import { Logo } from 'components/common/Logo';

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleToggleMenu = () => {
		if (menuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	};

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('overflow-y-hidden');
			document.body.classList.add('md:overflow-y-auto');
		} else {
			document.body.classList.remove('overflow-y-hidden');
		}
	}, [menuOpen]);

	return (
		<header className="bg-[#191919]">
			<Container className="flex items-center justify-between p-10">
				<Hamburger handler={handleToggleMenu} className="block md:hidden" />
				<Logo className="" />
				<MobileMenu className="block md:hidden" />
				<MainMenu className="hidden md:block" />
				<Cart />
			</Container>
		</header>
	);
}
