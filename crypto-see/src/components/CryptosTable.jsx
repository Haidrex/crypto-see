import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { priceFormatter } from "../utils/formatter";

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.action.hover,
  },
}));

const CryptosTable = ({ data }) => {
  let navigate = useNavigate();

  return (
    <TableContainer component={Paper} sx={{ mt: 1 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledHeaderCell align="left">Name</StyledHeaderCell>
            <StyledHeaderCell align="right">Current Price</StyledHeaderCell>
            <StyledHeaderCell align="right">24h High</StyledHeaderCell>
            <StyledHeaderCell align="right">24h Low</StyledHeaderCell>
            <StyledHeaderCell align="right">Market cap</StyledHeaderCell>
            <StyledHeaderCell align="right">Total volume</StyledHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow
              key={row.name}
              onClick={() => navigate(`/coins/${row.id}`)}
            >
              <TableCell align="left" sx={{ display: "flex" }}>
                <img
                  src={row.image}
                  style={{ width: "20px", marginRight: "5px" }}
                />
                {row.name}
              </TableCell>
              <TableCell align="right">
                {priceFormatter(row.current_price)}
              </TableCell>
              <TableCell align="right">
                {row.high_24h ? priceFormatter(row.high_24h) : "-"}
              </TableCell>
              <TableCell align="right">
                {row.low_24h ? priceFormatter(row.low_24h) : "-"}
              </TableCell>
              <TableCell align="right">
                {priceFormatter(row.market_cap)}
              </TableCell>
              <TableCell align="right">{row.total_volume}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptosTable;
