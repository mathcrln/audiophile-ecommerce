import React from 'react';
import Portal from '@reach/portal';
import { AllCollections } from 'components/common/Callout';
import * as Styled from './styles';

export function MobileMenu({ className }: { className?: string }) {
	return (
		<Portal>
			<Styled.Container className={className}>
				<nav className="bg-white p-5">
					<AllCollections styles="margin-top: 20px;" />
				</nav>
			</Styled.Container>
		</Portal>
	);
}
