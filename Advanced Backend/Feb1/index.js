let grandparent = document.getElementById('grandparent');
grandparent.addEventListener('click', () => {
    console.log('Grandparent is clicked!!');
})
let parent = document.getElementById('parent');
parent.addEventListener('click', () => {
    console.log('Parent is clicked!!');
})
let child = document.getElementById('child');
child.addEventListener('click', () => {
    console.log('Child is clicked!!');
})