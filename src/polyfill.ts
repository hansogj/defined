
import {defined, definedList } from './index';

Array.prototype.defined = defined(Array.prototype.defined) ?
    Array.prototype.defined :
    function () {
        return definedList(this);
    };

Array.prototype.allDefined = defined(Array.prototype.allDefined) ?
    Array.prototype.allDefined :
    function () {
        return this.every((prop: any) => defined(prop)) ?
            this : [];
    };
