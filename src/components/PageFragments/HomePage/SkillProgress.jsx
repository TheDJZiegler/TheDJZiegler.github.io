import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={95}
          text="Java"
        />
        <ProgressBar
          percent={75}
          text="Javascript"
        />
        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={50}
          text="C++"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        
        <ProgressBar
          percent={60}
          text="PHP"
        />
        <ProgressBar
          percent={70}
          text="MySQL"
        />
        <ProgressBar
          percent={85}
          text="Git"
        />
        <ProgressBar
          percent={95}
          text="HTML"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
