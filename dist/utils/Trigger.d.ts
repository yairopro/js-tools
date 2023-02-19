export default class Trigger {
    set: Set<any>;
    add(callback: any): typeof DO_NOTHING;
    fire(params: any): void;
}
declare function DO_NOTHING(): void;
export {};
