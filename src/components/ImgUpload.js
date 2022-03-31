const ImgUpload = () => {
    const [files, setFiles] = useState('');
    const onLoadFile = (e) => {
        const file = e.target.files;
        setFiles(file);
    };
    
    return(
        <div>
            <strong>업로드된 이미지</strong>
        </div>
    )
}