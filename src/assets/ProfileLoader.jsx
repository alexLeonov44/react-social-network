import React from 'react'
import ContentLoader from 'react-content-loader'

export default function ProfileLoader() {
  const mystyle = {
    // margin:"15px"
  };
    return (
      <div style={mystyle}>
     <ContentLoader 
    speed={2}
    width={1008}
    height={783}
    viewBox="0 0 1008 783"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="0" rx="0" ry="0" width="166" height="184" /> 
    <rect x="5" y="198" rx="0" ry="0" width="166" height="295" /> 
    <rect x="206" y="1" rx="0" ry="0" width="398" height="178" /> 
    <rect x="207" y="197" rx="0" ry="0" width="116" height="79" /> 
    <rect x="348" y="199" rx="0" ry="0" width="112" height="78" /> 
    <rect x="485" y="199" rx="0" ry="0" width="94" height="80" /> 
    <rect x="206" y="317" rx="0" ry="0" width="385" height="173" />
  </ContentLoader>
      </div>
     
    )
}
