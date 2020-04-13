import  React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            population:'',
            timeToElapse:'',
            reportedCases:'',
            totalHospitalBeds: '',
            periodType:'days'
        }
    }
    

    handleChange = (event) => {
        this.setState({
            population: event.target.value,
        })
    }
    handleChange2 = (event) => {
        this.setState({
            timeToElapse:event.target.value,
        })
    }
    handleChange3 = (event) => {
        this.setState({
            reportedCases: event.target.value,
        })
    }
    handleChange4 = (event) => {
        this.setState({
            totalHospitalBeds:event.target.value
        })
    }
    handleSelectChange = (event) => {
        this.setState({
            periodType:event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const data = this.state;
        //console.log(data)
        alert(`${this.state.population} ${this.state.timeToElapse} ${this.state.reportedCases} ${this.state.totalHospitalBeds} ${this.state.periodType}`)
    }
    
    render(){
        const impact = {};
        const severeImpact = {};
        const displayData = (input) => {
            const impactTotal = input.reportedCases * 10;
            const severeImpactTotal = input.reportedCases * 50;
            let timetoElapse = input.timeToElapse;
            const hospitalbeds = input.totalHospitalBeds;
            const averageDailyIncome = input.region.avgDailyIncomeInUSD;
            const averageDailyIncomePopulation = input.region.avgDailyIncomePopulation;
          
            if (input.periodType === 'months') {
              timetoElapse = input.timeToElapse * 30;
            } else if (input.periodType === 'weeks') {
              timetoElapse = input.timeToElapse * 7;
            }
            const currentlyInfectedImpact = impactTotal * (2 ** Math.trunc(timetoElapse / 3));
            const currentlyInfectedSevere = severeImpactTotal * (2 ** Math.trunc(timetoElapse / 3));
            const severeCasesByRequestedTimeImpact = (15 / 100) * currentlyInfectedImpact;
            const numberofhospitalbeds = Math.trunc(hospitalbeds * (35 / 100));
            const hospitalBedsByRequestedTimeImpact = numberofhospitalbeds
            - (severeCasesByRequestedTimeImpact - 1);
            const casesForICUByRequestedTimeImpact = Math.trunc((5 / 100) * currentlyInfectedImpact);
            const casesForVentilatorsByRequestedTimeImpact = Math.trunc((2 / 100) * currentlyInfectedImpact);
            const severeCasesByRequestedTimeSevere = (15 / 100) * currentlyInfectedSevere;
            const hospitalBedsByRequestedTimeSevere = numberofhospitalbeds
            - (severeCasesByRequestedTimeSevere - 1);
            const casesForICUByRequestedTimeSevere = Math.trunc((5 / 100) * currentlyInfectedSevere);
            const casesForVentilatorsByRequestedTimeSevere = Math.trunc((2 / 100) * currentlyInfectedSevere);
            const dollarsInFlightImpact = Math.trunc((currentlyInfectedImpact
              * averageDailyIncomePopulation * averageDailyIncome) / timetoElapse);
            const dollarsInFlightSevere = Math.trunc((currentlyInfectedSevere
              * averageDailyIncomePopulation * averageDailyIncome) / timetoElapse);
          
            impact.currentlyInfected = impactTotal;
            impact.infectionsByRequestedTime = currentlyInfectedImpact;
            impact.severeCasesByRequestedTime = severeCasesByRequestedTimeImpact;
            impact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTimeImpact;
            impact.casesForICUByRequestedTime = casesForICUByRequestedTimeImpact;
            impact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTimeImpact;
            impact.dollarsInFlight = dollarsInFlightImpact;
            severeImpact.currentlyInfected = severeImpactTotal;
            severeImpact.infectionsByRequestedTime = currentlyInfectedSevere;
            severeImpact.severeCasesByRequestedTime = severeCasesByRequestedTimeSevere;
            severeImpact.hospitalBedsByRequestedTime = hospitalBedsByRequestedTimeSevere;
            severeImpact.casesForICUByRequestedTime = casesForICUByRequestedTimeSevere;
            severeImpact.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTimeSevere;
            severeImpact.dollarsInFlight = dollarsInFlightSevere;
          };
          const covid19ImpactEstimator = (data) => {
              data = [{
                data_population: this.state.reportedCases,
                data_time_to_elapse: this.state.timetoElapse,
                data_reported_cases: this.state.reportedCases,
                data_total_hospital_beds: this.state.totalHospitalBeds,
                data_period_type: this.state.periodType
              }]
            // data = calculateDataInput(2747, 38, 'days', 678874, 4, 0.73);
            displayData(data);
            const result = { data, impact, severeImpact };
            return result;
          };
        console.log(this.state.population);
        return(
            <form class='formtwo' id="form" onSubmit={this.handleSubmit} >
            <div class = "form-control">
                <label for="data-population">Population</label>
                <input type="text" id="data-population" value= {this.state.population} onChange={this.handleChange} placeholder="data-population" />
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <div class = "form-control">
                <label for="datatimetoelapse">Time To Elapse</label>
                <input type="text" id="data-time-to-elapse" value = {this.state.timeToElapse} onChange={this.handleChange2} placeholder="data-time-to-elapse" />
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <div class = "form-control">
                <label for="data-reported-cases">Reported Cases</label>
                <input type="text" id="data-reported-cases" value = {this.state.reportedCases} onChange={this.handleChange3} placeholder="data-reported-cases"/ >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <div class = "form-control">
                <label for="data-total-hospital-beds">Total Hospital Beds</label>
                <input type="text" id="data-total-hospital-beds" value= {this.state.totalHospitalBeds} onChange={this.handleChange4}placeholder="data-total-hospital-beds"/ >
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <div class = "form-control">
                <label for="data-period-type">Period Type</label>
                <select id="data-period-type" value= {this.state.periodType} onChange={this.handleSelectChange} name="data-period-type">
                    <option disabled hidden selected>Select</option>
                  <option value="days">days</option>
                  <option value="weeks">weeks</option>
                  <option value="months">months</option>
                </select>
            </div>
            <button type= "submit">data-go-submit</button>
           
            <div class = "form-control">
            <label for="data-result">data-result</label>
            <input type='text' id="data-result" value= {covid19ImpactEstimator}/>
            </div>
         </form>   
        
        )
        
    }
}
export default Form;
