import React from 'react';
import { CollectionCallout } from '../Collection';
import * as Styled from './styles';
import { COLLECTIONS } from 'constants/COLLECTIONS';

export function AllCollections({ styles }: { styles?: string }) {
	return (
		<Styled.Wrapper styles={styles}>
			{COLLECTIONS.map((collection) => (
				<CollectionCallout
					key={collection.name}
					name={collection.name}
					image={collection.image}
					slug={collection.slug}
				/>
			))}
		</Styled.Wrapper>
	);
}
