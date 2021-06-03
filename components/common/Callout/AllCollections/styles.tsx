import styled from 'styled-components';
import { DEVICES } from 'constants/';

export const Wrapper = styled.section`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media ${DEVICES.minTablet} {
		flex-direction: row;
	}
`;
