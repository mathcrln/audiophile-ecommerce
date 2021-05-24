import React from 'react';
import * as Styled from './styles';

type Props = {
	title: string;
};

export function Button({ title }: Props) {
	return <Styled.Button>{title}</Styled.Button>;
}
