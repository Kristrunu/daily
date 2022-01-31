import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as LogoBackground } from '../../svg/login-bg.svg';
import axios from 'axios';
import Button from '../Button/Button';
import "./Authbox.css";


const AuthBox = ({ register }) => {
  const { getCurrentUser, user } = useGlobalContext();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(user && navigate) {
      navigate('/dashboard');
    }
  }, [user, navigate])
 
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {};

    if (register) {
      data = {
        name,
        email,
        password,
        confirmPassword,
      }
    } else {
      data = {
        email,
        password,
      }
    }

    axios
      .post(register ? '/api/auth/register' : '/api/auth/login', data)
      .then(() => {
        // TODO
        getCurrentUser();
      }).catch(err => {
        setLoading(false);

        if(err?.response?.data) {
          setErrors(err.response.data);
        }
      });
  }

  return (
    <div className="container auth">

      <div className="auth__box auth__box--left">
        <div className="auth__header">
          <h1 className="login-title">{register ? 'Signup' : 'Login'}</h1>
        </div>
        
        <form className="auth__form" onSubmit={onSubmit}>
          
          {register && (
            <div className="auth__field">
              <label>Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}
              />

              {errors.name && (
                <p className="auth__error">{errors.name}</p>
              )}
            </div>
          )}
         
          <div className="auth__field">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />

              {errors.email && (
                <p className="auth__error">{errors.email}</p>
              )}
          </div>

          <div className="auth__field">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />

              {errors.password && (
                <p className="auth__error">{errors.password}</p>
              )}
          </div>

          {register && (  
            <div className="auth__field">
              <label>Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
              />

              {errors.confirmPassword && (
                <p className="auth__error">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          
          <div className="auth__footer">
            {Object.keys(errors).length > 0 && (
              <p className="auth__error">
                {register ? 'You have some validation errors' : errors.error}
              </p>
            )}
            <Button
              btnClass="btn-dark log-in-btn icon-login-icon"
              type="submit" 
              disabled={loading} 
              text={register ? "Signup" : "Login"}
            />

            {!register ? (
              <div className="auth__register">
                <p>
                  No account? <Link to="/register">Signup now</Link>
                </p>
              </div>
            ) : ( 
              <div className="auth__register">
                <p>
                  Already signed up? <Link to="/">Login</Link>
                </p>
              </div>
            )}
          </div>
        </form>

      </div>

      <div className="auth__box auth__box--right">
        <Logo className="logo" />
        <LogoBackground className="logo-bg" />
      </div>
    </div>
  );
};

export default AuthBox;