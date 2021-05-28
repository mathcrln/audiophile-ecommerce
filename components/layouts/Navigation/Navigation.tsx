import React from 'react';
import Link from 'next/link';
import * as Styles from './styles';

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
export function Navigation({ menuOpen }: { menuOpen: Boolean }) {
	return (
		<>
			<Styles.NavWrapper menuOpen={menuOpen}>
				{links.map((link) => (
					<Link href={link?.slug} key={link.title}>
						{link?.title}
					</Link>
				))}
			</Styles.NavWrapper>
		</>
	);
}
