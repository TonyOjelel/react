/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PrefetchDNSOptions = {};
export type PreconnectOptions = {crossOrigin?: string};
export type PreloadOptions = {
  as: string,
  crossOrigin?: string,
  integrity?: string,
  type?: string,
  nonce?: string,
  fetchPriority?: 'high' | 'low' | 'auto',
};
export type PreinitOptions = {
  as: string,
  precedence?: string,
  crossOrigin?: string,
  integrity?: string,
  nonce?: string,
  fetchPriority?: 'high' | 'low' | 'auto',
};

export type HostDispatcher = {
  prefetchDNS: (href: string, options?: ?PrefetchDNSOptions) => void,
  preconnect: (href: string, options: ?PreconnectOptions) => void,
  preload: (href: string, options: PreloadOptions) => void,
  preinit: (href: string, options: PreinitOptions) => void,
};
