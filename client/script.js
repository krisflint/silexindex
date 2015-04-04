$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

silexIndexModule = angular.module('silexIndex', ['ngRoute']);

silexIndexModule.config(function ($routeProvider){
	$routeProvider
	.when('/', {
	templateUrl: 'partials/intro.html'
	})
	.when('/result',{
		templateUrl: 'partials/result.html'
	})
	.when('/success',{
		templateUrl: 'partials/success.html'
	})
});


//factory factory factory factory
silexIndexModule.factory('silexFactory', function ($http){
	var factory = {};
	var firmSearch = {};
	var user = {};
	var newfirm = {}

	factory.retrieveCount = function(info, callback){
		console.log(info);
		firmSearch.industry = info.industry;
		firmSearch.metroarea = info.metroarea;
		firmSearch.brand = info.brand;
		firmSearch.design = info.design
		firmSearch.ad = info.ad
		firmSearch.av = info.av
		firmSearch.pr = info.pr
		firmSearch.media = info.media

		if(info.brand === true){
			firmSearch.category1 = 'Branding | ';
		}else{
			firmSearch.category1 = '';
		}
		if(info.design === true){
			firmSearch.category2 = ' Design/Web Dev | ';
		}else{
			firmSearch.category2 = '';
		}
		if(info.ad === true){
			firmSearch.category3 = ' Advertising | ';
		}else{
			firmSearch.category3 = '';
		}
		if(info.pr === true){
			firmSearch.category4 = ' PR/Social Media | ';
		}else{
			firmSearch.category4 = '';
		}
		if(info.av === true){
			firmSearch.category5 = ' Audio/Video Production | ';
		}else{
			firmSearch.category5 = '';
		}		
		if(info.media === true){
			firmSearch.category6 = ' Media Buying, Paid Search and Placement | ';
		}else{
			firmSearch.category6 = '';
		}

		$http.post('/retrievecount', 
			{industry: info.industry,
			 metroarea: info.metroarea,
			 brand: info.brand,
			 design: info.design,
			 ad: info.ad,
			 av: info.av,
			 pr: info.pr,
			 media: info.media}).success(function(count){
			
			firmSearch.count = count;
			callback()
		})
	}

	factory.retrieveCountAll = function(info, callback){
		firmSearch.industry = info.industry;
		firmSearch.metroarea = info.metroarea;
		firmSearch.category1 = 'Select the capability categories above that apply to your project or campaign to narrow your search.';
		$http.post('/retrievecountall',
					{industry: info.industry,
					 metroarea: info.metroarea}).success(function(count){
					 firmSearch.count = count;
					 callback()
	 	})
	}

	factory.retrieveClientSearch = function(info, callback){
		$http.post('/retrieveclientsearch',
			{industry: info.industry,
			 metroarea: info.metroarea,
			 brand: info.brand,
			 design: info.design,
			 ad: info.ad,
			 av: info.av,
			 pr: info.pr,
			 media: info.media}).success(function(result){
			
			callback(result)

			})
	}

	factory.retrieveUsers = function(callback){
		$http.get('/retrieveusers').success(function(output){
			callback(output)
		})
	}

	factory.retrieveFirmSearch = function(callback){
		callback(firmSearch);
	}

	factory.createUser = function(info, callback){

		user = info;
		console.log(firmSearch)
		$http.post('/createuser',
			{name: info.name,
			 company: info.company,
			 email: info.email,
			 phone: info.phone,
			 searchindustry: firmSearch.industry,
			 searchmetroarea: firmSearch.metroarea,
			 searchbrand: firmSearch.brand,
			 searchdesign: firmSearch.design,
			 searchad: firmSearch.ad,
			 searchpr: firmSearch.pr,
			 searchav: firmSearch.av,
			 searchmedia: firmSearch.media,
			 searchcount: firmSearch.count}).success(function(output){

			callback(user, firmSearch); 	
		})
	}

	factory.createIndex = function(info, callback){
		newfirm = info
		var industries = Array
		// if(info.industryall === true){
		// 	industries = ['all']
		// }
		// else{
			industries = [info.industry1, info.industry2, info.industry3]
		// }
		$http.post('/createindex', 
			{firmname: info.firmname, 
			contact: info.contact,
			phone: info.phone,
			email: info.email,
			web: info.web,
			street: info.street,
			city: info.city,
			state: info.state,
			zip: info.zip,
			metroarea: info.metroarea,
			industries: industries,
			brand: info.brand,
			design: info.design,
			ad: info.ad,
			pr: info.pr,
			av: info.av,
			media: info.media}).success(function(output){
				console.log(output)
				callback(output)
			})
	}


	factory.retrieveadmin = function(info, callback){
		$http.post('/retrieveadmin', 
			{username: info.username,
			 password: info.password}).success(function(output){
			 	console.log(output)
			 })
	}

	return factory;
});


