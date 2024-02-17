function showTab(tabIndex) {
    const tabs = document.querySelectorAll('#tabMenu a');
    const contents = document.querySelectorAll('.tab-content');
    const indicator = document.getElementById('indicator');

    tabs.forEach((tab, index) => {
      tab.classList.toggle('active', index === tabIndex);
    });

    contents.forEach((content, index) => {
      content.classList.toggle('active', index === tabIndex);
    });

    const tabWidth = tabs[0].offsetWidth;
    const offset = tabIndex * tabWidth;
    indicator.style.left = offset + 'px';
  }