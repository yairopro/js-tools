export const pipe: (...path: any[]) => (...params: any[]) => any;
export const parallel: (...fns: any[]) => (...params: any[]) => any;
export const diverge: (effect: any) => (...input: any[]) => any;
export const not: any;
