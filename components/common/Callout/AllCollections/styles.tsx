import styled from 'styled-components';
import { DEVICES } from 'constants/';

export const Wrapper = styled.section<{ styles?: string }>`
	${({ styles }) => (styles ? styles : '')}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media ${DEVICES.minTablet} {
		flex-direction: row;
	}
`;
