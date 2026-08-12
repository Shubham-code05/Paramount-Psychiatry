import { cn } from '../../lib/cn';

const fieldClasses =
  'w-full rounded-xl border bg-white px-4 py-2.5 text-body text-charcoal placeholder:text-muted/70 ' +
  'transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy';

// Labeled form control (input / textarea / select) with a required
// indicator, optional hint text, and an accessible, field-linked error
// message. Used by <AppointmentForm />.
export default function FormField({
  id,
  label,
  as = 'input',
  type = 'text',
  required = false,
  error,
  hint,
  options,
  className,
  ...props
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const controlClasses = cn(fieldClasses, error ? 'border-red-400' : 'border-border hover:border-navy/30', className);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-medium text-navy-deep">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-sage-deep">
            {' '}
            *
          </span>
        ) : (
          <span className="text-muted font-normal"> (optional)</span>
        )}
      </label>

      {as === 'textarea' && (
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(controlClasses, 'min-h-32 resize-y')}
          {...props}
        />
      )}

      {as === 'select' && (
        <select
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={controlClasses}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {as === 'input' && (
        <input
          id={id}
          type={type}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={controlClasses}
          {...props}
        />
      )}

      {hint && !error && (
        <p id={hintId} className="text-caption text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-caption font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
