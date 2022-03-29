import React, { useState } from "react";
import moment from "moment";
import "./SearchResults.css";

const SearchResults = props => {
  const genRecMeta = results => {
    //console.log(results);
    return results.map(p => {
      return { bookingId: p.id, recSelected: false };
    });
  };

  let [selected, setSelected] = useState(genRecMeta(props.results));

  const toggleSelected = tbookingId => {
    console.log(tbookingId);
    setSelected(prevSelected => {
      let newSelected = prevSelected.map(p =>
        p.bookingId === tbookingId
          ? { bookingId: tbookingId, recSelected: !p.recSelected }
          : p
      );
      return newSelected;
    });
  };

  const isRecSelected = tBookingId => {
    console.log(tBookingId);
    console.table(selected);
    return selected.find(p => p.bookingId === tBookingId).recSelected;
  };

  return (
    <div>
      <table class="Branch-99">
        <tbody>
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
          {props.results.map((booking, idx) => {
            return (
              <tr
                key={booking.id}
                onClick={e => toggleSelected(booking.id)}
                className={"recSelected" + isRecSelected(booking.id)}
              >
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
        </tbody>
      </table>
    </div>
  );
};

export { SearchResults };
