import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';

const Test = props => {

  const [data, setData] = useState(null);

  const handleSpringBoot = () => {
    axios.get(`/spring-boot/erp-api/test`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };

  const handleDjango = () => {
    axios.get(`/django/api/get_ok`)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleFlask = () => {
    axios.get(`/flask/api/get_ok`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button onClick={handleSpringBoot} sx={{ textTransform: 'none' }} size="small" variant="contained" color="primary">
        SpringBoot
      </Button>
      <Button onClick={handleFlask} sx={{ ml: 3, textTransform: 'none' }} size="small" variant="contained" color="primary">
        Flask
      </Button>
      <Button onClick={handleDjango} sx={{ ml: 3, textTransform: 'none' }} size="small"
        variant="contained" color="primary">
        Django
      </Button>
      {data && <Typography sx={{ mt: 2 }} variant="h6" color="initial">{data}</Typography>}
    </Box>
  );
};

export default Test;