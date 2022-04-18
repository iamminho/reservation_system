import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { StylistDispatchContext } from '../App';
 

//mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { LineAxisOutlined } from '@mui/icons-material';

//component
import MyHeader from '../components/MyHeader';

const New = ({isEdit,originData}) => {
  const navigate = useNavigate();

  // const[author,setAuthor] = useState("");
  // const[content,setContent] = useState("");
  // const[picture,setPicture] = useState("");

  const [state, setState] = useState({
    author: "",
    content: "",    
  });

  
  
  

  const {onEdit, onCreate} = useContext(StylistDispatchContext);
  const [authorError, setAuthorError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [authHelperText, setAuthHelperText] = useState("스타일리스트의 이름을 입력해 주세요");
  const [cntHelperText, setCntHelperText] = useState("스타일리스트의 설명을 적어주세요");

  useEffect(() => {
    if(isEdit){
      setState({
        author: originData.author,
        content: originData.content,        
      });             
    }
  },[isEdit,originData])
  
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
      if(window.confirm(isEdit ? "수정하시겠습니까?" : "저장하시겠습니까?")){
        if(!isEdit){
          onCreate(state.author, state.content);
        }else{
          onEdit(originData.id, state.author, state.content);
        }
      }
    }
    
    
    navigate('/',{replace: true});
  };

  return (
    <div className="Addstylelist">
      
      <MyHeader headText={isEdit ? "수정" : "입력"} />

      
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

      <Button variant="contained" onClick={handleSubmit}>
        저장하기
      </Button>
    </div>
  );
};

export default New;
