import { Easing } from "remotion";

/** Apple-style smooth ease */
export const smooth = Easing.bezier(0.16, 1, 0.3, 1);

/** Cinematic slow reveal */
export const cinematic = Easing.bezier(0.25, 0.1, 0.25, 1);

/** Dramatic slow in, smooth out */
export const dramatic = Easing.bezier(0.4, 0, 0, 1);

/** Fast snap for quick cuts */
export const fast = Easing.bezier(0.0, 0.0, 0.2, 1);
