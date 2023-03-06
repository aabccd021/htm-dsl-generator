/* eslint-disable functional/no-conditional-statement */
import { htmlTagNames } from 'html-tag-names';

import { customAttributeTagNames, customPrefixMap } from './hardcoded.js';

const usableNameMap: Record<string, string> = {
  var: 'var_',
  object: 'object_',
};

const makePrefix = (tagName: string) => {
  if (!customAttributeTagNames.includes(tagName)) {
    return '';
  }
  const prefix = customPrefixMap[tagName] ?? tagName;
  const capitalizedPrefix = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  return capitalizedPrefix;
};

const makeTagTypeString = (tagName: string) => {
  const usableTagName = usableNameMap[tagName] ?? tagName;
  const prefix = makePrefix(usableTagName);
  return `export type ${usableTagName} = OmitReactFields<React.${prefix}HTMLAttributes<unknown>>;`;
};

const tagTypesString = htmlTagNames.map(makeTagTypeString).join('\n');

export const reactAttributes =
  `import type * as React from 'react';\n\n` +
  `import type { OmitReactFields } from './hardcoded.js';\n\n` +
  `${tagTypesString}\n`;