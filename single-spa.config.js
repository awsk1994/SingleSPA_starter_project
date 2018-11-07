// single-spa.config.js
import {registerApplication, start} from 'single-spa';

registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
start();