import React from 'react';
import * as Icons from '@mui/icons-material';

export const StrIcon = props => {
  const { iconName, ...rest } = props;
  const DynameicIcon = Icons[iconName];

  if (!DynameicIcon) {
    return <span>未知图标</span>;
  }

  return <DynameicIcon {...rest} />
};