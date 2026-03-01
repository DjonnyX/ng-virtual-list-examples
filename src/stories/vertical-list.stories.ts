import type { Meta, StoryObj } from '@storybook/angular';
import { VerticalVirtualListComponent } from './vertical-list.component';

const meta: Meta<VerticalVirtualListComponent> = {
  title: 'Example / Vertical virtual list',
  component: VerticalVirtualListComponent,
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
    snap: {
      control: { type: 'boolean' },
    },
    snappingMethod: {
      options: ['normal', 'advanced', 'chat'],
      control: { type: 'radio' },
    },
    langTextDir: {
      options: ['ltr', 'rtl'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    scrollbarTheme: {
      control: { type: 'object' },
    },
    clickDistance: {
      control: { type: 'range', min: 1, max: 1000, step: 1 },
    },
    waitForPreparation: {
      control: { type: 'boolean' },
    },
    scrollStartOffset: {
      control: { type: 'range', min: 1, max: 1000, step: 1 },
    },
    scrollEndOffset: {
      control: { type: 'range', min: 1, max: 1000, step: 1 },
    },
    snapScrollToBottom: {
      control: { type: 'boolean' },
    },
    snapToEndTransitionInstantOffset: {
      control: { type: 'range', min: 0, max: 10000, step: 1 },
    },
    scrollbarMinSize: {
      control: { type: 'range', min: 1, max: 1000, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<VerticalVirtualListComponent>;
export const Simple: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'none',
  },
};

export const CollapsableGroups: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    collapseByClick: true,
  },
};

export const SnappedGroups: Story = {
  args: {
    snap: true,
    screenReaderMessage: "Showing items $1 to $2",
    collapseByClick: true,
  },
};

export const Select: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'select',
    collapseByClick: true,
    selectedIds: 3,
  },
};

export const MultiSelect: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'multi-select',
    collapseByClick: true,
    selectedIds: [2, 5],
  },
};

export const DynamicSize: Story = {
  args: {
    screenReaderMessage: "Showing items $1 to $2",
    methodForSelecting: 'select',
    collapseByClick: true,
    dynamicSize: true,
  },
};
