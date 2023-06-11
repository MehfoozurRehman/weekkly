import { useEffect } from "react";

const useIsInViewport = (ref) => {
  const [isInViewport, setIsInViewport] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isInViewport;
};
