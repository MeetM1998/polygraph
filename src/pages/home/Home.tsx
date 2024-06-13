import { Divider } from "@mui/material";
import CompanyFuture from "../../components/company-future/CompanyFuture";
import EarningBar from "../../components/earning-bar/EarningBar";
import EventsList from "../../components/events-list/EventsList";
import Footer from "../../components/footer/Footer";
import IndustryVsCompany from "../../components/industry-vs-company/IndustryVsCompany";
import KeyTopics from "../../components/key-topics/KeyTopics";
import PeopleInvest from "../../components/people-invest/PeopleInvest";
import UnheardTruth from "../../components/unheard-truth/UnheardTruth";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <div className="headerTitle">
          GOOGLE <span>MSFT</span>
        </div>
        <Divider className="divider" />
        <EventsList />
        <Divider className="divider" />
        <EarningBar />
        <PeopleInvest />
        <UnheardTruth />
        <CompanyFuture />
        <IndustryVsCompany />
        <KeyTopics />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
