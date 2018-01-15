function component() {
    var ele = document.createElement('div');
    ele.innerHTML = 'Hello Lion1';
    return ele
}
document.body.appendChild(component())