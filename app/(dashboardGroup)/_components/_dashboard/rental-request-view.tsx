"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import RentalRequestList from "./rental-request-list";
import RentalRequestCard from "./rental-request-card";
// import RentalRequestList from "./rental-request-list";

export default function RentalRequestView({ rentalRequests }: any) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Rental Requests</h2>

        <div className="flex gap-2">
          <Button
            variant={view === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>

          <Button
            variant={view === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setView("list")}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rentalRequests?.data.map((item: any) => (
            // <h1>{item.id}</h1>
            <RentalRequestCard key={item?.id} request={item} />
          ))}
        </div>
      ) : (
        <RentalRequestList rentalRequests={rentalRequests} />
      )}
    </>
  );
}
