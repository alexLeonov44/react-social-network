import React from 'react'
import ContentLoader from 'react-content-loader'
import c from '../components/Users/Users.module.scss';

export default function UsersLoader() {
  const mystyle = {
    margin:"15px",
    
  };
    return (
      <div style={mystyle}>
     <ContentLoader 
    speed={2}
    width={545}
    height={110}
    viewBox="0 0 545 110"
    backgroundColor="#f7f8fc"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
      </div>
     
    )
}
