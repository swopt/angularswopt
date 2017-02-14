'use strict';

/* Controllers */
var css_item_background = 'linear-gradient(black,#444444,black)';
var loadingBg = 'loadingBg';
var loadingDone = 'noBg';
var cssUnavailable = 'unavailable';
var currLocaleCode = 'en';
var locales=[
             {'name':'Bahasa Melayu','code':'ms'},
             {'name':'English','code':'en'},
             {'name':'中文简体','code':'zh'},
             {'name':'Deutsch','code':'de'},
             {'name':'Español','code':'es'},
             {'name':'Français','code':'fr'},
             {'name':'한국어','code':'ko'},
             {'name':'日本語','code':'ja'},
             ];
var colors=[
            {'name':'red','code':'#ff0000','text':'#ffffff'},
            {'name':'orange','code':'#FA9B01','text':'#ffffff'},
            /*{'name':'yellow','code':'#ffff00'},*/
            {'name':'green','code':'#1dcb1d','text':'#ffffff'},
            {'name':'blue','code':'#4F87C7','text':'#ffffff'},
            {'name':'indigo','code':'#4b0082','text':'#ffffff'},
            {'name':'violet','code':'#ee82ee','text':'#ffffff'},
            {'name':'black','code':'#000000','text':'#ffffff'},
            ];
