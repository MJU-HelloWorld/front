import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './signup.css';

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바르지 않은 이메일 형식입니다.')
      .required('이메일을 입력해 주세요.'),
    username: Yup.string()
      .min(2, '2자 이상 입력해 주세요.')
      .max(16, '16자 이내로 입력해 주세요.')
      .required('아이디를 입력해 주세요.'),
    password: Yup.string()
      .min(6, '6자 이상 입력해 주세요.')
      .max(16, '16자 이내로 입력해 주세요.')
      .required('비밀번호를 입력해 주세요.'),
    password2: Yup.string()
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호를 확인해 주세요.'),
    name: Yup.string()
      .min(2, '2자 이상 입력해 주세요.')
      .required('이름을 입력해 주세요.'),
    nationality: Yup.string().required('국적을 선택해 주세요.'),
  });

  const renderInputField = (label, name, value, handleChange, error, touched, type) => (
    <div className="input-group">
      <TextField
        fullWidth
        label={label}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        error={touched && !!error}
        helperText={touched && error}
        type={type || 'text'}
      />
    </div>
  );

  const submit = async (values) => {
    try {
      const response = await axios.post('API_ENDPOINT', {
        email: values.email,
        username: values.username,
        password: values.password,
        name: values.name,
        nationality: values.nationality,
      });
      toast.success('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      toast.error('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <Formik
          initialValues={{
            email: '',
            username: '',
            password: '',
            password2: '',
            name: '',
            nationality: '',
          }}
          validationSchema={validationSchema}
          onSubmit={submit}
          validateOnMount={true}
        >
          {({ values, handleSubmit, handleChange, errors, touched }) => (
            <form onSubmit={handleSubmit} className="signup-form">
              <h2 class="title">회원가입</h2>
              <button onClick={() => navigate('/')} className="cancel-btn"> 취소 </button>    
              {renderInputField('이메일', 'email', values.email, handleChange, errors.email, touched.email)}
              {renderInputField('닉네임', 'username', values.username, handleChange, errors.username, touched.username)}
              {renderInputField('비밀번호', 'password', values.password, handleChange, errors.password, touched.password, 'password')}
              {renderInputField('비밀번호 확인', 'password2', values.password2, handleChange, errors.password2, touched.password2, 'password')}
              {renderInputField('이름', 'name', values.name, handleChange, errors.name, touched.name)}
              <FormControl fullWidth className="input-group">
              <InputLabel htmlFor="nationality" className="input-label">국적</InputLabel>
                  <Select
                    fullWidth   
                    id="nationality"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    error={touched.nationality && !!errors.nationality}
                    className="select-field"
                  >
                  <MenuItem value="korean">한국</MenuItem>
                  <MenuItem value="american">미국</MenuItem>
                  <MenuItem value="japanese">일본</MenuItem>
                  <MenuItem value="vietnamese">베트남</MenuItem>
                </Select>
                {touched.nationality && errors.nationality && (
                  <div className="error-message">{errors.nationality}</div>
                )}
              </FormControl>
              <button type="submit" className="signup-button">가입하기</button>
            </form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
