import { getStatusConfig, PizzaOrder } from "@/lib/mockData";

interface StatusBadgeProps {
  status: PizzaOrder['status'];
  showIcon?: boolean;
  showDot?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ 
  status, 
  showIcon = true, 
  showDot = true, 
  size = 'md' 
}: StatusBadgeProps) {
  const config = getStatusConfig(status);
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 font-semibold rounded-full border
      ${config.color} ${sizeClasses[size]}
      transition-all duration-200 hover:shadow-sm
    `}>
      {showDot && (
        <span className={`w-2 h-2 rounded-full ${config.dotColor} animate-pulse`} />
      )}
      {showIcon && (
        <span className="text-sm">{config.icon}</span>
      )}
      <span className="font-medium">{status}</span>
    </span>
  );
}
