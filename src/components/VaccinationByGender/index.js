// Write your code here
import './index.css'
import {PieChart, Pie, Cell, Legend, Tooltip} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationGenderData} = props

  return (
    <div className="details-container">
      <h1 className="title">Vaccination by gender</h1>

      <PieChart height={300} width={1000}>
        <Pie
          data={vaccinationGenderData}
          startAngle={0}
          endAngle={180}
          innerRadius="35%"
          outerRadius="85%"
          dataKey="count"
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          //  change styles of icon ('line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye')
          iconType="cross"
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
export default VaccinationByGender
