var app = angular.module('velo-staff', []);
var staff = [
	{
		name: 'John Doe',
		title: 'President',
		description: '...',
		email: 'john.doe@velo.com',
		member: true
	},
	{
		name: 'John Doe',
		title: 'Vice President',
		description: '...',
		email: 'john.doe@velo.com',
		member: true
	},
	{
		name: 'John Doe',
		title: 'Treasurer',
		description: '...',
		email: 'john.doe@velo.com',
		member: true
	}
	];
	app.controller('StaffController', function(){
		this.persons = staff;
	});