// create toggle for team
function StyleProp(ele,prop) {
    return window.getComputedStyle(ele,null).getPropertyValue(prop);
}

function create() {
    let toggle = document.getElementById('create-item');
    let checkToggle = StyleProp(toggle,'display');
    if(checkToggle == 'none'){
        toggle.style.display = 'contents';
    } else {
        toggle.style.display = 'none';
    }
}

// add team on list
function myitem(){
    let item = document.getElementById('item').value;
    let list = document.getElementById('team-ul');
    list.innerHTML += `<li class='team-li'>${item}</li>`;
    document.getElementById('item').value = '';
}

// create toggle for folder
function addfolder(){
    let toggle = document.getElementById('folder-item');
    let checkToggle = window.getComputedStyle(toggle,null).getPropertyValue('display');
    if(checkToggle == 'none'){
        toggle.style.display = 'contents';
    } else {
        toggle.style.display = 'none';
    }
}

// add team on list
function myfolder(){
    let folder = document.getElementById('f-item').value;
    let lists = document.getElementById('folder-list');
    lists.innerHTML += `<div class="folder-list-name">
    <span class="material-symbols-outlined">
        folder
    </span>
    <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${folder}
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">${folder}</a></li>
        </ul>
    </div>
</div>`;
    document.getElementById('f-item').value = '';
}


// product search
function search() {
    var input, filter, ul, li, a ,i ,txtvalue;
    input = document.getElementById('search-product');
    filter = input.value.toUpperCase();
    ul = document.getElementById('product-ul-list');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0].getElementsByTagName("p")[0];
        txtvalue = a.textContent || a.innerHTML;
        if(txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// creating toggle for menu

function style(ele,prop) {
    return window.getComputedStyle(ele,null).getPropertyValue(prop);
}

function setting() {
    let toggle = document.getElementsByTagName('aside')[0];
    let checkToggle = style(toggle,'display');
    if(checkToggle == 'none'){
        toggle.style.display = 'contents';
    } else {
        toggle.style.display = 'none';
    }
}