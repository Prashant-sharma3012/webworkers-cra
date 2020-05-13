import React, { useContext } from 'react'
import AppContext from '../AppContext'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    maxHeight: '500px',
    maxWidth: '80%'
  },
  container: {
    maxWidth: '100vw',
    maxHeight: '100vh',
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: '15rem'
  },
  tableContainer: {
    maxWidth: "100%"
  }
});

export default function FileRecords() {
  const context = useContext(AppContext);
  const classes = useStyles();
  const columnNames = Object.keys(context.rows.get[0])

  return (
    <div className={classes.container}>
      <div className={classes.tableContainer}>
        <TableContainer component={Paper} className={classes.table}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {columnNames.map((key, indx) => (
                  <TableCell align="right" key={indx}>{key}</TableCell>
                ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {context.rows.get.slice(1, 100).map((row, i) => (
                <TableRow>{
                  columnNames.map((key, j) => (
                    <TableCell align="right" key={`${i}${j}`}>{row[key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
