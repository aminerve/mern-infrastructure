import { Link } from "react-router-dom";

import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <Link to="/orders">Order History</Link>
        <Link to="/orders/new">New Order</Link>
    </nav>
  )
}
