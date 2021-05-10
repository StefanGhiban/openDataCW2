import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Search = (props) => {
    return(
        <div>
            <Form className="p-2">
                      <Form.Group className="d-flex justify-content-center flex-column align-items-center">
                          <Form.Label className="font-weight-bold"><h4>Search for a University</h4></Form.Label>
                          <Form.Control type="search" placeholder="Search..." onChange={(event) => props.setSearch(event.target.value)}/>
                      </Form.Group>
                      <div className="d-flex justify-content-around align-items-center">
                        <Button onClick={props.handleSubmitUni}>
                          Search by uni
                        </Button>
                        <Button onClick={props.handleSubmitLocation}>
                          Search by location
                        </Button>
                      </div>
                  </Form>
            <div>
                {props.results.map(result => (result === "No universities found" ? <p>No universities found</p> : <p><Link to={{pathname: `/university/${result.title}`, state: {university: result}}}>{result.title}</Link></p>))}
            </div>
        </div>
    )
}

export default Search;
