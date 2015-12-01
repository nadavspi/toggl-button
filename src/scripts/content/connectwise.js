/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.gwt-appointment-panel .project:not(.toggl)', {observe: true}, renderConnectwiseButton);
togglbutton.render('.gwt-appointment-panel .service:not(.toggl)', {observe: true}, renderConnectwiseButton);

function renderConnectwiseButton(elem) {
  var link,
    description = $('.content .gwt-Label', elem).textContent,
    project = $('.title .gwt-Label', elem).textContent;

  link = togglbutton.createTimerLink({
    className: 'connectwise',
    description: description,
    projectName: project
  });

  link.setAttribute('style', 'position: absolute; top: 0; right: 5px;');
  elem.querySelector('.wrapper > div').appendChild(link);
}
