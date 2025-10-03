import { forwardRef, ReactNode } from 'react';
import { Checkbox, CheckboxProps } from '../atoms/Checkbox';
import { Text } from '../atoms/Typography';

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: ReactNode;
  error?: string;
}

export const CheckboxWithLabel = forwardRef<
  HTMLInputElement,
  CheckboxWithLabelProps
>(({ label, error, id, ...checkboxProps }, ref) => {
  const checkboxId = id || 'checkbox';

  return (
    <div className="w-full">
      <div className="flex items-start gap-2">
        <Checkbox
          ref={ref}
          id={checkboxId}
          aria-invalid={!!error}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...checkboxProps}
        />
        <label
          htmlFor={checkboxId}
          className="flex-1 cursor-pointer select-none"
        >
          <Text variant="small" className="text-white/80">
            {label}
          </Text>
        </label>
      </div>
      {error && (
        <Text
          variant="small"
          className="mt-1.5 text-red-400"
          id={`${checkboxId}-error`}
          role="alert"
        >
          {error}
        </Text>
      )}
    </div>
  );
});

CheckboxWithLabel.displayName = 'CheckboxWithLabel';

