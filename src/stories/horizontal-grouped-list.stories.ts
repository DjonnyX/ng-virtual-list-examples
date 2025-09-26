import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalGroupedVirtualListComponent } from './horizontal-grouped-list.component';

const meta: Meta<HorizontalGroupedVirtualListComponent> = {
  title: 'Example / Horizontal grouped virtual list',
  component: HorizontalGroupedVirtualListComponent,
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
    snap: {
      control: { type: 'boolean' },
    },
    dynamicSize: {
      control: { type: 'boolean' },
    },
    selectByClick: {
      control: { type: 'boolean' },
    },
    selectedIds: {
      control: { type: 'object', }
    },
    collapseByClick: {
      control: { type: 'boolean' },
    },
    collapsedIds: {
      control: { type: 'object', }
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

type Story = StoryObj<HorizontalGroupedVirtualListComponent>;
export const Simple: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
  },
};

export const SnappedGroups: Story = {
  args: {
    snap: true,
    screenReaderMessage: "Showing items $1 to $2",
  },
};

export const CollapsableGroups: Story = {
  args: {
    snap: true,
    screenReaderMessage: "Showing items $1 to $2",
    collapseByClick: true,
    collapsedIds: [],
  },
};

export const Select: Story = {
  args: {
    methodForSelecting: 'select',
    screenReaderMessage: "Showing items $1 to $2",
    snap: true,
    collapseByClick: true,
    selectedIds: 3,
    collapsedIds: [],
  },
};

export const MultiSelect: Story = {
  args: {
    methodForSelecting: 'multi-select',
    screenReaderMessage: "Showing items $1 to $2",
    snap: true,
    collapseByClick: true,
    selectedIds: [2, 5],
    collapsedIds: [],
  },
};

export const DynamicSize: Story = {
  args: {
    methodForSelecting: 'select',
    screenReaderMessage: "Showing items $1 to $2",
    dynamicSize: true,
    snap: true,
    collapseByClick: true,
    collapsedIds: [],
  },
};

