import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import { colors } from '../utils/Constants'
import Icon from './Icon'
import { Button } from '@mui/material'

export default function CustomTable({ headers, rows, onUpdate, onDelete }) {
  const headersList = headers.map((item) => item.id)
  const defaultAlign = 'right'
  const hasActionButton =
    typeof onUpdate !== 'undefined' || typeof onDelete !== 'undefined'

  return (
    <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: colors.white, backgroundColor: colors.blue }}
              align="left"
            >
              S.N
            </TableCell>
            {headers.map((item) => (
              <TableCell
                sx={{
                  color: colors.white,
                  backgroundColor: colors.blue,
                }}
                align={item.align || defaultAlign}
                key={item.id}
              >
                {item.label}
              </TableCell>
            ))}
            {hasActionButton && (
              <TableCell
                sx={{ color: colors.white, backgroundColor: colors.blue }}
                align="right"
              >
                Action
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              {headersList.map((item, index) => (
                <TableCell
                  sx={{ width: 'max-content' }}
                  align={headers[index].align || defaultAlign}
                  key={item}
                >
                  {row[item]}
                </TableCell>
              ))}
              {hasActionButton && (
                <TableCell align="right">
                  <div>
                    <Button onClick={onUpdate}>
                      <Icon name="Write" />
                    </Button>
                    <Button onClick={onDelete}>
                      <Icon name="Delete" />
                    </Button>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

CustomTable.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  handleChangePage: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
}
