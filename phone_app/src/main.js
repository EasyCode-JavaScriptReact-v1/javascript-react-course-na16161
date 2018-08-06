function showScreen(){
	// console.log('show screen');
	var screen = document.querySelector('.block_screen');
	screen.classList.toggle('active');
}


const tableContacts = [
	{
		names: 'Nastya',
		lastnames: 'Qweqwe',
		emails: 'nastya@mail.com',
	},
	{
		names: 'Kolya',
		lastnames: 'Asdf',
		emails: 'kolya@mail.com',
	},
	{
		names: 'Masha',
		lastnames: 'Zxcsa',
		emails: 'masha@mail.com',
	},
	{
		names: 'Sasha',
		lastnames: 'Porgtdf',
		emails: 'sasha@mail.com',
	},
	{
		names: 'Nastya',
		lastnames: 'Qweqwe',
		emails: 'nastya@mail.com',
	},
	{
		names: 'Kolya',
		lastnames: 'Asdf',
		emails: 'kolya@mail.com',
	},
	{
		names: 'Masha',
		lastnames: 'Zxcsa',
		emails: 'masha@mail.com',
	},
	{
		names: 'Sasha',
		lastnames: 'Porgtdf',
		emails: 'sasha@mail.com',
	},
	{
		names:'Nastya',
		lastnames: 'Qweqwe',
		emails: 'nastya@mail.com',
	},
	{
		names:'Kolya',
		lastnames:'Asdf',
		emails:'kolya@mail.com',
	},
	{
		names:'Masha',
		lastnames:'Zxcsa',
		emails:'masha@mail.com',
	},
	{
		names:'Sasha',
		lastnames:'Porgtdf',
		emails:'sasha@mail.com',
	},
]

const app = {
	
	pageNameContacts: 'Contacts',
	render() {
		var containerTable = document.getElementById('container_table');
		const titleContacts = this.newClass('.title_contacts');
		titleContacts.textContent = this.pageNameContacts;

		tableContacts.forEach(user => {
			rowsTable = this.newEl('div');
			const pName = this.newEl('p');
			const pLastaName = this.newEl('p');
			const pEmail = this.newEl('p');

			rowsTable.className = 'tr';

			pName.className = 'name';
			pLastaName.className = 'last_name';
			pEmail.className = 'email';

			pName.textContent = user.names;
			pLastaName.textContent = user.lastnames;
			pEmail.textContent = user.emails;

			rowsTable.appendChild(pName);
			rowsTable.appendChild(pLastaName);
			rowsTable.appendChild(pEmail);

			containerTable.appendChild(rowsTable);
		});		
	},

	newClass(className) {
		return document.querySelector(className);
	},

	newEl(elName) {
		return document.createElement(elName);
	},

}

app.render();
