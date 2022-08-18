import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Twitter, Reddit } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CryptoHeader = ({ image, name, symbol, links }) => {
  return (
    <Container>
      <StyledBox>
        <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <Box
            component="img"
            src={image}
            sx={{ width: "50px", height: "50px" }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              {symbol.toUpperCase()}/EUR
            </Typography>
          </Box>
        </Box>
        <Box>
          <List sx={{ display: "flex" }}>
            <ListItem>
              <IconButton
                component="a"
                target="_blank"
                rel="noreferrer"
                href={`https://facebook.com/${links.facebook_username}`}
              >
                <Facebook />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton
                component="a"
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/${links.twitter_screen_name}`}
              >
                <Twitter />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton
                component="a"
                target="_blank"
                rel="noreferrer"
                href={links.subreddit_url}
              >
                <Reddit />
              </IconButton>
            </ListItem>
          </List>
        </Box>
      </StyledBox>
    </Container>
  );
};

export default CryptoHeader;
