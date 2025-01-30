import { Button } from "@/components/ui/button";
import ClaimsList from "@/components/dashboard/ClaimsList";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Mock data - would come from API
  const claims: Claim[] = [];

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Claims</h1>
        <Button onClick={() => navigate("/claims/new")}>Add New Claim</Button>
      </div>
      <ClaimsList claims={claims} />
    </div>
  );
}