import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUser,
  sortByFirstName,
  sortByLastName,
} from "../Store/Actions/ActionCreator";
import Loading from "./Loading";
import Fade from "@material-ui/core/Fade";
import { FadeTransform } from "react-animation-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HomePage(props) {

  const history = useHistory();
  const [show, setShow] = useState("");

  useEffect(() => {
    props.getUser();
  }, []);

  const handleClick = (id) => {
    history.push(`/totalCloud/${id}`);
  };

  const handleClickDropdown = (event) => {
    setShow(event.currentTarget);
  };

  const handleClose = (val) => {
    if (val === "first_name") {
      props.sortByFirstName(val);
    } else if (val === "last_name") {
      props.sortByLastName(val);
    }
    setShow(null);
  };

  return (
    <div className=" mt-2">
      <h3 className="text-center">USERS LIST</h3>
      <div className="dropdown">
        <Button
          className="btn_sort"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClickDropdown}
        >
          Sort By <ArrowDropDownIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={show}
          keepMounted
          open={Boolean(show)}
          onClose={() => handleClose("")}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleClose("first_name")}>
            First Name
          </MenuItem>
          <MenuItem onClick={() => handleClose("last_name")}>
            Last Name
          </MenuItem>
          <MenuItem onClick={() => handleClose("")}>None</MenuItem>
        </Menu>
      </div>
      <div className="container-fluid text-center">
        <div className="row mx-2">
          {props.users.length > 0 ? (
            props.users.map((data) => {
              return (
                <div
                  className="card p-2 col-sm-3 col-md-4 mt-3"
                  key={data.id}
                  onClick={() => handleClick(data.id)}
                >
                  <FadeTransform
                    in
                    transformProps={{
                      exitTransform: "scale(0.5) translateY(-50%)",
                    }}
                  >
                    <div className=" align-items-top ">
                      <img
                        src={data.avatar}
                        alt="images"
                        className="rounded"
                        width="155"
                        height="155"
                      />
                      <div className="px-2 mt-2">
                        <h6 className="ml-5">
                          {data.first_name} {data.last_name}
                        </h6>
                      </div>
                    </div>
                  </FadeTransform>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
    sortByFirstName: (name) => dispatch(sortByFirstName(name)),
    sortByLastName: (name) => dispatch(sortByLastName(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