//controller controller controller

silexIndexModule.controller('retrieveController', function ($scope, silexFactory){

	$scope.searchFirmCapabilityError = false;
	$scope.searchFirmIndustryError = false;
	$scope.searchFirmCityError = false;
	$scope.searchFirmSuccessShowUserForm = false;
	$scope.firm = {}
	$scope.firm.industry = ''
	$scope.firm.metroarea = ''

	$scope.firm.brand = undefined
	$scope.firm.design = undefined
	$scope.firm.ad = undefined
	$scope.firm.pr = undefined
	$scope.firm.av = undefined
	$scope.firm.media = undefined

	$scope.retrieveCount = function(){

		if ($scope.firm.brand === false) {
			$scope.firm.brand = undefined
		}
		if ($scope.firm.design === false) {
			$scope.firm.design = undefined
		}
		if ($scope.firm.ad === false) {
			$scope.firm.ad = undefined
		}
		if ($scope.firm.pr === false) {
			$scope.firm.pr = undefined
		}
		if ($scope.firm.av === false) {
			$scope.firm.av = undefined
		}
		if ($scope.firm.media === false){
			$scope.firm.media = undefined
		}

		// if ($scope.firm.brand === undefined && $scope.firm.design === undefined && $scope.firm.ad === undefined &&
		// 	$scope.firm.pr === undefined && $scope.firm.av === undefined && $scope.firm.media === undefined){
		// 	$scope.searchFirmCapabilityError = true;
		// 	$scope.searchFirmSuccessShowUserForm = false;
		// }
		if ($scope.firm.industry === ''){
			$scope.searchFirmIndustryError = true
			$scope.searchFirmCapabilityError = false
			$scope.searchFirmCityError = false;
			$scope.searchFirmSuccessShowUserForm = false;
		}
		else if ($scope.firm.metroarea === ''){
			$scope.searchFirmCityError = true;
			$scope.searchFirmCapabilityError = false
			$scope.searchFirmIndustryError = false
			$scope.searchFirmSuccessShowUserForm = false;
		}
		else if($scope.firm.brand === undefined && $scope.firm.design === undefined && $scope.firm.ad === undefined &&
			$scope.firm.pr === undefined && $scope.firm.av === undefined && $scope.firm.media === undefined){
			$scope.searchFirmIndustryError = false
			$scope.searchFirmCityError = false;
			$scope.searchFirmSuccessShowUserForm = true;
			silexFactory.retrieveCountAll($scope.firm, function (info){
				console.log($scope.firm);
				$scope.firm = {};
				$scope.firm.industry = ''
				$scope.firm.metroarea = ''
				console.log($scope.firm)
				$scope.result = {}
			})
		}
		else{
			$scope.searchFirmCapabilityError = false
			$scope.searchFirmIndustryError = false
			$scope.searchFirmCityError = false;
			$scope.searchFirmSuccessShowUserForm = true;
			console.log($scope.firm)
			silexFactory.retrieveCount($scope.firm, function (info){		
				console.log($scope.firm)
				$scope.firm = {};
				$scope.firm.industry = ''
				$scope.firm.metroarea = ''
				$scope.firm.brand = undefined
				$scope.firm.design = undefined
				$scope.firm.ad = undefined
				$scope.firm.pr = undefined
				$scope.firm.av = undefined
				$scope.firm.media = undefined
				console.log($scope.firm)
				$scope.result = {}
			})
		}
	}
});

