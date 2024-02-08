// Write your code here
import './index.css'
import {PieChart, Pie, Cell, Legend, Tooltip} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationAgeData} = props
  console.log(vaccinationAgeData)

  return (
    <div className="details-container">
      <h1 className="title">Vaccination by age</h1>

      <PieChart height={300} width={1000}>
        <Pie
          data={vaccinationAgeData}
          startAngle={0}
          endAngle={360}
          innerRadius="35%"
          outerRadius="85%"
          dataKey="count"
        >
          <Cell name="18-44" fill="  #2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          //  change styles of icon ('line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye')
          iconType="circle"
          verticalAlign="bottom"
          layout="horizontal"
          // change the size of the icon
          iconSize="15"
          wrapperStyle={{
            padding: 20,
            fontSize: '17px',
          }}
        />
        <Tooltip />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
