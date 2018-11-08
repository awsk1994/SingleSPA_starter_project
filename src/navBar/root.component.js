import React from 'react'

export default class NavBar extends React.Component{
    constructor() {
        super();
        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(url){
        console.log("url: " + url);
        window.history.pushState(null, null, url);
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand">Navbar</span>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/")}>Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/angularJS")}>AngularJS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/angularJS/notes")}>Notes(angularJS)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/angularJS/notes/meeting")}>Meeting Notes(angularJS)</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/react")}>React</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/react/memos")}>Memos(react)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => this.navigateTo("/react/emails")}>Emails(react)</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}