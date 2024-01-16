import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "../utils/Constants";
import Icon from "./Icon";
import IconButton from "@mui/material/IconButton";
import { CSSProperties } from "react";
interface TableProps {
  headers: {
    label: string
    id: string
    align?: "center" | "left" | "right" | "inherit" | "justify" | undefined
  }[]
  rows: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }[]
  onUpdate?: (id: string) => void
  onDelete?: (id: string) => void
}

export default function CustomTable({
  headers,
  rows,
  onUpdate,
  onDelete,
}: TableProps) {
  const headersList = headers.map((item) => item.id);
  const defaultAlign = "right";
  const hasActionButton = onUpdate || onDelete;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={HeaderCellStyle} align="left">
              S.N
            </TableCell>
            {headers.map((item) => (
              <TableCell
                sx={HeaderCellStyle}
                align={item.align || defaultAlign}
                key={item.id}
              >
                {item.label}
              </TableCell>
            ))}
            {hasActionButton && (
              <TableCell sx={HeaderCellStyle} align={defaultAlign}>
                Action
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              {headersList.map((item, index) => (
                <TableCell
                  align={headers[index].align || defaultAlign}
                  key={item}
                >
                  {row[item]}
                </TableCell>
              ))}
              {hasActionButton && (
                <TableCell align="right">
                  <div>
                    <IconButton onClick={() => onUpdate?.(row.id)}>
                      <Icon name="Write" />
                    </IconButton>
                    <IconButton onClick={() => onDelete?.(row.id)}>
                      <Icon name="Delete" />
                    </IconButton>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const HeaderCellStyle: CSSProperties = {
  color: colors.white,
  backgroundColor: colors.blue,
};
