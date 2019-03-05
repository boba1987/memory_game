import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as scoreActions from "../../actions/FetchActions";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import {v4} from 'uuid';

function HighScorePage(props) {
  useEffect(() => {
    props.fetchActions.fetchStart();
  }, []);
  
  return (
    <div className="App">
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <h2>Score table</h2>
          <Divider light />
        </Grid>
        <Grid xs={4} lg={5} item></Grid>
        <Grid xs={4} lg={2} item>
          {props.loading ? (
            <div>
              <CircularProgress size={50} />
            </div>
            ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.scores.map((score) => {
                    return (
                      <TableRow key={v4()}>
                        <TableCell>
                          {score.name}
                        </TableCell>
                        <TableCell>
                          {score.score}
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.FetchReducer,
    scores: state.scores
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActions: bindActionCreators(scoreActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighScorePage);