console.log('ya ya wes we get it.. IT WORKS!');

// Grab page elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');



tabButtons.forEach(function(element) {
  element.addEventListener('click', handleTabClick);
});

function handleTabClick(event) {
  // mark all tabs as unselected
  tabButtons.forEach(function(tab) {
    tab.attributes['aria-selected'].value = 'false';
  });
  // mark the clicked tab as selected
  event.originalTarget.attributes['aria-selected'].value = 'true';

  // find topic for the clicked tab
  const tabTopic = event.originalTarget.attributes['id'].value;

  tabPanels.forEach(panel => {
    // hide all tab panels
    panel.hidden = true;

    // find the associated tabPanel and show it if topic matches tab topic
    if (tabTopic === panel.attributes['aria-labelledby'].value) {
      panel.hidden = false;
    }
  });
}