const form = document.querySelector('#form');
// const key = document.querySelector('#key');
const sel = document.querySelector('#sel');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    sessionStorage.setItem(form.key.value, form.value.value);

    sel.innerHTML += `<option>${form.key.value}</option>`;
    form.reset();
})

sel.addEventListener('change', () => {
    document.querySelector('#info-value').textContent = sessionStorage.getItem(sel[sel.selectedIndex].textContent);
    

});