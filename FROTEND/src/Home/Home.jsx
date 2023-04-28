import React from 'react'
import NavBar from '../NavBar/NavBar'
import Card from '../ItemsByPlace/ItemsHome/Card/Card';
import './Home.css'
import ItemsHome from '../ItemsByPlace/ItemsHome/ItemsHome'
import ClaimForm from '../ClaimSection/ClaimForm/ClaimForm'
import ClaimedItemCard from '../ClaimSection/ClaimedItemCard/ClaimedItemCard';
import ClaimHomePage from '../ClaimSection/ClaimHomePage/ClaimHomePage';
import Login from '../AdminSection/LoginForm/Login';
import AB1 from '../Images/AB1.jpg'
import AB10 from '../Images/AB10.jpg';
import MainCanteen from '../Images/AB1MainCanteen.jpg';
import Wings from '../Images/Wings.jpg'
import CardUploadForm from '../AdminSection/SideBar/SidBar'
import AddNewItem from '../AdminSection/AddNewItem/AddNewItem';
import ViewAllCards from '../AdminSection/AlllItemsReported/ViewAllCards';
import AddedCard from '../AdminSection/AlllItemsReported/Card/AddedCard';


import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {/* <AddedCard data={{
          catagory: 'Clothing',
          brand: '66666666',
          placeOfLost: '66666666',
          reportingPersonName: '66666666',
          reportersPhoneNumber: '66666666',
          subCatagory: '66666666'
        }} /> */}
        {/* <ViewAllCards /> */}
        {/* <AddNewItem /> */}
        {/* <AddNewItemForm /> */}
        {/* <ItemCard /> */}
        {/* <CardUploadForm /> */}
        <NavBar />
        <div className="HomePageBody">
          <h1 className="HomePageHeading">
            LOST AND FOUND
          </h1>
          <hr className='underLine' />
          <div className="headingDescription">
            Student Centers & Activities utilizes the web application, Crowdfind to manage the items placed in our lost and found inventory. The Crowdfind system can be searched for various items and allows guest to file a claim for an item at any time and from any device!
          </div>
          <h2 className="headingTwo">
            Found an Item?
          </h2>
          <div className="headingTwoDescription">
            Items that are believed to have been lost by an owner, may be returned to any Student Center Information Desk.
          </div>
          <h2 className="headingThree">
            Looking for an Item?
          </h2>
          <div className="headingThreeDescription">
            To inquire about a lost item that may have been turned in:

            Check the Crowdfind database in the Center below where you believe the item was lost.
            If your item isn’t listed, please file a claim.
          </div>
          <div className="listedPlaces">
            <div className="placeCardOnHomePage">
              <img src={AB1} alt="" className="p1" />
              <br />
              <h4 className="placeCardName">
                <Link to='/place/AB1'>Academic Block I</Link>
              </h4>
            </div>
            <div className="placeCardOnHomePage">
              <img src={Wings} alt="" className="p1" />
              <br />
              <h4 className="placeCardName">
                <Link to='/place/Hostel'>Hostels</Link>
              </h4>
            </div>
            <div className="placeCardOnHomePage">
              <img src={AB10} alt="" className="p1" />
              <br />
              <h4 className="placeCardName">
                <Link to='/place/AB10'>Academic Block X</Link>
              </h4>
            </div>
            <div className="placeCardOnHomePage">
              <img src={MainCanteen} alt="" className="p1" />
              <br />
              <h4 className="placeCardName">
                <Link to='/place/Canteen'>Main Canteen</Link>

              </h4>
            </div>
          </div>
          <div className="headingThreeDescription">
            *Items believed to have been lost in the Student Activities Center (SAC) may be searched in the College Avenue Student Center Crowdfind database.

            Lost items are kept in Student Centers for a maximum of 14 days. Guests are not permitted to search the physical lost and found inventories in the Student Centers. Individuals must fill out the claim form through Crowdfind and provide an adequate description of the item before the item will be shown to a claimant.

            Guests looking for lost items should also check the University Police Department’s Lost and Found Database.
          </div>
          <h2 className="headingFour">
            Claiming an Item:
          </h2>
          <div className="headingFourDescription">
            Individuals claiming an item must fill out the form associated with their item on the database. This can be done by clicking “details” under the image of the item and answering the questions. A Student Center staff member will either message you with a “match”, ask for additional information or reject your claim if sufficient information isn’t given. Once notified, you will have 48 hours to make arrangements to claim your lost item.

            Please allow a minimum of 1-2 business days (Monday-Friday) for a confirmation or rejection of a match. Once a “match” has been made, claimants may pick up their items at the Information Desk at the respective Student Center. Claimants must come in person to claim their own items and provide a photo identification that matches the information filled out on the claim form. Contact information will be logged before the item(s) will be released.

          </div>
          <h2 className="headingFive">
            High Valued Items:
          </h2>
          <div className="headingFiveDescription">
            If turned in to the Student Centers, the following items will be surrendered to the Rutgers University Police Department (RUPD) immediately:

            Any item presumed to be stolen
            Cash
            Government Issued Identification, Passports, Visas, etc.
            High Value Items (e.g. jewelry, laptops, debit/credit cards, laptops and electronics)
            RU ID Cards
            Keys
          </div>
          <h2 className="headingSix">
            Items Not Accepted:
          </h2>
          <div className="headingSixDescription">
            Items that are soiled, unsanitary or have no apparent value
            Food
            Pens, pencils, etc
          </div>
          <br /><br />
        </div>
        <div className="itemsHomeFooter">
          <div className="footerContent">
            <div className="footerItem">
              @2023 Xceptions
            </div>
            <div className="footerItem">

              Terms
            </div>
            <div className="footerItem">

              Privacy Policy
            </div>
            <div className="footerItem">

              Contact Us
            </div>
          </div>
        </div>

        {/* <Login /> */}
        {/* <ClaimHomePage /> */}
        {/* <ItemsHome /> */}
        {/* <CardGrid /> */}

      </>
    )
  }
}

export default Home;