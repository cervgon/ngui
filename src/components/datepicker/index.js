import angular from 'angular';
import Template from './template.html';
import Styles from './styles.scss';

export default angular
    .module('ngui.datepicker', [])
    .component('datepicker', {
        template: Template,
        bindings: {
            nguiModel: '=',
            nguiOptions: '<'
        },
        controller: function($scope, $timeout, $element, $document) {
            "ngInject";
            var $ctrl = this;
            Date.isLeapYear = function(year) {
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
            };

            Date.getDaysInMonth = function(year, month) {
                return [
                    31,
                    (Date.isLeapYear(year)
                        ? 29
                        : 28),
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31
                ][month];
            };

            Date.prototype.isLeapYear = function() {
                return Date.isLeapYear(this.getFullYear());
            };

            Date.prototype.getDaysInMonth = function() {
                return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
            };

            Date.prototype.addMonths = function(value) {
                var n = this.getDate();
                this.setDate(1);
                this.setMonth(this.getMonth() + value);
                this.setDate(Math.min(n, this.getDaysInMonth()));
                return this;
            };

            $ctrl.get_calendar_date = function() {
                var months = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ];
                return months[$ctrl.visible_date.getMonth()] + " " + $ctrl.visible_date.getFullYear();
            }

            $ctrl.get_month_days = function() {
                var d = new Date($ctrl.visible_date);
                var days_n = d.getDaysInMonth();
                var days = [];
                for (var i = 0; i < days_n; i++) {
                    days.push(i + 1);
                }
                return days;
            }

            $ctrl.get_empty_days = function() {
                var d = new Date($ctrl.visible_date);
                d.setDate(1);
                var days_n = d.getDay();
                var days = [];
                for (var i = 0; i < days_n; i++) {
                    days.push(i);
                }
                return days;
            }

            $ctrl.is_day_today = function(n) {
                if ($ctrl.visible_date.getMonth() !== $ctrl.today.getMonth())
                    return false;
                if ($ctrl.visible_date.getFullYear() !== $ctrl.today.getFullYear())
                    return false;
                if (n !== $ctrl.today.getDate())
                    return false;

                return true;
            }

            $ctrl.is_day_selected = function(n) {
                if (!$ctrl.nguiModel)
                    return;

                if ($ctrl.visible_date.getMonth() !== $ctrl.nguiModel.getMonth())
                    return false;
                if ($ctrl.visible_date.getFullYear() !== $ctrl.nguiModel.getFullYear())
                    return false;
                if (n !== $ctrl.nguiModel.getDate())
                    return false;

                return true;
            }

            $ctrl.clear = function() {
                if ($ctrl.disabled)
                    return;
                $ctrl.nguiModel = null;
                $ctrl.selected_day = null;
                $ctrl.selected_month = null;
                $ctrl.selected_year = null;
            }

            $ctrl.open_calendar = function() {
                if ($ctrl.show_calendar == true)
                    return;
                if ($ctrl.nguiModel) {
                    $ctrl.visible_date = new Date($ctrl.nguiModel);
                } else {
                    $ctrl.visible_date = new Date($ctrl.today);
                    if ($ctrl.selected_year)
                        $ctrl.visible_date.setFullYear($ctrl.selected_year);
                    if ($ctrl.selected_month)
                        $ctrl.visible_date.setMonth($ctrl.selected_month - 1);
                    }

                $ctrl.show_calendar = true;
            }

            $ctrl.toggle_calendar = function() {
                if ($ctrl.show_calendar == false) {
                    $ctrl.open_calendar();
                } else {
                    $ctrl.show_calendar = false;
                }
            }

            $ctrl.set_date = function(n) {
                if ($ctrl.disabled)
                    return;
                $ctrl.nguiModel = new Date($ctrl.visible_date);
                $ctrl.nguiModel.setDate(n);
                $ctrl.show_calendar = false;
            }

            $ctrl.change_month = function(n) {
                var m = $ctrl.visible_date.getMonth();
                var y = $ctrl.visible_date.getFullYear();

                m += n;

                if (m > 11) {
                    m = 0;
                    y += 1;
                }

                if (m < 0) {
                    m = 11;
                    y -= 1;
                }

                $ctrl.visible_date.setMonth(m);
                $ctrl.visible_date.setFullYear(y);
            }

            $ctrl.update_selected_date = function() {
                var temp_date = null;

                // Year
                if ($ctrl.selected_year) {
                    if ($ctrl.selected_year > 9999)
                        $ctrl.selected_year = 9999;
                    if ($ctrl.selected_year < 1000)
                        $ctrl.selected_year = 1000;
                    }
                else {
                    $ctrl.selected_year = "";
                }

                // Month
                if ($ctrl.selected_month) {
                    if ($ctrl.selected_month > 12)
                        $ctrl.selected_month = 12;
                    if ($ctrl.selected_month < 1)
                        $ctrl.selected_month = 1;
                    }
                else {
                    $ctrl.selected_month = "";
                }

                // Day
                if ($ctrl.selected_day) {
                    if ($ctrl.selected_day > 31)
                        $ctrl.selected_day = 31;
                    if ($ctrl.selected_day < 1)
                        $ctrl.selected_day = 1;
                    }
                else {
                    $ctrl.selected_day = "";
                }

                if ($ctrl.selected_month && $ctrl.selected_day && $ctrl.selected_year) {
                    var d = new Date();
                    d.setDate(1);
                    d.setFullYear($ctrl.selected_year);
                    d.setMonth($ctrl.selected_month - 1);
                    var max = d.getDaysInMonth();

                    if ($ctrl.selected_day > max) {
                        $ctrl.selected_day = "";
                    } else {
                        d.setDate($ctrl.selected_day);
                        temp_date = new Date(d);
                    }
                }

                if (!temp_date || !$ctrl.nguiModel) {
                    $ctrl.nguiModel = temp_date;
                } else {
                    $ctrl.nguiModel.setFullYear(temp_date.getFullYear());
                    $ctrl.nguiModel.setMonth(temp_date.getMonth());
                    $ctrl.nguiModel.setDate(temp_date.getDate());
                }

                if ($ctrl.selected_year)
                    $ctrl.visible_date.setFullYear($ctrl.selected_year);
                if ($ctrl.selected_month)
                    $ctrl.visible_date.setMonth($ctrl.selected_month - 1);
                }

            $scope.$watch('$ctrl.nguiModel', function(newValue, oldValue) {
                if ($ctrl.nguiModel) {
                    if ($ctrl.isoString && typeof($ctrl.nguiModel) == 'string') {
                        $ctrl.nguiModel = new Date($ctrl.nguiModel);
                    }
                    $ctrl.selected_day = $ctrl.nguiModel.getDate();
                    $ctrl.selected_month = $ctrl.nguiModel.getMonth() + 1;
                    $ctrl.selected_year = $ctrl.nguiModel.getFullYear();
                    $ctrl.update_selected_date();
                }
            });

            $scope.$watch('$ctrl.show_calendar', function(newValue, oldValue) {
                if (newValue !== oldValue && newValue == true) {
                    $document.bind('click', onClick);
                } else if (newValue !== oldValue && newValue == false) {
                    $document.unbind('click', onClick);
                }
            });

            var onClick = function(event) {
                var isChild = $element[0].contains(event.target);
                var isSelf = $element[0] == event.target;
                var isInside = isChild || isSelf;
                if (!isInside) {
                    $timeout(function() {
                        $ctrl.show_calendar = false;
                    }, 10);
                }
            }

            function updateOptions(options) {
                if (!options)
                    return;
                //console.log("[DATEPICKER] updateOptions", options, $ctrl);

                $ctrl.show_calendar = options.show_calendar || false;
                $ctrl.today = options.today || new Date();
                $ctrl.visible_date = options.visible_date || new Date();
                $ctrl.isoString = options.isoString || false;
                $ctrl.disabled = options.disabled || false;
            }

            $ctrl.$onChanges = function(changes) {
                updateOptions(changes.nguiOptions.currentValue);
            }

            $ctrl.$onInit = function() {
                if (!this.nguiOptions)
                    this.nguiOptions = {};
                updateOptions(this.nguiOptions);
            }
        }
    })
    .name
