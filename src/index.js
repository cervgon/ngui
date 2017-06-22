import angular from 'angular';

import cssReset from './css/reset.css';
import cssCore from './css/core.css';
import cssCoreButton from './css/core_button.css';
import cssGrid from './css/grid.css';
import cssAlign from './css/align.css';
import cssColors from './css/colors.css';
import cssDisplay from './css/display.css';
import cssFontSize from './css/fontsize.css';
import cssFontWeight from './css/fontweight.css';
import cssGradients from './css/gradients.css';
import cssIcons from './css/icons.css';
import cssLayout from './css/layout.css';
import cssLineHeight from './css/lineheight.css';
import cssMargins from './css/margins.css';
import cssMarkDown from './css/markdown.css';
import cssMessages from './css/messages.css';
import cssPaddings from './css/paddings.css';
import cssButton from './css/button.element.css';
import cssLabel from './css/label.element.css';
import cssFormCentered from './css/formcentered.element.css';
import cssDropdownHover from './css/dropdownHover.element.css';
import cssTable from './css/table.element.css';

import datepicker from './components/datepicker';
import dropdown from './components/dropdown';
import hamburger from './components/hamburger';
import list from './components/list';
import loader from './components/loader';
import modal from './components/modal';
import pagination from './components/pagination';
import progbar from './components/progbar';
import radar from './components/radar';
import toggle from './components/toggle';
import tooltip from './components/tooltip';

export {
    datepicker,
    dropdown,
    hamburger,
    list,
    loader,
    modal,
    pagination,
    progbar,
    radar,
    toggle,
    tooltip
}

export default angular
    .module('ngui', [
        datepicker,
        dropdown,
        hamburger,
        list,
        loader,
        modal,
        pagination,
        progbar,
        radar,
        toggle,
        tooltip
    ])
    .name;
