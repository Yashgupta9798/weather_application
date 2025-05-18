const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const submitBtn=document.getElementById("submitBtn");

const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer")


const getInfo = async(event) =>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval===""){
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ba5947824121d34696bb0149878c08c9`;
            const response=await fetch(url);
            const data= await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
              }
              else if(tempMood=="Rainy"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
              }
              else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
              }
              else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
              }
              datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`Plz enter the City Properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);