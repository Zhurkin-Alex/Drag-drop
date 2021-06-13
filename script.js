const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart (e){
e.target.classList.add('hold')
setTimeout(()=>{
  e.target.classList.add('hide')
},0)

}

function dragend (e){
  // e.target.classList.remove('hold', 'hide')
  e.target.className = 'item'
}

placeholders.forEach(el=>{
  // console.log(el);
  // вызывает когда элемент находится над placeholder, куда мы можем поместить сам эедемент
  el.addEventListener('dragover',dragover)
  // заходим на территорию конкретного placeholder
  el.addEventListener('dragenter',dragenter)
  // когда перетащили и вышли от туда
  el.addEventListener('dragleave',dragleave)
  // когда отпустили
  el.addEventListener('drop',dragdrop)

})
function dragover(e){
e.preventDefault()
}
function dragenter(e){
e.target.classList.add('hovered')
}
function dragleave(e){
e.target.classList.remove('hovered')
}
function dragdrop(e){
e.target.classList.remove('hovered')
e.target.append(item)
}
