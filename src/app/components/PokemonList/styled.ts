import styled from 'styled-components';

export const StyledListItemContainer = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gridGap: '20px',
}));
