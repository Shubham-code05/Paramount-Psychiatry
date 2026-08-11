import Button from '../ui/Button';
import site from '../../data/site';

export default function AppointmentButton({ variant = 'primary', size = 'md', className, children = 'Make an Appointment', ...props }) {
  return (
    <Button
      href={site.appointmentUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      aria-label="Make an appointment on Headway (opens in a new tab)"
      {...props}
    >
      {children}
    </Button>
  );
}
