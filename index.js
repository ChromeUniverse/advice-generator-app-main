async function handleClick() {

  // fetch advice
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  const { id, advice } = data.slip;
  
  const span = document.getElementById('advice-id');
  const content = document.getElementById('advice-content');

  span.innerText = id;
  content.innerText = `"${advice}"`;

}

handleClick();