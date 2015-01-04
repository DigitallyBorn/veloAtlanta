	var app = angular.module('velo', []);
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

	var features = [
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	},
	{
		title: 'Excitement',
		description: 'This is the most fun I have ever had in my life.  I dont know what else I would be doing without velo.'
	}
	];
	app.controller('FeatureController', function(){
		this.excerpts = features;
	})








