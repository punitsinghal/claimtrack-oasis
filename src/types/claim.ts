export interface Bill {
  id: string;
  billNo: string;
  amount: number;
  date: string;
  attachments?: File[];
}

export interface Claim {
  id: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'correction' | 'processing' | 'paid';
  bills: Bill[];
  totalAmount: number;
  claimLimit: number;
  category: string;
  submittedDate: string;
  employeeId: string;
  comments?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'employee' | 'manager' | 'operations' | 'accounts';
}