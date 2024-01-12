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
  const hasActionButton =
    typeof onUpdate !== "undefined" || typeof onDelete !== "undefined";

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
              key={row.toString()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              {headersList.map((item, index) => (
                <TableCell
                  sx={{ width: "max-content" }}
                  align={headers[index].align || defaultAlign}
                  key={item}
                >
                  {
                    //eslint-diable-next-line no-explicit-any
                    row[item]
                  }
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
