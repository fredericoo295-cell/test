import { LucideIcon } from "lucide-react";

interface StatusBadgeProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function StatusBadge({ icon: Icon, label, value }: StatusBadgeProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 inline-flex rounded-lg bg-blue-50 p-2 text-primary">
        <Icon size={18} />
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slateBlue">{value}</p>
    </div>
  );
}
