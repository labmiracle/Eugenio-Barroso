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

//Función sort
//1. Ordenar por nombre
function nameSort() {
	const sortedNames = characters.sort((a, b) => (a.name > b.name ? 1 : -1));
	return sortedNames;
}

//2. Ordenar por masa
function massSort() {
	const sortedMasses = characters.sort((a, b) => (a.mass > b.mass ? 1 : -1));
	return sortedMasses;
}

//3. Ordenar por altura
function heightSort() {
	const sortedHeights = characters.sort((a, b) => (a.height > b.height ? 1 : -1));
	return sortedHeights;
}

//4. Ordenar por género
function genderSort() {
	const sortedGenders = characters.sort((a, b) => {
		if (a.gender > b.gender) {
			return 1;
		} else {
			return -1;
		}
	});
	return sortedGenders;
}

//Función every
//1. ¿Todos los personajes tienen ojos azules?
function everyBlueEyes() {
	const blueEyeCharacters: boolean = characters.every(character => character.eye_color === "blue");
	return blueEyeCharacters;
}

//2. ¿Todos los personajes tienen una masa superior a 40?
function everyMassSup(supMass: number) {
	const massHigherThan: boolean = characters.every(character => Number(character.mass) > supMass);
	return massHigherThan;
}

//3. ¿Todos los caracteres son más bajos que 200?
function everyHeightLessThan(lessHeight: number) {
	const heightLowerThan: boolean = characters.every(character => Number(character.height) > lessHeight);
	return heightLowerThan;
}

//4. ¿Todos los personajes son hombres?
function everyGenderIs(isGender: string) {
	const genderCheck: boolean = characters.every(character => character.gender === isGender);
	return genderCheck;
}

//Función some
//1. ¿Hay al menos un personaje masculino?
function someGender(isGender: string): boolean {
	const hasSomeGender: boolean = characters.some(character => character.gender === isGender);
	return hasSomeGender;
}

//2. ¿Hay al menos un personaje con ojos azules?
function someEyeColor(isEyeColor: string): boolean {
	const eyeColorsFound: boolean = characters.some(character => character.eye_color === isEyeColor);
	return eyeColorsFound;
}

//3. ¿Hay al menos un personaje más alto que 200?
function someSupHeight(supHeight: number): boolean {
	const heightHigherThan: boolean = characters.some(character => Number(character.height) > supHeight);
	return heightHigherThan;
}

//4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
function someInfMass(infMass: number): boolean {
	const massLowerThan: boolean = characters.some(character => Number(character.mass) < infMass);
	return massLowerThan;
}

export {
	allHeight,
	allNames,
	allHeightNames,
	nameTotalChars,
	totalHeight,
	totalmass,
	massSupHundred,
	heightless200,
	getMaleChars,
	getFemaleChars,
	nameSort,
	heightSort,
	massSort,
	genderSort,
	everyBlueEyes,
	everyGenderIs,
	everyHeightLessThan,
	everyMassSup,
	someEyeColor,
	someGender,
	someInfMass,
	someSupHeight,
};
