import EmployeeCard from "@/components/dashboard/EmployeeCard";

export default function DashboardPage() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Performance Review Dashboard</h1>
        
        <div className="flex gap-4 mb-8">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Add New Employee
          </button>
          <button className="border border-gray-200 px-4 py-2 rounded-md">
            Onboarding / Set Writing Style
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EmployeeCard
            name="Ryan Carruthers"
            role="Growth Marketer"
          />
          <EmployeeCard
            name="Nia Gorbunova"
            role="Events & Community Manager"
          />
          <EmployeeCard
            name="Michael Boosalis"
            role="Product Marketer"
          />
        </div>
      </div>
    );
  }