'use client';

import { useState } from 'react';
import EmployeeCard from "@/components/dashboard/EmployeeCard";
import AddEmployeeModal from "@/components/dashboard/AddEmployeeModal";

interface Employee {
  name: string;
  role: string;
}

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([
    { name: "Ryan Carruthers", role: "Growth Marketer" },
    { name: "Nia Gorbunova", role: "Events & Community Manager" },
    { name: "Michael Boosalis", role: "Product Marketer" },
  ]);

  const handleAddEmployee = (name: string, role: string) => {
    setEmployees([...employees, { name, role }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Performance Review Dashboard</h1>
      
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Add New Employee
        </button>
        <button className="border border-gray-200 px-4 py-2 rounded-md">
          Onboarding / Set Writing Style
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            name={employee.name}
            role={employee.role}
          />
        ))}
      </div>

      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEmployee}
      />
    </div>
  );
} 