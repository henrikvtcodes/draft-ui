'use client'

import * as React from 'react'

import { Meter, type MeterProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Meter = ({ className, ...props }: MeterProps) => {
  return <Meter className={cn('w-full', className)} {...props} />
}

const _MeterTrack = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'h-2 w-full overflow-hidden rounded bg-slate-200 dark:bg-slate-700',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface _MeterFilledTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number
}

const _MeterFilledTrack = ({
  className,
  percentage,
  ...props
}: _MeterFilledTrackProps) => {
  return (
    <div
      className={cn('h-full bg-black dark:bg-white', className)}
      style={{ width: percentage + '%' }}
      {...props}
    />
  )
}

export {
  _Meter as Meter,
  _MeterTrack as MeterTrack,
  _MeterFilledTrack as MeterFilledTrack,
}
