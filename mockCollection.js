var faker = require('./faker'),
	collection = [],
	groups = [{
		id: null,
		slug: null
	},{
		id: 0,
		slug: 'Дизайнеры'
	},{
		id: 1,
		slug: 'Frontend-разработчики'
	},{
		id: 2,
		slug: 'Менеджеры'
	},{
		id: 3,
		slug: 'Backend-разработчики'
	}]

for (var i = 300; i > 0; i--) {
	collection.push({
		group: groups[Math.round(Math.random()*4)],
		name: faker.name.findName(),
		email: faker.internet.email(),
		phone: faker.phone.phoneNumber(),
		image: faker.image.avatar(),
	})
}

module.exports.getCollection =  function () {
	return collection
}
module.exports.getGroupsList = function () {
	return groups
}