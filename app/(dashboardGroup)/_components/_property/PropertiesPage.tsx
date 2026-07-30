"use client";

import { useState } from "react";
import { Grid2X2, List } from "lucide-react";

import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import PropertyListCard from "./PropertyListCard";

interface Property {
  id: string;
  title: string;
  description: string;
  city: string;
  area: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  isAvailable: boolean;
  category: {
    name: string;
  };
  images: {
    imageUrl: string;
  }[];
}

interface Props {
  properties: Property[];
}

export default function PropertiesPage({ properties }: Props) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Available Properties</h1>

            <p className="text-muted-foreground">
              {properties?.length} Properties Found
            </p>
          </div>

          <div className="flex rounded-lg border p-1">
            {/* <Button
              size="icon"
              variant={view === "grid" ? "default" : "ghost"}
              onClick={() => setView("grid")}
            >
              <Grid2X2 className="h-5 w-5" />
            </Button> */}

            {/* <Button
              size="icon"
              variant={view === "list" ? "default" : "ghost"}
              onClick={() => setView("list")}
            >
              <List className="h-5 w-5" />
            </Button> */}
          </div>
        </div>

        {/* {view === "grid" ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {properties.map((property) => (
              <PropertyListCard key={property.id} property={property} />
            ))}
          </div>
        )} */}
      </section>
    </>
  );
}
