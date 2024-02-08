// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'LOADING',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: '',
    vaccinationDaysData: [],
    vaccinationAgeData: [],
    vaccinationGenderData: [],
  }

  componentDidMount() {
    this.getVaccineData()
  }

  getVaccineData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(apiUrl)

    if (response.ok === true) {
      const data = await response.json()

      //  updating the response data to camelCase
      const updatedData = {
        last7DaysData: data.last_7_days_vaccination,
        ageData: data.vaccination_by_age,
        genderData: data.vaccination_by_gender,
      }

      const {last7DaysData} = updatedData

      //   updating the vaccination last 7 days data to camelCase
      const daysUpdatedData = last7DaysData.map(eachData => ({
        vaccinationDate: eachData.vaccine_date,
        doseOne: eachData.dose_1,
        doseTwo: eachData.dose_2,
      }))

      // updating the state with last 7 days vaccination, age data, gender data
      const {ageData, genderData} = updatedData

      this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationDaysData: daysUpdatedData,
        vaccinationAgeData: ageData,
        vaccinationGenderData: genderData,
      })
    } else if (response.ok === false) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="fail-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="fail-text">Something went wrong</h1>
    </div>
  )

  renderDashboardsView = () => {
    const {
      vaccinationDaysData,
      vaccinationGenderData,
      vaccinationAgeData,
    } = this.state

    return (
      <>
        <VaccinationCoverage vaccinationDaysData={vaccinationDaysData} />
        <VaccinationByGender vaccinationGenderData={vaccinationGenderData} />
        <VaccinationByAge vaccinationAgeData={vaccinationAgeData} />
      </>
    )
  }

  renderVaccinationsDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDashboardsView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <nav className="nav-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <h1 className="logo-title">Co-WIN</h1>
          </nav>
          <h1 className="main-title">coWIN Vaccination in India</h1>
          <div className="dashboards-container">
            {this.renderVaccinationsDetailsView()}
          </div>
        </div>
      </div>
    )
  }
}
export default CowinDashboard
