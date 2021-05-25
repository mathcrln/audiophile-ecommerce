import React from 'react';
import * as Styled from './styles';

type Props = {
	children: JSX.Element | JSX.Element[];
};

export function Container({ children }: Props) {
	return <Styled.Container>{children}</Styled.Container>;
}
