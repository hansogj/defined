import { defined, definedList, allDefined } from '../src/defined';


describe('defined', () => {

    it('forventer udefinerte ', () =>
       [undefined, null, [], false, ''].
       forEach((a: any) => expect(defined(a)).toBeFalsy(a)));

    it('forventer definerte ', () =>
       [{}, [1, 2, 3], 'tekstlig innhold', true, 0, 1].
       forEach((a: any) => expect(defined(a)).toBeTruthy(a)));

    describe('objekter', () => {
        it('forventer udefinerte egenskaper', () =>
           [{}, { a: undefined }, { a: null }, { a: '' }, { a: [] }, { a: false }].
           forEach((obj: any) => expect(defined(obj.a)).toBeFalsy(obj)));

        it('forventer definerte egenskaper', () =>
           [{ a: {} }, { a: [1, 2, 3] }, { a: 'tekstlig innhold' }, { a: true }].
           forEach((obj: any) => expect(defined(obj.a)).toBeTruthy(obj)));
    });
    describe('function', () => {
        it('forventer definerte function ', () => {
            [function () { }, () => { }]
                .forEach((obj: any) => expect(defined(obj)).toBeTruthy(obj));
        });
    });

});

describe('definedList', () => {

    it('forventer udefinerte ', () =>
       [undefined, null, [], false, ''].
       forEach((a: any) => expect(definedList(a)).toEqual([], a)));

    it('forventer definerte ', () =>
       [{}, 'tekstlig innhold', true, 0, 1].
       forEach((a: any) => expect(definedList(a)).toEqual([a], a)));

    it('forventer definerte liste retunerer som liste', () =>
       [[{}], ['tekstlig innhold'], [true], [0], [1]].
       forEach((a: any) => expect(definedList(a)).toEqual(a, a)));


    it('forventer alle elementene i en liste må være definert', () =>
       [[1, false], [1, undefined]].
       forEach((a: any) => expect(definedList(a)).toEqual([1], a)));

});

describe('[].defined]', () => {
    it('forventer kunde elementene i en liste som er definert', () =>
       [[1, false], [1, undefined]].
       forEach((a: any[]) => expect(a.defined()).toEqual([1], a)));

    it('forventer alle elementene i en liste må være definert', () =>
       [[1, false], [1, undefined]].
       forEach((a: any[]) => expect(a.defined()).toEqual([1], a)));
});

describe('[].allDefined]', () => {
    it('forventer alle elementene i en liste må være definert', () =>
       [[1, false], [1, undefined]].
       forEach((a: any[]) => expect(a.allDefined().length).toBe(0)));
    it('forventer alle elementene i en liste må være definert', () =>
       [[1, 2], [1, 'allDefined']].
       forEach((a: any[]) => expect(a.allDefined().length).toBe(2)));
});


describe('first', () => {

    let spy: jasmine.Spy;

    beforeEach(() => spy = jasmine.createSpy('mySpy'));

    describe('tom array', () => {
        beforeEach(() =>  [].first().map(i => spy(i)));
        it('spy skal ikke kalles', () =>
           expect(spy).not.toHaveBeenCalled());
    });

    describe('ett elements array', () => {
        beforeEach(() => [1].first().map(i => spy(i)));
        it('spy skal kalles en gang', () =>
           expect(spy).toHaveBeenCalled());
        it('spy skal kalles en gang', () =>
           expect(spy).toHaveBeenCalledWith(1));
    });

    describe('mangfoldent elements array', () => {
        beforeEach(() => [1, {}, 'a'].first().map(i => spy(i)));
        it('spy skal kalles en gang', () =>
           expect(spy).toHaveBeenCalled());
        it('spy skal kalles en gang', () =>
           expect(spy).toHaveBeenCalledWith(1));
    });
});


describe('allDefined', () => {



    describe('tom array', () => {
        it('spy skal gi fale', () =>
           expect(allDefined([])).toBeFalse());
    });

});
