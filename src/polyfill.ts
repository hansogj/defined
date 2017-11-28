import {defined, definedList } from './index';

declare global {
  interface Array<T> {
    defined(): Array<T>;
    allDefined(): Array<T>;
  }
}


Array.prototype.defined = defined(Array.prototype.defined) ?
    Array.prototype.defined :
    function (this: any[]) {
        return definedList(this);
    };

Array.prototype.allDefined = defined(Array.prototype.allDefined) ?
    Array.prototype.allDefined :
    function (this: any[]) {
        return this.every((prop: any) => defined(prop)) ?
            this : [];
    };
