import DashboardLayout from "@/src/components/Layouts/DashboardLayout"


const AdminHomePage = () => {
  return (
    <div>
     <h2>This is Admin page</h2> 
    </div>
  )
}

export default AdminHomePage

AdminHomePage.getLayout= function getLayout(page){
  return(
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}