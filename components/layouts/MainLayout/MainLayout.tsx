import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

type Prop = {
	children: JSX.Element | JSX.Element[];
};

export function MainLayout({ children }: Prop) {
	return (
		<div className="m-0 p-0 min-h-full flex flex-col">
			<Header />
			<main id="content">{children}</main>
			<Footer />
		</div>
	);
}
