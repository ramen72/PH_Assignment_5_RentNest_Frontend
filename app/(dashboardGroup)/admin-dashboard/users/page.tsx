import { getUsers } from "../../_actions/adminAction";
import UserList from "../../_components/_users/UserList";


export default async function UsersPage() {
  const data = await getUsers();

  const users = data?.data?.users ?? [];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          User Management
        </h1>

        <p className="text-muted-foreground">
          Manage all landlords, tenants and administrators.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-sm text-muted-foreground">
            Total Users
          </h3>

          <p className="mt-2 text-3xl font-bold">
            {users.length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-sm text-muted-foreground">
            Admins
          </h3>

          <p className="mt-2 text-3xl font-bold">
            {users.filter((u: any) => u.role === "ADMIN").length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-sm text-muted-foreground">
            Landlords
          </h3>

          <p className="mt-2 text-3xl font-bold">
            {users.filter((u: any) => u.role === "LANDLORD").length}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-sm text-muted-foreground">
            Tenants
          </h3>

          <p className="mt-2 text-3xl font-bold">
            {users.filter((u: any) => u.role === "TENANT").length}
          </p>
        </div>
      </div>

      {/* User List */}
      <UserList users={users} />
    </div>
  );
}