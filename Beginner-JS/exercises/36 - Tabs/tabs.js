console.log('ya ya wes we get it.. IT WORKS!');

// Grab page elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// convert to array so that Array.find() method works
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach(panel => { panel.hidden = true });

  // mark all tabs as unselected
  tabButtons.forEach(button => {
    button.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  const { id } = event.currentTarget;
  /*
  Method #1
  // find the associated tabPanel and show it
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
   */

  // Method #2
  //console.log(tabPanels);
  tabPanels.find(function(panel) {
    if (panel.getAttribute('aria-labelledby') === id) {
      panel.hidden = false;
    }
  });
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));