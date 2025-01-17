interface EmployeeCardProps {
  name: string;
  role: string;
}

export default function EmployeeCard({ name, role }: EmployeeCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{role}</p>
      <button className="border border-gray-200 px-4 py-2 rounded-md">
        Start Review
      </button>
    </div>
  );
}