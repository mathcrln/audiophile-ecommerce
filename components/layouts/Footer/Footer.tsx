import { Logo } from 'components/common/Logo';
import React from 'react';
import { Container } from '../Container';
import * as Styled from './styles';

export function Footer() {
	return (
		<Styled.Footer>
			<Container>
				<Styled.ColoredSeparator />
				<Styled.FooterTop>
					<Logo />
					<Styled.FooterMenu />
				</Styled.FooterTop>
				<Styled.Description>
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team
					of music lovers and sound specialists who are devoted to helping you get the
					most out of personal audio. Come and visit our demo facility - we’re open 7 days
					a week.
				</Styled.Description>
				<Styled.FooterBottom>
					<p>Copyright 2021. All Rights Reserved</p>
					<div>
						<span>FB</span>
						<span>TW</span>
						<span>IG</span>
					</div>
				</Styled.FooterBottom>
			</Container>
		</Styled.Footer>
	);
}
