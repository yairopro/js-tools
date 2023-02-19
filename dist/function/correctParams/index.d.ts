/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
export = correctParams;
declare const correctParams: import("Function/Curry").Curry<(correctors: any, fn: any) => <T>(...args: T[]) => any>;
