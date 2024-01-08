import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import { Box, Grid, Typography } from '@mui/material';

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'companyName', label: 'Company Name', minWidth: 150 },
    { id: 'timeTaken', label: 'Time Taken', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'progress', label: 'Progress', minWidth: 100 },
    { id: 'remark', label: 'Remark', minWidth: 150 },
];

const data = [
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    { name: 'John Doe', companyName: 'ABC Corp', timeTaken: '2 hours', date: '2022-01-01', progress: '80%', remark: 'Completed' },
    // Add more data items as needed
];

const InterviesAttended = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Grid container spacing={2}>

            {/* First Column */}
            <Grid item xs={12} sm={12}>
                <Paper sx={{width:{xs:'400px',sm:'600px',md:'800px',lg:'100%'}}}>
                    <Box sx={{ margin: '15px 10px', padding: '10px' }}>
                        <Typography variant='h5'>Intervies Attended</Typography>
                    </Box>
                    <Box sx={{ padding: '0px 10px', overflowX: 'auto' }}>
                        <TableContainer>
                            <Table>
                                <TableHead sx={{background:'#F3E5FE'}}>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : data
                                    ).map((row, index) => (
                                        <TableRow key={index}>
                                            {columns.map((column) => (
                                                <TableCell key={column.id}>
                                                    {row[column.id]}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

// export default ResponsiveTable;


export default InterviesAttended