import React, { useState } from "react";
import PropTypes from "prop-types";

import { Paper, styled } from "@material-ui/core";

import { UserCard } from "./UserCard";
import { DefaultCard } from "./DefaultCard";

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: 20,
  padding: 10,
  backgroundColor: theme.palette.background.default
}));

export const CardList = (props) => {
  const { users } = props;

  const [selectedUser, setSelectedUser] = useState(null);

  const onUserClicked = (user) => {
    setSelectedUser(user);
  };

  const onClicked = (user) => {
    return setSelectedUser(user);
  };

  return (
    <>
      <UserCard user={selectedUser} />
      <StyledPaper>
        {users.map((user) => (
          <DefaultCard
            key={user.id}
            user={user}
            onUserClicked={onUserClicked}
            // Passing props which don't exist on the component
            onSomeClickedCallback={onClicked}
          />
        ))}
      </StyledPaper>
    </>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};
