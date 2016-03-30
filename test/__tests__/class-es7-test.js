/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

describe('class-es7', () => {

  it('transforms correctly', () => {
    test('class-es7', 'class-es7-test');
  });

  it('transforms complex initial state correctly', () => {
    test('class-es7', 'class-es7-complex-initial-state');
  });

});
