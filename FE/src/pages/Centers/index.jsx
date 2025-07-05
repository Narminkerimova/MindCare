import CentersCards from "./CentersCards"
import CentersHeadSection from "./CentersHeadSection"
// import CentersHelper from "./CentersHelper"
import CentersMap from "./CentersMap"
import CentersSearch from "./CentersSearch"

function Centers() {
  return (
    <>
    <title>MindCare: Centers</title>
    <CentersHeadSection/>
    <CentersSearch/>
    <CentersCards/>
    <CentersMap/>
    {/* <CentersHelper/> */}
    </>
  )
}

export default Centers