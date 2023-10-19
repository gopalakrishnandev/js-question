import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function NewTable() {
  const [questionList, setQuestionList] = useState([]);
  // console.log("questionList", questionList);

  const questionCollectionRef = collection(db, "questions");
  const getQuestionList = async () => {
    try {
      const data = await getDocs(questionCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setQuestionList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  const deletQuestion = async (id) => {
    const questionCollection = doc(db, "questions", id);
    await deleteDoc(questionCollection);
    getQuestionList();
  };

  // const updateDocument = async (id) => {
  //   const questionCollection = doc(db, "questions", id);
  //   await updateDoc(questionCollection, {});
  // };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Questions Type</StyledTableCell>
            <StyledTableCell align="right">Question Title</StyledTableCell>
            <StyledTableCell align="right">Question Answer</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">Alt</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questionList.map((ques, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {ques.type}
              </StyledTableCell>
              <StyledTableCell align="right">{ques.question}</StyledTableCell>

              <StyledTableCell align="right">{ques.answer}</StyledTableCell>

              <StyledTableCell align="right">{ques.category}</StyledTableCell>
              {/* <StyledTableCell align="right">{ques.id}</StyledTableCell> */}

              {ques.tags.map((tag) => (
                <TableCell
                  align="right"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* {tag} */}
                  <Chip label={tag} />
                </TableCell>
              ))}

              <StyledTableCell align="right">
                {" "}
                <Link to={`/update/${ques.id}`}>
                  <Button
                    style={{ margin: "10px", background: "green" }}
                    variant="contained"
                    // onClick={updateDocument(ques.id)}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  style={{ background: "red" }}
                  variant="contained"
                  onClick={() => deletQuestion(ques.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/loginPage">
        <StyledTableCell align="right">
          <Button>loginPage</Button>
        </StyledTableCell>
      </Link>
    </TableContainer>
  );
}
