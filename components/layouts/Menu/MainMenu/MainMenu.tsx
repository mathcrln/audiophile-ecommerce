import React from 'react';
import Link from 'next/link';
import * as Styled from './styles';

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

export function MainMenu({ className }: { className?: string }) {
	return (
		<>
			<Styled.NavWrapper className={className}>
				{links.map((link) => (
					<Link href={link?.slug} key={link.title}>
						{link?.title}
					</Link>
				))}
			</Styled.NavWrapper>
		</>
	);
}
