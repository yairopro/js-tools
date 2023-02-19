/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
declare function floor_core(decimals: number, input: number): number;
declare const floor: import("Function/Curry").Curry<typeof floor_core>;
export default floor;
