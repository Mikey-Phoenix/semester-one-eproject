document.querySelector('.search').addEventListener('input', filterlist);

function filterlist() {
    const searchInput =  document.querySelector('.search');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.gridItem');

    listItems.forEach((item)=>{
        let text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        };
    });
};

const searchtn = document.querySelector('.search-icon');

searchtn.addEventListener('click', (event)=>{
    event.preventDefault()
    const el = document.getElementById(searchtn.getAttribute('data-link'));
    el.scrollIntoView({behavior:'smooth', block: 'start'})
})