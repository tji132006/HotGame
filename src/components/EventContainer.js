import React from 'react';
import {Row, Col} from 'antd';
import {Tabs} from 'antd';
import {EventBlock} from "./EventBlock"

const TabPane = Tabs.TabPane;

export class EventContainer extends React.Component{
    render(){
        return(
          <div className="tab">
              <Row>
                  <Col span={6}></Col>
                  <Col span={12}>
                      <Tabs>
                          <TabPane tab="Soccer" key="1">
                              <EventBlock count={10} type="guonei" width="100%" bordered="false"/>
                          </TabPane>
                          <TabPane tab="Basketball" key="2"></TabPane>
                          <TabPane tab="Football" key="3"></TabPane>
                          <TabPane tab="Horse Racing" key="4"></TabPane>
                          <TabPane tab="Boxing" key="5"></TabPane>
                          <TabPane tab="Baseball" key="6"></TabPane>
                          <TabPane tab="Golf" key="7"></TabPane>
                          <TabPane tab="Ice Hockey" key="8"></TabPane>
                      </Tabs>
                  </Col>
                  <Col span={6}></Col>
              </Row>
          </div>
        );
    }
}