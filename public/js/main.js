const submitButton = document.getElementById('submitButton');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real = document.getElementById('temp_real');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
	event.preventDefault();
	let cityVal = cityName.value;
     if(cityVal === ""){
            city_name.innerText ='Please Enter Right City Name ';
            datahide.classList.add('data-hide');
     }else{
     	try{
     	
     	let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4cc1e976645b65548fcc01a594aeb531`;
     	const response = await fetch(url);
     	
     	const data = await response.json();
     	//console.log(data);
     	const arrData = [data];
     	city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
     	temp_real.innerText = arrData[0].main.temp;
       // temp_status.innerText = arrData[0].weather[0].main;
        const tempmod=arrData[0].weather[0].main;
      //  console.log(tempmod);

      
        if(tempmod==="Clear")
        {
        	temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        } else if(tempmod==="Clouds")
        {
        	temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

        }else if(tempmod==="Rain")
        {
             temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
        }else {
        	temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }

           datahide.classList.remove('data-hide');


     }catch{
     	city_name.innerText ='Enter city name Properly';
     	  datahide.classList.add('data-hide');

     }
     }

}

submitButton.addEventListener('click',getInfo);