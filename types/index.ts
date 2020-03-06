export type Nullable<T> = T | null | undefined;

export interface ClassType<T = any> {
    new (...args: any[]): T;
}
