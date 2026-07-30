import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

export default function RentalRequestList({ rentalRequests }: any) {
  console.log(rentalRequests);
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
                {item.property.title}
              </TableCell>

              <TableCell>{item.tenant.name}</TableCell>

              <TableCell>
                {new Date(item.moveInDate).toLocaleDateString()}
              </TableCell>

              <TableCell>{item.rentalDuration} Months</TableCell>

              <TableCell>${item.monthlyRent.toLocaleString()}</TableCell>

              <TableCell>
                <Badge>{item.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
