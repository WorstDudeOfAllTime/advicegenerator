const adviceNum = document.getElementById('advice-num');
const adviceCol = document.getElementById('advice');
const floater = document.getElementById('floater');

const advice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice') 
  const data = await res.json();
  adviceNum.innerHTML = `ADVICE #${data.slip.id}`
  adviceCol.innerHTML = `"${data.slip.advice}"`;
};
advice();

floater.addEventListener('click', ()=>{
    location.reload();
});
