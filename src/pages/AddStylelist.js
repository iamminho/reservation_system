import { useRef, useState } from "react";
// import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
// import Alert from "@mui/material/Alert";

const AddStylelist = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    picture: "",
  });

  const [authorError, setAuthorError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [authHelperText, setAuthHelperText] = useState(
    "스타일리스트의 이름을 입력해 주세요"
  );
  const [cntHelperText, setCntHelperText] =
    useState("스타일리스트의 설명을 적어주세요");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      //   e.target.name에는 왜 괄호표기([])법으로 해야하나?
    });
  };

  const handleSubmit = () => {
    if (state.author.length === 0) {
      setAuthorError(true);
      setAuthHelperText("스타일리스트의 이름을 한글자 이상 작성해 주세요");
    } else {
      setAuthorError(false);
      setAuthHelperText("스타일리스트의 이름을 입력해 주세요");
    }

    if (state.content.length < 5) {
      setContentError(true);
      setCntHelperText(
        "스타일리스트에 대한 설명을 다섯글자 이상 작성해 주세요"
      );
    } else {
      setContentError(false);
      setCntHelperText("스타일리스트의 설명을 적어주세요");
    }

    if (state.author.length >= 1 && state.content.length >= 5) {
      alert("저장이 완료되었습니다.");
    }
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
          autoFocus
          helperText={authHelperText}
          id="demo-helper-text-misaligned"
          label="이름"
          fullWidth
          name="author"
          value={state.author}
          // ref={authorInput}
          onChange={handleChangeState}
          error={authorError}
        />
      </div>

      <div>
        <TextField
          autoFocus
          helperText={cntHelperText}
          id="demo-helper-text-misaligned"
          label="내용"
          name="content"
          multiline
          rows={4}
          fullWidth
          value={state.content}
          // ref={authorInput}
          onChange={handleChangeState}
          error={contentError}
        />
      </div>

      {/* <div>
        <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder="스타일리스트에대해 설명해 주세요"
          style={{ width: 600, height: 200 }}
          name="content"
          value={state.content}
          ref={contentInput}
          onChange={handleChangeState}
        />
      </div> */}

      <Button variant="contained" onClick={handleSubmit}>
        저장하기
      </Button>
    </div>
  );
};

export default AddStylelist;
