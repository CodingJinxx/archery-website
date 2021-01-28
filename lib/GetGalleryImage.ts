import { diffieHellman } from "crypto";
import { pathToFileURL } from "url";

function GetGalleryImages() {
    const fg = require('fast-glob');
    const path = require('path');

    const images : string[] = fg.sync('public/images/gallery/*', [{

    }] )

    for (let index = 0; index < images.length; index++) {
        images[index] = images[index].replace('public', '');
        
    }

    return images;
}

export default GetGalleryImages;