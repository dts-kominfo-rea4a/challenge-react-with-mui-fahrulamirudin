// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewContact({
            ...newContact,
            [name]: value,
        });
    };
    return (
        <Card sx={{ minWidth: 275, margin: "25px" }}>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                name="name"
                                value={newContact.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="phone"
                                label="Phone"
                                name="phone"
                                value={newContact.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                name="email"
                                value={newContact.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="photo"
                                name="photo"
                                label="Photo Url"
                                value={newContact.photo}
                                onChange={handleChange}
                            />
                        </Grid>
                    </div>
                </Box>
            </CardContent>
            <CardActions>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ width: '90%' }}
                        onClick={(event) => {
                            event.preventDefault();
                            handleClick(newContact);
                            setNewContact({
                                name: '',
                                phone: '',
                                email: '',
                                photo:'',
                            });
                        }}>
                        Add New
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ContactForm;