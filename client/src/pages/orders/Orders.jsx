import React from 'react'
import "./Orders.scss"

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Joe Dou",
    isSeller: true,
  };

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div> 
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://i.pinimg.com/564x/8e/3b/30/8e3b309bc920985fb53e2e53f7cf2a99.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='message' src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/message.png?raw=true" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://i.pinimg.com/564x/09/2b/f3/092bf306274c433ea1358ad4b9c2cd20.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='message' src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/message.png?raw=true" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://i.pinimg.com/564x/9b/f5/ea/9bf5ea73c8ffa2f87e84b6bdb82eb6c5.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='message' src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/message.png?raw=true" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://i.pinimg.com/564x/06/ce/11/06ce11268bf4594926acb3468e3868c9.jpg" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='message' src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/message.png?raw=true" alt="" />
            </td>
          </tr>
        </table>
      </div> 
    </div>
  )
}

export default Orders