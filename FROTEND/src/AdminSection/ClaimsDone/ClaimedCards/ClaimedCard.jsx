import React from 'react'
import './ClaimedCard.css'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import ItemImg from '../../../Images/Wings.jpg'


class ClaimsCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    date = new Date();
    render() {
        const { catagory, subCatagory, placeLost, name, phoneNo, brandName, email, color, itemDescription } = this.props.data
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
                        <span className="cardKeys">Person Name: </span>{name}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Phone No.: </span>{phoneNo}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Brand Name: </span>{brandName}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Email: </span>{email}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Color/Design: </span>{color}
                    </Typography>
                    <br /><Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Item was lost at: </span>{placeLost}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary" id='description'>
                        <span className="cardKeys">Description: </span>{itemDescription}
                    </Typography>
                    <br />
                    <Typography variant="h7" color="text.secondary">
                        <span className="cardKeys">Claimed on: </span>{this.date.getDate()}/{parseInt(this.date.getMonth() + 1) / 10 === 0 ? `0${this.date.getMonth() + 1}` : `${this.date.getMonth() + 1}`}/{this.date.getFullYear()}
                    </Typography>
                </CardContent>
            </Card>

        </>)
    }

}

export default ClaimsCard;