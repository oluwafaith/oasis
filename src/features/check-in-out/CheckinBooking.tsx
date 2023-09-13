import styled from "styled-components";
// import BookingDataBox from "../bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";

interface Booking {
  id: number;
  guests: {
    fullName: string;
    email: string;
  }[];
  totalPrice: number;
  numGuests: number;
  hasBreakfast: boolean;
  numNights: number;
  startDate: string; // Replace with the actual data type of startDate
  endDate: string; // Replace with the actual data type of endDate
  // Add any other properties that are present in your 'booking' object
}

interface CheckinBookingProps {
  booking: Booking;
}

export const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking({ booking }: CheckinBookingProps) {
  const moveBack = useMoveBack();

  function handleCheckin() {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {/* <BookingDataBox booking={booking} /> */}

      <ButtonGroup>
        <Button onClick={handleCheckin}>Check in booking #{booking.id}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
