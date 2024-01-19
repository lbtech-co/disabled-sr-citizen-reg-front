import Table from "../components/CustomTable";
import Stack from "@mui/material/Stack";
import { TableHeaderProps } from "../interfaces/ComponentInterface";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UsersTable() {
  const navigate = useNavigate();

  const headers: TableHeaderProps[] = [
    { label: "User ID (प्रयोगकर्ता ID)", id: "id", align: "center" },
    { label: "Name (नाम)", id: "name", align: "center" },
    { label: "Email (इमेल)", id: "email", align: "center" },
    { label: "Mobile (मोबाइल)", id: "mobile", align: "center" },
    { label: "Created", id: "createdAt", align: "center" },
  ];

  const rows = [
    {
      id: "pra32",
      name: "Pradip Chapagain",
      email: "pradipcpgn@gmail.com",
      mobile: 9842798478,
      createdAt: "2019-09-32",
    },
    {
      id: "pra33",
      name: "John Doe",
      email: "johndoe@example.com",
      mobile: 9876543210,
      createdAt: "2020-05-15",
    },
    {
      id: "pra34",
      name: "Alice Smith",
      email: "alice.smith@gmail.com",
      mobile: 8765432109,
      createdAt: "2021-02-10",
    },
    {
      id: "pra35",
      name: "Bob Johnson",
      email: "bob.johnson@yahoo.com",
      mobile: 7654321098,
      createdAt: "2022-07-22",
    },
    {
      id: "pra36",
      name: "Eva Brown",
      email: "eva.brown@hotmail.com",
      mobile: 6543210987,
      createdAt: "2020-11-18",
    },
    {
      id: "pra37",
      name: "Samuel White",
      email: "sam.white@gmail.com",
      mobile: 5432109876,
      createdAt: "2023-04-05",
    },
    {
      id: "pra38",
      name: "Sophia Miller",
      email: "sophia.miller@yahoo.com",
      mobile: 4321098765,
      createdAt: "2021-09-08",
    },
    {
      id: "pra39",
      name: "Liam Jackson",
      email: "liam.jackson@gmail.com",
      mobile: 3210987654,
      createdAt: "2022-12-30",
    },
    {
      id: "pra40",
      name: "Olivia Wilson",
      email: "olivia.wilson@yahoo.com",
      mobile: 2109876543,
      createdAt: "2019-08-25",
    },
  ];

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onUpdate(data: any) {
    navigate("/users/create", { state: data });
  }

  return (
    <Stack>
      <Table
        headers={headers}
        rows={rows}
        onUpdate={onUpdate}
        size="small"
        stickyHeader
        aria-label="a dense table"
      />
      <TablePagination
        page={1}
        count={10}
        onPageChange={() => {}}
        rowsPerPage={-1}
        rowsPerPageOptions={[]}
      />
    </Stack>
  );
}
