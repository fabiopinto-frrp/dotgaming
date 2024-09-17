import {
  StatisticCardDetails,
  StatisticCardHeader,
  StatisticCardItem,
  StatisticCompanyName,
  StatisticName,
  StatisticTitle,
} from "./StatisticCardElements";

const StatisticCard = () => {
  return (
    <>
      <StatisticCardItem>
        <StatisticCardDetails>
          <StatisticCardHeader>
            <StatisticTitle>
              <StatisticName>1,281</StatisticName>
              <StatisticCompanyName>Company</StatisticCompanyName>
            </StatisticTitle>
          </StatisticCardHeader>
        </StatisticCardDetails>
      </StatisticCardItem>
    </>
  );
};

export default StatisticCard;
