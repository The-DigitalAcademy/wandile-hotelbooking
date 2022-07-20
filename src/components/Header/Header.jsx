import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPlane, faCar, faTaxi, faCalendarDay, faPerson } from '@fortawesome/free-solid-svg-icons'
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitlle">A Lifetime of discounts? It's Genuis.</h1>
                <p className="headerDesc">
                    Get reward for your travels - unlocked instant savings of 10% or more
                    with a free Lamaboooking acccount
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                      <input 
                      type="text" 
                      placeholder="where are you going?" 
                      className="headerSearchInput" 
                      />
                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                      <span className="headerSearchText">date to date</span>
                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText">2 adults 2 childen 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header