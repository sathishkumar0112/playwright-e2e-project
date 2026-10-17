import { test, expect } from '@playwright/test';
import { generateReference } from '../utils/referenceUtils';

test('generate a reference number', async () => {
  const reference = generateReference();

  console.log(reference);

  expect(reference).toMatch(/^TEST-\d+$/);
});