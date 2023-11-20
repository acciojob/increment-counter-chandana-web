//your JS code here. If required.
const counttext= document.getElementById('counter');
const btn=document.getElementById('incrementBtn');
let count=0;
function increment() {
	count++;
	counttext.textContent= count;
}
btn.addEventListener('click', increment);