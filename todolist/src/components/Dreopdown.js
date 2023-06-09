import React from 'react';


function Dreopdown() {
  // const [prt, setPrt] = useState([]);

  const contries = [
    {
      name: "India",
      value: "In",
      city: ["Delhi", "Mumbai"],
    },
    {
      name: "Chaina",
      value: "CN",
      city: ["Honkong", "Beeging"],
    },
    {
      name: "Amerika",
      value: "AM",
      city: ["Newyork", "Wosinton"],
    },
  ];

  let data = [10, 20, 7, 50, 1, 100];

  return (
    <div className="app">

      <select>
        {contries.map((item, index) => {
          return (
          
              <option key={index}>
                {item.name}

                <select>
                  {item.city.map((city, i) => (
                    <option key={i}>{city}</option>
                  ))}
                </select>
              </option>
           
          );
        })}
      </select>

      {data.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}

    </div>
  );
}

export default Dreopdown;
