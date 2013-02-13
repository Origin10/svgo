'use strict';

/**
 * Remove raster images references in <image>.
 *
 * @see https://bugs.webkit.org/show_bug.cgi?id=63548
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.removeRasterImages = function(item) {

    if (
        item.isElem('image') &&
        item.hasAttr('xlink:href') &&
        /(\.|image\/)(jpg|png)/.test(item.attr('xlink:href').value)
    ) {
        return false;
    }

};
