import angular from 'angular';

import cssReset from './css/reset.scss';
import cssCore from './css/core.scss';
import cssCoreNight from './css/coreNight.scss';
import cssCoreButton from './css/core_button.scss';
import cssCoreButtonNight from './css/core_buttonNight.scss';
import cssGrid from './css/grid.scss';
import cssAlign from './css/align.scss';
import cssColors from './css/colors.scss';
import cssColorsNight from './css/colorsNight.scss';
import cssDisplay from './css/display.scss';
import cssFontSize from './css/fontsize.scss';
import cssFontWeight from './css/fontweight.scss';
import cssGradients from './css/gradients.scss';
import cssIcons from './css/icons.scss';
import cssLayout from './css/layout.scss';
import cssLineHeight from './css/lineheight.scss';
import cssMargins from './css/margins.scss';
import cssMarkDown from './css/markdown.scss';
import cssMessages from './css/messages.scss';
import cssPaddings from './css/paddings.scss';
import cssButton from './css/button.element.scss';
import cssButtonNight from './css/button.elementNight.scss';
import cssLabel from './css/label.element.scss';
import cssFormCentered from './css/formcentered.element.scss';
import cssDropdownHover from './css/dropdownHover.element.scss';
import cssTable from './css/table.element.scss';
import cssTableNight from './css/table.elementNight.scss';

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
