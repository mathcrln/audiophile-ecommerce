import React from 'react';

import { Header } from '../Header';
// import { Footer } from '../Footer';
import * as Styled from './styles';

type Prop = {
	children: JSX.Element | JSX.Element[];
};

export function MainLayout({ children }: Prop) {
	return (
		<Styled.Wrapper>
			<Header />
			<main>{children}</main>
		</Styled.Wrapper>
	);
}
