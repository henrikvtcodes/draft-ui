'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import {
  DateField,
  DateInput,
  DateSegment,
  Group,
  type DateFieldProps,
  type DateInputProps,
  type DateSegmentProps,
  type DateValue,
  type GroupProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const dateInputGroupVariants = cva(
  [
    'inline-flex w-full', // Using .inline-flex here, as opposed to .flex appears to fix this issue https://github.com/adobe/react-spectrum/issues/3164
    'w-full items-center border bg-transparent placeholder:text-slate-400 dark:border-slate-700 dark:text-slate-50',
    // Focus
    'focus:outline-none',
    // Focus-visible
    'data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400 data-[focus-visible]:ring-offset-2 dark:data-[focus-visible]:ring-slate-400 dark:data-[focus-visible]:ring-offset-slate-900',
    // Disabled
    'disabled:cursor-not-allowed disabled:opacity-40',
  ],
  {
    variants: {
      validationState: {
        valid: 'border-slate-300',
        invalid: 'border-red-500',
      },
      size: {
        lg: 'h-12 rounded-lg px-3 py-2 text-lg',
        md: 'h-10 rounded-md px-3 py-1 text-base',
        sm: 'h-8 rounded px-2 py-1 text-sm',
        xs: 'h-6 rounded px-1 py-0.5 text-xs',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface _DateInputGroupProps
  extends GroupProps,
    VariantProps<typeof dateInputGroupVariants> {
  className?: string
}

const _DateInputGroup = ({
  className,
  validationState,
  size,
  ...props
}: _DateInputGroupProps) => {
  return (
    <Group
      className={cn(
        dateInputGroupVariants({
          size,
          validationState,
          className,
        }),
      )}
      {...props}
    />
  )
}

const _DateField = <T extends DateValue>(props: DateFieldProps<T>) => {
  return <DateField {...props} />
}

const _DateInput = ({ className, ...props }: DateInputProps) => {
  return <DateInput className={cn('flex gap-1', className)} {...props} />
}

const _DateSegment = ({ className, ...props }: DateSegmentProps) => {
  return (
    <DateSegment
      className={cn(
        'flex items-center rounded px-1 focus:outline-none',
        // Placeholder
        'data-[placeholder]:text-slate-500 data-[placeholder]:focus:text-black dark:data-[placeholder]:focus:text-white',
        // Focus
        'focus:bg-slate-100 focus:text-black dark:focus:bg-slate-700 dark:focus:text-white',
        // Date Separator
        'data-[type=literal]:px-0',
        className,
      )}
      {...props}
    />
  )
}

export {
  _DateField as DateField,
  _DateInputGroup as DateInputGroup,
  _DateInput as DateInput,
  _DateSegment as DateSegment,
}
