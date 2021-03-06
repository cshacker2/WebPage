import React, {Component} from 'react';
import logo from './logo.svg';
import CustomerTable from './components/CustomerTable'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer = [
{
  'id' : 1,
  'img' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id' : 2,
  'img' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동2',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id' : 3,
  'img' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동3',
  'birth' : '881031',
  'gender' : '여자',
  'job' : '회사원'
}
]

class App extends Component {
  render() {
  const { classes } = this.props;
  return (    
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
              <TableCell> 프로필 </TableCell>
              <TableCell> 이름 </TableCell>
              <TableCell> 생년월일 </TableCell>
              <TableCell> 성별 </TableCell>
              <TableCell> 직업 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map(c => { return ( <CustomerTable id = {c.id} img = {c.img} name = {c.name} birth = {c.birth} gender = {c.gender} job = {c.job} />); }
            )}
          </TableBody>
        </Table>
        </Paper>
  );
  }
}

export default withStyles(styles)(App);
