import { List } from 'immutable';

export declare function definedList(prop: any): any[];
export declare function defined(prop: any): boolean;

declare global  {
    interface Array<T> {
        defined(): Array<T>;
        allDefined(): Array<T>;
        first(): Array<T>;
        last(): Array<T>;
    }
}

export type DefinedList<T> = List<T> & {
    defined: () => List<T>,
    allDefined: () => List<T>
};

export {};
