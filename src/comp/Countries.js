import React,{useEffect,useState} from 'react'
import { Navbar } from './Navbar';
import '../App.css'
import RingLoader from "react-spinners/RingLoader"

const url ='https://restcountries.com/v2/continent/asia'


const Countries = () => {
    const [count, setCountries] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchdata = () =>{
      setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((count) => {
        setCountries(count);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    }
    
const refresh = () => {
      fetchdata();
}
  
    useEffect(()=>{

        fetchdata()
        
    }, []);

    if (loading) {
      return (
        <div className='loaddata'>
          <RingLoader/>
        </div>
    );
      }
    
      if (error || !Array.isArray(count)) {
        return <p>There was an error loading your data!</p>;
      }
      <Navbar refresh={refresh}/>


    return (
        <>      
                  <div class="main">
                    <ul class="cards">
                      
                        
            {
                count.map(info =>{
                    let bor = info.borders;
                    for(var i = 0; i < 2; i++){
                        bor = ' '+bor;
                    }
                    let languages = "";
                    
                    info.languages.map(l => languages += l.name + " ");
      
                    return <li class="cards_item" key={Math.random()}>
                      <div className="card">
                      <div class="card_image">
                      <img src={info.flags[0]} alt={info.name}/></div>
                      <div className="card_content">
                        <h3 >Country : {info.name}</h3>
                        <h4 class="card_title">Capital : {info.capital}</h4>
                        <h4 class="card_text">Region : {info.region}</h4>
                        <h4 class="card_text">Population : {info.population}</h4>
                        <p class="text-muted">Languages : {languages}</p>
                        <p class="text-muted">Borders : {bor}</p>
                        
                        </div>
                      </div>
                    </li>

                    
                    
                })
            }
            
                </ul>
                  
                </div>
                
             
                 
              
        </>
    );
}

export default Countries;
