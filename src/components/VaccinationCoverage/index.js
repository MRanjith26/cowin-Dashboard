// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationDaysData} = props

  return (
    <div className="details-container">
      <h1 className="title">Vaccination Coverage</h1>

      <BarChart
        data={vaccinationDaysData}
        width={1000}
        height={400}
        // margin={{top: 10, right: 30, left: 20, bottom: 5}}
      >
        <XAxis
          dataKey="vaccinationDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
          }}
        />
        <YAxis
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
          }}
        />
        <Legend
          //  css type style property for Legend in Charts
          iconType="wye"
          iconSize="15"
          wrapperStyle={{
            padding: 25,
            fontSize: '15px',
          }}
        />
        <Bar
          dataKey="doseOne"
          name="Dose 1"
          fill="#5a8dee"
          //  u can customize the corners of bar in bar graph with radius property
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="doseTwo"
          name="Dose 2"
          fill="#f54394"
          //  add round corners to bar
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
