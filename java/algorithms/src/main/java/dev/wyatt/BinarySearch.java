package dev.wyatt;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Binary Search
 */
class BinarySearch<T extends Comparable<T>> {
    private final List<T> list;

    public BinarySearch(List<T> list) {
        super();
        this.list = list.stream()
            .sorted(Comparator.naturalOrder())
            .collect(Collectors.toList());
       // this.list.stream().forEach(System.out::println);
       // this.list = list;
    }

    /**
     * Iterative implementation.
     *
     * @param value
     * @return
     */
    private int indexOf__(T value) {
        int lo = 0;
        int hi = list.size() - 1;

        while (hi >= lo) {
            int mid = (lo + hi) >>> 1;
            int cur = list.get(mid).compareTo(value);
            if (cur > 0) {
                hi = mid - 1;
            } else if (cur < 0) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    /**
     * Recursive implementation.
     *
     * @param value value
     * @return index
     */
    public int indexOf(T value) {
        return indexOf_(value, 0, list.size());
    }

    /**
     * Recursive implementation helper function.
     *
     * @param value value
     * @param lo    lower bound
     * @param hi    upper bound
     * @return index
     */
    private int indexOf_(T value, int lo, int hi) {
        if (hi < lo) {
            return -1;
        }

        int mid = (hi + lo) / 2;
        int comp = list.get(mid).compareTo(value);

        // mid value > value
        if (comp > 0) {
            return indexOf_(value, lo, mid - 1);
            // mid value < value
        } else if (comp < 0) {
            return indexOf_(value, mid + 1, hi);
        }

        return mid;
    }

}
