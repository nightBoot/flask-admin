import { styled } from '@mui/system';
import { TableCell } from '@mui/material';

export const CustomTableCell = styled(TableCell)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});