// admin dashboard controller
silexIndexModule.controller('retrieveClientSearch', function ($scope, $location, silexFactory){

	$scope.firm = {}
	$scope.firm.brand = undefined
	$scope.firm.design = undefined
	$scope.firm.ad = undefined
	$scope.firm.pr = undefined
	$scope.firm.av = undefined
	$scope.firm.media = undefined

	$scope.result = {}

	silexFactory.retrieveUsers(function (info){
		// console.log(info.error)
		// if(info.error === true || info.error === undefined){
		// 	console.log(info.error)
		// 	$location.path('http://localhost:8888/partials/login.html')
		// }
		// else{
		$scope.users = info
		console.log($scope.users)
		// }
	})

	$scope.retrieveClientSearch = function (){
		console.log($scope.firm)
		silexFactory.retrieveClientSearch($scope.firm, function (info){
			
			$scope.result = info;
			console.log($scope.result)
			$scope.firm = {}
			$scope.firm.brand = undefined
			$scope.firm.design = undefined
			$scope.firm.ad = undefined
			$scope.firm.pr = undefined
			$scope.firm.av = undefined
			$scope.firm.media = undefined
		})
	}
});


silexIndexModule.controller('searchResultController', function ($scope, silexFactory){
	
	$scope.showSearchFirmCount = true

	$scope.result = {}
	
	silexFactory.retrieveFirmSearch(function (info){
		$scope.result = info;
	})

	$scope.showSearchUserResult = false

	$scope.newuser = {};
	$scope.newuser.name = ''
	$scope.newuser.company = ''
	$scope.newuser.email = ''
	$scope.newuser.phone = ''

	$scope.nameerror = false
	$scope.companyerror = false
	$scope.emailerror = false
	$scope.phoneerror = false

	

	$scope.newUser = function (){
		console.log($scope.newuser);

		if($scope.newuser.name === ''){
			$scope.nameerror = true
		}
		if($scope.newuser.company === ''){
			$scope.companyerror = true
		}
		if($scope.newuser.email === ''){
			$scope.emailerror = true
		}
		if($scope.newuser.phone === ''){
			$scope.phoneerror = true
		}
		else{
			silexFactory.createUser($scope.newuser, function (user, search){
				console.log(search)
				console.log(user)
				$scope.user = {};
				$scope.showuser = user;
				$scope.search = search;
				$scope.showSearchFirmCount = false
				$scope.searchFirmSuccessShowUserForm = false;
				$scope.showSearchUserResult = true
			})
		}
	}
});

//controller to add a new marketing services firm index
silexIndexModule.controller('createController', function ($scope, silexFactory){
	
	$scope.showForm = true
	$scope.createSuccess = false
	$scope.createIndustrySelectError = false
	$scope.createError = false

	$scope.newfirm = {}
	$scope.newfirm.brand = undefined
	$scope.newfirm.design = undefined
	$scope.newfirm.ad = undefined
	$scope.newfirm.av = undefined
	$scope.newfirm.pr = undefined
	$scope.newfirm.media = undefined

	$scope.hideIndustries = true

	$scope.selectAllIndustries = function(){
		if($scope.hideIndustries === true){
			$scope.hideIndustries = false
		}
		else{
			$scope.hideIndustries = true
		}
	}

	$scope.newIndex = function (){
		console.log($scope.newfirm)

		$scope.createSuccess = false;

		if($scope.newfirm.brand === undefined && $scope.newfirm.design === undefined && 
			$scope.newfirm.ad === undefined && $scope.newfirm.pr === undefined && 
			$scope.newfirm.av === undefined && $scope.newfirm.media === undefined){
				$scope.createError = true;
		}
		if($scope.newfirm.industry1 === $scope.newfirm.industry2 || 
		   $scope.newfirm.industry1 === $scope.newfirm.industry3 ||
		   $scope.newfirm.industry2 === $scope.newfirm.industry3){
				$scope.createIndustrySelectError = true
		}
		else{
			silexFactory.createIndex($scope.newfirm, function (info){
				$scope.result = info
				$scope.showForm = false
				$scope.createError = false;
				$scope.createIndustrySelectError = false
				$scope.createSuccess = true;
				$scope.newfirm = {}
			})
		}
	}
});


silexIndexModule.controller('retrieveAdminLogin', function ($scope, silexFactory){

	$scope.authenticateAdmin = function (){
		console.log($scope.login)
		silexFactory.retrieveadmin($scope.login, function (info){

		})

	}

});






















