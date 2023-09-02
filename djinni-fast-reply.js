// ==UserScript==
// @name         Djinni Fast Reply
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modify as you wish
// @author       Ivan L.
// @match        https://djinni.co/my/inbox/*
// @icon         https://www.google.com/s2/favicons?domain=djinni.co
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const yesMessageEn = 'Hi!\nPlease specify following:\n1. Hiring company location;\n2. Full tech stack and responsibilities;\n3. Motivation.'
    const yesMessageRu = 'День добрый!\nПожалуйста укажите:\n1. Локацию нанимающей компании;\n2. Полный стек технологий и обязанностей;\n3. Мотивацию.'
    const yesMessageUa = 'Доброго дня!\nБудь ласка вкажіть:\n1. Локацію компанії що наймає;\n2. Повний стек технологій на обов\'язків;\n3. Мотивацію.'
    const noMessageEn = 'Hi!\nI\'m not interested this proposal.'
    const noMessageRu = 'День добрый!\nВаше предложение меня не заинтересовало.'
    const noMessageUa = 'Доброго дня!\nВаша пропозиція мене не зацікавила.'

    let textarea = document.querySelector('#message')
    textarea.addEventListener('change', function() {
        switch(textarea.value) {
            case 'yes': {
                textarea.value = yesMessageEn
                break
            }
            case 'да': {
                textarea.value = yesMessageRu
                break
            }
            case 'так': {
                textarea.value = yesMessageUa
                break
            }
            case 'no': {
                textarea.value = noMessageEn
                break
            }
            case 'нет': {
                textarea.value = noMessageRu
                break
            }
            case 'ні': {
                textarea.value = noMessageUa
                break
            }
        }
    })
})();
