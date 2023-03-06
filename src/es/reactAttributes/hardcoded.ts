// TODO: auto generate this
import type * as React from 'react';

export const customAttributeTagNames = [
  'a',
  'audio',
  'area',
  'base',
  'blockquote',
  'button',
  'canvas',
  'col',
  'colgroup',
  'data',
  'details',
  'del',
  'dialog',
  'embed',
  'fieldset',
  'form',
  'html',
  'iframe',
  'img',
  'ins',
  'input',
  'keygen',
  'label',
  'li',
  'link',
  'map',
  'menu',
  'meta',
  'meter',
  'q',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'param',
  'progress',
  'slot',
  'script',
  'select',
  'source',
  'style',
  'table',
  'textarea',
  'td',
  'th',
  'time',
  'track',
  'video',
];

export const customPrefixMap: Record<string, string> = {
  a: 'anchor',
  q: 'quote',
};

export type OmitReactFields<T> = Omit<
  T,
  | keyof React.DOMAttributes<unknown>
  | 'defaultChecked'
  | 'defaultValue'
  | 'onCancel'
  | 'onClose'
  | 'onToggle'
  | 'suppressContentEditableWarning'
  | 'suppressHydrationWarning'
>;