import { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Alert from "@mui/material/Alert";

const AddStylelist = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    picture: "",
  });
  //   const [author, setAuthor] = useState("");
  //   const [content, setConetent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      //   e.target.name에는 왜 괄호표기([])법으로 해야하나?
    });
  };

  const handleSubmit = () => {
    alert("저장이 완료되었습니다.");
    console.log(state);
  };
  return (
    <div className="Addstylelist">
      <h1>Addstylelist</h1>
      <p>이곳은 스타일리스트 생성 페이지 입니다.</p>

      <div>
        <input
          type="file"
          className="faceImgInput"
          accept="image/*"
          name="picture"
          value={state.picture}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <TextField
          helperText="스타일리스트의 이름을 입력해 주세요"
          id="demo-helper-text-misaligned"
          label="이름"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="스타일리스트에대해 설명해 주세요"
          style={{ width: 600, height: 200 }}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>

      <Button variant="contained" onClick={handleSubmit}>
        저장하기
      </Button>
    </div>
  );
};

export default AddStylelist;
