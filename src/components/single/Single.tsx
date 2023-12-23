





import './single.scss'
import { Line, XAxis, YAxis,CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import React from 'react'

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Single(props:Props) {

    type Props = {
        id: number;
        img?: string;
        title: string;
        info: object;
        chart?: {
            dataKeys: {name: string; color: string}
            data: object[];
        };
        activities?: {time: string; text: string}
    }
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                   {props.img && <img src={props.img} alt="" />} 
                    <h1>{props.title}</h1>
                    <button>Update</button>
                </div>
                <div className="details">
                   {Object.entries(props.info).map((item) => (
                     <div className="item" key={item[0]}>
                        <span className="itemTitle">{item[0]}</span>
                        <span className="itemValue">{item[1]}</span>
                     </div>
                   ))}
                </div>
            </div>
            <hr/>
            {props.chart && (
                 <div className="chart">
                 <ResponsiveContainer width="100%" height="100%">
                     <LineChart
                         width={500}
                         height={300}
                         data={props.chart.data}
                        
                         >
                         {/* <CartesianGrid strokeDasharray="3 3" /> */}
                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <Legend />
                         {props.chart.dataKeys.map((dataKey)=>(
                             <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color}  dot={false} />
                         ))}
                        
                     </LineChart>
                 </ResponsiveContainer>
                 </div>
            )}
           
        </div>
        <div className="activities">
            <h2>Latest Activities</h2>
            {props.activities && 
            <ul>
                {props.activities.map(activity=>(
                <li key={activity.text}>
                    <div className='nana'>
                        <p>{activity.text}</p>
                        <time>{activity.time}</time>
                    </div>
                </li>
                ))}
                
            </ul>
            }
            
        </div>
    </div>
  )
}

export default Single