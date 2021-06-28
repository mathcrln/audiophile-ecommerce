import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
	children: string;
	buttonStyle?: 'Orange' | 'Transparent' | 'Arrow' | 'Black';
};

export function CustomButton({ children, buttonStyle = 'Orange' }: ButtonProps) {
	return (
		<span>
			<Styled.Span buttonStyle={buttonStyle} className="callToAction">
				{children}
				<Styled.Arrow />
			</Styled.Span>
		</span>
	);
}
