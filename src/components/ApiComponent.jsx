import '../styles/ApiComponent.css';
import '../styles/App.css';
import {useState, useEffect} from 'react';

export default function ApiComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
          const jsonData = await response.json();
          console.log(jsonData);
          setData(jsonData.bodies);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <>
        <div>
          <h3 className="Roboto">Planets</h3>
          <button className="Roboto form-btn" type="submit">
          <div className="button">
            <p className="form-btn-txt">Retreive Data</p>
          </div>
          </button>
        </div>
        <div>
          <ul>
            {data.map(body => (
              <li key={body.id}>
                <strong>{body.englishName}</strong> (ID: {body.id})
                {body.mass && (
                  <p>Mass: {body.mass.massValue} x 10^{body.mass.massExponent}</p>
                )}
                {body.vol && (
                  <p>Volume: {body.vol.volValue} x 10^{body.vol.volExponent}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </>
      );
  }