import React from 'react';
import { PieChart, Pie} from 'recharts';


const DonutChart = ({price,estReturn}) => {
 console.log("est",estReturn)
 console.log(price)
    const data = [
        {name: 'Estd. returns', amount: estReturn,fill: "#989dfa" },
        {name: 'Invested Amount', amount: price,fill: "#555df8" },
      ];

  return (
      <PieChart width={500} height={500}>
          <Pie data={data} dataKey="amount" outerRadius={250} innerRadius={150} fill="#fff"  />
        </PieChart>
  )
}

export default DonutChart