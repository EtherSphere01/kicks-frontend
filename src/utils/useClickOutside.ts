import { useEffect } from "react";

type AnyRef<T> = React.RefObject<T | null>;

type Options = {
    enabled?: boolean;
};

export function useClickOutside<T extends HTMLElement>(
    refOrRefs: AnyRef<T> | AnyRef<T>[],
    onOutsideClick: () => void,
    options: Options = {},
) {
    const { enabled = true } = options;

    useEffect(() => {
        if (!enabled) return;

        const refs = Array.isArray(refOrRefs) ? refOrRefs : [refOrRefs];

        const handlePointerDown = (event: PointerEvent) => {
            const targetNode = event.target as Node | null;
            if (!targetNode) return;

            const clickedInside = refs.some((ref) => {
                const element = ref.current;
                return element ? element.contains(targetNode) : false;
            });

            if (!clickedInside) onOutsideClick();
        };

        document.addEventListener("pointerdown", handlePointerDown, true);
        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown,
                true,
            );
        };
    }, [refOrRefs, onOutsideClick, enabled]);
}
