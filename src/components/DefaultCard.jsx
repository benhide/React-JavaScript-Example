import React from "react";
import PropTypes from "prop-types";

import { Card, CardActions, CardContent, styled } from "@material-ui/core";

const StyledCard = styled(Card)(() => ({
  margin: 10,
  width: 300,
  display: "inline-block",
  transition: "transform .5s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)"
  }
}));

export const DefaultCard = (props) => {
  const { user, onUserClicked } = props;

  return (
    <StyledCard onClick={() => onUserClicked(user)}>
      <CardContent>
        <div>{user.name}</div>
        <br />
        <div>{`Email: ${user.email}`}</div>
        <div>{`Company: ${user.company.name}`}</div>
      </CardContent>
      <CardActions />
    </StyledCard>
  );
};

DefaultCard.propTypes = {
  user: PropTypes.object.isRequired,
  onUserClicked: PropTypes.func.isRequired
};
