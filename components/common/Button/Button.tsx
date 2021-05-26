import React from 'react';
import Link from 'next/link';
import * as Styled from './styles';

type Props = {
	behavior: 'button' | 'link';
	buttonType?: 'button' | 'submit' | 'reset';
	CTAStyle: 1 | 2 | 3;
	url: string;
	title: string;
};

export function Button({ behavior, title, url = '', buttonType, CTAStyle = 1 }: Props) {
	if (behavior === 'link') {
		return (
			<Link href={url}>
				<Styled.Span CTAStyle={CTAStyle}>{title}</Styled.Span>
			</Link>
		);
	} else {
		return (
			<Styled.Button type={buttonType ? buttonType : 'button'}>
				<Styled.Span CTAStyle={CTAStyle}>{title}</Styled.Span>
			</Styled.Button>
		);
	}
}
