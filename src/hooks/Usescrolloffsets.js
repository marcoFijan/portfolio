import { useState, useEffect } from "react";

/**
 * Measures real DOM element positions as scroll progress values (0–1).
 * Recalculates on resize and when content changes via ResizeObserver.
 *
 * @param {Record<string, string>} selectorMap - { key: "#css-selector" }
 * @returns {Record<string, number>} offsets - { key: 0.34 }
 *
 * Usage:
 *   const offsets = useScrollOffsets({
 *     hero:     "#hero",
 *     projects: "#projects",
 *   });
 */
export function useScrollOffsets(selectorMap) {
    const [offsets, setOffsets] = useState({});

    useEffect(() => {
        const calculate = () => {
            const totalScroll =
                document.documentElement.scrollHeight - window.innerHeight;

            if (totalScroll <= 0) return;

            const result = {};
            for (const [key, selector] of Object.entries(selectorMap)) {
                const el = document.querySelector(selector);
                if (el) result[key] = el.offsetTop / totalScroll;
            }
            setOffsets(result);
        };

        calculate();

        // Catches window resize and font/image load shifts
        window.addEventListener("resize", calculate);
        window.addEventListener("load", calculate);

        // Catches dynamic content changes (accordion open, lazy images, etc.)
        const observer = new ResizeObserver(calculate);
        observer.observe(document.body);

        return () => {
            window.removeEventListener("resize", calculate);
            window.removeEventListener("load", calculate);
            observer.disconnect();
        };
    }, []); // selectorMap is assumed stable (object literal — pass useMemo if needed)

    return offsets;
}