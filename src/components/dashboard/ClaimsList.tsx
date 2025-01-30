import { Button } from "@/components/ui/button";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

interface ClaimsListProps {
  claims: Claim[];
}

export default function ClaimsList({ claims }: ClaimsListProps) {
  const navigate = useNavigate();

  if (claims.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gray-100 rounded-full">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2">No Claims Yet!</h3>
        <p className="text-gray-500 mb-6">Your claims will be displayed here. Click below to initiate your first one!</p>
        <Button 
          onClick={() => navigate("/claims/new")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add Claim
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Claim ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {claim.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="capitalize px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {claim.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${claim.totalAmount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {claim.submittedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/claims/${claim.id}`)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}