import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { InputLabel } from '@mui/material';

export const SAPInputLabel = styled(InputLabel)({
  fontSize: '14px',
  paddingBottom: '4px'
});

export const SAPTextField = styled(TextField)({
  '& input': {
    fontSize: '14px',
    padding: '4px 8px',
  }
});