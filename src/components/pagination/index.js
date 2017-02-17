import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

main.filter('startFrom', function() {
    return function(input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
});

export default main.component('pagination', {
    template: Template,
    transclude: true,
    bindings: {
        nguiItems: '='
    },
    controller: function() {
        "ngInject";
        var $ctrl = this;

        $ctrl.currentPage = 0;
        $ctrl.itemsPerPage = 10;
        $ctrl.maxPages = 10;

        function updatePages() {
            $ctrl.totalPages = Math.ceil($ctrl.nguiItems.length / $ctrl.itemsPerPage);
            $ctrl.totalPagesArr = [];
            for (var i = 0; i < $ctrl.totalPages; i++) {
                $ctrl.totalPagesArr.push(i);
            }
            if($ctrl.totalPages < $ctrl.maxPages) {
                $ctrl.totalPages = $ctrl.maxPages;
            }
        }

        $ctrl.pagesStartFrom = function() {
            var remainingPages = $ctrl.totalPages - $ctrl.currentPage;
            if(remainingPages < $ctrl.maxPages) return $ctrl.totalPages - $ctrl.maxPages;
            if($ctrl.currentPage == 0) return $ctrl.currentPage;
            return $ctrl.currentPage - 1
        }

        $ctrl.setPage = function(n){
            if($ctrl.totalPagesArr[n] !== undefined){
                $ctrl.currentPage = n;
            } else {
                console.error("Page not found", n);
            }
        }

        $ctrl.$onInit = function(){
            updatePages();
        }
    }
});
