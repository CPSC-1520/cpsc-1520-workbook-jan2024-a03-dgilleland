import { it, expect } from 'vitest';
import { toTitleCase } from '../lib/stringUtils';

it('toTitleCase should make a word into title case format', () => {
    const actual = toTitleCase('hearts');
    expect(actual).toBe('Hearts');
})