import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TNL from './TNL';
import SBL from './SBL';


const Layout = props => {

    const layoutMode = useSelector(state => state.layoutMode);

    return layoutMode === 'TNL' ? <TNL /> : <SBL />;

};

export default Layout;