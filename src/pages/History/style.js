import styled from "styled-components";
import { SectionTitle } from "../../components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;

  @media screen and (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const HistoryTitle = styled(SectionTitle)`
  justify-content: center;
  margin-bottom: 2rem;
`;

export const TextSection = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const Text = styled.p`
  letter-spacing: 0.125rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 1080px) {
    text-align: center;
    margin-top: 2rem;
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const MembersText = styled(Text)`
  text-align: center;
`;

export const MembersList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
