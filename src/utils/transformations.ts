export function countByCategory<T>(
  items: T[],
  categorySelector: (item: T) => string
): Record<string, number> {
  return items.reduce((result, item) => {
    const category = categorySelector(item);
    result[category] = (result[category] || 0) + 1;
    return result;
  }, {} as Record<string, number>);
}

export function sumValues<T>(
  items: T[],
  valueSelector: (item: T) => number
): number {
  return items.reduce((total, item) => total + valueSelector(item), 0);
}

export function averageValues<T>(
  items: T[],
  valueSelector: (item: T) => number
): number {
  if (items.length === 0) return 0;

  return sumValues(items, valueSelector) / items.length;
}

export function findMaxValue<T>(
  items: T[],
  valueSelector: (item: T) => number
): T | undefined {
  return items.reduce<T | undefined>((maxItem, item) => {
    if (!maxItem || valueSelector(item) > valueSelector(maxItem)) {
      return item;
    }

    return maxItem;
  }, undefined);
}

export function findMinValue<T>(
  items: T[],
  valueSelector: (item: T) => number
): T | undefined {
  return items.reduce<T | undefined>((minItem, item) => {
    if (!minItem || valueSelector(item) < valueSelector(minItem)) {
      return item;
    }

    return minItem;
  }, undefined);
}