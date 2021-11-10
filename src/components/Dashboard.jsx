import { Tabs } from 'antd';
import CaseInfo from '../components/CaseInfo';
const { TabPane } = Tabs;


export default function Dashboard() {

  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="Card Info" key="1">
        <CaseInfo />
      </TabPane>
      <TabPane tab="Assessment Plans" key="2">
        Assessment Plans
      </TabPane>
      <TabPane tab="Manage Document" key="3">
        Manage Document
      </TabPane>
      <TabPane tab="Query" key="4">
        Query
      </TabPane>
      <TabPane tab="Team" key="5">
        Team
      </TabPane>
    </Tabs>
  )
}