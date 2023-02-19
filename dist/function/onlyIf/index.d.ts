/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
declare const _exports: import("Function/Curry").Curry<typeof onlyIf>;
export = _exports;
declare function onlyIf(predicate: any, run: any): (...params: any[]) => any;
