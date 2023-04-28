import React from "react";
import './CardGrid.css'
import Card from '../Card/Card'
import CardData from '../../../DemoData'
import NavBar from "../../../NavBar/NavBar";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment, TextField, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


class CardGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      catagoryInputText: "",
    }
  }

  data = [

    {
      catagory: 'Electronics',
      brand: '111111111',
      placeOfLost: '111111111',
      reportingPersonName: '111111111',
      reportersPhoneNumber: '111111111',
      subCatagory: 'Samart Watch'
    },
    {
      catagory: 'ID and other Cards',
      brand: '2222222',
      placeOfLost: '2222222',
      reportingPersonName: '2222222',
      reportersPhoneNumber: '2222222',
      subCatagory: 'College ID'
    },
    {
      catagory: 'Electronics',
      brand: '3333333',
      placeOfLost: '3333333',
      reportingPersonName: '3333333',
      reportersPhoneNumber: '3333333',
      subCatagory: 'Charger'
    }, {
      catagory: 'ID and other Cards',
      brand: '44444444',
      placeOfLost: '44444444',
      reportingPersonName: '44444444',
      reportersPhoneNumber: '44444444',
      subCatagory: 'Office ID'
    }, {
      catagory: 'Electronics',
      brand: '555555555',
      placeOfLost: '555555555',
      reportingPersonName: '555555555',
      reportersPhoneNumber: '555555555',
      subCatagory: 'EarPhones'
    }, {
      catagory: 'Clothing',
      brand: '66666666',
      placeOfLost: '66666666',
      reportingPersonName: '66666666',
      reportersPhoneNumber: '66666666',
      subCatagory: 'Shirt'
    },
    {
      catagory: 'Clothing',
      brand: '77777777',
      placeOfLost: '77777777',
      reportingPersonName: '77777777',
      reportersPhoneNumber: '77777777',
      subCatagory: 'Pants'
    }
    , {
      catagory: 'Keys',
      brand: '8888888',
      placeOfLost: '8888888',
      reportingPersonName: '8888888',
      reportersPhoneNumber: '8888888',
      subCatagory: 'Room Key'
    },
    {
      catagory: 'Keys',
      brand: '8888888',
      placeOfLost: '8888888',
      reportingPersonName: '8888888',
      reportersPhoneNumber: '8888888',
      subCatagory: 'Car Key'
    }
    , {
      catagory: 'Keys',
      brand: '99999999',
      placeOfLost: '99999999',
      reportingPersonName: '99999999',
      reportersPhoneNumber: '99999999',
      subCatagory: 'Office Key'
    },
    {
      catagory: 'Wallet',
      brand: '10000010101010',
      placeOfLost: '10000010101010',
      reportingPersonName: '10000010101010',
      reportersPhoneNumber: '10000010101010',
      subCatagory: 'Cards Wallet'
    }
    , {
      catagory: 'Wallet',
      brand: '11111 11 11 11 11 1 ',
      placeOfLost: '11111 11 11 11 11 1 ',
      reportingPersonName: '11111 11 11 11 11 1 ',
      reportersPhoneNumber: '11111 11 11 11 11 1 ',
      subCatagory: 'Wallet'
    },
    {
      catagory: 'Jewelery',
      brand: '11111 11 11 11 11 1 ',
      placeOfLost: '11111 11 11 11 11 1 ',
      reportingPersonName: '11111 11 11 11 11 1 ',
      reportersPhoneNumber: '11111 11 11 11 11 1 ',
      subCatagory: 'Earrings'
    },
    {
      catagory: 'Jewelery',
      brand: '11111 11 11 11 11 1 ',
      placeOfLost: '11111 11 11 11 11 1 ',
      reportingPersonName: '11111 11 11 11 11 1 ',
      reportersPhoneNumber: '11111 11 11 11 11 1 ',
      subCatagory: 'Rings'
    },
    {
      catagory: 'Jewelery',
      brand: '11111 11 11 11 11 1 ',
      placeOfLost: '11111 11 11 11 11 1 ',
      reportingPersonName: '11111 11 11 11 11 1 ',
      reportersPhoneNumber: '11111 11 11 11 11 1 ',
      subCatagory: 'Nose Rings'
    },
    {
      catagory: 'Jewelery',
      brand: '11111 11 11 11 11 1 ',
      placeOfLost: '11111 11 11 11 11 1 ',
      reportingPersonName: '11111 11 11 11 11 1 ',
      reportersPhoneNumber: '11111 11 11 11 11 1 ',
      subCatagory: 'Wrist wore jewelery'
    },

  ]

  handleDropdownChange = (e) => {
    this.setState({ age: e.target.value })
  }

  handleSearchInputTextChange = (e) => {
    this.setState({ searchInputText: e.target.value })
  }

  render() {
    const { catagoryInputText } = this.state
    const { place } = this.props
    // console.log(CardData)
    return (<>
      <div className="catagorydropDown">
        <FormControl fullWidth className="dropdownSelector">
          <InputLabel id="demo-simple-select-label">Select Catagory</InputLabel>
          <Select className="select" size="medium"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={catagoryInputText}
            label="Age"
            onChange={(e) => { this.setState({ catagoryInputText: e.target.value }) }}
          >
            <MenuItem value={'Electronics'}>Electronics</MenuItem>
            <MenuItem value={'Keys'}>Keys</MenuItem>
            <MenuItem value={'ID and other Cards'}>ID and other Cards</MenuItem>
            <MenuItem value={'Clothing'}>Clothing</MenuItem>
            <MenuItem value={'Wallet'}>Wallet</MenuItem>
            <MenuItem value={'All Items'}>All Items</MenuItem>

          </Select>
        </FormControl>
      </div>


      <div className="cardHome">
        {
          (catagoryInputText.length === 0 || catagoryInputText === 'All Items') ? (this.data.map((cardDetails) => {
            // console.log(cardDetails.title);
            return (< Card place={place} catagory={cardDetails.catagory} subCatagory={cardDetails.subCatagory} />)
          })) : (
            this.data.filter((item) => item.catagory === catagoryInputText)).map((filterCardDetails => {

              return (< Card place={place} catagory={filterCardDetails.catagory} subCatagory={filterCardDetails.subCatagory} />)
            }))
        }
      </div>


    </>)
  }
}

export default CardGrid;