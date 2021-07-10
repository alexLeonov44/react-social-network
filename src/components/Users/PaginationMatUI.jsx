import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { setCurrentPage } from '../../Redux/actions/users';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // marginTop: theme.spacing(2),
      marginLeft:0
    },
  },
}));

export default function BasicPagination({pagesPortion, totalCount, currentUsersPage,dispatch,getUsers}) {
  let pagesCount =Math.ceil(totalCount / pagesPortion)
  const handleChange = (event, value) => {
    dispatch(setCurrentPage(value))
    getUsers()
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={pagesCount} color="primary"  onChange={handleChange}/>
    </div>
  );
}