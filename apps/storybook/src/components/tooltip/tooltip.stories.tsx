import { Tooltip } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import PlacementStory from './stories/placement'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

export const Default = () => <DefaultStory />
export const Placement = () => <PlacementStory />
