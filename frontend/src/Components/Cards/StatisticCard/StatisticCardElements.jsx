import styled from "@emotion/styled";
import {
  ReviewCardDetails,
  ReviewCardItem,
  ReviewCardCompanyName,
  ReviewCardName,
  ReviewCardHeader,
  ReviewCardTitle,
} from "../ReviewCard/ReviewCardElements";

export const StatisticCardItem = styled(ReviewCardItem)`
  padding: 0;
`;

export const StatisticCardDetails = styled(ReviewCardDetails)``;

export const StatisticCardHeader = styled(ReviewCardHeader)``;

export const StatisticTitle = styled(ReviewCardTitle)`
  justify-content: center;
  align-items: center;
  margin-left: 3.5rem;
`;

export const StatisticName = styled(ReviewCardName)`
  font-size: 4.5rem;
  font-weight: 700;
  color: #ff00ff;
`;

export const StatisticCompanyName = styled(ReviewCardCompanyName)`
  font-size: 1.5rem;
`;
