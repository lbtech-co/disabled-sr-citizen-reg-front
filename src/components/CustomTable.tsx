import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "../constants/constants";
import Icon from "./Icon";
import IconButton from "@mui/material/IconButton";
import { CSSProperties } from "react";
import { CustomTableProps } from "../interfaces/ComponentInterface";
import { useTranslation } from "react-i18next";

export default function CustomTable({
  headers,
  data,
  onUpdate,
  onDelete,
}: CustomTableProps) {
  const { t } = useTranslation();
  const headersList = headers.map((item) => item.id);
  const defaultAlign = "right";
  const hasActionButton = onUpdate || onDelete;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={HeaderCellStyle} align="left">
              {t("sn")}
            </TableCell>
            {headers.map((item) => (
              <TableCell
                sx={HeaderCellStyle}
                align={item.align || defaultAlign}
                key={item.id}
              >
                {t(item.label)}
              </TableCell>
            ))}
            {hasActionButton && (
              <TableCell sx={HeaderCellStyle} align={defaultAlign}>
                {t("action")}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              {headersList.map((item, index) => (
                <TableCell
                  align={headers[index].align || defaultAlign}
                  key={item}
                >
                  {item === "name"
                    ? `${row.englishName} (${row.nepaliName})`
                    : row[item]}
                </TableCell>
              ))}
              {hasActionButton && (
                <TableCell align="right">
                  <div id="table-action-icons">
                    <IconButton onClick={() => onUpdate?.(row)}>
                      <Icon name="Write" style={iconStyle} />
                    </IconButton>
                    <IconButton onClick={() => onDelete?.(row.id)}>
                      <Icon name="Delete" style={iconStyle} />
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

const iconStyle: CSSProperties = {
  fontSize: "20px",
};
