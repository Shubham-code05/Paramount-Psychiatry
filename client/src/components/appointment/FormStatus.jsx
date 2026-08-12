import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/cn';

const styles = {
  success: { icon: CheckCircle2, className: 'border-sage-deep/40 bg-sage-soft/60 text-navy-deep', role: 'status' },
  error: { icon: AlertCircle, className: 'border-red-300 bg-red-50 text-red-800', role: 'alert' },
};

// Accessible submit-result banner for <AppointmentForm />. `status` selects
// success vs. error styling; `role` is set accordingly so screen readers
// announce it appropriately (polite "status" vs. assertive "alert").
export default function FormStatus({ status, children, className }) {
  if (!status) return null;
  const { icon: Icon, className: styleClass, role } = styles[status];

  return (
    <div role={role} className={cn('flex gap-3 rounded-(--radius-card) border p-4 md:p-5', styleClass, className)}>
      <Icon size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div className="text-body-sm">{children}</div>
    </div>
  );
}
