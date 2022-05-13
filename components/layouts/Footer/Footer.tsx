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
				<p className="text-center my-2 md:text-left md:my-8 lg:max-w-[50%]">
					Audiophile is an all in one stop to fulfill your audio needs. We're a small team
					of music lovers and sound specialists who are devoted to helping you get the
					most out of personal audio. Come and visit our demo facility - we’re open 7 days
					a week.
				</p>
				<Styled.FooterBottom>
					<p>Copyright 2021. All Rights Reserved</p>
					<div className="flex justify-between items-center space-x-8 my-4">
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
					</div>
				</Styled.FooterBottom>
			</Container>
		</Styled.Footer>
	);
}
