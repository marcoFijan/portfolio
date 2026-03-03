import { useEffect, useRef } from "react";

/**
 * Returns a ref whose `.current` holds scroll progress 0–1.
 * Updated via scroll event — does not cause re-renders.
 */
export function usePageScroll() {
    const scrollRef = useRef(0);

    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            scrollRef.current = max > 0 ? window.scrollY / max : 0;
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return scrollRef;
}