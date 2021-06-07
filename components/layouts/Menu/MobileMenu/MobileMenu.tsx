import React from 'react';
import Portal from '@reach/portal';
import { AllCollections } from 'components/common/Callout';
import * as Styled from './styles';

export function MobileMenu({ className }: { className?: string }) {
	return (
		<Portal>
			<Styled.Container className={className}>
				<Styled.Nav>
					<AllCollections styles="margin-top: 20px;" />
				</Styled.Nav>
			</Styled.Container>
		</Portal>
	);
}
