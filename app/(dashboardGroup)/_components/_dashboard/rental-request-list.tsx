import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function RentalRequestList({ rentalRequests }: any) {
  
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Move In</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Rent</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentalRequests?.data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Link
                  href={`/dashboard/rent-requests/${item?.id}`}
                  className="text-lg font-semibold hover:text-blue-400 transition-all duration-300"
                >
                  {item.property.title}
                </Link>
              </TableCell>

              <TableCell>{item.tenant.name}</TableCell>

              <TableCell>
                {new Date(item.moveInDate).toLocaleDateString()}
              </TableCell>

              <TableCell>{item.rentalDuration} Months</TableCell>

              <TableCell>${item.monthlyRent.toLocaleString()}</TableCell>

              <TableCell>
                {/* <Badge>{item.status}</Badge> */}
                <Badge>{ item?.status === "APPROVED" && item?.tenant?.subscription?.status === "ACTIVE"? "Complete" :  item.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
