import styled from 'styled-components';
import { DEVICES } from 'constants/';
export const Container = styled.div`
	width: 80%;
	max-width: 1445px;
	margin: auto;
	@media ${DEVICES.desktop} {
		padding: 5px;
	}
`;
