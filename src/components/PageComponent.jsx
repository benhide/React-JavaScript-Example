import React, { useState, useEffect } from "react";

import { Paper, styled, Typography } from "@material-ui/core";

import { CardList } from "./CardList";

const StyledPaper = styled(Paper)(() => ({
  textAlign: "center",
  padding: 10
}));

export const PageComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetchedUsers) => setUsers(fetchedUsers));
  }, []);

  return (
    <StyledPaper>
      <Typography gutterBottom color="primary" variant="h2" align="center">
        Users:
      </Typography>
      <CardList users={users} />
    </StyledPaper>
  );
};

PageComponent.propTypes = {};
