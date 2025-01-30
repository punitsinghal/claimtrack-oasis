import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ClaimsList from "@/components/dashboard/ClaimsList";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";
import { FileText, Filter, PlusCircle, Search } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Mock data - would come from API
  const claims: Claim[] = [];

  // Mock statistics - would come from API
  const stats = {
    total: 0,
    approved: 0,
    rejected: 0
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Claims</p>
              <p className="text-2xl font-semibold">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Approved Claims</p>
              <p className="text-2xl font-semibold">{stats.approved}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-50 rounded">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Rejected Claims</p>
              <p className="text-2xl font-semibold">{stats.rejected}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claims Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">My Claims</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                className="pl-9 w-[300px]" 
                placeholder="Search" 
                type="search"
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button 
              onClick={() => navigate("/claims/new")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <PlusCircle className="w-4 h-4" />
              Add Claim
            </Button>
          </div>
        </div>
        <ClaimsList claims={claims} />
      </div>
    </div>
  );
}