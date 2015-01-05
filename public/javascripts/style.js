var app = angular.module('velo-style', []);
	var selectedStyles = [
	{
		mountain: 'Mountain Biking',
		mountainDescription: '...'
	},
	{
		road: 'Road Biking',
		roadDescription: '...'
	}
	];
	app.controller('TabController', function(){
		this.styles = selectedStyles;
		//initializing the tab 1 for default tab
		this.tab = 1;
		//Sets the tab to the selected tab
		this.setTab = function(selectedTab){
			this.tab = selectedTab;
		};
		//checks to see which tab is currently selected
		this.isSet = function(checkTab){
			return this.tab === checkTab;
		};
	});