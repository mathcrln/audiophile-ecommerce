import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
	text-transform: uppercase;
	font-family: Manrope;
	font-weight: bold;

	a {
		text-decoration: none;
		color: white;
		margin: 0 1rem;
	}
`;

const links = [
	{
		title: 'Home',
		slug: '/',
	},
	{
		title: 'Headphones',
		slug: '/headphones',
	},
	{
		title: 'Speakers',
		slug: '/speakers',
	},
	{
		title: 'Earphones',
		slug: '/earphones',
	},
];
export function Navigation() {
	return (
		<NavWrapper>
			{links.map((link) => (
				<Link href={link?.slug} key={link.title}>
					{link?.title}
				</Link>
			))}
		</NavWrapper>
	);
}
