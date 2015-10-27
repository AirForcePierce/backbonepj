
function HeroTemplate(data) {
  return `
    <li> <img src="${data.Image}"> ${data.Name} is from the ${data.Universe}</li>
  `;
}

export default HeroTemplate;
