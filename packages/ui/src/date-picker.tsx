'use client'

import {
  DatePicker,
  Dialog,
  Popover,
  type DatePickerProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _DatePicker = <T extends DateValue>({
  className,
  ...props
}: DatePickerProps<T>) => {
  return <DatePicker className={cn('w-full', className)} {...props} />
}

export interface _DatePickerContentProps
  extends Omit<PopoverProps, 'children' | 'style'>,
    DialogProps {
  className?: string
  popoverClassName?: string
}

const _DatePickerContent = ({
  popoverClassName,
  ...props
}: _DatePickerContentProps) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md dark:border-slate-700 dark:bg-slate-800',
        // Entering
        'data-[entering]:animate-in data-[entering]:fade-in',
        // Exiting
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        // Top
        'data-[placement=top]:slide-in-from-bottom-2',
        // Bottom
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName,
      )}
    >
      <Dialog {...props} />
    </Popover>
  )
}

export { _DatePicker as DatePicker, _DatePickerContent as DatePickerContent }
