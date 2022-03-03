//API key
const API ='b3bd0741853967fecab9665c475bc10c'
// setting inner text to the UI
const setInnerText = (id, data) => {
    const htmlTag = document.getElementById(id);
    htmlTag.innerText = data;
};
const loadData = () => {
    const cityName = document.getElementById('input').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`)
    // fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${API}`)
    .then(response => response.json())
    .then(data => getData(data))
};

const getData = data =>{
    console.log(data);
    if (data.cod === '404') {
        alert('Could not find the City, Please Try again and check your spelling.');
    }else{
        setInnerText('temparature', data.main.temp)
        setInnerText('feelsLike', data.main.feels_like)
        setInnerText('city', data.name)
        setInnerText('country', data.sys.country)
        setInnerText('cloud', data.weather[0].main)
        const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const image = document.getElementById('img')
        image.setAttribute('src', url)
    }
   
    
}