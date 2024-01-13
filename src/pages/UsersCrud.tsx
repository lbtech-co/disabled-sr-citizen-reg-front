import UserDetailForm from "../components/UserDetailForm";
import UsersTable from "../components/UsersTable";

export default function UsersCrud() {
  return (
    <div>
      <UsersTable />
      <UserDetailForm />
    </div>
  );
}
