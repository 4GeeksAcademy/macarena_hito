export function filterItems<T>(
  items: T[],
  predicate: (item: T) => boolean
): T[] {
  return items.filter(predicate);
}

export function sortAscending(
  numbers: number[]
): number[] {
  return [...numbers].sort((a, b) => a - b);
}

export function sortDescending(
  numbers: number[]
): number[] {
  return [...numbers].sort((a, b) => b - a);
}

export function groupBy<T, K extends string | number>(
  items: T[],
  keySelector: (item: T) => K
): Record<K, T[]> {
  return items.reduce((groups, item) => {
    const key = keySelector(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {} as Record<K, T[]>);
}