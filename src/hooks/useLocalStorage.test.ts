import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  it('writes to local storage', () => {
    const {
      result: {
        current: [, setValue],
      },
    } = renderHook(() => useLocalStorage<number>('my-key', 0));

    act(() => {
      setValue(1);
    });

    expect(localStorage.getItem('my-key')).toBe('1');
  });

  it('retrieves from local storage', () => {
    localStorage.setItem('my-key', '1');
    const {
      result: {
        current: [value],
      },
    } = renderHook(() => useLocalStorage<number>('my-key', 0));

    expect(value).toBe(1);
  });

  it('writes and retrieves from local storage', () => {
    const { result } = renderHook(() => useLocalStorage<number>('my-key', 0));

    act(() => {
      result.current[1](1);
    });

    expect(result.current[0]).toBe(1);
  });
});
