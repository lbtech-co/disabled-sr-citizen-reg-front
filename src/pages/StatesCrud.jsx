import Container from '@mui/material/Container'
import StateForm from '../components/StateForm'
import StatesTable from '../components/StateTable'

export default function StatesCrud() {
  return (
    <Container id="states-crud-container">
      <StatesTable />
      <StateForm />
    </Container>
  )
}
