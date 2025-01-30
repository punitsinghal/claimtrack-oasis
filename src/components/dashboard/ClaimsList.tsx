import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";

interface ClaimsListProps {
  claims: Claim[];
}

export default function ClaimsList({ claims }: ClaimsListProps) {
  const navigate = useNavigate();

  if (claims.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium">No claims found</h3>
        <p className="text-muted-foreground">Start by creating a new claim</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Claim ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {claims.map((claim) => (
          <TableRow key={claim.id}>
            <TableCell>{claim.id}</TableCell>
            <TableCell>
              <span className="capitalize">{claim.status}</span>
            </TableCell>
            <TableCell>${claim.totalAmount}</TableCell>
            <TableCell>{claim.submittedDate}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/claims/${claim.id}`)}
              >
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}