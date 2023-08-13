import { SearchField } from 'ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import WithClearButtonStory from './stories/with-clear-button'

const meta: Meta<typeof SearchField> = {
  title: 'SearchField',
  component: SearchField,
}

export default meta

export const Default = () => <DefaultStory />
export const WithClearButton = () => <WithClearButtonStory />
