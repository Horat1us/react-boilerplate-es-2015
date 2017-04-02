/**
 * Created by horat1us on 3/29/17.
 */
import 'bootstrap';

import React from 'react';
import {render} from 'react-dom';
import Layout from 'components/Layout';

const rootId = 'content-overlay';

const contentOverlay = document.getElementById(rootId);
if (contentOverlay) {
    render(<Layout/>, contentOverlay);
} else {
    console.error("Unable to find element #" + rootId);
}