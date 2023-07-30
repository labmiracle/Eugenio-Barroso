const users: User[] = [
	{ firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
	{ firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
	{ firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
	{ firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
	{ firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
	{ firstName: "Wes", lastName: "Reid", role: "Instructor" },
	{ firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

type Role = "Full Stack Resident" | "Enterprise Instructor" | "Lead Instructor" | "Instructor";

interface User {
	firstName: string;
	lastName: string;
	role: Role;
}

type usersByRole = { [key in Role]: User[] };

//    1. Mapealo a un arreglo de strings: firstName-lastName: role
function getFullnameRole() {
	const usersToRoles = users.map(user => `${user.firstName}-${user.lastName} : ${user.role}`);
	return usersToRoles;
}

//    2. Filtra aquellos usuarios con role de Full Stack Resident
function getRole(role: string) {
	const usersByRole = users.filter(user => {
		if (user.role === role) {
			return user;
		}
	});
	return usersByRole;
}

//    3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
//    con los objetos usuarios que tienen dicho role
function reduceUsersByRole() {
	const reducedUsers = users.reduce((acc, user) => {
		if (acc[user.role]) {
			acc[user.role].push(user);
		} else {
			acc[user.role] = [user];
		}
		return acc;
	}, {} as usersByRole);
	return reducedUsers;
}

//    4. Genera una función de búsqueda de un usuario por firstName con find
function findFirstName(firstName: string) {
	const foundUser = users.find(user => user.firstName === firstName);
	return foundUser;
}

export { getFullnameRole, getRole, reduceUsersByRole, findFirstName };
