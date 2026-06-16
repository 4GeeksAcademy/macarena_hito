export function linearSearch<T>(
  items: T[],
  predicate: (item: T) => boolean
): T | undefined {
  return items.find(predicate);
}

export function binarySearchById<T extends { id: number }>(
  items: T[],
  id: number
): number {
  let start = 0;
  let end = items.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const currentItem = items[middle]!;

    if (currentItem.id === id) {
      return middle;
    }

    if (currentItem.id < id) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}