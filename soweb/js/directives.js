'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('sliderDirv',['$swipe',
      function($swipe) {
		  return {
			  restrict: 'EA',
			  link: function(scope, ele, attrs, ctrl) {
				  var startX, pointX;
				  $swipe.bind(ele, {
					  'start': function(coords) {
						  startX = coords.x;
						  pointX = coords.y;
					  },
					  'move': function(coords) {
						  var delta = coords.x - pointX;
						  // ...
					  },
					  'end': function(coords) {
						  // ...
					  },
					  'cancel': function(coords) {
						  // ...
					  }
				  });
			  }
		  }
	  }
  ])
  .directive('modalDialog',function() {
	  return {
		  restrict: 'E',
		  scope: {
			  show: '='
		  },
		  replace: true, // Replace with the template below
		  transclude: true, // we want to insert custom content inside the directive
		  link: function(scope, element, attrs) {
			  scope.dialogStyle = {};
			  if (attrs.width)
				  scope.dialogStyle.width = attrs.width;
			  if (attrs.height)
				  scope.dialogStyle.height = attrs.height;
			  console.log('width : '+attrs.width);
			  console.log('height : '+attrs.height);
			  scope.hideModal = function() {
				  scope.show = false;
			  };
		  },
		  template: "<div class='ng-modal' ng-show='show'>"+
				  "<div class='ng-modal-overlay' ng-click='hideModal()'></div>"+
				  "<div class='ng-modal-dialog' ng-style='dialogStyle'>"+
				  "<div class='ng-modal-close' ng-click='hideModal()'>&#10008;</div>"+
				  "<div class='ng-modal-dialog-content' ng-transclude></div>"+
				  "</div></div>"
	};
  })
  .directive('personnelCard',function (){
	  return{
		  restrict: 'E',
		  scope:{per:'=',del:"&",edit:'&'},
		  templateUrl:'partials/personnel_card.html',
		  controller: function($scope){
			  $scope.splicePer=function(){$scope.del()}
			  $scope.editPer=function(){$scope.edit()}
		  }
	  }
  })
  .directive('panelLayout',function (){
	  return {
		  restrict:'E',
		  replace:true,
		  transclude:true,
		  templateUrl:'template/panel_layout.html'
	  }
  })
  .directive('panelDiv',function (){
	  return {
		  restrict:'E',
		  controller:function($scope){
			  $scope.expanded = true;
			  $scope.expand = function(){};
		  },
		  scope:{divTitle:'='},
		  replace:true,
		  transclude:true,
		  templateUrl:'template/panel_div.html',
		  
	  }
  })
  .directive('panelDivCollapse',function (){
	  return {
		  restrict:'E',
		  controller:function($scope){
			  console.log($scope.show);
			  $scope.expanded = false;
			  $scope.expand = function(){
				$scope.expanded = !$scope.expanded;  
			  };
		  },
		  scope:{divTitle:'='},
		  replace:true,
		  transclude:true,
		  templateUrl:'template/panel_div.html'
	  }
  })
  .directive('ngMultiTransclude', function(){
	  return {
	    controller: function($scope, $element, $attrs, $transclude){
	      if(!$transclude){
	        throw {
	          name: 'DirectiveError',
	          message: 'ng-multi-transclude found without parent requesting transclusion'
	        };
	      }
	      this.$transclude = $transclude;
	    },
	     
	    link: function($scope, $element, $attrs, controller){
	      var selector = '[name=' + $attrs.ngMultiTransclude + ']';
	      var attach = function(clone){
	        var $part = clone.find(selector).addBack(selector);
	        $element.html('');
	        $element.append($part);
	      };
	       
	      if(controller.$transclude.$$element){
	        attach(controller.$transclude.$$element);
	      }
	      else {
	        controller.$transclude(function(clone){
	          controller.$transclude.$$element = clone;
	          attach(clone);
	        });
	      }
	    }
	  };
	})
	.directive('okBtn',function(){
		return {
			restrict:'E',
			scope:{text:'=',style:'='},
			transclude:true,
			template:"<button style='background:green;{{style}}'><span ng-if='text.length==undefined'>{{$root.values.getValue('ok')}}</span>{{text}}</button>"
		}
	});
