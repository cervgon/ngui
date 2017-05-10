import angular from 'angular';
import Template from './template.html';
import Styles from './styles.css';

export default angular
    .module('ngui.pagination', [])
    .filter('startFrom', function() {
        return function(input, start) {
            if (input) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        };
    })
    .component('pagination', {
        template: Template,
        transclude: true,
        bindings: {
            nguiOptions: '<'
        },
        controller: function() {
            "ngInject";

            var $ctrl = this;

            function updatePages() {
                $ctrl.totalPages = Math.ceil($ctrl.items.length / $ctrl.itemsPerPage);
                $ctrl.totalPagesArr = [];
                for (var i = 0; i < $ctrl.totalPages; i++) {
                    $ctrl.totalPagesArr.push(i);
                }
                if ($ctrl.totalPages < $ctrl.maxPages) {
                    $ctrl.totalPages = $ctrl.maxPages;
                }
            }

            $ctrl.pagesStartFrom = function() {
                var remainingPages = $ctrl.totalPages - $ctrl.currentPage;
                if (remainingPages < $ctrl.maxPages)
                    return $ctrl.totalPages - $ctrl.maxPages;
                if ($ctrl.currentPage == 0)
                    return $ctrl.currentPage;
                return $ctrl.currentPage - 1
            }

            $ctrl.setPage = function(n) {
                if ($ctrl.totalPagesArr[n] !== undefined) {
                    $ctrl.currentPage = n;
                } else {
                    console.error("Page not found", n);
                }
            }

            function updateOptions(options) {
                if (!options)
                    return;
                //console.log("[PAGINATION] updateOptions", options, $ctrl);

                $ctrl.items = options.items || [];
                $ctrl.currentPage = options.currentPage || 0;
                $ctrl.itemsPerPage = options.itemsPerPage || 10;
                $ctrl.maxPages = options.maxPages || 10;
                updatePages();
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes);
            }

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
