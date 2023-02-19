/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
/**
 * @param threshold Included
 * @returns If input is near target by threshold
 */
declare function near_core(target: number, threshold: number, input: number): boolean;
declare const near: import("Function/Curry").Curry<typeof near_core>;
export default near;
