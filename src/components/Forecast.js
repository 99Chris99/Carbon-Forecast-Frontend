import React, { Component } from 'react';
import { Dropdown, Table, Grid, Image, Segment, Container } from 'semantic-ui-react';
import SummaryChart from './SummaryChart'

export class Forecast extends Component {


state = {
    period: 48,
    region: 18,
    sortByLevel: false
}


        periodOptions = [
            {
              key: 6,
              text: '+6 hours',
              value: 6,
            //   image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
            },
            {
              key: 8,
              text: '+8 hours',
              value: 8,
            },
            {
              key: 12,
              text: '+12 hours',
              value: 12,
            },
            {
              key: 24,
              text: '+24 hours',
              value: 24,
            },
            {
              key: 48,
              text: '+48 hours',
              value: 48,
            },
            {
              key: 100,
              text: 'Max',
              value: 100,
            },
          ]

          genRegionOptions = () => {
          let output = this.props.regionIndex.map(obj => {
                return {key: obj.id, text: obj.name, value: obj.id}
            })
            output.sort((a,b) => (a.key < b.key) ? 1 : -1)
            return output
        }

        setPeriod = (event, data) => {
            console.log(data.value)
            this.setState({
                period: data.value
            })
        }
        setRegion = (event, data) => {
            console.log(data.value)
            this.setState({
                region: data.value
            })
        }

        controlSort = () => {
            let newProps = this.props.aggedVals
          if (this.state.sortByLevel === false){
           newProps = this.props.aggedVals.sort((a,b) => (Date.parse(a.from) > Date.parse(b.from)? 1 : -1))
            }
            else if (this.state.sortByLevel === true){
                newProps = this.props.aggedVals.sort((a,b) => (Date.parse(a.level) > Date.parse(b.level)? 1 : -1))
            }
                 return newProps
        }

        handleSortButton = (event) => {
            let newVal = this.state.sortByLevel ? false : true
            this.setState({sortByLevel: newVal})
        } 


    render() {
        return (

            <div>

            <div>
                {/* <h1> Hi, it's me forecast! Hows things?</h1> */}

<Grid columns='2' >
<Grid.Row>
   
   <Grid.Column floated='left'>      
    <Dropdown
         placeholder='Period'
         selection='2'
         options={this.periodOptions}
         onChange={(event, data) => this.props.updatePeriod(data.value)}
         />
      
       </Grid.Column>
       <Grid.Column floated='left'>
   <p>Yep thats right I'm some text!</p>
   </Grid.Column>

</Grid.Row>


<Grid.Row>
   
    <Grid.Column floated='left'>      
    <Dropdown
          placeholder='Region'
          selection
          options={this.genRegionOptions()}
          onChange={(event, data) => this.props.updateRegion(data.value)}
        />
       
        </Grid.Column>
        <Grid.Column floated='left'>
    <p>Yep thats right I'm some text!</p>
    </Grid.Column>
 
 </Grid.Row>
 </Grid>
            </div>
<div id="summary-chart" >

<SummaryChart aggedVals={this.controlSort()} sortTrigger={this.state.sortByLevel}/>
</div>
<button class="ui button" onClick={this.handleSortButton}>Sort By {this.state.sortByLevel ? 'Date' : 'Intensity Level'}</button>
</div>
        );
    }
}

export default Forecast;
