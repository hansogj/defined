import { List } from 'immutable';
import { defined, definedList } from './defined';

declare global {
    interface Array<T> {
        defined(): Array<T>;
        allDefined(): Array<T>;
        first(): Array<T>;
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


Array.prototype.first = defined(Array.prototype.first) ?
    Array.prototype.first :
    function (this: any[]) {
        return this.filter((_, i) => i === 0);
    };


List.prototype.defined = defined(List.prototype.defined) ?
    List.prototype.defined :
    function (this: List<any>) {
        return this.every((prop: any) => defined(prop)) ?
            List([])
    }