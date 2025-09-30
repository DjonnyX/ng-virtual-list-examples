import { Id, IVirtualListCollection, IVirtualListItemConfigMap } from "ng-virtual-list";

const MAX_ITEMS = 50000;

interface ICollectionItem {
  id: Id;
  name: string;
}

interface IGroupCollectionItem extends ICollectionItem {
  id: Id;
  type: 'group-header' | 'item';
}

export const ITEMS: IVirtualListCollection<ICollectionItem> = [];
for (let i = 0, l = MAX_ITEMS; i < l; i++) {
  const id = i + 1;
  ITEMS.push({ id, name: `Item: ${id}` });
}

export const HORIZONTAL_ITEMS: IVirtualListCollection<ICollectionItem> = [];
for (let i = 0, l = MAX_ITEMS; i < l; i++) {
  const id = i + 1;
  HORIZONTAL_ITEMS.push({ id, name: `${id}` });
}

const GROUP_NAMES = ['A', 'B', 'C', 'D', 'E'];

const getGroupName = () => {
  return GROUP_NAMES[Math.floor(Math.random() * GROUP_NAMES.length)];
};

export const HORIZONTAL_GROUP_ITEMS: IVirtualListCollection<IGroupCollectionItem> = [],
  HORIZONTAL_GROUP_ITEMS_ITEM_CONFIG_MAP: IVirtualListItemConfigMap = {};

for (let i = 0, l = MAX_ITEMS; i < l; i++) {
  const id = i + 1, type = i === 0 || Math.random() > .895 ? 'group-header' : 'item', isGroup = type === 'group-header';
  HORIZONTAL_GROUP_ITEMS.push({ id, type, name: isGroup ? getGroupName() : `${id}` });
  HORIZONTAL_GROUP_ITEMS_ITEM_CONFIG_MAP[id] = {
    sticky: isGroup ? Math.round(Math.random() * 2) === 1 ? 1 : 2 : 0,
    selectable: !isGroup,
    collapsable: isGroup,
  }
}

export const GROUP_ITEMS: IVirtualListCollection<IGroupCollectionItem> = [],
  GROUP_ITEMS_ITEM_CONFIG_MAP: IVirtualListItemConfigMap = {};

let groupIndex = 0;
for (let i = 0, l = MAX_ITEMS; i < l; i++) {
  const id = i + 1, type = i === 0 || Math.random() > .895 ? 'group-header' : 'item', isGroup = type === 'group-header';
  if (type === 'group-header') {
    groupIndex++;
  }
  GROUP_ITEMS.push({ id, type, name: type === 'group-header' ? `Group ${groupIndex}` : `Item: ${id}` });
  GROUP_ITEMS_ITEM_CONFIG_MAP[id] = {
    sticky: isGroup ? 1 : 0,
    selectable: !isGroup,
    collapsable: isGroup,
  };
}

const CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const generateLetter = () => {
  return CHARS[Math.round(Math.random() * CHARS.length)];
}

const generateWord = () => {
  const length = 5 + Math.floor(Math.random() * 50), result = [];
  while (result.length < length) {
    result.push(generateLetter());
  }
  return `${result.join('')}`;
};

const generateText = () => {
  const length = 2 + Math.floor(Math.random() * 10), result = [];
  while (result.length < length) {
    result.push(generateWord());
  }
  let firstWord = '';
  for (let i = 0, l = result[0].length; i < l; i++) {
    const letter = result[0].charAt(i);
    firstWord += i === 0 ? letter.toUpperCase() : letter;
  }
  result[0] = firstWord;
  return `${result.join(' ')}.`;
};

export const GROUP_DYNAMIC_ITEMS: IVirtualListCollection<IGroupCollectionItem> = [],
  GROUP_DYNAMIC_ITEMS_ITEM_CONFIG_MAP: IVirtualListItemConfigMap = {},
  GROUP_DYNAMIC_ITEMS_WITH_SNAP: IVirtualListCollection<IGroupCollectionItem> = [],
  GROUP_DYNAMIC_ITEMS_ITEM_CONFIG_MAP_WITH_SNAP: IVirtualListItemConfigMap = {};

let groupDynamicIndex = 0;
for (let i = 0, l = MAX_ITEMS; i < l; i++) {
  const id = i + 1, type = i === 0 || Math.random() > .895 ? 'group-header' : 'item',
    isGroup = type === 'group-header';
  if (isGroup) {
    groupDynamicIndex++;
  }
  GROUP_DYNAMIC_ITEMS.push({ id, type, name: isGroup ? `Group ${id}. ${generateText()}` : `${id}. ${generateText()}` });
  GROUP_DYNAMIC_ITEMS_ITEM_CONFIG_MAP[id] = {
    sticky: isGroup ? 1 : 0,
    selectable: !isGroup,
    collapsable: isGroup,
  };
  GROUP_DYNAMIC_ITEMS_WITH_SNAP.push({ id, type, name: isGroup ? `Group ${id}` : `${id}. ${generateText()}` });
  GROUP_DYNAMIC_ITEMS_ITEM_CONFIG_MAP_WITH_SNAP[id] = {
    sticky: isGroup ? 1 : 0,
    selectable: !isGroup,
    collapsable: isGroup,
  };
}