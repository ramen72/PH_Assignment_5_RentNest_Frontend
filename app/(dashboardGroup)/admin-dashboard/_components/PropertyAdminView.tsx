"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, Search } from "lucide-react";
import { PropertyCardAmin } from "./PropertyCardAmin";

interface PropertyViewProps {
  propertiesData: any[];
}

export default function PropertyAdminView({ propertiesData }: PropertyViewProps) {
  const [viewType, setViewType] = useState<"card" | "list">("card");
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const filteredProperties = propertiesData.filter(
    (property: any) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600 mt-1">
            Discover available rental properties
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1 md:max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, location, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
            <Button
              onClick={() => setViewType("card")}
              variant={viewType === "card" ? "default" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <LayoutGrid className="w-4 h-4" />
              Grid
            </Button>
            <Button
              onClick={() => setViewType("list")}
              variant={viewType === "list" ? "default" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <List className="w-4 h-4" />
              List
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No properties found matching your search.
            </p>
          </div>
        ) : (
          <div
            className={
              viewType === "card"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredProperties && filteredProperties.map((property: any) => (
              <PropertyCardAmin
                key={property.id}
                {...property}
                viewType={viewType}
              />
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Showing {filteredProperties.length} of {propertiesData.length}{" "}
          properties
        </div>
      </div>
    </main>
  );
}
