import {
  Box, Divider, Table, TableBody, TableContainer, TableHead,
  TablePagination, TableRow
} from '@mui/material';
import React from 'react';
import { CustomTableCell } from 'components/table';

const DataList = props => {

  const {
    books, count, page, pageSize, handleChangePage,
    handleChangePageSize, extraHeight
  } = props;

  return (
    <Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50]}
        component="div"
        count={count}
        page={page - 1}
        rowsPerPage={pageSize}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangePageSize}
        labelRowsPerPage="行数/页"
      />
      <Divider />
      <TableContainer key={extraHeight} sx={{ maxHeight: `calc(100vh - 166px - ${extraHeight}px)` }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size='small'>
          <TableHead>
            <TableRow>
              <CustomTableCell>编号</CustomTableCell>
              <CustomTableCell align="right">名称</CustomTableCell>
              <CustomTableCell align="right">作者</CustomTableCell>
              <CustomTableCell align='right'>状态</CustomTableCell>
              <CustomTableCell align='right'>出版社</CustomTableCell>
              <CustomTableCell align='right'>创建人</CustomTableCell>
              <CustomTableCell align='right'>创建时间</CustomTableCell>
              <CustomTableCell align="right">最后修改时间</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow
                key={book.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <CustomTableCell>{index + 3000000001}</CustomTableCell>
                <CustomTableCell align="right">{book.name}</CustomTableCell>
                <CustomTableCell align="right">{book.author}</CustomTableCell>
                <CustomTableCell align="right">在库</CustomTableCell>
                <CustomTableCell align="right">深圳出版社</CustomTableCell>
                <CustomTableCell align="right">张三</CustomTableCell>
                <CustomTableCell align="right">{book.create_date}</CustomTableCell>
                <CustomTableCell align="right">{book.create_date}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
    </Box>
  );
};

export default DataList;