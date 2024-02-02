import * as React from 'react';
import {
  Box, Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, styled, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { SAPInputLabel, SAPTextField } from 'components/input';
import { SAPButton } from 'components/button';
import axios from 'axios';
import { BookContext } from '../../index';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const AddDialog = props => {

  const { open, handleClose } = props;
  const { register, handleSubmit, reset } = useForm();
  const { handleRefresh } = React.useContext(BookContext);

  const onSubmit = (data) => {
    console.log('提交：', data);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/flask/books',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios.request(config).then((response) => {
      console.log('add response：', response);
      if (response.status === 201) {
        handleClose();
        handleRefresh();
        reset();
      }
    }).catch((error) => {
      console.error('add error: ', error);
    });
  };

  return (
    <React.Fragment>
      <BootstrapDialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle sx={{ m: 0, p: 2, fontSize: 16 }}>
          创建
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <Box sx={{ px: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SAPInputLabel>名称:</SAPInputLabel>
                  <SAPTextField fullWidth name="name" {...register('name')} />
                </Grid>
                <Grid item xs={12}>
                  <SAPInputLabel>作者:</SAPInputLabel>
                  <SAPTextField fullWidth name="author" {...register('author')} />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Box sx={{ py: 1 }}>
              <SAPButton type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
                提交
              </SAPButton>
              <SAPButton variant="text" color="primary" onClick={handleClose}>
                取消
              </SAPButton>
            </Box>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default AddDialog;