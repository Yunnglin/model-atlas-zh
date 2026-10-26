// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Practice } from '../../src/features/practice/Practice';
import { emptyProgress } from '../../src/core/schemas/progress';
import { readKnowledgeFixture } from '../fixtures/knowledge';
import { readProgress, writeProgress } from '../../src/platform/progress';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('self-test learning state', () => {
  it('records self-assessment independently from node reading progress', () => {
    const data = readKnowledgeFixture();
    data.questions = data.questions.slice(0, 1);
    const onProgress = vi.fn();
    render(
      <Practice
        data={data}
        progress={emptyProgress()}
        onProgress={onProgress}
        onSelect={vi.fn()}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: '我能讲清了' }));
    expect(onProgress).toHaveBeenCalledWith({
      version: 1,
      nodes: {},
      answers: { [data.questions[0]!.id]: 'understood' },
    });
  });
  it('loads a usable empty state when browser storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(readProgress()).toEqual(emptyProgress());
  });
  it('reports storage failure without throwing away the reading experience', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota');
    });
    expect(writeProgress(emptyProgress())).toBe(false);
  });
});
