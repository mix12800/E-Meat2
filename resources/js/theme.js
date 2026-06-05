/**
 * Carneshop theme dependencies.
 *
 * jquery-global.js MUST be first — jQuery plugins attach to window.jQuery on import.
 */
import jQuery from './jquery-global.js';

import 'popper.js';
import 'bootstrap';
import WOW from 'wow.js';

import 'owl.carousel';
import 'jquery-validation';
import 'jquery.appear';
import mousewheelFactory from 'jquery-mousewheel';
import mCustomScrollbarFactory from 'malihu-custom-scrollbar-plugin';

mousewheelFactory(jQuery);
mCustomScrollbarFactory(jQuery, window, document);
import '@fancyapps/fancybox';
import 'jquery-ui/dist/jquery-ui.min.js';
import 'bxslider/dist/jquery.bxslider.js';
import 'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js';
import 'magnific-popup/dist/jquery.magnific-popup.js';

import './vendor/pagenav.js';
import './vendor/nav-tool.js';
import './vendor/script.js';

window.WOW = WOW;

/**
 * Re-init theme after Vue renders the main page markup.
 */
export function initCarneshopTheme() {
    if (typeof window.initCarneshopDom === 'function') {
        window.initCarneshopDom();
    }

    if (typeof WOW !== 'undefined') {
        new WOW({ mobile: false }).init();
    }
}

window.initCarneshopTheme = initCarneshopTheme;
