import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
	children: string;
	buttonStyle?: 1 | 2 | 3;
};

export function CustomButton({ children, buttonStyle = 1 }: ButtonProps) {
	return (
		<span>
			<Styled.Span buttonStyle={buttonStyle} className="callToAction">
				{children}
				<Styled.Arrow />
			</Styled.Span>
		</span>
	);
}
