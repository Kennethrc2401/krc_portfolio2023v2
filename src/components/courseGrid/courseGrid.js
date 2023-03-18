import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { courseData } from "../../backend/crsData";
import { flexbox } from "@mui/system";
import Placeholder from "react-bootstrap/Placeholder";
import styles from "./courseGrid.css";

function CourseGrid() {
    if (courseData) {
        return (
        <Container className="coursesSection" style={{ zIndex: "0" }}>
            <Row style={{ display: "flex" }}>
            <>
                <Row className="coursesRow">
                <h1 className="coursesHeading" style={{ textAlign: "center", margin: "auto", padding: "5px" }}>
                    Courses
                </h1>
                </Row>
                <div
                style={{
                    display: "flex",
                    flexShrink: "10%",
                    flexFlow: "wrap",
                }}
                >
                {courseData.map((course) => (
                    <Card
                    style={{
                        width: "18rem",
                        display: "flex",
                        margin: "5px auto",
                        padding: "5px",
                    }}
                    >
                    <div>{course.imgSrc}</div>
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>
                        Offered By: {course.offeredBy}
                        <br />
                        {course.dateCompleted}
                        <br />
                        {course.description}
                        </Card.Text>
                        <Button
                        variant="primary"
                        href={course.certificateUrl}
                        target="_blank"
                        size="sm"
                        >
                        View Certificate
                        </Button>
                    </Card.Body>
                    </Card>
                ))}
                </div>
            </>
            </Row>
        </Container>
        );
    } else {
        return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            </Card.Body>
        </Card>
        );
    }
    }

export default CourseGrid;