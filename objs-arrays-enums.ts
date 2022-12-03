
// const person: {
// 		name: string;
// 		age: number;
// 		hobbies: string[];
// 		role: [number, string];
// 	} = {
// 	name: 'Haris',
// 	age: 23,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author']
// };
 
enum Role {
	ADMIN, READ_ONLY, AUTHOR
};

const person = {
	name: 'Haris',
	age: 23,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN
};



let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);


for(const hobby of person.hobbies) {
	console.log(hobby);
}

if (person.role == Role.ADMIN) {
	console.log('role is admin')
}