angular.module('myApp.controllers', [])
	.controller('mainCtrl',['$scope', '$rootScope','news',function($scope,$rootScope,news){
		$rootScope.news = news.news;
	}])
	.controller('sliderCtrl', ['$scope','SelectedColor','$rootScope','values', function($scope,SelectedColor,$rootScope,values) {
		$scope.locales = locales;
		$scope.selectedLocale=locales[1];
		$scope.colors = colors;
		$scope.selectedColor = colors[6];
		$scope.showmenu=false;
		$rootScope.values = values.values('en');
		$scope.changeLocale = function(localeCode) {
			currLocaleCode = localeCode;
			$rootScope.values = values.values(localeCode);
		}
		$scope.toggleMenu=function () {
			$scope.showmenu = !($scope.showmenu);
		};
		$scope.closeMenu = function() {$scope.showmenu = false};
		$scope.changeColor = function(color) {
			$scope.selectedColor = color;
			SelectedColor.setSelected(color);
			$rootScope.selectedColor = color;
		};
	}])
	.controller('ctrlPubs', function($scope, $http){
		var pubsUrl = 'http://crazytech.co:8010/wtlib/php/pubs_wt.php?table=pubs_wt&locale=';
		$scope.loading = loadingBg;
		$http({method: 'GET', url: pubsUrl+'en'}).
			success(function(data){
				$scope.data = data;
				$scope.loading = loadingDone;
				return data;
			}).error(function(data){
				$scope.loading = cssUnavailable;
			});
		var mapLang = {};
		$scope.languages = locales;
		for (var i = 0; 1 < locales.length; i++) {
			if(locales[i].code==currLocaleCode){
				$scope.language = locales[i];
				break;
			}
		}
        $scope.changeLanguage = function (language) {
        	$scope.loading = loadingBg;
        	$scope.language = language;
        	console.log(language);
            $http({ method: 'GET', url: pubsUrl+language.code }).
           success(function (data) {
               $scope.data = data;
               console.log($scope.data);
               $scope.loading = loadingDone;
               return data;
           }).error(function(data){
        	   $scope.message = 'failed';
				$scope.loading = cssUnavailable;
			});
        }
	})
	.controller('persCtrl', function($scope,$rootScope,SelectedColor, $http, FileUploader) {
		$scope.loading = loadingBg;
		var urlSo = 'http://192.168.100.107:8010/so/';
		var urlSoPhp = urlSo+'php/';
		var urlSoEmpProf = urlSo+"employees/profile/";
		$scope.profPicUrl = urlSoEmpProf;
		$scope.toPost = new Array();
		$rootScope.selectedColor = SelectedColor.getSelected();
		$http({method: 'GET', url: urlSoPhp+'get_all_employees.php'}).
		    success(function(data) {
		    	$scope.pers = data.emps;
		    	console.log($scope.pers);
		    	$scope.message = 'success'; 
		    	$scope.loading = loadingDone;
		    	return data;
			}).
		    error(function(data) {
			   $scope.message = 'failed';
			   $scope.loading = cssUnavailable;
		    });
		$scope.commitPersonnel = function(per){
			 var fname = document.getElementById("in_fname").value;
			 var lname = document.getElementById("in_lname").value;
			 var post = document.getElementById("in_post").value;
			 var phone1 = document.getElementById("in_phone1").value;
			 var phone2 = document.getElementById("in_phone2").value;
			 var email1 = document.getElementById("in_email").value;
			 var newPer = {};
			 newPer.id = per.id;
			 newPer.firstname = fname;
			 newPer.lastname = lname;
			 newPer.position = post;
			 if(per.genderDesc=='male')newPer.gender = '0';
			 else newPer.gender = '1';
			 newPer.genderDesc = per.genderDesc;
			 newPer.contact1 = phone1;
			 newPer.contact2 = phone2;
			 newPer.email1 = email1;
			 console.log(per);
			 console.log(newPer);
			 if(per.index==null)$scope.toPost.push(newPer);
			 else {
				 switch (per.mode) {
				case 0:
					$scope.pers[per.index]=newPer;
					break;

				case 1:
					$scope.toPost[per.index]=newPer;
					break;
				}
			 }
			 $scope.modalShown = !$scope.modalShown;
		}
		$scope.clearList = function(mode) {
			if(confirm("Clear \"To Be Added\" list?")==true){
				switch (parseInt(mode)) {
				case 1:
					$scope.toPost = [];
					break;
					
				default:
					break;
				}
				
			}
		}
		var assignHtmlValues = function(per) {
			document.getElementById("in_fname").value = per.firstname==undefined?'':per.firstname;
			document.getElementById("in_lname").value = per.lastname==undefined?'':per.lastname;
			document.getElementById("in_post").value = per.position==undefined?'':per.position;
			document.getElementById("in_phone1").value = per.contact1==undefined?'':per.contact1;
			document.getElementById("in_phone2").value = per.contact2==undefined?'':per.contact2;
			document.getElementById("in_email").value = per.email1==undefined?'':per.email1;
		}
		$scope.uploader = new FileUploader();
		$scope.uploadProfilePic = function () {
			document.getElementById("in_img_file").click();
		}
		$scope.changeGender = function (gender){
			if($scope.selectedPer.firstname==null)$scope.profPic = './css/img/silt_'+gender+'.png';
			else {
				$http({method: 'GET', url: urlSoEmpProf+"prof_"+$scope.selectedPer.id+".jpg"}).
					success(function(data){return data}).
					error(function(data){
						$scope.profPic = './css/img/silt_'+gender+'.png';
					});
			}
		}
		$scope.showDelBox = function(index,scope,mode){
			var perLst = [];
			switch (parseInt(mode)) {
			case 0:
				perLst = scope.pers;
				break;
				
			case 1:
				perLst = scope.toPost;
				break;
			}
			console.log($rootScope.values.bidFarewell);
			var bidFarewell = String.format($rootScope.values.bidFarewell,perLst[index].firstname,perLst[index].lastname);
			if (confirm(bidFarewell) == true) {
				perLst.splice(index,1);
			} else {
		        // do not delete
		    }
		}
		$scope.modalShown = false;
		$scope.genders = ['male','female']
		$scope.showModal = function (per, index, isEdit, mode) {
			console.log(index);
			$scope.selectedPer = {};
			if(per.genderDesc==undefined)per.genderDesc='male';
			$scope.profPic = './css/img/silt_'+per.genderDesc+'.png';
			if (isEdit){
				console.log(per);
				assignHtmlValues(per);
				per.mode = mode;
				$scope.selectedPer = per;
				$scope.selectedPer.index = index;
				switch(parseInt(per.gender)){
					case 1:
						$scope.selectedPer.genderDesc = 'female';
						break;
					default:
						$scope.selectedPer.genderDesc = 'male';
						break;
				}
				if(per.id!=undefined)$scope.profPic = urlSoEmpProf+"prof_"+per.id+".jpg";
			} else {
				assignHtmlValues($scope.selectedPer);
				$scope.selectedPer.genderDesc = 'male';
			}
			$scope.modalShown = !$scope.modalShown;
		}
		$scope.closeModal = function(){
			$scope.modalShown = false;
		}
	})
	.controller('rptCtrl', function($scope,$http,$rootScope){
		var $tabs = [];
		var repdata;
		$http({method: 'GET', url: './modules.json'}).
			success(function(data){
				$scope.modules = data.modules;
				for (var i = 0; i < $scope.modules.length; i++) {
					$scope.modules[i].show = true;
				}
			}).
		    error(function(data) {
			  
		    });
		$scope.expand = function(node) {
			node.show = !node.show;
		}
		$scope.callReport = function(node){
			$scope.reportName = node.module;
			$http({method: 'GET', url: './reportdata.json'}).
			success(function(data){
				var reps = data.data;
			 	var rep = $.grep(reps, function(e){ return e.repId == node.repId; });
				if (rep[0]==undefined) document.getElementById('reportContent').innerHTML = $rootScope.values.getValue('notFound');
				else document.getElementById('reportContent').innerHTML = rep[0].html;
			}).
		    error(function(data) {
		    	document.getElementById('reportContent').innerHTML = $rootScope.values.getValue('notFound');
		    });
		}
	});
