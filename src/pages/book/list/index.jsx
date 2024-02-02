import { Box, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import DataFilter from './components/data-filter';
import DataList from './components/data-list';
import AddDialog from './components/add-dialog';
import DataHeader from './components/data-header';

export const BookContext = React.createContext();

const BookList = props => {

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [addOpen, setAddOpen] = useState(false);
  // const [filter, setFilter] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [extraHeight, setExtraHeight] = useState(0);
  const headerRef = useRef(null);
  const filterRef = useRef(null);

  const handleRefresh = () => {
    console.log('刷新数据列表···');
    setRefresh(prev => !prev);
  };

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    console.log('翻页： ', newPage + 1);
    setPage(newPage + 1);
  };

  const handleChangePageSize = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const [filterOpen, setFilterOpen] = useState(true);
  const handleFilterChange = () => {
    setFilterOpen(!filterOpen);
  };

  useEffect(() => {
    console.log('change: ', page);
    const queryBooks = () => {
      axios.get(`/flask/books?page=${page}&page_size=${pageSize}`).then(response => {
        console.log("queryBooks response:", response);
        if (response.status === 200) {
          const data = response.data;
          setCount(data.count);
          setBooks(data.books);
        } else {
          console.log('请求失败！');
        }
      }).catch(error => {
        console.error('queryBooks Error:', error);
      });
    };
    queryBooks();
  }, [page, pageSize, refresh]);

  useEffect(() => {
    console.log('calc height···');
    const timeoutId = setTimeout(() => {
      const headerElement = headerRef.current;
      const filterElement = filterRef.current;
      if (headerElement && filterElement) {
        const allHeight = headerElement.clientHeight + filterElement.clientHeight;
        console.log('allHeight: ', allHeight);
        setExtraHeight(allHeight);
      }
    }, 500); // 设置一个适当的延迟时间
    return () => clearTimeout(timeoutId); // 清除定时器以避免内存泄漏
  }, [filterOpen]);

  return (
    <BookContext.Provider value={{ handleRefresh }}>
      <Box sx={{ p: 3 }}>
        <Paper sx={{ minHeight: 'calc(100vh - 112px)' }} elevation={0}>
          <DataHeader filterOpen={filterOpen} headerRef={headerRef}
            handleFilterChange={handleFilterChange} handleAddOpen={handleAddOpen}
          />
          <DataFilter filterRef={filterRef} open={filterOpen} />
          <DataList
            books={books}
            count={count}
            page={page}
            pageSize={pageSize}
            handleChangePage={handleChangePage}
            handleChangePageSize={handleChangePageSize}
            extraHeight={extraHeight}
          />
        </Paper>
        <AddDialog open={addOpen} handleClose={handleAddClose}
          handleChangePage={handleChangePage}
        />
      </Box>
    </BookContext.Provider>
  );
};

export default BookList;