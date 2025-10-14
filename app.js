const toggleButton = document.getElementById('toggle-btn');
const sidebarColl = document.getElementsByClassName('sidebar');

let toggleSidebar = (button) => {
    // TODO: implement 'close' class
    let sidebar = sidebarColl[0];
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
}

let toggleSubMenu = (button) => {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}