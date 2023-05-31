import { fizzBuzz } from "../Test-Ej-1";
import { esBisiesto } from "../Test-Ej-2";
import { eliminaNoCanonicos } from "../Test-Ej-3";
import { sumaPositivos } from "../Test-Ej-4";
import { primerConsecutivo } from "../Test-Ej-5";
import { maxConsecutivos } from "../Test-Ej-6";
import { lookup } from "../Test-Ej-7";
import { addToCart, setPrice} from "../Test-Ej-8";

test("ejercicio 1.1", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(15)).toMatch(/FizzBuzz/);
    expect(fizzBuzz(0)).toBe(0);
});

test("ejercicio 1.2: prueba si un año es bisiesto", () => {
    expect(esBisiesto(1900)).toBeFalsy();
    expect(esBisiesto(2000)).toBeTruthy();
    expect(esBisiesto(0)).toBeFalsy();
});

describe("ejercicio 1.3: devuelve cadena de ADN con valores canonicos unicamente(ACTG)", () => {
    expect(eliminaNoCanonicos("asdDBVCASDGH")).toBe("CAG");
    expect(eliminaNoCanonicos("3h5tro")).toBe("");
});

test("ejercicio 1.4: trata de sumar todos los numeros y cadenas de numberos positivos de un arreglo", () => {
    expect(sumaPositivos([1, 2, 3, "4", "A", -1, -50, "B"])).toBe(10);
    expect(sumaPositivos([])).toBe(0);
});

test("ejercicio 1.5: encuentra el indice del primer char repetido", () => {
    expect(primerConsecutivo('asdEDSASS')).toBe(2);
    expect(primerConsecutivo("test")).toBe(-1);
});

describe("ejercicio 1.6: encuentra el numero maximo de 1s consecutivos", () => {
    it("should convert strings to numbers", () => {
        expect(
            maxConsecutivos([
                ["1", 0, 1, 0],
                [1, "1", 1, 0],
                [1, 0, 0, 0],
                ["1", 0, 0, 1],
            ])
        ).toBe(3);
        expect(
            maxConsecutivos([
                [1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1],
                [1, 0, 0, 1, 0, 1],
            ])
        ).toBe(5);
    });
    it("should return -1 if any element of the matrix is neither 1 or 0", () => {
        expect(
            maxConsecutivos([
                [1, 0, 3],
                [2, 1, 1],
            ])
        ).toBe(-1);
        expect(
            maxConsecutivos([
                ["n", "0"],
                ["1", 1],
            ])
        ).toBe(-1);
        expect(
            maxConsecutivos([
                [10, 10],
                [10, 11],
            ])
        ).toBe(-1);
    });
});

describe("ejercicio 1.7: lookup()", () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup("norvig", "likes");
        const expected = ["AI", "Search", "NASA", "Mars"];

        expect(actual).toEqual(expected);
    });
    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup("knuth", "lastName");
        const expected = "Knuth";

        expect(actual).toEqual(expected);
    });
    it("with unknown user should throw an error with the correct message", () => {
        expect(() => {
            lookup("nobody", "likes");
        }).toThrow(/Could not find user/);
    });
    it("with unknown property should throw an error the correct message", () => {
        expect(() => {
            lookup("mfowler", "noprop");
        }).toThrow(/Could not find property/);
    });
});

describe('setPrice()', () => {
    it('should set the price in the given item object, immutably.', () => {
        const item = {
        name: 'test',
        price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
        name: 'test',
        price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
    });
});

describe('addToCart()', () => {
    it('should add item to cart, immutably', () => {
        const originalCart: {name: string; price: number} [] = [];
        const item = {
        name: 'Toy',
        price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
    });
});