import { useRef, useCallback } from "react";

interface QueryScrollProps<T> {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<T>;
}

const useInfiniteScroll = <T>({
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
}: QueryScrollProps<T>) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  return { lastItemRef };
};

export default useInfiniteScroll;
