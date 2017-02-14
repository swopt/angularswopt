'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .factory('SelectedColor',function(){
	  var selectedColor = {name:'black',code:'#000000'};
	  var setSelectedColor = function(color){
		  selectedColor = color;
	  };
	  var getSelectedColor = function(){
		  return selectedColor;
	  };
	  return {
	    setSelected: setSelectedColor,
	    getSelected: getSelectedColor
	  };
  })
  .factory('values',function($http){
	 
	  var getValues = function(locale) {
		 var xmlHttp = null;

	    xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", './values/value_'+locale+'.json', false );
	    xmlHttp.send( null );
	    var json = JSON.parse(xmlHttp.responseText);
	    var values = json.values;
	    values.getValue = function(key){return getValue(values,key)};
	    return values;
	  };
	  var en = getValues('en');
	  var getValue = function(object,key){
		  if(object[key]!=undefined)return object[key];else return en[key];
	  };
	  return{
		  'values':getValues
	  }
  	})
  	.factory('news',function(){
  		return{
  			news:[
  			 {date:'April 2010',items:[{title:'Kuching-Based Software Company Targets Plantations',link:''}]},
  			 {date:'March 2010',items:[{title:'Software Optima Rolls Out more Integrated Business Solutions for SMEs',link:'http://softwareoptima.com/uploads/Software_Optima_rolled_out_3_more_ERP_Solutions_for_SMEs.pdf'},
  			                           {title:'Company Develops New Software for Plantation Sector',link:'http://softwareoptima.com/uploads/PlantationPRApr2010.pdf'}]},
  			 {date:'November 2009',items:[{title:'Building Effective SMEs with Affordable Integrated Software',link:'http://softwareoptima.com/uploads/Building_Effective_SMEs_with_Affordable_Integrated_Software.pdf'}]}
  			 ]
  		}
  	});
