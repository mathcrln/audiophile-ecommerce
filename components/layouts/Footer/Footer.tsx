import React from 'react';
import Link from 'next/link';
import { Container } from '../Container';
import { Social } from 'components/common/Icons/Social';
import { Logo } from 'components/common/Logo';
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
					<Styled.SocialIcons>
						<Link href="https://facebook.com" passHref>
							<a target="_BLANK">
								<Social platform="facebook" />
							</a>
						</Link>
						<Link href="https://twitter.com" passHref>
							<a target="_BLANK">
								<Social platform="twitter" />
							</a>
						</Link>
						<Link href="https://instagram.com" passHref>
							<a target="_BLANK">
								<Social platform="instagram" />
							</a>
						</Link>
					</Styled.SocialIcons>
				</Styled.FooterBottom>
			</Container>
		</Styled.Footer>
	);
}
