import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from 'components/common/Button';
import * as Styled from './styles';

type CollectionProps = {
	name: string;
	image: {
		alt: string;
		url: string;
		height: number;
		width: number;
	};
	slug: string;
	className?: string;
};

export function CollectionCallout({ name, image, slug, className }: CollectionProps) {
	return (
		<Link href={slug} passHref>
			<Styled.a className={className}>
				<Styled.Wrapper>
					<Styled.ImageWrapper>
						<Image
							src={image.url}
							width={image.width}
							height={image.height}
							alt={image.alt}
						/>
					</Styled.ImageWrapper>
					<Styled.Title>{name}</Styled.Title>
					<CustomButton buttonStyle={3}>Shop</CustomButton>
				</Styled.Wrapper>
			</Styled.a>
		</Link>
	);
}
