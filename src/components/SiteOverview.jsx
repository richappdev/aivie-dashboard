import { Card, Space, Row, Col } from "antd"
export default function SiteOverview() {
	return (<div >
		<h2>Site Overview</h2>
		<Space style={{ width: "100%" }} direction="vertical">
			<Row>
				<Col></Col>
			</Row>
			<Card title="Team"></Card>
			<Card title="Patient"></Card>
			<Card title="ICF"></Card>
		</Space>
	</div>)
}