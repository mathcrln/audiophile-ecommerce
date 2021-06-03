import React from 'react';
import Link from 'next/link';
import * as Styled from '../CustomButton/styles';
import { ButtonProps, CustomButton } from '../CustomButton';

type ActionProps = ButtonProps & {
	type: 'button' | 'submit' | 'reset';
};

export function ActionButton({ children, type, buttonStyle }: ActionProps) {
	return (
		<button type={type}>
			<CustomButton buttonStyle={buttonStyle}>{children}</CustomButton>
		</button>
	);
}
