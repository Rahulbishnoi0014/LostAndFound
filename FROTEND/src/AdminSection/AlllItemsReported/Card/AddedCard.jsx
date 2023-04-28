import React from 'react';
import './AddedCard.css'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import ItemImg from '../../../Images/Wings.jpg'
import axios from 'axios'


class AddedCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    date = new Date();


    render() {

        const { catagory, subCatagory, placeOfLost, reportingPersonName, reportersPhoneNumber, brand } = this.props.data
        console.log(this.props.data)
        // return (<div style={{ margin: '200px 0 0 0' }}>sadasd</div>);
        return (<>

            <Card sx={{ maxWidth: 345, width: 345 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={ItemImg}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {catagory}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Item type: </span> {subCatagory}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Person Name: </span>{reportingPersonName}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Phone No.: </span>{reportersPhoneNumber}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Brand Name: </span>{brand}
                    </Typography>
                    <br /><Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Item was lost at: </span>{placeOfLost}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Found on: </span>{this.date.getDate()}/{parseInt(this.date.getMonth() + 1) / 10 === 0 ? `0${this.date.getMonth() + 1}` : `${this.date.getMonth() + 1}`}/{this.date.getFullYear()}
                    </Typography>
                </CardContent>
            </Card>

        </>)
    }
}

export default AddedCard;