import React from 'react';
import MainBody from './mainComponents/MainBody';
import MainSection from './section/MainSection';

const TestComp = (props) => {
  return (
    <>
      <MainBody />
      <MainSection setState = {props.setState}/>
    </>
  );
}

export default TestComp;

