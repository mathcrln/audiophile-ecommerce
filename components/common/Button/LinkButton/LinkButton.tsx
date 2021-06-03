import React from 'react';
import Link from 'next/link';
import * as Styles from './styles';
import { ButtonProps, CustomButton } from '../CustomButton';

type LinkProps = ButtonProps & {
	href: string;
};

export function LinkButton({ children, href, buttonStyle }: LinkProps) {
	return (
		<Link href={href} passHref>
			<a>
				<div>
					<CustomButton buttonStyle={buttonStyle}>{children}</CustomButton>
				</div>
			</a>
		</Link>
	);
}
