import { Button } from "@/components/ui/button";
import { Claim } from "@/types/claim";
import { useNavigate } from "react-router-dom";
import { Edit, Trash } from "lucide-react";

interface ClaimsListProps {
  claims: Claim[];
}

export default function ClaimsList({ claims }: ClaimsListProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: Claim['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'correction':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Claim['status']) => {
    switch (status) {
      case 'pending':
        return 'Pending Approval - Manager';
      case 'processing':
        return 'Pending Approval - Operations';
      case 'correction':
        return 'Pending Approval - Accounts';
      case 'rejected':
        return 'Rejected - Manager';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

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
              Claim Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Claim Limit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Claim Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Submission Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {claims.map((claim) => (
            <tr key={claim.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {claim.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {claim.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${claim.claimLimit.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${claim.totalAmount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {claim.submittedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                  {getStatusText(claim.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-blue-600"
                    onClick={() => navigate(`/claims/${claim.id}/edit`)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-600"
                    onClick={() => {
                      // Handle delete action
                    }}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}