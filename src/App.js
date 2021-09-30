import React from "react";
import "./style.css";

export default function App() {
  fetch(
    'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });

    function appendData(data) {
      var mainContainer = document.getElementById('table');
      for (var i = 0; i < data.length; i++) {
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4= document.createElement('td');

        var tr = document.createElement('tr');

        td1.innerHTML = data[i].name;
        tr.appendChild(td1);
        td2.innerHTML = data[i].email;
        tr.appendChild(td2);
        td3.innerHTML = data[i].role;
        tr.appendChild(td3);

        mainContainer.appendChild(tr);
      }
    }  
  return (
    <table id='table'>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </table>
  );
}
