import { React, useState, useRef, useEffect } from "react";
import Navbar from "../navbar/Navbar.jsx";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles for react-date-range
import "react-date-range/dist/theme/default.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { InputAdornment, TextField } from "@mui/material";
import { KingBed, CalendarMonth, Person, Business } from "@mui/icons-material";
import "./HomePage.css"; // Import the CSS file

export const HomePage = () => {
  const [showPicker, setShowPicker] = useState(false);
  const inputRef = useRef(null);
  const pickerRef = useRef(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        inputRef.current &&
        pickerRef.current &&
        !inputRef.current.contains(event.target) &&
        !pickerRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleFocus = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    // Format the date to your desired format
    return date.toLocaleDateString();
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <Container>
            <Row>
              <Col md={4}>
                <div className="hero-content">
                  <h1>Make your travel whishlist, we’ll do the rest</h1>
                  <p>Special offers to suit your plan</p>
                  {/* Additional content can be added */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Search Component */}
        <section className="search-section">
          <Container>
            <div className="search-container my-4 p-4">
              <h2>Where are you flying?</h2>
              <Form>
                <Row className="my-4">
                  <Col md={4} className="mb-2">
                    <TextField
                      fullWidth
                      type="text"
                      placeholder="Enter your destination"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KingBed />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                  <Col md={4} className="mb-2">
                    <div className="date-range-wrapper" ref={inputRef}>
                      <TextField
                        fullWidth
                        placeholder="Check-in and Check-out dates"
                        value={`${formatDate(
                          dateRange[0].startDate
                        )} - ${formatDate(dateRange[0].endDate)}`}
                        readOnly
                        onFocus={handleFocus} // Add onFocus event handler
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonth />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {showPicker && (
                        <div className="date-range-picker" ref={pickerRef}>
                          <DateRange
                            editableDateInputs={false}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                          />
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col md={4} className="mb-2">
                    <TextField
                      type="number"
                      fullWidth
                      placeholder="Number of guests"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                </Row>
                <div className="search-button">
                  <Button variant="primary">
                    <Business /> Show Places
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </section>

        {/* Rest of your page content */}
        {/* ... */}
      </div>
      <img src={require("../../Hotel Search.png")} alt="b" width="1600px" />
    </>
  );
};