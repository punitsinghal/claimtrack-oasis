import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ClaimsList from "@/components/dashboard/ClaimsList";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FileText, Filter, PlusCircle, Search } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const { data: claims, isLoading, error } = useQuery<Claim[]>('claims', async () => {
    const response = await axios.get('/api/claims');
    return response.data;
  });

  const { data: stats } = useQuery('stats', async () => {
    const response = await axios.get('/api/stats');
    return response.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading claims</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Claims</p>
            <p className="text-2xl font-semibold">{stats.total}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <FileText className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Approved Claims</p>
            <p className="text-2xl font-semibold">{stats.approved}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border flex items-center gap-4">
          <div className="p-3 bg-red-50 rounded-lg">
            <FileText className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Rejected Claims</p>
            <p className="text-2xl font-semibold">{stats.rejected}</p>
          </div>
        </div>
      </div>

      {/* Claims Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-xl font-semibold">My Claims</h1>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                className="pl-9 w-full md:w-[300px]" 
                placeholder="Search claims..." 
                type="search"
              />
            </div>
            <div className="flex gap-2">
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
        </div>
        <ClaimsList claims={claims} />
      </div>
    </div>
  );
}