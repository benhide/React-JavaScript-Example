import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  styled
} from "@material-ui/core";

import { useDate } from "../hooks/useDate";

const StyledUserCard = styled(Card)(({ theme }) => ({
  margin: 20,
  padding: 10,
  backgroundColor: theme.palette.background.default
}));

export const UserCard = (props) => {
  const { user } = props;
  const { formattedDate, time } = useDate();

  if (!user)
    return (
      <StyledUserCard>
        <CardHeader subheader={`${formattedDate} - ${time}`} />
      </StyledUserCard>
    );

  return (
    <StyledUserCard>
      <CardHeader subheader={`${formattedDate} - ${time}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
          {/* Trying to acces a property which does exist is ok in plain JS e.g. ('postcode')*/}
          {user.address.postcode}
        </Typography>
        <Typography variant="body2" color="secondary">
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </Typography>
      </CardContent>
    </StyledUserCard>
  );
};

// Instead of interfaces we use PropTypes,
// to have the exact shape of the object we need to add it here.
// We also don't have access to this objects 'shape' outside of the component.
UserCard.propTypes = {
  user: PropTypes.object.isRequired
};
