let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
        arr[i++] = elem_arr.textContent;
    }
    return arr;
  }

fetch('xml/movie_schedule.xml')
  .then(res => res.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const names = xmlDoc.getElementsByTagName('name');
    const ages = xmlDoc.getElementsByTagName('age');
    const languages = xmlDoc.getElementsByTagName('language');
    const films = xmlDoc.getElementsByTagName('film');
    const durations = xmlDoc.getElementsByTagName('duration');
    const limits = xmlDoc.getElementsByTagName('limit');

    let names_arr = [], ages_arr = [], languages_arr = [],
    durations_arr = [], limits_arr = [], films_arr = [];
    names_arr = table(names, names_arr);
    ages_arr = table(ages, ages_arr);
    languages_arr = table(languages, languages_arr);
    durations_arr = table(durations, durations_arr);
    limits_arr = table(limits, limits_arr);
    films_arr = table(films, films_arr);

    for (let i = 0; i < names_arr.length; i++) {
     
        document.querySelector('.films').insertAdjacentHTML("beforeend",
  
              `<div class="film">
              <h3>${names_arr[i]}</h3>
              <p class="year_loc">${ages_arr[i]}/${languages_arr[i]}</p>
              <div class="img_film">
                  <div class="info">
                      <p class="time">${durations_arr[i]}</p>
                      <p class="data">${limits_arr[i]}</p>
                      <button class="buy">Купить</button>
                  </div>
              </div>
          </div>`
  
        );

        document.querySelectorAll('.img_film')[i].style.background = `url('${films_arr[i]}')`;
      }
  })