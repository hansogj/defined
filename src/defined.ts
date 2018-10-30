export function definedList(prop: any): any[] {
    if (!defined(prop) || !defined(prop.constructor)) {
        return [];
    }

    if (prop.constructor !== [].constructor) {
        return [prop].filter(p => defined(p));
    }
    return prop.filter((p: any) => defined(p));
}


export function defined(prop: any): boolean {

    if (prop === undefined || prop === null) {
        return false;
    }

    if (typeof prop  === 'function') {
        return true;
    }

    if (prop.hasOwnProperty('length')) {
        return prop.length > 0;
    }

    if (prop.hasOwnProperty('size')) {
        return prop.size > 0;
    }

    if (typeof prop === 'boolean') {
        return prop;
    }
    return true;
}
