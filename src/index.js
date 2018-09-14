import angular from 'angular';

import cssReset from './css/reset.css';
import cssCore from './css/core.css';
import cssCoreNight from './css/coreNight.css';
import cssCoreButton from './css/core_button.css';
import cssCoreButtonNight from './css/core_buttonNight.css';
import cssGrid from './css/grid.css';
import cssAlign from './css/align.css';
import cssColors from './css/colors.css';
import cssColorsNight from './css/colorsNight.css';
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
import cssButtonNight from './css/button.elementNight.css';
import cssLabel from './css/label.element.css';
import cssFormCentered from './css/formcentered.element.css';
import cssDropdownHover from './css/dropdownHover.element.css';
import cssTable from './css/table.element.css';
import cssTableNight from './css/table.elementNight.css';

import bgloader from './components/bgloader';
import chartLine from './components/chartLine';
import datepicker from './components/datepicker';
import dropdown from './components/dropdown';
import hamburger from './components/hamburger';
import list from './components/list';
import loader from './components/loader';
import masonry from './components/masonry';
import modal from './components/modal';
import pagination from './components/pagination';
import pie from './components/pie';
import progbar from './components/progbar';
import radar from './components/radar';
import scrollable from './components/scrollable';
import tabs from './components/tabs';
import toggle from './components/toggle';
import tooltip from './components/tooltip';

export {
    bgloader,
    chartLine,
    datepicker,
    dropdown,
    hamburger,
    list,
    loader,
    masonry,
    modal,
    pagination,
    pie,
    progbar,
    radar,
    scrollable,
    tabs,
    toggle,
    tooltip
}

export default angular
    .module('ngui', [
        bgloader,
        chartLine,
        datepicker,
        dropdown,
        hamburger,
        list,
        loader,
        masonry,
        modal,
        pagination,
        pie,
        progbar,
        radar,
        scrollable,
        tabs,
        toggle,
        tooltip
    ])
    .name;
