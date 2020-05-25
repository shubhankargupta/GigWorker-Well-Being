import React, { Component } from "react";
import {Chart} from "react-google-charts";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



//Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";


export default class LineGraph extends Component
{

	constructor(props)
	{
		super(props);

		this.state={
			spercentage : 49,
            cpercentage : 56,
            name: 'Shubhankar Gupta',
            gender: 'male',
            weight: 55,
            height: 156,
            isEditing: false,
            rating: 4.89
		}

		this.nameChange=this.nameChange.bind(this);
        this.sexChange=this.sexChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.heightChange = this.heightChange.bind(this);

	}

	nameChange(e)
    {
     this.setState({name: e.target.value});
    }

   sexChange(e)
   {
    this.setState({gender: e.target.value})
   }  

   weightChange(e)
   {
    this.setState({weight: e.target.value})
   }

   heightChange(e)
   {
    this.setState({height: e.target.value})
   }

   onEdit = () =>
   {
     this.setState( (state) => {
       return {isEditing: !state.isEditing}
     }) 

   }

   onSave = () =>
   {
     this.setState( (state) => {
       return {isEditing: !state.isEditing}
     }) 

   }

   handleSubmit = (e) =>
   {
     e.preventDefault();
   }

	render(){
		return(
			     <div>
			     <div className='rowC'>
			     <form style={{display: "flex", justifyContent : "space-between", width: "100%"}} onSubmit={this.handleSubmit}>
                <div>
                <p>Name:</p>
                   { this.state.isEditing ? <input
                     type='text'
                     value={this.state.name}
                      onChange={this.nameChange} />  : <strong>{this.state.name}</strong>}
                   </div>

                <div>    
                <p>Sex:</p>
                    <select value={this.state.gender} onChange={this.sexChange}> 
                     <option name="male"> Male</option>
                     <option name="female">Female</option>
                    </select> 
                    </div>

                <div>      
                <p> Weight (lb): </p>
                    {this.state.isEditing ? <input type='number'
                    value = {this.state.weight} 
                    onChange={this.weightChange}
                   /> : <strong>{this.state.weight}</strong>}
                 </div>
                   
                <div>   
                <p> Height (cm): </p>
                    {this.state.isEditing ? <input type='number'
                    value = {this.state.height} 
                    onChange={this.heightChange}
                   /> : <strong>{this.state.height}</strong> }
                 </div>

                 <div>   
                <p> Rating: </p>
                     <strong>{this.state.rating}</strong> 
                 </div>
                  
                    
                   {!this.state.isEditing ? <Button style={{alignSelf: "center"}} onClick={this.onEdit}>Edit</Button> :
                   <Button style={{alignSelf: "center"}} onClick={this.onSave}>Save</Button>}


                  </form>
                  </div>

        <br/>
        <br/>

        <h2><strong>Your Stats for May 24, 2020:</strong></h2>
        <br/>
                 <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'heart'],
    [0, 20],
    [1, 15],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Number of heart-beats',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

    <br/> 
    <h3>Total Steps Completed: 77% of 8000 </h3>
    <Example>
      <CircularProgressbarWithChildren value={66}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/mSq9VJ8.png"
          alt="doge"
        />
        <div style={{ fontSize: 25, marginTop: -7 }}>

        </div>
      </CircularProgressbarWithChildren>
    </Example>
   
  
    <h3> Total Calories burned: 49% of 150 kcals </h3>
    <Example>
      <CircularProgressbarWithChildren value={49}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 80, marginTop: -5 }}
          src="https://i.imgur.com/kswLmbV.jpg"
          alt="doge"
        />
        <div style={{ fontSize: 25, marginTop: -5 }}>
      
        </div>
      </CircularProgressbarWithChildren>
    </Example>
    


</div>


			)
	}
}


function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

