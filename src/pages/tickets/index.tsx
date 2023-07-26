import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import { Button, PageContainer, Paragraph } from "../../styles";
import type { RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, init } from "../../state/features/ticketCounter/slice";
import { useEffect, useState } from "react";
import * as api from "./api";
import { PricingTableFormat } from "./interface";

const Tickets = () => {
  const state = useSelector((state: RootState) => state.ticketCounter);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [pricings, setPricings] = useState<PricingTableFormat[]>([]);

  useEffect(() => {
    // API call to get tickets
    const getPricings = async () => {
      const response = await api.getTicketsByPerformanceId(21813);

      if (!response) {
        return;
      }
      setPricings(response);
      dispatch(init(response));
    };

    void getPricings();
  }, []);

  // Handle ticket quantity by name (acting as id)
  const handleIncrementTicket = (name: string) => {
    dispatch(
      increment({
        name,
      })
    );
  };

  const handleDecrementTicket = (name: string) => {
    dispatch(decrement({ name }));
  };

  return (
    <PageContainer>
      <h1>Tickets</h1>
      {/* Table component from mui */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Paragraph>Ticket</Paragraph>
              </TableCell>

              <TableCell>
                <Paragraph>Price</Paragraph>
              </TableCell>

              <TableCell>
                <Paragraph>Quantity</Paragraph>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* iterate over formatted tickets */}
            {pricings.map((pricing, index) => {
              return (
                <TableRow key={pricing.name}>
                  <TableCell>
                    <Paragraph>{pricing.name}</Paragraph>
                    <Paragraph>{pricing.description}</Paragraph>
                    <Paragraph>{pricing.type}</Paragraph>
                  </TableCell>
                  <TableCell>
                    <Paragraph>{pricing.price}</Paragraph>
                    {pricing.adjusters.map((adjuster) => {
                      return (
                        <React.Fragment key={`${adjuster.name}-${pricing.name}`}>
                          <Paragraph>
                            (+ {adjuster.price} {adjuster.name})
                          </Paragraph>
                        </React.Fragment>
                      );
                    })}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleIncrementTicket(pricing.name)}>+</Button>
                    <Paragraph>count: {state[pricing.name].value}</Paragraph>
                    <Button onClick={() => handleDecrementTicket(pricing.name)}>-</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default Tickets;
