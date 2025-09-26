import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalVirtualListComponent } from './horizontal-list.component';
import { HORIZONTAL_GROUP_ITEMS_ITEM_CONFIG_MAP } from '../app/utils';

const meta: Meta<HorizontalVirtualListComponent> = {
  title: 'Example / Horizontal virtual list',
  component: HorizontalVirtualListComponent,
  tags: ['autodocs'],
  argTypes: {
    methodForSelecting: {
      options: ['none', 'select', 'multi-select'],
      control: { type: 'radio' },
    },
    itemSize: {
      control: { type: 'number' },
    },
    bufferSize: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    maxBufferSize: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    dynamicSize: {
      control: { type: 'boolean' },
    },
    enabledBufferOptimization: {
      control: { type: 'boolean' },
    },
    screenReaderMessage: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<HorizontalVirtualListComponent>;
export const Simple: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
  },
};

export const Select: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'select',
    selectedIds: 3,
  },
};

export const MultiSelect: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'multi-select',
    selectedIds: [2, 5],
  },
};

export const DynamicSize: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'select',
    dynamicSize: true,
  },
};
