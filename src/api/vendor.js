/* This file contains references to the vendor libraries
we're using in this project. This is used by Webpack
in the production build only. A seperate bundle for vendor
code is useful since it's unlikely to change as ofetn
as the applications code. So all the libraries we reference
here will be written to vendor.js so they can be
cached until one of them change. So baiscally, this avoid
customers having to download a huge JS file anytime a line
of code changes. They only have to download vendor.js when 
a vendor library changes whcih should be less frequent.
Any files that aren't reference here will be bundled into
main.js for the production build. */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';