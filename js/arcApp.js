function resetPage() {
    location.reload();
    return false;
}

let buttonVar1 = document.getElementById('right-angle-reset')
buttonVar1.addEventListener('click', resetPage)