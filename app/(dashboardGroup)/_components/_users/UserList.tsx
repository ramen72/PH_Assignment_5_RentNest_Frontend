"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";

import UserCard from "./UserCard";
import { Button } from "@/components/ui/button";
import UserTable from "./UserTable";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto: string | null;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BANNED";
  createdAt: string;
}

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <div className="flex rounded-lg border p-1">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>

          <Button
            variant={view === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => setView("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <UserTable users={users} />
      )}
    </div>
  );
}