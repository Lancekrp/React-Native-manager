import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    const { employeesFetch } = this.props
    employeesFetch()
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee.item} />}
        keyExtractor={employee => employee.uid}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (values, uid) => ({ ...values, uid }))
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)

// The above replaces all of the below code:

// class EmployeeList extends Component {
//   componentWillMount() {
//     this.props.employeesFetch();

//     this.createDataSource(this.props);
//   }

//   componentWillReceiveProps(nextProps) {
//     this.createDataSource(nextProps);
//   }

//   createDataSource({ employees }) {
//     const ds = new FlatView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });

//     this.dataSource = ds.cloneWithRows(employees);
//   }

//   renderRow() {
//     return <ListItem employee={employee} />;
//   }

//   render() {
//     return (
//       <FlatView
//         enableEmptySections
//         dataSource={this.dataSource}
//         renderRow={this.renderRow}
//       />
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   const employees = _.map(state.employees, (val, uid) => {
//     return { ...val, uid };
//   });
//   return { employees };
// };

// export default connect(mapStateToProps, { employeesFetch })(EmployeeList);


