import React from 'react';

function Menu() {
  return (
    <div>
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Reports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Localizations</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Log out</a>
            </li>
        </ul>
        <br/><br/>
    </div>
  );
}

export default Menu;