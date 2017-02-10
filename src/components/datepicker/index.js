import main from '../../main.js';
import Template from './template.html';
import Styles from './styles.css';

export default main.component('datepicker', {
    template: Template,
    bindings: {
        date: '=',
        parseIso: '@',
        disabled: '@'
    },
    controller: function($scope, $timeout, $element, $document) {
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

        var self = this;
        self.show_calendar = false;
        self.today = new Date();
        self.visible_date = new Date();

        self.get_calendar_date = function() {
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
            return months[self.visible_date.getMonth()] + " " + self.visible_date.getFullYear();
        }

        self.get_month_days = function() {
            var d = new Date(self.visible_date);
            var days_n = d.getDaysInMonth();
            var days = [];
            for (var i = 0; i < days_n; i++) {
                days.push(i + 1);
            }
            return days;
        }

        self.get_empty_days = function() {
            var d = new Date(self.visible_date);
            d.setDate(1);
            var days_n = d.getDay();
            var days = [];
            for (var i = 0; i < days_n; i++) {
                days.push(i);
            }
            return days;
        }

        self.is_day_today = function(n) {
            if (self.visible_date.getMonth() !== self.today.getMonth())
                return false;
            if (self.visible_date.getFullYear() !== self.today.getFullYear())
                return false;
            if (n !== self.today.getDate())
                return false;

            return true;
        }

        self.is_day_selected = function(n) {
            if (!self.date)
                return;

            if (self.visible_date.getMonth() !== self.date.getMonth())
                return false;
            if (self.visible_date.getFullYear() !== self.date.getFullYear())
                return false;
            if (n !== self.date.getDate())
                return false;

            return true;
        }

        self.clear = function() {
            if (self.disabled)
                return;
            self.date = null;
            self.selected_day = null;
            self.selected_month = null;
            self.selected_year = null;
        }

        self.open_calendar = function() {
            if (self.show_calendar == true)
                return;
            if (self.date) {
                self.visible_date = new Date(self.date);
            } else {
                self.visible_date = new Date(self.today);
                if (self.selected_year)
                    self.visible_date.setFullYear(self.selected_year);
                if (self.selected_month)
                    self.visible_date.setMonth(self.selected_month - 1);
                }

            self.show_calendar = true;
        }

        self.toggle_calendar = function() {
            if (self.show_calendar == false) {
                self.open_calendar();
            } else {
                self.show_calendar = false;
            }
        }

        self.set_date = function(n) {
            if (self.disabled)
                return;

            self.date = new Date(self.visible_date);
            self.date.setDate(n);
            self.show_calendar = false;
        }

        self.change_month = function(n) {
            var m = self.visible_date.getMonth();
            var y = self.visible_date.getFullYear();

            m += n;

            if (m > 11) {
                m = 0;
                y += 1;
            }

            if (m < 0) {
                m = 11;
                y -= 1;
            }

            self.visible_date.setMonth(m);
            self.visible_date.setFullYear(y);
        }

        self.update_selected_date = function() {
            var temp_date = null;

            // Year
            if (self.selected_year) {
                if (self.selected_year > 9999)
                    self.selected_year = 9999;
                if (self.selected_year < 1000)
                    self.selected_year = 1000;
                }
            else {
                self.selected_year = "";
            }

            // Month
            if (self.selected_month) {
                if (self.selected_month > 12)
                    self.selected_month = 12;
                if (self.selected_month < 1)
                    self.selected_month = 1;
                }
            else {
                self.selected_month = "";
            }

            // Day
            if (self.selected_day) {
                if (self.selected_day > 31)
                    self.selected_day = 31;
                if (self.selected_day < 1)
                    self.selected_day = 1;
                }
            else {
                self.selected_day = "";
            }

            if (self.selected_month && self.selected_day && self.selected_year) {
                var d = new Date();
                d.setDate(1);
                d.setFullYear(self.selected_year);
                d.setMonth(self.selected_month - 1);
                var max = d.getDaysInMonth();

                if (self.selected_day > max) {
                    self.selected_day = "";
                } else {
                    d.setDate(self.selected_day);
                    temp_date = new Date(d);
                }
            }

            if (!temp_date || !self.date) {
                self.date = temp_date;
            } else {
                self.date.setFullYear(temp_date.getFullYear());
                self.date.setMonth(temp_date.getMonth());
                self.date.setDate(temp_date.getDate());
            }

            if (self.selected_year)
                self.visible_date.setFullYear(self.selected_year);
            if (self.selected_month)
                self.visible_date.setMonth(self.selected_month - 1);
            }

        $scope.$watch('$ctrl.date', function(newValue, oldValue) {
            if (self.date) {
                if (self.parseIso == "true" && typeof(self.date) == 'string') {
                    self.date = new Date(self.date);
                }
                self.selected_day = self.date.getDate();
                self.selected_month = self.date.getMonth() + 1;
                self.selected_year = self.date.getFullYear();
                self.update_selected_date();
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
                    self.show_calendar = false;
                }, 10);
            }
        }
    }
});
