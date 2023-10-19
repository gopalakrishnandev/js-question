import { React } from "react";
import Button from "@mui/material/Button";
//import JoditEditor from "jodit-react";
//import JoditEditor from "jodit-pro-react";
import Select from "react-select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
//import { Select } from "react-select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import colourOptions from "../components/data";
import Editor from "./Quil";

const QuestionForm = ({ initialState, onChange, onSubmit }) => {
  console.log(onSubmit);
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <FormLabel>1.Question Type</FormLabel>
          <RadioGroup
            onChange={(e) => onChange("type", e.target.value)}
            value={initialState.type}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="mcq" control={<Radio />} label="MCQ" />
            <FormControlLabel value="qa" control={<Radio />} label="Q&A" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">2.Question</FormLabel>
          <Editor data={initialState.question} onChange={onChange} />
          {/* <CKEditor
            editor={ClassicEditor}
            data={initialState.question}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange("question", data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          /> */}
          <FormLabel as="legend">3. Answer</FormLabel>
          <Editor data={initialState.answer} onChange={onChange} />
          {/* <CKEditor
            data={initialState.answer}
            editor={ClassicEditor}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange("answer", data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          /> */}
          <FormLabel id="demo-radio-buttons-group-label">4.Category</FormLabel>
          <Select
            // defaultValue={newCategory}
            name="language"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => onChange("category", e.target)}
            value={colourOptions.find(
              (obj) => obj.value === initialState.category
            )}
          />
          <br />
          <FormLabel id="demo-radio-buttons-group-label">4.Tags</FormLabel>
          <Select
            // defaultValue={newTag}
            options={colourOptions}
            placeholder="Select tags"
            onChange={(e) => onChange("tags", e.target)}
            value={initialState.tags}
            isSearchable={true}
            isMulti
          />
          <br />
          <center>
            <Link to="/newtable">
              <Button
                style={{ marginRight: "10px" }}
                color="primary"
                variant="contained"
              >
                Question Form
              </Button>
            </Link>
            <Button variant="contained" color="warning" type="submit">
              Submit
            </Button>
            <Link to="/newTable">
              <Button
                style={{ marginRight: "10px" }}
                color="primary"
                variant="contained"
              >
                new table
              </Button>
            </Link>
          </center>
        </form>
      </Container>
    </>
  );
};
export default QuestionForm;
