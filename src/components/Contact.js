// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {

    return (
        <List sx={{ width: '90%', bgcolor: '#8bc34a', marginTop: '25px' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: '10px' }}>
                    <Avatar sx={{ width: '70px', height: '70px' }}>
                        <img src={data.photo} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {data.phone}
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {data.email}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ margin: '10px' }} />
        </List >
    );
};

export default Contact;