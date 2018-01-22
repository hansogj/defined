export declare function definedList(prop: any): any[];
export declare function defined(prop: any): boolean;

declare global  {
    interface Array<T> {
        defined(): Array<T>;
        allDefined(): Array<T>;
        first(): Array<T>;
    }
}
export {};
