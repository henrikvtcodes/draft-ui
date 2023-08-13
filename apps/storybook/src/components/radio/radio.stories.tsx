import { Radio } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
}

export default meta

export const Default = () => <DefaultStory />
export const Sizes = () => <SizesStory />
