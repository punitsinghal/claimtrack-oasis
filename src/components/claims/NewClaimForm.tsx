import React from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, CalendarIcon, Plus, FileUp } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Claim } from "@/types/claim";

export function NewClaimForm() {
  const form = useForm<Claim>({
    defaultValues: {
      bills: [],
      totalAmount: 0,
      claimLimit: 0,
      category: "Communication",
      status: "draft",
    },
  });

  const [bills, setBills] = React.useState([
    {
      id: "1",
      particulars: "Special Communication Allowance Percentage to be..",
      billNo: "CP190424334",
      date: "16-12-2024",
      amount: 900.00,
      claimAmount: 700.00,
    },
    {
      id: "2",
      particulars: "Special Communication Allowance Percentage to be..",
      billNo: "CP190424334",
      date: "16-12-2024",
      amount: 900.00,
      claimAmount: 700.00,
    },
  ]);

  const totalAmount = bills.reduce((sum, bill) => sum + bill.claimAmount, 0);
  const advance = 300.00;
  const netAmount = totalAmount - advance;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Add Claim</h1>
        <div className="text-sm text-gray-600">
          Category: <span className="font-medium">Communication</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Particulars</th>
                <th className="text-left p-4">Bill No.</th>
                <th className="text-left p-4">Bill Date</th>
                <th className="text-right p-4">Bill Amt.</th>
                <th className="text-right p-4">Claim Amt.</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="border-b">
                  <td className="p-4">{bill.particulars}</td>
                  <td className="p-4">{bill.billNo}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {bill.date}
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-right">{bill.amount.toFixed(2)}</td>
                  <td className="p-4 text-right">{bill.claimAmount.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2 text-sm">
            <span>Attachments:</span>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <FileUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="default" className="bg-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Bill
              </Button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-8">
                <span>Total Amount:</span>
                <span className="font-medium">{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Advance:</span>
                <span className="font-medium">{advance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Net Amount:</span>
                <span className="font-medium">{netAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t flex justify-end gap-3">
          <Button variant="outline">Discard</Button>
          <Button variant="outline" className="text-primary">Save Draft</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}