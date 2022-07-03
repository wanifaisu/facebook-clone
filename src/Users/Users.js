import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from '../Header';
import { Button } from '@material-ui/core';

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [invite, setInvite] = React.useState(false);
  React.useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        let response = json.map(item => {
          return { ...item, invite: false };
        });
        localStorage.setItem('users', [...response]);
        setUsers(response);
      });
  };
  //search users by there name r username and set a state
  const handleUser = searchVal => {
    if (searchVal) {
      console.log(searchVal, 'hhh');

      let filteredPersons = users.filter(person => {
        return (
          person.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          person.username.toLowerCase().includes(searchVal.toLowerCase())
        );
      });

      setUsers(filteredPersons);
    } else {
      console.log('error');
      getAllUsers();
    }
    // setSearchValue(searchVal);
  };
  //map through the id and set invite as true so that we can invite that user , which will be clicked
  const handleInvite = itm => {
    let findInvite = users.map(item => {
      return item.id === itm.id ? { ...item, invite: !item.invite } : item;
    });
    setUsers(findInvite);
  };
  return (
    <>
      <Header handleUser={handleUser} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ paddingTop: '5rem' }}>
          {console.log(users, 'userd')}
          {users.map(item => {
            return (
              <Card key={item.id} style={{ marginTop: '7px' }}>
                <CardHeader
                  avatar={
                    <Avatar style={{ backgroundColor: 'orange' }}>
                      {item.username?.charAt(0)}
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <Button
                        key={item.id}
                        style={{
                          backgroundColor: item.invite ? 'green' : 'blue',
                          color: 'white',
                        }}
                        variant='outlined'
                        onClick={() => handleInvite(item)}
                      >
                        invite
                      </Button>
                    </IconButton>
                  }
                  title={item.username}
                  subheader={new Date()
                    .toString()
                    .split('GMT+0530 (India Standard Time)')}
                />
                <CardMedia
                  image='/static/images/cards/paella.jpg'
                  title='Paella dish'
                />
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
