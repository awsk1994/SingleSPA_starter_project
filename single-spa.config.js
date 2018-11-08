// single-spa.config.js
import {registerApplication, start} from 'single-spa';
registerApplication('navBar', () => import('./src/navBar/navBar.app.js').then(module => module.navBar), () => true);
registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/");

registerApplication('angularJS', () => import ('./src/angularJS/angularJS.app.js'), () => location.pathname ===  "/angularJS");
registerApplication('notes', () => import ('./src/angularJS/angularJS.app.js'), () => location.pathname === "/angularJS/notes");
registerApplication('meeting', () => import ('./src/angularJS/angularJS.app.js'), () => location.pathname === "/angularJS/notes/meeting");

registerApplication('react', () => import ('./src/react/react.app.js'), () => location.pathname === "/react");
registerApplication('memos', () => import ('./src/react/react.app.js'), () => location.pathname === "/react/memos");
registerApplication('emails', () => import ('./src/react/react.app.js'), () => location.pathname === "/react/emails");

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}