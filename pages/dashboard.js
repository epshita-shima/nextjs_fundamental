import DashboardLayout from "@/src/components/Layouts/DashboardLayout"


const DashboardHomePage = () => {
  return (
    <div>
      <h2>this is Dashboard</h2>
    </div>
  )
}

export default DashboardHomePage 

DashboardHomePage.getLayout=function getLayout(page){
  return(
    <DashboardLayout>{page}</DashboardLayout>
  )
}