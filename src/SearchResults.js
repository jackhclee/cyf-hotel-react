import React from "react";
import moment from "moment";
import "./SearchResults.css";

const SearchResults = props => {
  //let bookings = JSON.parse("./data/fakeBookings.json")
  return (
    <div>
      <table class="abcd">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Night</th>
        </tr>
        {props.results.map(booking => {
          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(
                  moment(booking.checkInDate),
                  "day"
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export { SearchResults };
