const characters = [
	{
		name: "Luke Skywalker",
		height: "172",
		mass: "77",
		eye_color: "blue",
		gender: "male",
	},
	{
		name: "Darth Vader",
		height: "202",
		mass: "136",
		eye_color: "yellow",
		gender: "male",
	},
	{
		name: "Leia Organa",
		height: "150",
		mass: "49",
		eye_color: "brown",
		gender: "female",
	},
	{
		name: "Anakin Skywalker",
		height: "188",
		mass: "84",
		eye_color: "blue",
		gender: "male",
	},
];
/*



Función every
1. ¿Todos los personajes tienen ojos azules?
2. ¿Todos los personajes tienen una masa superior a 40?
3. ¿Todos los caracteres son más bajos que 200?
4. ¿Todos los personajes son hombres?
Función some
1. ¿Hay al menos un personaje masculino?
2. ¿Hay al menos un personaje con ojos azules?
3. ¿Hay al menos un personaje más alto que 200?
4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
*/
//map
//1. Obtener un arreglo de todos los nombres
function allNames(): string[] {
	let names: string[] = characters.map(character => character.name);
	return names;
}

//2. Obtener un arreglo de todas las alturas
function allHeight(): string[] {
	let heights: string[] = characters.map(character => character.height);

	return heights;
}

//3. Obtener un arreglo de objetos con las propiedades de nombre y altura
function allHeightNames() {
	const namesHeights: { name: string; height: string }[] = characters.map(character => {
		return {
			name: character.name,
			height: character.height,
		};
	});
}

//reduce
//1. Obtener la masa total de todos los personajes
function totalmass() {
	const massTotal = characters.reduce((accumulator, currentCharater) => {
		return accumulator + Number(currentCharater.mass);
	}, 0);
	return massTotal;
}

//2. Obtener la altura total de todos los caracteres
function totalHeight() {
	const heightTotal = characters.reduce((accumulatedValue, currentCharacter) => {
		return accumulatedValue + Number(currentCharacter.height);
	}, 0);
	return heightTotal;
}

//return total number of chars in all characters names
function nameTotalChars() {
	const totalNamesChars = characters.reduce((totalCharacters, currentCharacter) => {
		return totalCharacters + currentCharacter.name.length;
	}, 0);
	return totalNamesChars;
}

//4. Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos
//	para contar)
/* WIP
function totalCharsPerEyeColor() {
	let eyesColorsMap = new Map([
		["brown", []],
		["blue", []],
		["yellow", []],
	]);
	const total = characters.reduce((accum, currentCharacter) => {
		if (currentCharacter.eye_color === "brown" || eyesColorsMap.has("brown")) {
			eyesColorsMap.get("brown").push(...currentCharacter.name);
			return accum + current;
		}
}*/

//Función filter

//1. Obtener personajes con masa superior a 100
function massSupHundred() {
	const chars: {
		name: string;
		height: string;
		mass: string;
		eye_color: string;
		gender: string;
	}[] = characters.filter(char => {
		if (Number(char.mass) > 100) {
			return char;
		}
	});
	return chars;
}

//2. Obtener personajes con una altura inferior a 200
function heightless200() {
	const chars: {
		name: string;
		height: string;
		mass: string;
		eye_color: string;
		gender: string;
	}[] = characters.filter(char => {
		if (Number(char.height) < 200) {
			return char;
		}
	});
	return chars;
}

//3. Obtener todos los personajes masculinos
function getMaleChars() {
	const maleChars: {
		name: string;
		height: number;
		mass: number;
		eye_color: string;
		gender: string;
	}[] = characters.filter(char => {
		if (char.gender === "male") {
			return char;
		}
	});
	return maleChars;
}

//4. Obtener todos los personajes femeninos
function getFemaleChars() {
	const femaleChars: {
		name: string;
		height: number;
		mass: number;
		eye_color: string;
		gender: string;
	}[] = characters.filter(char => {
		if (char.gender === "female") {
			return char;
		}
	});
	return femaleChars;
}

/*
Función sort
1. Ordenar por nombre
2. Ordenar por masa
3. Ordenar por altura
4. Ordenar por género
*/

export {};
