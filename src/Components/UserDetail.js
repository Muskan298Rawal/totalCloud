import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FadeTransform } from "react-animation-components";
import { useParams } from "react-router-dom";
import { userDetail } from "../Store/Actions/ActionCreator";

function UserDetail(props) {
  
  const { url_id } = useParams();

  const { avatar, id, email, first_name, last_name } = props.user;

  useEffect(() => {
    props.userDetail(url_id);
  }, []);

  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(-50%)",
      }}
    >
      <div className="text-center mt-5">
        <h3 className="mb-3">
          {" "}
          {first_name} {last_name}{" "}
        </h3>
        <img
          src={avatar}
          alt="user_image"
          className="rounded"
          width="30%"
          height="30%"
        />
        <br /> <br />
        <h6>id : {id}</h6>
        <h6>email : {email}</h6>
      </div>
    </FadeTransform>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userDetail: (id) => dispatch(userDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
