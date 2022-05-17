import axiosInstance from '../../../helpers/axiosInstance';
const {
  SET_TEAM,
  DELETE_TEAM,
  SETUPDATE_TEAM,
  TEAM_LOADING,
  TEAM_ALERT,
  ADDTEAM_LOADING,
  DELETE_TEAMLOADING,
} = require('../../actionTypes');

const setteam = (data) => ({
  type: SET_TEAM,
  payload: data,
});

const deleteteam = (id) => ({
  type: DELETE_TEAM,
  payload: id,
});

const setupdateteam = (data) => ({
  type: SETUPDATE_TEAM,
  payload: data,
});

const teamloading = (data) => ({
  type: TEAM_LOADING,
  payload: data,
});

const teamAlert = (data) => ({
  type: TEAM_ALERT,
  payload: data,
});

const addteamloading = (data) => ({
  type: ADDTEAM_LOADING,
  payload: data,
});
const deleteloading = (data) => ({
  type: DELETE_TEAMLOADING,
  payload: data,
});

const getTeam = () => {
  return (dispatch) => {
    dispatch(teamloading(true));
    axiosInstance
      .get('/team/get-all')
      .then((res) => {
        dispatch(
          setteam(
            res?.data?.data?.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            }),
          ),
        );
        dispatch(teamloading(false));
      })
      .catch((err) => {
        dispatch(teamloading(false));
      });
  };
};

const deleteTeam = (id) => {
  return (dispatch) => {
    dispatch(deleteloading(true));
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .delete(`/team/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deleteloading(false));
        dispatch(deleteteam(id));
      })
      .catch((err) => {
        dispatch(deleteloading(false));
      });
  };
};

const addTeam = (data) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addteamloading(true));
    axiosInstance
      .post('/team/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addteamloading(false));
        dispatch(getTeam());
        dispatch(
          teamAlert({
            success: true,
            message: 'Team member added successfully',
          }),
        );
      })
      .catch((err) => {
        dispatch(addteamloading(false));
        dispatch(
          teamAlert({
            success: false,
            message: 'Error adding team member',
          }),
        );
      });
  };
};

const updateTeam = (data, id) => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(addteamloading(true));
    axiosInstance
      .put(`/team/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(addteamloading(false));
        dispatch(getTeam());
        dispatch(
          teamAlert({
            success: true,
            message: 'Team member updated successfully',
          }),
        );
        dispatch(setupdateteam({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(addteamloading(false));
        dispatch(
          teamAlert({
            success: false,
            message: 'Error updating team member',
          }),
        );
        dispatch(setupdateteam({ state: false, data: null }));
      });
  };
};

export { getTeam, deleteTeam, addTeam, setupdateteam, updateTeam, teamAlert };
