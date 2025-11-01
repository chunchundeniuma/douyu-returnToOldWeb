// ==UserScript==
// @name         douyu-returnToOldweb
// @namespace    ''
// @match        *://www.douyu.com/beta/*
// @grant        none
// @version      1.0
// @author       chunchundeniuma
// @description  11/1/2025, 17:24:28 PM
// @run-at       document-start
// @grant        window.onurlchange
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/chunchundeniuma/douyu-returnToOldVweb/refs/heads/master/douyu-returnToOldweb.user.js
// @supportURL   https://www.github.com/chunchundeniuma/douyu-returnToOldweb/issues
// ==/UserScript==

"use strict";

function ReturnToOldWeb() {
    localStorage.setItem("newWebLive", "A");
    window.location.href = window.location.href.replace("/beta", "");
}

ReturnToOldWeb();
